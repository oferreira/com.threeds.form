/// <reference path="../typings/angular2-meteor.d.ts" />
/// <reference path="../typings/party.d.ts" />
exports.Parties = new Mongo.Collection('parties');
exports.Parties.allow({
    insert: function (party) {
        var user = Meteor.user();
        return !!user;
    },
    update: function (party, fields, modifier) {
        var user = Meteor.user();
        return !!user;
    },
    remove: function (party) {
        var user = Meteor.user();
        return !!user;
    }
});
//# sourceMappingURL=parties.js.map