// =========================
// UserService CLASS
// =========================

var UserService = function (options) {
    this.options = $.extend({}, this.DEFAULTS, options);
};

UserService.prototype.VERSION = '0.0.1'
UserService.prototype.DEFAULTS = {}

UserService.prototype.instance = null;

UserService.prototype.getInstance = function (options) {
    if (UserService.prototype.instance === undefined || UserService.prototype.instance === null) {
        UserService.prototype.instance = new UserService(options);
    }
    return UserService.prototype.instance;
}

UserService.prototype.info = function (callback) {
    $.ajaxSetup({
        crossDomain: true,
        xhrFields: {
            withCredentials: true
        }
    });
    $.ajax({
        type: "GET",
        crossDomain: true,
        dataType: "json",
        url: this.getUserInfoApiURL(),
        success: function (data) {
            callback(data)
        },
        error: function (resultat, statut, erreur) {
            callback(false)
        }
    });
}

UserService.prototype.getUserInfoApiURL = function () {
    if ((Setting3DS.prototype.getInstance().get('atg.apiURL').indexOf('localhost') > -1)) {
        return Setting3DS.prototype.getInstance().get('atg.apiURL') + "/api/get-user-info/success.json";
    }
    return Setting3DS.prototype.getInstance().get('atg.apiURL') + "/data/jsp/users/getUserInfo.jsp";
}