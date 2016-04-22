// =========================
// UserCookie CLASS
// =========================

var UserCookie = function (options) {
    this.options = $.extend({}, this.DEFAULTS, options);
    WatchJS.watch(this, "data", function (prop, action, newvalue, oldvalue) {
        if (newvalue !== undefined || newvalue !== null) {
            this._createCookie(newvalue);
            this.options.user_connected_callback();
        } else {
            this.options.user_disconnected_callback();
        }
    });

    this.auth();
};

UserCookie.prototype.AUTH_COOKIE_NAME = '3ds-auth';
UserCookie.prototype.VERSION = '0.0.1';
UserCookie.prototype.DEFAULTS = {
    domain: '',
    lifetime: (60 * 60 * 24 * 1),
    path: '/',
    "user_connected_callback": function () {
        $(document).trigger("3DSUserHasConnectedEvent", [UserCookie.prototype.instance]);
    },
    "user_disconnected_callback": function () {
        $(document).trigger("3DSUserHasDisconnectedEvent", [UserCookie.prototype.instance]);
    },
    "api_error_callback": function () {
        $(document).trigger("3DSApiErrorEvent", [UserCookie.prototype.instance]);
    }
}

UserCookie.prototype.options = {};
UserCookie.prototype.data = null;
UserCookie.prototype.instance = null;

UserCookie.prototype.getInstance = function (options) {
    if (UserCookie.prototype.instance === undefined || UserCookie.prototype.instance === null) {
        UserCookie.prototype.instance = new UserCookie(options);
    }
    return UserCookie.prototype.instance;
}

UserCookie.prototype.auth = function (force) {
    if (this.isConnected() && this._validCookie() && !force) {
        return this._loadCookie();
    } else if (this._validCookie() && !force) {
        this._loadCookie();
    }

    var self = this;

    $.service('user').info((function (data) {
        if (!data) {
            self._setCookie(self.AUTH_COOKIE_NAME, false);
            self.options.api_error_callback();
        } else if (data.hasOwnProperty('error')) {
            self._setCookie(self.AUTH_COOKIE_NAME, false);
            self.options.user_disconnected_callback();
        } else {
            self._setData(data);
        }
    }));
}

UserCookie.prototype.isConnected = function () {
    if (this._getCookie(this.AUTH_COOKIE_NAME) == true) {
        return true;
    }
}

UserCookie.prototype.logout = function () {
    this._setCookie(this.AUTH_COOKIE_NAME, false);
    this.options.user_disconnected_callback();
}

UserCookie.prototype._setData = function (data) {
    if (data === undefined || data === null || !data) {
        this.data = null;
    } else if (this._isNewData(this.data, data)) {
        this.data = data;
    }
}

UserCookie.prototype._isNewData = function (oldData, newData) {
    if (oldData === undefined || oldData === null || !oldData) {
        return true;
    } else {
        for (var k in newData) {
            if (!oldData.hasOwnProperty(k) || oldData[k] != newData[k]) {
                return true;
            }
        }
    }

    return false;
}

UserCookie.prototype._validCookie = function () {
    if (this._getCookie('lastName') === (undefined || null)) {
        return false;
    } else if (this._getCookie('firstName') === (undefined || null)) {
        return false;
    } else if (this._getCookie('userStatus') === (undefined || null)) {
        return false;
    }

    return true;
}

UserCookie.prototype._loadCookie = function () {
    var data = {
        "lastName": this._getCookie('lastName'),
        "firstName": this._getCookie('firstName'),
        "userStatus": this._getCookie('userStatus'),
    };

    this._setData(data);
}

UserCookie.prototype._createCookie = function (data) {
    for (k in data) {
        this._setCookie(k, data[k]);
    }
    this._setCookie(this.AUTH_COOKIE_NAME, true);
}


UserCookie.prototype._setCookie = function (name, value) {
    var date = new Date();
    date.setTime(date.getTime() + (this.options.lifetime));
    var expires = "; expires=" + date.toGMTString();

    var cookie = name + "=" + value + expires + "; path=" + this.options.path;
    if (this.options.domain !== undefined && this.options.domain !== null && this.options.domain != '') {
        cookie += "; domain=" + this.options.domain;
    }
    document.cookie = cookie;
}

UserCookie.prototype._getCookie = function (name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

UserCookie.prototype.trigram = function () {
    try {
        var $return = this._getCookie('firstName').charAt(0).toUpperCase() + this._getCookie('lastName').charAt(0).toUpperCase();
    } catch (err) {
        return '';
    }
    return $return;

};
