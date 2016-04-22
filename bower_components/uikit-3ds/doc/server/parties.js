/// <reference path="../typings/angular2-meteor.d.ts" />
var parties_1 = require('collections/parties');
function buildQuery(partyId) {
    var isAvailable = {
        $or: [
            { public: true },
            {
                $and: [
                    { owner: this.userId },
                    { owner: { $exists: true } }
                ]
            }
        ]
    };
    if (partyId) {
        return { $and: [{ _id: partyId }, isAvailable] };
    }
    return isAvailable;
}
Meteor.publish('parties', function () {
    return parties_1.Parties.find(buildQuery.call(this));
});
Meteor.publish('party', function (partyId) {
    return parties_1.Parties.find(buildQuery.call(this, partyId));
});
//# sourceMappingURL=parties.js.map