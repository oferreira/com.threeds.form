var $_i18nData = {"en":{"header":{"user-menu-items":{"account":{"ico":"account","url":"http://www.google.fr","txt":"My account"},"demo":{"ico":"demo","url":"http://www.google.fr","txt":"My account"}}}},"fr":{"header":{"user-menu-items":{"account":{"ico":"accountAA","url":"http://www.google.fr","txt":"Mon compte"},"demo":{"ico":"demo","url":"http://www.google.fr","txt":"demo"},"demo3":{"ico":"demo","url":"http://www.google.fr","txt":"demo"}}}}};
// =========================
// Setting3DS CLASS
// =========================

var Setting3DS = function (options) {
    this.options = $.extend({}, this.DEFAULTS, options);
};

Setting3DS.prototype.VERSION = '0.0.1'
Setting3DS.prototype.DEFAULTS = {}

Setting3DS.prototype.options = {};
Setting3DS.prototype.instance = null;

Setting3DS.prototype.getInstance = function (options) {
    if (Setting3DS.prototype.instance === undefined || Setting3DS.prototype.instance === null) {
        Setting3DS.prototype.instance = new Setting3DS(options);
    }
    return Setting3DS.prototype.instance;
}

Setting3DS.prototype.byString = function (o, s) {
    s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
    s = s.replace(/^\./, '');           // strip a leading dot
    var a = s.split('.');
    for (var i = 0, n = a.length; i < n; ++i) {
        var k = a[i];
        if (k in o) {
            o = o[k];
        } else {
            return;
        }
    }
    return o;
};

Setting3DS.prototype.set = function (key, value) {
    this.options[key] = value;
    return this;
}

Setting3DS.prototype.get = function (key) {
    return Setting3DS.prototype.byString(this.options, key);
}
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
// =========================
// UrlService CLASS
// =========================

var UrlService = function (options) {
    this.options = $.extend({}, this.DEFAULTS, options);
};

UrlService.prototype.VERSION = '0.0.1'
UrlService.prototype.DEFAULTS = {}

UrlService.prototype.instance = null;

UrlService.prototype.getInstance = function (options) {
    if (UrlService.prototype.instance === undefined || UrlService.prototype.instance === null) {
        UrlService.prototype.instance = new UrlService(options);
    }
    return UrlService.prototype.instance;
}

UrlService.prototype.topbar = function (callback) {
    var data = $.service("cache").get('threeds_header_topbar_url');
    if ((data === undefined || data === null || data === false) || Setting3DS.prototype.getInstance().get('debug') === true) {
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
            url: this.getTopbarInfoApiURL(),
            success: function (data) {
                $.service("cache").set('threeds_header_topbar_url', data);
                callback(data);
            },
            error: function (resultat, statut, erreur) {
                $(document).trigger("UrlServiceErrorEvent", [UrlService.prototype.instance, 'topbar', callback]);
                callback(false)
            }
        });
    } else {
        callback(data);
    }
}

UrlService.prototype.getTopbarInfoApiURL = function () {
    if ((Setting3DS.prototype.getInstance().get('atg.apiURL').indexOf('localhost') > -1)) {
        return Setting3DS.prototype.getInstance().get('atg.apiURL') + "/api/get-topbar-urls/success.json";
    }
    return Setting3DS.prototype.getInstance().get('atg.apiURL') + "/data/jsp/links/getTopbarURLs.jsp";
}
// =========================
// CacheService CLASS
// =========================

var CacheService = function (options) {
    this.options = $.extend({}, this.DEFAULTS, options);
};

CacheService.prototype.VERSION = '0.0.1'
CacheService.prototype.DEFAULTS = {}

CacheService.prototype.instance = null;
CacheService.prototype.getInstance = function (options) {
    if (CacheService.prototype.instance === undefined || CacheService.prototype.instance === null) {
        CacheService.prototype.instance = new CacheService(options);
    }
    return CacheService.prototype.instance;
}

CacheService.prototype.set = function (name, value) {
    if (typeof value === 'object') {
        eval("localStorage.".concat(name) + " = JSON.stringify(value);");
    } else {
        eval("localStorage.".concat(name) + " = value;");
    }
}


CacheService.prototype.get = function (path) {
    var value = CacheService.prototype.byString(localStorage, path);
    try {
        value = JSON.parse(value);
    } catch (e) {
    }
    return value;
}

CacheService.prototype.byString = function (o, s) {
    s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
    s = s.replace(/^\./, '');           // strip a leading dot
    var a = s.split('.');
    for (var i = 0, n = a.length; i < n; ++i) {
        var k = a[i];
        if (k in o) {
            o = o[k];
        } else {
            return;
        }
    }
    return o;
};
String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

// =========================
// ServiceManager CLASS
// =========================

var ServiceManager = function () {
};

String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
}
ServiceManager.prototype.VERSION = '0.0.1'
ServiceManager.prototype.DEFAULTS = {}

ServiceManager.prototype.instance = undefined;
ServiceManager.prototype.getInstance = function () {
    if (ServiceManager.prototype.instance === undefined || ServiceManager.prototype.instance === null) {
        ServiceManager.prototype.instance = new ServiceManager();
    }
    return ServiceManager.prototype.instance;
}

ServiceManager.prototype.get = function (name, options) {
    return eval(name.capitalize() + "Service.prototype.getInstance").apply(options);
}

jQuery.extend({
    service: function (name, options) {
        if (name) {
            return new ServiceManager.prototype.getInstance().get(name, options);
        }

        return new ServiceManager.prototype.getInstance();
    }
});
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

/**
 * DEVELOPED BY
 * GIL LOPES BUENO
 * gilbueno.mail@gmail.com
 *
 * WORKS WITH:
 * IE8*, IE 9+, FF 4+, SF 5+, WebKit, CH 7+, OP 12+, BESEN, Rhino 1.7+
 * For IE8 (and other legacy browsers) WatchJS will use dirty checking
 *
 * FORK:
 * https://github.com/melanke/Watch.JS
 */

(function (factory) {
    if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like enviroments that support module.exports,
        // like Node.
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(factory);
    } else {
        // Browser globals
        window.WatchJS = factory();
        window.watch = window.WatchJS.watch;
        window.unwatch = window.WatchJS.unwatch;
        window.callWatchers = window.WatchJS.callWatchers;
    }
}(function () {
    var WatchJS = {
            noMore: false,        // use WatchJS.suspend(obj) instead
            useDirtyCheck: false // use only dirty checking to track changes.
        },
        lengthsubjects = [];

    var dirtyChecklist = [];
    var pendingChanges = []; // used coalesce changes from defineProperty and __defineSetter__

    var supportDefineProperty = false;
    try {
        supportDefineProperty = Object.defineProperty && Object.defineProperty({},'x', {});
    } catch(ex) {  /* not supported */  }

    var isFunction = function (functionToCheck) {
        var getType = {};
        return functionToCheck && getType.toString.call(functionToCheck) == '[object Function]';
    };

    var isInt = function (x) {
        return x % 1 === 0;
    };

    var isArray = function(obj) {
        return Object.prototype.toString.call(obj) === '[object Array]';
    };

    var isObject = function(obj) {
        return {}.toString.apply(obj) === '[object Object]';
    };

    var getObjDiff = function(a, b){
        var aplus = [],
            bplus = [];

        if(!(typeof a == "string") && !(typeof b == "string")){

            if (isArray(a)) {
                for (var i=0; i<a.length; i++) {
                    if (b[i] === undefined) aplus.push(i);
                }
            } else {
                for(var i in a){
                    if (a.hasOwnProperty(i)) {
                        if(b[i] === undefined) {
                            aplus.push(i);
                        }
                    }
                }
            }

            if (isArray(b)) {
                for (var j=0; j<b.length; j++) {
                    if (a[j] === undefined) bplus.push(j);
                }
            } else {
                for(var j in b){
                    if (b.hasOwnProperty(j)) {
                        if(a[j] === undefined) {
                            bplus.push(j);
                        }
                    }
                }
            }
        }

        return {
            added: aplus,
            removed: bplus
        }
    };

    var clone = function(obj){

        if (null == obj || "object" != typeof obj) {
            return obj;
        }

        var copy = obj.constructor();

        for (var attr in obj) {
            copy[attr] = obj[attr];
        }

        return copy;

    }

    var defineGetAndSet = function (obj, propName, getter, setter) {
        try {
            Object.observe(obj, function(changes) {
                changes.forEach(function(change) {
                    if (change.name === propName) {
                        setter(change.object[change.name]);
                    }
                });
            });
        }
        catch(e) {
            try {
                Object.defineProperty(obj, propName, {
                    get: getter,
                    set: function(value) {
                        setter.call(this,value,true); // coalesce changes
                    },
                    enumerable: true,
                    configurable: true
                });
            }
            catch(e2) {
                try{
                    Object.prototype.__defineGetter__.call(obj, propName, getter);
                    Object.prototype.__defineSetter__.call(obj, propName, function(value) {
                        setter.call(this,value,true); // coalesce changes
                    });
                }
                catch(e3) {
                    observeDirtyChanges(obj,propName,setter);
                    //throw new Error("watchJS error: browser not supported :/")
                }
            }
        }
    };

    var defineProp = function (obj, propName, value) {
        try {
            Object.defineProperty(obj, propName, {
                enumerable: false,
                configurable: true,
                writable: false,
                value: value
            });
        } catch(error) {
            obj[propName] = value;
        }
    };

    var observeDirtyChanges = function(obj,propName,setter) {
        dirtyChecklist[dirtyChecklist.length] = {
            prop:       propName,
            object:     obj,
            orig:       clone(obj[propName]),
            callback:   setter
        }
    }

    var watch = function () {

        if (isFunction(arguments[1])) {
            watchAll.apply(this, arguments);
        } else if (isArray(arguments[1])) {
            watchMany.apply(this, arguments);
        } else {
            watchOne.apply(this, arguments);
        }

    };


    var watchAll = function (obj, watcher, level, addNRemove) {

        if ((typeof obj == "string") || (!(obj instanceof Object) && !isArray(obj))) { //accepts only objects and array (not string)
            return;
        }

        if(isArray(obj)) {
            defineWatcher(obj, "__watchall__", watcher, level); // watch all changes on the array
            if (level===undefined||level > 0) {
                for (var prop = 0; prop < obj.length; prop++) { // watch objects in array
                    watchAll(obj[prop],watcher,level, addNRemove);
                }
            }
        }
        else {
            var prop,props = [];
            for (prop in obj) { //for each attribute if obj is an object
                if (prop == "$val" || (!supportDefineProperty && prop === 'watchers')) {
                    continue;
                }

                if (Object.prototype.hasOwnProperty.call(obj, prop)) {
                    props.push(prop); //put in the props
                }
            }
            watchMany(obj, props, watcher, level, addNRemove); //watch all items of the props
        }


        if (addNRemove) {
            pushToLengthSubjects(obj, "$$watchlengthsubjectroot", watcher, level);
        }
    };


    var watchMany = function (obj, props, watcher, level, addNRemove) {

        if ((typeof obj == "string") || (!(obj instanceof Object) && !isArray(obj))) { //accepts only objects and array (not string)
            return;
        }

        for (var i=0; i<props.length; i++) { //watch each property
            var prop = props[i];
            watchOne(obj, prop, watcher, level, addNRemove);
        }

    };

    var watchOne = function (obj, prop, watcher, level, addNRemove) {
        if ((typeof obj == "string") || (!(obj instanceof Object) && !isArray(obj))) { //accepts only objects and array (not string)
            return;
        }

        if(isFunction(obj[prop])) { //dont watch if it is a function
            return;
        }
        if(obj[prop] != null && (level === undefined || level > 0)){
            watchAll(obj[prop], watcher, level!==undefined? level-1 : level); //recursively watch all attributes of this
        }

        defineWatcher(obj, prop, watcher, level);

        if(addNRemove && (level === undefined || level > 0)){
            pushToLengthSubjects(obj, prop, watcher, level);
        }

    };

    var unwatch = function () {

        if (isFunction(arguments[1])) {
            unwatchAll.apply(this, arguments);
        } else if (isArray(arguments[1])) {
            unwatchMany.apply(this, arguments);
        } else {
            unwatchOne.apply(this, arguments);
        }

    };

    var unwatchAll = function (obj, watcher) {

        if (obj instanceof String || (!(obj instanceof Object) && !isArray(obj))) { //accepts only objects and array (not string)
            return;
        }

        if (isArray(obj)) {
            var props = ['__watchall__'];
            for (var prop = 0; prop < obj.length; prop++) { //for each item if obj is an array
                props.push(prop); //put in the props
            }
            unwatchMany(obj, props, watcher); //watch all itens of the props
        } else {
            var unwatchPropsInObject = function (obj2) {
                var props = [];
                for (var prop2 in obj2) { //for each attribute if obj is an object
                    if (obj2.hasOwnProperty(prop2)) {
                        if (obj2[prop2] instanceof Object) {
                            unwatchPropsInObject(obj2[prop2]); //recurs into object props
                        } else {
                            props.push(prop2); //put in the props
                        }
                    }
                }
                unwatchMany(obj2, props, watcher); //unwatch all of the props
            };
            unwatchPropsInObject(obj);
        }
    };


    var unwatchMany = function (obj, props, watcher) {

        for (var prop2 in props) { //watch each attribute of "props" if is an object
            if (props.hasOwnProperty(prop2)) {
                unwatchOne(obj, props[prop2], watcher);
            }
        }
    };

    var timeouts = [],
        timerID = null;
    function clearTimerID() {
        timerID = null;
        for(var i=0; i< timeouts.length; i++) {
            timeouts[i]();
        }
        timeouts.length = 0;
    }
    var getTimerID= function () {
        if (!timerID)  {
            timerID = setTimeout(clearTimerID);
        }
        return timerID;
    }
    var registerTimeout = function(fn) { // register function to be called on timeout
        if (timerID==null) getTimerID();
        timeouts[timeouts.length] = fn;
    }

    // Track changes made to an array, object or an object's property
    // and invoke callback with a single change object containing type, value, oldvalue and array splices
    // Syntax:
    //      trackChange(obj, callback, recursive, addNRemove)
    //      trackChange(obj, prop, callback, recursive, addNRemove)
    var trackChange = function() {
        var fn = (isFunction(arguments[2])) ? trackProperty : trackObject ;
        fn.apply(this,arguments);
    }

    // track changes made to an object and invoke callback with a single change object containing type, value and array splices
    var trackObject= function(obj, callback, recursive, addNRemove) {
        var change = null,lastTimerID = -1;
        var isArr = isArray(obj);
        var level,fn = function(prop, action, newValue, oldValue) {
            var timerID = getTimerID();
            if (lastTimerID!==timerID) { // check if timer has changed since last update
                lastTimerID = timerID;
                change = {
                    type: 'update'
                }
                change['value'] = obj;
                change['splices'] = null;
                registerTimeout(function() {
                    callback.call(this,change);
                    change = null;
                });
            }
            // create splices for array changes
            if (isArr && obj === this && change !== null)  {
                if (action==='pop'||action==='shift') {
                    newValue = [];
                    oldValue = [oldValue];
                }
                else if (action==='push'||action==='unshift') {
                    newValue = [newValue];
                    oldValue = [];
                }
                else if (action!=='splice') {
                    return; // return here - for reverse and sort operations we don't need to return splices. a simple update will do
                }
                if (!change.splices) change.splices = [];
                change.splices[change.splices.length] = {
                    index: prop,
                    deleteCount: oldValue ? oldValue.length : 0,
                    addedCount: newValue ? newValue.length : 0,
                    added: newValue,
                    deleted: oldValue
                };
            }

        }
        level = (recursive==true) ? undefined : 0;
        watchAll(obj,fn, level, addNRemove);
    }

    // track changes made to the property of an object and invoke callback with a single change object containing type, value, oldvalue and splices
    var trackProperty = function(obj,prop,callback,recursive, addNRemove) {
        if (obj && prop) {
            watchOne(obj,prop,function(prop, action, newvalue, oldvalue) {
                var change = {
                    type: 'update'
                }
                change['value'] = newvalue;
                change['oldvalue'] = oldvalue;
                if (recursive && isObject(newvalue)||isArray(newvalue)) {
                    trackObject(newvalue,callback,recursive, addNRemove);
                }
                callback.call(this,change);
            },0)

            if (recursive && isObject(obj[prop])||isArray(obj[prop])) {
                trackObject(obj[prop],callback,recursive, addNRemove);
            }
        }
    }


    var defineWatcher = function (obj, prop, watcher, level) {
        var newWatcher = false;
        var isArr = isArray(obj);

        if (!obj.watchers) {
            defineProp(obj, "watchers", {});
            if (isArr) {
                // watch array functions
                watchFunctions(obj, function(index,action,newValue, oldValue) {
                    addPendingChange(obj, index, action,newValue, oldValue);
                    if (level !== 0 && newValue && (isObject(newValue) || isArray(newValue))) {
                        var i,n, ln, wAll, watchList = obj.watchers[prop];
                        if ((wAll = obj.watchers['__watchall__'])) {
                            watchList = watchList ? watchList.concat(wAll) : wAll;
                        }
                        ln = watchList ?  watchList.length : 0;
                        for (i = 0; i<ln; i++) {
                            if (action!=='splice') {
                                watchAll(newValue, watchList[i], (level===undefined)?level:level-1);
                            }
                            else {
                                // watch spliced values
                                for(n=0; n < newValue.length; n++) {
                                    watchAll(newValue[n], watchList[i], (level===undefined)?level:level-1);
                                }
                            }
                        }
                    }
                });
            }
        }

        if (!obj.watchers[prop]) {
            obj.watchers[prop] = [];
            if (!isArr) newWatcher = true;
        }

        for (var i=0; i<obj.watchers[prop].length; i++) {
            if(obj.watchers[prop][i] === watcher){
                return;
            }
        }

        obj.watchers[prop].push(watcher); //add the new watcher to the watchers array

        if (newWatcher) {
            var val = obj[prop];
            var getter = function () {
                return val;
            };

            var setter = function (newval, delayWatcher) {
                var oldval = val;
                val = newval;
                if (level !== 0
                    && obj[prop] && (isObject(obj[prop]) || isArray(obj[prop]))
                    && !obj[prop].watchers) {
                    // watch sub properties
                    var i,ln = obj.watchers[prop].length;
                    for(i=0; i<ln; i++) {
                        watchAll(obj[prop], obj.watchers[prop][i], (level===undefined)?level:level-1);
                    }
                }

                //watchFunctions(obj, prop);

                if (isSuspended(obj, prop)) {
                    resume(obj, prop);
                    return;
                }

                if (!WatchJS.noMore){ // this does not work with Object.observe
                    //if (JSON.stringify(oldval) !== JSON.stringify(newval)) {
                    if (oldval !== newval) {
                        if (!delayWatcher) {
                            callWatchers(obj, prop, "set", newval, oldval);
                        }
                        else {
                            addPendingChange(obj, prop, "set", newval, oldval);
                        }
                        WatchJS.noMore = false;
                    }
                }
            };

            if (WatchJS.useDirtyCheck) {
                observeDirtyChanges(obj,prop,setter);
            }
            else {
                defineGetAndSet(obj, prop, getter, setter);
            }
        }

    };

    var callWatchers = function (obj, prop, action, newval, oldval) {
        if (prop !== undefined) {
            var ln, wl, watchList = obj.watchers[prop];
            if ((wl = obj.watchers['__watchall__'])) {
                watchList = watchList ? watchList.concat(wl) : wl;
            }
            ln = watchList ? watchList.length : 0;
            for (var wr=0; wr< ln; wr++) {
                watchList[wr].call(obj, prop, action, newval, oldval);
            }
        } else {
            for (var prop in obj) {//call all
                if (obj.hasOwnProperty(prop)) {
                    callWatchers(obj, prop, action, newval, oldval);
                }
            }
        }
    };

    var methodNames = ['pop', 'push', 'reverse', 'shift', 'sort', 'slice', 'unshift', 'splice'];
    var defineArrayMethodWatcher = function (obj, original, methodName, callback) {
        defineProp(obj, methodName, function () {
            var index = 0;
            var i,newValue, oldValue, response;
            // get values before splicing array
            if (methodName === 'splice') {
                var start = arguments[0];
                var end = start + arguments[1];
                oldValue = obj.slice(start,end);
                newValue = [];
                for(i=2;i<arguments.length;i++) {
                    newValue[i-2] = arguments[i];
                }
                index = start;
            }
            else {
                newValue = arguments.length > 0 ? arguments[0] : undefined;
            }

            response = original.apply(obj, arguments);
            if (methodName !== 'slice') {
                if (methodName === 'pop') {
                    oldValue = response;
                    index = obj.length;
                }
                else if (methodName === 'push') {
                    index = obj.length-1;
                }
                else if (methodName === 'shift') {
                    oldValue = response;
                }
                else if (methodName !== 'unshift' && newValue===undefined) {
                    newValue = response;
                }
                callback.call(obj, index, methodName,newValue, oldValue)
            }
            return response;
        });
    };

    var watchFunctions = function(obj, callback) {

        if (!isFunction(callback) || !obj || (obj instanceof String) || (!isArray(obj))) {
            return;
        }

        for (var i = methodNames.length, methodName; i--;) {
            methodName = methodNames[i];
            defineArrayMethodWatcher(obj, obj[methodName], methodName, callback);
        }

    };

    var unwatchOne = function (obj, prop, watcher) {
        if (obj.watchers[prop]) {
            if (watcher===undefined) {
                delete obj.watchers[prop]; // remove all property watchers
            }
            else {
                for (var i=0; i<obj.watchers[prop].length; i++) {
                    var w = obj.watchers[prop][i];

                    if (w == watcher) {
                        obj.watchers[prop].splice(i, 1);
                    }
                }
            }
        }
        removeFromLengthSubjects(obj, prop, watcher);
        removeFromDirtyChecklist(obj, prop);
    };

    // suspend watchers until next update cycle
    var suspend = function(obj, prop) {
        if (obj.watchers) {
            var name = '__wjs_suspend__'+(prop!==undefined ? prop : '');
            obj.watchers[name] = true;
        }
    }

    var isSuspended = function(obj, prop) {
        return obj.watchers
            && (obj.watchers['__wjs_suspend__'] ||
            obj.watchers['__wjs_suspend__'+prop]);
    }

    // resumes preivously suspended watchers
    var resume = function(obj, prop) {
        registerTimeout(function() {
            delete obj.watchers['__wjs_suspend__'];
            delete obj.watchers['__wjs_suspend__'+prop];
        })
    }

    var pendingTimerID = null;
    var addPendingChange = function(obj,prop, mode, newval, oldval) {
        pendingChanges[pendingChanges.length] = {
            obj:obj,
            prop: prop,
            mode: mode,
            newval: newval,
            oldval: oldval
        };
        if (pendingTimerID===null) {
            pendingTimerID = setTimeout(applyPendingChanges);
        }
    };


    var applyPendingChanges = function()  {
        // apply pending changes
        var change = null;
        pendingTimerID = null;
        for(var i=0;i < pendingChanges.length;i++) {
            change = pendingChanges[i];
            callWatchers(change.obj, change.prop, change.mode, change.newval, change.oldval);
        }
        if (change) {
            pendingChanges = [];
            change = null;
        }
    }

    var loop = function(){

        // check for new or deleted props
        for(var i=0; i<lengthsubjects.length; i++) {

            var subj = lengthsubjects[i];

            if (subj.prop === "$$watchlengthsubjectroot") {

                var difference = getObjDiff(subj.obj, subj.actual);

                if(difference.added.length || difference.removed.length){
                    if(difference.added.length){
                        watchMany(subj.obj, difference.added, subj.watcher, subj.level - 1, true);
                    }

                    subj.watcher.call(subj.obj, "root", "differentattr", difference, subj.actual);
                }
                subj.actual = clone(subj.obj);


            } else {

                var difference = getObjDiff(subj.obj[subj.prop], subj.actual);

                if(difference.added.length || difference.removed.length){
                    if(difference.added.length){
                        for (var j=0; j<subj.obj.watchers[subj.prop].length; j++) {
                            watchMany(subj.obj[subj.prop], difference.added, subj.obj.watchers[subj.prop][j], subj.level - 1, true);
                        }
                    }

                    callWatchers(subj.obj, subj.prop, "differentattr", difference, subj.actual);
                }

                subj.actual = clone(subj.obj[subj.prop]);

            }

        }

        // start dirty check
        var n, value;
        if (dirtyChecklist.length > 0) {
            for (var i = 0; i < dirtyChecklist.length; i++) {
                n = dirtyChecklist[i];
                value = n.object[n.prop];
                if (!compareValues(n.orig, value)) {
                    n.orig = clone(value);
                    n.callback(value);
                }
            }
        }

    };

    var compareValues =  function(a,b) {
        var i, state = true;
        if (a!==b)  {
            if (isObject(a)) {
                for(i in a) {
                    if (!supportDefineProperty && i==='watchers') continue;
                    if (a[i]!==b[i]) {
                        state = false;
                        break;
                    };
                }
            }
            else {
                state = false;
            }
        }
        return state;
    }

    var pushToLengthSubjects = function(obj, prop, watcher, level){

        var actual;

        if (prop === "$$watchlengthsubjectroot") {
            actual =  clone(obj);
        } else {
            actual = clone(obj[prop]);
        }

        lengthsubjects.push({
            obj: obj,
            prop: prop,
            actual: actual,
            watcher: watcher,
            level: level
        });
    };

    var removeFromLengthSubjects = function(obj, prop, watcher){

        for (var i=0; i<lengthsubjects.length; i++) {
            var subj = lengthsubjects[i];

            if (subj.obj == obj && subj.prop == prop && subj.watcher == watcher) {
                lengthsubjects.splice(i, 1);
            }
        }

    };

    var removeFromDirtyChecklist = function(obj, prop){
        var notInUse;
        for (var i=0; i<dirtyChecklist.length; i++) {
            var n = dirtyChecklist[i];
            var watchers = n.object.watchers;
            notInUse = (
                n.object == obj
                && n.prop == prop
                && watchers
                && ( !watchers[prop] || watchers[prop].length == 0 )
            );
            if (notInUse)  {
                dirtyChecklist.splice(i, 1);
            }
        }

    };

    setInterval(loop, 50);

    WatchJS.watch = watch;
    WatchJS.unwatch = unwatch;
    WatchJS.callWatchers = callWatchers;
    WatchJS.suspend = suspend; // suspend watchers
    WatchJS.onChange = trackChange;  // track changes made to object or  it's property and return a single change object

    return WatchJS;

}));

// =========================
// I18n CLASS
// =========================

var I18n = function (options) {
    this.options = $.extend({}, this.DEFAULTS, options);
};

I18n.prototype.VERSION = '0.0.1';
I18n.prototype.DEFAULTS = {
    lang: 'en'
};

I18n.prototype.byString = function(o, s) {
    s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
    s = s.replace(/^\./, '');           // strip a leading dot
    var a = s.split('.');
    for (var i = 0, n = a.length; i < n; ++i) {
        var k = a[i];
        if (k in o) {
            o = o[k];
        } else {
            return;
        }
    }
    return o;
};

I18n.prototype.instance = undefined;
I18n.prototype.getInstance = function (options) {
    if (I18n.prototype.instance === undefined || I18n.prototype.instance === null) {
        I18n.prototype.instance = new I18n(options);
    }
    return I18n.prototype.instance;
};

I18n.prototype.t = function (name) {
    return I18n.prototype.byString($_i18nData, this.options.lang.concat('.', name));
};

I18n.prototype.setLang = function (value) {
   this.options.lang = value;
    return this;
};

jQuery.extend({
    i18n: function (options) {
        return new I18n.prototype.getInstance(options);
    },
    t: function (name) {
        return new I18n.prototype.getInstance().t(name);
    }
});





/* ========================================================================
 * M: modal.js v0.0.1
 * ======================================================================*/
+function ($) {
    'use strict';

    // MODAL CLASS DEFINITION
    // ======================

    var Modal = function (element, options) {
        this.options             = options
        this.$body               = $(document.body)
        this.$element            = $(element)
        this.$dialog             = this.$element.find('.modal-dialog')
        this.$backdrop           = null
        this.isShown             = null
        this.originalBodyPad     = null
        this.scrollbarWidth      = 0
        this.ignoreBackdropClick = false

        if (this.options.remote) {
            this.$element
                .find('.modal-content')
                .load(this.options.remote, $.proxy(function () {
                    this.$element.trigger('loaded.bs.modal')
                }, this))
        }
    }

    Modal.VERSION  = '0.0.1'

    Modal.TRANSITION_DURATION = 300
    Modal.BACKDROP_TRANSITION_DURATION = 150

    Modal.DEFAULTS = {
        backdrop: true,
        keyboard: true,
        show: true
    }

    Modal.prototype.toggle = function (_relatedTarget) {
        return this.isShown ? this.hide() : this.show(_relatedTarget)
    }

    Modal.prototype.show = function (_relatedTarget) {
        var that = this
        var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

        this.$element.trigger(e)

        if (this.isShown || e.isDefaultPrevented()) return

        this.isShown = true

        this.checkScrollbar()
        this.setScrollbar()
        this.$body.addClass('modal-open')

        this.escape()
        this.resize()

        this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

        this.$dialog.on('mousedown.dismiss.bs.modal', function () {
            that.$element.one('mouseup.dismiss.bs.modal', function (e) {
                if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true
            })
        })

        this.backdrop(function () {
            var transition = $.support.transition && that.$element.hasClass('fade')

            if (!that.$element.parent().length) {
                that.$element.appendTo(that.$body) // don't move modals dom position
            }

            that.$element
                .show()
                .scrollTop(0)

            that.adjustDialog()

            if (transition) {
                that.$element[0].offsetWidth // force reflow
            }

            that.$element.addClass('in')

            that.enforceFocus()

            var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

            transition ?
                that.$dialog // wait for modal to slide in
                    .one('bsTransitionEnd', function () {
                        that.$element.trigger('focus').trigger(e)
                    })
                    .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
                that.$element.trigger('focus').trigger(e)
        })
    }

    Modal.prototype.hide = function (e) {
        if (e) e.preventDefault()

        e = $.Event('hide.bs.modal')

        this.$element.trigger(e)

        if (!this.isShown || e.isDefaultPrevented()) return

        this.isShown = false

        this.escape()
        this.resize()

        $(document).off('focusin.bs.modal')

        this.$element
            .removeClass('in')
            .off('click.dismiss.bs.modal')
            .off('mouseup.dismiss.bs.modal')

        this.$dialog.off('mousedown.dismiss.bs.modal')

        $.support.transition && this.$element.hasClass('fade') ?
            this.$element
                .one('bsTransitionEnd', $.proxy(this.hideModal, this))
                .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
            this.hideModal()
    }

    Modal.prototype.enforceFocus = function () {
        $(document)
            .off('focusin.bs.modal') // guard against infinite focus loop
            .on('focusin.bs.modal', $.proxy(function (e) {
                if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
                    this.$element.trigger('focus')
                }
            }, this))
    }

    Modal.prototype.escape = function () {
        if (this.isShown && this.options.keyboard) {
            this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
                e.which == 27 && this.hide()
            }, this))
        } else if (!this.isShown) {
            this.$element.off('keydown.dismiss.bs.modal')
        }
    }

    Modal.prototype.resize = function () {
        if (this.isShown) {
            $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this))
        } else {
            $(window).off('resize.bs.modal')
        }
    }

    Modal.prototype.iframeLastHeight = 0;
    Modal.prototype.setIframeHeight = function (value) {
        if(this.iframeLastHeight != value){
            this.$element.find('iframe').css('height', (Modal.prototype.iframeLastHeight = value) + 'px');
        }
    }

    Modal.prototype.iframeLastWidth = 0;
    Modal.prototype.setIframeWidth = function (value) {
        if(this.iframeLastWidth != value){
            this.$element.find('iframe').css('width', (Modal.prototype.iframeLastWidth = value) +'px');
        }
    }

    Modal.prototype.hideModal = function () {
        var that = this
        this.$element.hide()
        this.backdrop(function () {
            that.$body.removeClass('modal-open')
            that.resetAdjustments()
            that.resetScrollbar()
            that.$element.trigger('hidden.bs.modal')
        })
    }

    Modal.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove()
        this.$backdrop = null
    }

    Modal.prototype.backdrop = function (callback) {
        var that = this
        var animate = this.$element.hasClass('fade') ? 'fade' : ''

        if (this.isShown && this.options.backdrop) {
            var doAnimate = $.support.transition && animate

            this.$backdrop = $(document.createElement('div'))
                .addClass('modal-backdrop ' + animate)
                .appendTo(this.$body)

            this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
                if (this.ignoreBackdropClick) {
                    this.ignoreBackdropClick = false
                    return
                }
                if (e.target !== e.currentTarget) return
                this.options.backdrop == 'static'
                    ? this.$element[0].focus()
                    : this.hide()
            }, this))

            if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

            this.$backdrop.addClass('in')

            if (!callback) return

            doAnimate ?
                this.$backdrop
                    .one('bsTransitionEnd', callback)
                    .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
                callback()

        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass('in')

            var callbackRemove = function () {
                that.removeBackdrop()
                callback && callback()
            }
            $.support.transition && this.$element.hasClass('fade') ?
                this.$backdrop
                    .one('bsTransitionEnd', callbackRemove)
                    .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
                callbackRemove()

        } else if (callback) {
            callback()
        }
    }

    // these following methods are used to handle overflowing modals

    Modal.prototype.handleUpdate = function () {
        this.adjustDialog()
    }

    Modal.prototype.adjustDialog = function () {
        var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight

        this.$element.css({
            paddingLeft:  !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
            paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
        })
    }

    Modal.prototype.resetAdjustments = function () {
        this.$element.css({
            paddingLeft: '',
            paddingRight: ''
        })
    }

    Modal.prototype.checkScrollbar = function () {
        var fullWindowWidth = window.innerWidth
        if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
            var documentElementRect = document.documentElement.getBoundingClientRect()
            fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
        this.scrollbarWidth = this.measureScrollbar()
    }

    Modal.prototype.setScrollbar = function () {
        var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
        this.originalBodyPad = document.body.style.paddingRight || ''
        if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
    }

    Modal.prototype.resetScrollbar = function () {
        this.$body.css('padding-right', this.originalBodyPad)
    }

    Modal.prototype.measureScrollbar = function () { // thx walsh
        var scrollDiv = document.createElement('div')
        scrollDiv.className = 'modal-scrollbar-measure'
        this.$body.append(scrollDiv)
        var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
        this.$body[0].removeChild(scrollDiv)
        return scrollbarWidth
    }


    // MODAL PLUGIN DEFINITION
    // =======================

    function Plugin(option, _relatedTarget) {
        return this.each(function () {
            var $this   = $(this)
            var data    = $this.data('bs.modal')
            var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

            if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
            if (typeof option == 'string') data[option](_relatedTarget)
            else if (options.show) data.show(_relatedTarget)
        })
    }

    var old = $.fn.modal

    $.fn.modal             = Plugin
    $.fn.modal.Constructor = Modal


    // MODAL NO CONFLICT
    // =================

    $.fn.modal.noConflict = function () {
        $.fn.modal = old
        return this
    }


    // MODAL DATA-API
    // ==============

    $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
        var $this   = $(this)
        var href    = $this.attr('href')
        var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
        var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

        if ($this.is('a')) e.preventDefault()

        $target.one('show.bs.modal', function (showEvent) {
            if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
            $target.one('hidden.bs.modal', function () {
                $this.is(':visible') && $this.trigger('focus')
            })
        })
        Plugin.call($target, option, this)
    })

}(jQuery);

/* ========================================================================
 * Bootstrap:  a.js v3.3.6
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
    'use strict';

    // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
    // ============================================================

    function transitionEnd() {
        var el = document.createElement('bootstrap')

        var transEndEventNames = {
            WebkitTransition : 'webkitTransitionEnd',
            MozTransition    : 'transitionend',
            OTransition      : 'oTransitionEnd otransitionend',
            transition       : 'transitionend'
        }

        for (var name in transEndEventNames) {
            if (el.style[name] !== undefined) {
                return { end: transEndEventNames[name] }
            }
        }

        return false // explicit for ie8 (  ._.)
    }

    // http://blog.alexmaccaw.com/css-transitions
    $.fn.emulateTransitionEnd = function (duration) {
        var called = false
        var $el = this
        $(this).one('bsTransitionEnd', function () { called = true })
        var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
        setTimeout(callback, duration)
        return this
    }

    $(function () {
        $.support.transition = transitionEnd()

        if (!$.support.transition) return

        $.event.special.bsTransitionEnd = {
            bindType: $.support.transition.end,
            delegateType: $.support.transition.end,
            handle: function (e) {
                if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
            }
        }
    })

}(jQuery);
(function ($) {
    $.fn.header3ds = function (opt) {
        var defaults = {
            "bgcolor": "blue",
            "secure": false,
            "website": "a",
            "language": "en",
            "hasfooter": false,
            "haslogin": false,
            "hascompass": true,
            "hassocial": false,
            "hastrigram": true,
            "hasconnect": true,
            "hasborder": true,
            "margin": 0,
            "width": "100%",
            "callback": null,
            "modalId": 'myModal',
            "atg": {
                "apiURL": "http://localhost:3000"
            },
            "debug": false
        };


        var ErrorEventListenerInterval = 1000;
        var ErrorEventListenerLimit = 5;

        var $setting = null, $userCookie = null;
        var options = $.extend({}, defaults, opt);


        var init = function () {
            $setting = Setting3DS.prototype.getInstance({
                "language": options.language,
                "atg": options.atg,
                "debug": options.debug,
            });
            $userCookie = UserCookie.prototype.getInstance();
            $.i18n().setLang(options.language);

            WatchJS.watch(options, "language", function (prop, action, newvalue, oldvalue) {
                if (newvalue !== undefined || newvalue !== null) {
                    $.i18n().setLang(newvalue);
                }
            });
        }();

        var pcss = "ds_";
        var bgcolor = ["black", "dark", "grey", "light", "white", "blue"]; // list of choices avalaible
        var lang = ["en", "fr", "de", "en", "it", "es", "ja", "zh", "ko", "ru", "sv", "pt"]; // list of choices avalaible
        var website = ["a", "b", "c", "d", "e", "f", "g", "h"]; // list of choices avalaible
        var optionsTmp = $.extend({}, defaults); // duplicate defaults object's value
        var soc = [
            {n: "facebook", u: "https://www.facebook.com/DassaultSystemes"},
            {n: "linkedin", u: "http://www.linkedin.com/company/3896?trk=tyah"},
            {n: "swym", u: "https://swym.3ds.com/"},
            {n: "twitter", u: "https://twitter.com/dassault3DS"},
            {n: "youtube", u: "http://www.youtube.com/user/DassaultSystemes"},
            {n: "rss", u: "http://www.3ds.com/rss/"}
        ];


        var defineEventListener = function () {
            window.addEventListener("message", function (e) {
                if (e.data == 'CloseModal') {
                    $('#' + options.modalId).modal('hide');
                    $userCookie.auth(true);
                    $userCookie.auth(true);
                }

                if (e.data[0] == 'ResizeModal') {
                    if ((e.data[1] !== undefined || e.data[1] !== null) && e.data[1] > 0) {
                        $('#' + options.modalId).modal('setIframeHeight', [(e.data[1])]);
                    }

                    if ((e.data[2] !== undefined || e.data[2] !== null) && e.data[2] > 0) {
                        $('#' + options.modalId).modal('setIframeWidth', [(e.data[2])]);
                    }
                }
            }, true);

            $(document).on("UrlServiceErrorEvent", function (event, instance, fn, callback) {
                var nbErrorPropertyName = fn.concat('NbError');
                (instance[nbErrorPropertyName] === undefined) ? instance[nbErrorPropertyName] = 1 : instance[nbErrorPropertyName]++;

                if (instance[nbErrorPropertyName] < ErrorEventListenerLimit) {
                    setTimeout(function () {
                        instance[fn](callback);
                    }, (ErrorEventListenerInterval * instance[nbErrorPropertyName]));
                } else if (instance[nbErrorPropertyName] == ErrorEventListenerLimit) {
                    $userCookie.logout();
                }
            });

            $(document).on("3DSUserHasConnectedEvent", function (event, userCookie) {
                console.log('> 3DSUserHasConnectedEvent');
                $(".".concat(pcss, 'btn')).show();
                $(".".concat(pcss, 'trigram')).show();

                if (userCookie._validCookie()) {
                    $(".".concat(pcss, 'trigram')).removeClass(pcss + 'no-trigram');
                    $(".".concat(pcss, 'trigram_content')).html(userCookie.trigram());
                } else {
                    $(".".concat(pcss, 'trigram')).addClass(pcss + 'no-trigram');
                }

                $(".".concat(pcss, 'connect')).hide();
                $(".".concat(pcss, 'compass')).show();
                bindTopbar();
            });

            $(document).on("3DSUserHasDisconnectedEvent", function (event, userCookie) {
                console.log('> 3DSUserHasDisconnectedEvent');
                $(".".concat(pcss, 'connect')).show();
                $(".".concat(pcss, 'trigram')).hide();

                bindTopbar();
                $(".".concat(pcss, 'trigram')).unbind("click");
            });

            $(document).on("3DSApiErrorEvent", function (event, userCookie) {
                console.log('> 3DSApiErrorEvent');
                $(".".concat(pcss, 'connect')).hide();
                $(".".concat(pcss, 'trigram')).hide();
            });

        }();


        function bindTopbar() {
            $.service('url').topbar((function (data) {
                var $_modal = $('#' + options.modalId);

                // connect
                if (data.signInURL !== undefined && data.signInURL !== null) {
                    $(".".concat(pcss, 'connect')).click(function () {
                        $_modal.modal('show')
                    });

                    $('#' + options.modalId + '-iframe').attr('src', data.signInURL);
                }


                // trigram
                if (data.myAccountURL !== undefined && data.myAccountURL !== null) {
                    $(".".concat(pcss, 'trigram')).click(function () {
                        window.location = data.myAccountURL;
                    });
                }
            }));
        }

        function bindLinkOpenModal() {
            $("a[data-threeds-modal]").each(function (index, value){
                console.log($(this).html());
            });
        }
        bindLinkOpenModal();

        // Check if options purposed are availables in list of choice
        var isok = function (value, arr) {
            return ( arr.indexOf(value) != -1 );
        }

        var isbool = function (val, defaultVal) {
            //true by default
            if (defaultVal) {
                if (val == "false" || val == false || val == "0" || val == 0) {
                    var retVal = false;
                } else {
                    var retVal = true;
                }
                //false by default
            } else {
                if (val == "true" || val == true || val == "1" || val == 1) {
                    var retVal = true;
                } else {
                    var retVal = false;
                }
            }
            return retVal;
        }

        if (isok(options.bgcolor, bgcolor)) {
            optionsTmp.bgcolor = options.bgcolor;
        }
        if (isok(options.website, website)) {
            optionsTmp.website = options.website;
        }
        if (isok(options.language, lang)) {
            optionsTmp.language = options.language;
        }
        optionsTmp.secure = isbool(options.secure, defaults.secure);
        optionsTmp.hasfooter = isbool(options.hasfooter, defaults.hasfooter);
        optionsTmp.haslogin = isbool(options.haslogin, defaults.haslogin);
        optionsTmp.hasborder = isbool(options.hasborder, defaults.hasborder);
        optionsTmp.hascompass = isbool(options.hascompass, defaults.hascompass);
        optionsTmp.hassocial = isbool(options.hassocial, defaults.hassocial);
        optionsTmp.hastrigram = isbool(options.hastrigram, defaults.hastrigram);
        optionsTmp.hasconnect = isbool(options.hasconnect, defaults.hasconnect);


        optionsTmp.haslogin = false;

        //check margin value
        var m = options.margin;
        if (typeof(m) != "undefined" && m !== null) {
            optionsTmp.margin = parseInt(m);
        }
        // else: the value defined in 'defaults array (copied in optionsTmp) is used

        //check width value
        var w = options.width;
        var w_unit = "%";
        if (typeof(w) != "undefined" && w !== null) {
            w_unit = (w.match(/(%|px)$/) || ["%"])[0];
            var nmbr = parseInt(w);
            if (w_unit == "%" && nmbr > 100) nmbr = 100;
            optionsTmp.width = ( nmbr + 2 * options.margin ) + w_unit;
        }
        // else: the value defined in 'defaults array (copied in optionsTmp) is used

        if (options.mediaqueries) {
            optionsTmp.mediaqueries = options.mediaqueries;
        }


        var params = $.extend(defaults, optionsTmp); // create objects with conform values
        var baseurlLang = "";
        switch (params.language) {
            case "pt":
                baseurlLang = "pt-br/";
                break;
            // case "de":
            // 	baseurlLang = "de/";
            // 	break;
            default :
                break;
        }
        if (baseurlLang == "" && params.language != "en") {
            baseurlLang = params.language + "/";
        }


        var baseurl = (params.secure) ? "https://www.3ds.com/" + baseurlLang : "http://www.3ds.com/" + baseurlLang;
        var baseurl_nolang = (params.secure) ? "https://www.3ds.com/" : "http://www.3ds.com/";

        var compassURL = baseurl + "about-3ds/3dexperience-platform/";

        var createQAList = function () {
            var links = [];
            if (params.language == "fr") {
                compassURL = baseurl + "a-propos-de-3ds/la-plate-forme-3dexperience/";
                switch (params.website) {
                    case "a" :
                        break;
                    case "b" :
                        links.push({"n": "Industries", "u": baseurl + "industries/"});
                        break;
                    case "c" :
                        links.push({"n": "Industries", "u": baseurl + "industries/"});
                        links.push({"n": "Produits et Services", "u": baseurl + "produits-et-services/"});
                        break;
                    case "d" :
                        links.push({"n": "Passion For Innovation", "u": baseurl + "3dexperience/"});
                        break;
                    case "e" :
                        links.push({"n": "Partenaires", "u": baseurl + "partners/"});
                        break;
                    case "f" :
                        links.push({"n": "CGR", "u": baseurl + "industries/consumer-goods-retail/"});
                        break;
                    case "g" :
                        links.push({"n": "Evénements", "u": baseurl + "evenements/"});
                        break;
                    case "h" :
                        links.push({"n": "Produits et Services", "u": baseurl + "produits-et-services/"});
                        break;
                    default :
                        break;
                }
            } else if (params.language == "de") {
                compassURL = baseurl + "ueber-dassault-systemes/3dexperience-plattform/";
                switch (params.website) {
                    case "a" :
                        break;
                    case "b" :
                        links.push({"n": "Branchen", "u": baseurl + "branchen/"});
                        break;
                    case "c" :
                        links.push({"n": "Branchen", "u": baseurl + "branchen/"});
                        links.push({"n": "Produkte und Services", "u": baseurl + "produkte-und-services/"});
                        break;
                    case "d" :
                        links.push({"n": "Passion For Innovation", "u": baseurl_nolang + "3dexperience/"});
                        break;
                    case "e" :
                        links.push({"n": "Partner", "u": baseurl + "partner/"});
                        break;
                    case "f" :
                        links.push({
                            "n": "Gebrauchsgüter und Handel",
                            "u": baseurl + "branchen/gebrauchsgueter-und-handel/"
                        });
                        break;
                    case "g" :
                        links.push({"n": "Veranstaltungen", "u": baseurl + "veranstaltungen/"});
                        break;
                    case "h" :
                        links.push({"n": "Produkte und Services", "u": baseurl + "produkte-und-services/"});
                        break;
                    default :
                        break;
                }
            } else if (params.language == "it") {
                compassURL = baseurl + "informazioni-su-3ds/piattaforma-3dexperience/";
                switch (params.website) {
                    case "a" :
                        break;
                    case "b" :
                        links.push({"n": "Settori Industriali", "u": baseurl + "settori-industriali/"});
                        break;
                    case "c" :
                        links.push({"n": "settori-industriali", "u": baseurl + "settori-industriali/"});
                        links.push({"n": "Prodotti e Servizi", "u": baseurl + "prodotti-e-servizi/"});
                        break;
                    case "d" :
                        links.push({"n": "Passion For Innovation", "u": baseurl + "passion-for-innovation/"});
                        break;
                    case "e" :
                        links.push({"n": "Partner", "u": baseurl + "partner/"});
                        break;
                    case "f" :
                        links.push({
                            "n": "Prodotti di largo consumo e vendita al dettaglio",
                            "u": baseurl + "settori-industriali/prodotti-di-largo-consumo-e-vendita-al-dettaglio/"
                        });
                        break;
                    case "g" :
                        links.push({"n": "Eventi", "u": baseurl + "eventi/"});
                        break;
                    case "h" :
                        links.push({"n": "Prodotti e Servizi", "u": baseurl + "prodotti-e-servizi/"});
                        break;
                    default :
                        break;
                }
            } else if (params.language == "es") {
                compassURL = baseurl + "acerca-de-3ds/plataforma-3dexperience/";
                switch (params.website) {
                    case "a" :
                        break;
                    case "b" :
                        links.push({"n": "Industrias", "u": baseurl + "industrias/"});
                        break;
                    case "c" :
                        links.push({"n": "Industrias", "u": baseurl + "industrias/"});
                        links.push({"n": "Productos y Servicios", "u": baseurl + "productos-y-servicios/"});
                        break;
                    case "d" :
                        links.push({"n": "Passion For Innovation", "u": baseurl + "passion-for-innovation/"});
                        break;
                    case "e" :
                        links.push({"n": "Partners", "u": baseurl + "partners/"});
                        break;
                    case "f" :
                        links.push({
                            "n": "Bienes de consumo y Venta al por menor",
                            "u": baseurl + "industrias/bienes-de-consumo-y-venta-al-por-menor/"
                        });
                        break;
                    case "g" :
                        links.push({"n": "Eventos", "u": baseurl + "eventos/"});
                        break;
                    case "h" :
                        links.push({"n": "Productos y Servicios", "u": baseurl + "productos-y-servicios/"});
                        break;
                    default :
                        break;
                }
            } else if (params.language == "ja") {
                compassURL = baseurl + "about-3ds/3dexperience-platform/";
                switch (params.website) {
                    case "a" :
                        break;
                    case "b" :
                        links.push({"n": "インダストリー", "u": baseurl + "industries/"});
                        break;
                    case "c" :
                        links.push({"n": "インダストリー", "u": baseurl + "industries/"});
                        links.push({"n": "製品 / サービス", "u": baseurl + "products-services/"});
                        break;
                    case "d" :
                        links.push({"n": "Passion For Innovation", "u": baseurl + "passion-for-innovation/"});
                        break;
                    case "e" :
                        links.push({"n": "パートナー", "u": baseurl + "partners/"});
                        break;
                    case "f" :
                        links.push({"n": "消費財・小売業", "u": baseurl + "industries/consumer-goods-retail/"});
                        break;
                    case "g" :
                        links.push({"n": "イベント/セミナー", "u": baseurl + "events/"});
                        break;
                    case "h" :
                        links.push({"n": "製品 / サービス", "u": baseurl + "products-services/"});
                        break;
                    default :
                        break;
                }
            } else if (params.language == "zh") {
                compassURL = baseurl + "about-3ds/3dexperience-platform/";
                switch (params.website) {
                    case "a" :
                        break;
                    case "b" :
                        links.push({"n": "行业", "u": baseurl + "industries/"});
                        break;
                    case "c" :
                        links.push({"n": "行业", "u": baseurl + "industries/"});
                        links.push({"n": "产品和服务", "u": baseurl + "products-services/"});
                        break;
                    case "d" :
                        links.push({"n": "Passion For Innovation", "u": baseurl + "passion-for-innovation/"});
                        break;
                    case "e" :
                        links.push({"n": "パートナー", "u": baseurl + "partners/"});
                        break;
                    case "f" :
                        links.push({"n": "消費財・小売業", "u": baseurl + "industries/consumer-goods-retail/"});
                        break;
                    case "g" :
                        links.push({"n": "活动", "u": baseurl + "events/"});
                        break;
                    case "h" :
                        links.push({"n": "产品和服务", "u": baseurl + "products-services/"});
                        break;
                    default :
                        break;
                }
            } else if (params.language == "ko") {
                compassURL = baseurl + "about-3ds/3dexperience-platform/";
                switch (params.website) {
                    case "a" :
                        break;
                    case "b" :
                        links.push({"n": "산업", "u": baseurl + "industries/"});
                        break;
                    case "c" :
                        links.push({"n": "산업", "u": baseurl + "industries/"});
                        links.push({"n": "제품과 서비스", "u": baseurl + "products-services/"});
                        break;
                    case "d" :
                        links.push({"n": "Passion For Innovation", "u": baseurl + "passion-for-innovation/"});
                        break;
                    case "e" :
                        links.push({"n": "파트너", "u": baseurl + "partners/"});
                        break;
                    case "f" :
                        links.push({"n": "소비재 산업", "u": baseurl + "industries/consumer-goods-retail/"});
                        break;
                    case "g" :
                        links.push({"n": "이벤트", "u": baseurl + "events/"});
                        break;
                    case "h" :
                        links.push({"n": "제품과 서비스", "u": baseurl + "products-services/"});
                        break;
                    default :
                        break;
                }
            } else if (params.language == "ru") {
                compassURL = baseurl + "o-3ds/platforma-3dexperience/";
                switch (params.website) {
                    case "a" :
                        break;
                    case "b" :
                        links.push({"n": "Отрасли", "u": baseurl + "otrasli/"});
                        break;
                    case "c" :
                        links.push({"n": "Отрасли", "u": baseurl + "otrasli/"});
                        links.push({"n": "Продукты и услуги", "u": baseurl + "produkty-i-uslugi/"});
                        break;
                    case "d" :
                        links.push({"n": "Passion For Innovation", "u": baseurl + "passion-for-innovation/"});
                        break;
                    case "e" :
                        links.push({"n": "Партнеры", "u": baseurl + "partnery/"});
                        break;
                    case "f" :
                        links.push({
                            "n": "Товары широкого потребления и розница",
                            "u": baseurl + "otrasli/tovary-shirokogo-potreblenija-i-roznica/"
                        });
                        break;
                    case "g" :
                        links.push({"n": "События", "u": baseurl + "sobytija/"});
                        break;
                    case "h" :
                        links.push({"n": "Продукты и услуги", "u": baseurl + "produkty-i-uslugi/"});
                        break;
                    default :
                        break;
                }
            } else if (params.language == "sv") {
                compassURL = baseurl + "om-3ds/Plattformen-3DEXPERIENCE/";
                switch (params.website) {
                    case "a" :
                        break;
                    case "b" :
                        links.push({"n": "Branscher", "u": baseurl + "branscher/"});
                        break;
                    case "c" :
                        links.push({"n": "Branscher", "u": baseurl + "branscher/"});
                        links.push({"n": "Produkter och tjänster", "u": baseurl + "produkter-och-tjaenster/"});
                        break;
                    case "d" :
                        links.push({"n": "Passion For Innovation", "u": baseurl + "passion-for-innovation/"});
                        break;
                    case "e" :
                        links.push({"n": "Partner", "u": baseurl + "partners/"});
                        break;
                    case "f" :
                        links.push({
                            "n": "Konsumentprodukter och detaljhandel",
                            "u": baseurl + "branscher/konsumentprodukter-och-detaljhandel/"
                        });
                        break;
                    case "g" :
                        links.push({"n": "Events", "u": baseurl + "events/"});
                        break;
                    case "h" :
                        links.push({"n": "Produkter och tjänster", "u": baseurl + "produkter-och-tjaenster/"});
                        break;
                    default :
                        break;
                }
            } else if (params.language == "pt") {
                compassURL = baseurl + "about-3ds/3dexperience-platform/";
                switch (params.website) {
                    case "a" :
                        break;
                    case "b" :
                        links.push({"n": "Industrias", "u": baseurl + "industrias/"});
                        break;
                    case "c" :
                        links.push({"n": "Industrias", "u": baseurl + "Industrias/"});
                        links.push({"n": "Produtos e Servicos", "u": baseurl + "produtos-e-servicos/"});
                        break;
                    case "d" :
                        links.push({"n": "Passion For Innovation", "u": baseurl + "passion-for-innovation/"});
                        break;
                    case "e" :
                        links.push({"n": "Parceiros", "u": baseurl + "parceiros/"});
                        break;
                    case "f" :
                        links.push({
                            "n": "Consumer Goods & Retail",
                            "u": baseurl + "industries/consumer-goods-retail/"
                        });
                        break;
                    case "g" :
                        links.push({"n": "Eventos", "u": baseurl + "eventos/"});
                        break;
                    case "h" :
                        links.push({"n": "Produtos e Servicos", "u": baseurl + "produtos-e-servicos/"});
                        break;
                    default :
                        break;
                }
            } else {
                compassURL = baseurl + "about-3ds/3dexperience-platform/";
                switch (params.website) {
                    case "a" :
                        break;
                    case "b" :
                        links.push({"n": "Industries", "u": baseurl + "industries/"});
                        break;
                    case "c" :
                        links.push({"n": "Industries", "u": baseurl + "industries/"});
                        links.push({"n": "Products & Services", "u": baseurl + "products-services/"});
                        break;
                    case "d" :
                        links.push({"n": "Passion For Innovation", "u": baseurl + "3dexperience/"});
                        break;
                    case "e" :
                        links.push({"n": "Partners", "u": baseurl + "partners/"});
                        break;
                    case "f" :
                        links.push({
                            "n": "Consumer Goods & Retail",
                            "u": baseurl + "industries/consumer-goods-retail/"
                        });
                        break;
                    case "g" :
                        links.push({"n": "Events", "u": baseurl + "events/"});
                        break;
                    case "h" :
                        links.push({"n": "Products & Services", "u": baseurl + "products-services/"});
                        break;
                    default :
                        break;
                }
            }
            return links;
        }
        var links = createQAList();
        var createItemLink = function (name, url, tag) {
            return $("<" + tag + ">").append(
                $("<a>").attr("href", url).attr("title", name).append($("<span>").html(name))
            );
        }
        var displaySocial = function () {
            var $list = $("<p>");
            for (v in soc) {
                createItemLink(soc[v].n, soc[v].u, "span").addClass(soc[v].n).appendTo($list);
            }
            $list.find("a span").addClass(pcss + "hide");
            return $list;
        }
        var displayQuickAccess = function () {
            var $list = $("<p>");
            for (v in links) {
                createItemLink(links[v].n, links[v].u, "span").appendTo($list);
            }
            return $list;
        };
        var displayID = function () {
            //Not implemented yet => return empty span!
            // var $id = $("<p>").append(
            // 		$("<img>").attr("src","pic-id.jpg").addClass(pcss+"pic")
            // 	).append(
            // 		$("<span>").addClass(pcss+"name").append(
            // 			$("<span>").addClass(pcss+"fname").html("John")
            // 		).append(
            // 			$("<span>").addClass(pcss+"lname").html("Doe")
            // 		)
            // 	);
            // return $id;
            return $("<span>");
        }


        var customMediaQueries = function () {

            if (params.mediaqueries) {

                var mq_style = "";

                for (var i = 0; i < params.mediaqueries.length; i++) {

                    mq_style += "@media screen %min_rule% %max_rule% { %rules% }";
                    var min_rule = "and ( min-width: %min% )";
                    var max_rule = "and ( max-width: %max% )";

                    var mq_i = params.mediaqueries[i];

                    if (mq_i.min && mq_i.min != null && mq_i.min != "") {
                        min_rule = min_rule.replace('%min%', mq_i.min);
                        mq_style = mq_style.replace("%min_rule%", min_rule);
                    } else {
                        mq_style = mq_style.replace("%min_rule%", "");
                    }

                    if (mq_i.max && mq_i.max != null && mq_i.max != "") {
                        max_rule = max_rule.replace('%max%', mq_i.max);
                        mq_style = mq_style.replace("%max_rule%", max_rule);
                    } else {
                        mq_style = mq_style.replace("%max_rule%", "");
                    }

                    var rules = "";

                    if (mq_i.width && mq_i.width != null && mq_i.width != "") {
                        rules += ".ds_center { width: " + mq_i.width + " !important; }"
                    }
                    if (mq_i.margin && mq_i.margin != null && mq_i.margin != "") {
                        rules += ".ds_inner { padding: 0 " + mq_i.margin + " !important; }"
                    }

                    mq_style = mq_style.replace('%rules%', rules);

                }

                $('body').append($('<style>').html(mq_style));
            }
        } // EO customMediaQueries()


        var displayFooterLinks = function () {

            var date = new Date();
            var copy_begin = "© 2002-" + date.getFullYear() + " Dassault Systèmes - ";
            var $list = $("<p>");
            var $links = [];
            var $copy = $("<span>");

            if (params.language == "fr") {
                $links.push({"n": "Informations légales", "u": baseurl + "mentions-legales/"});
                $links.push({"n": "Conditions d'utilisation", "u": baseurl + "conditions-dutilisation/"});
                $links.push({
                    "n": "Politique de confidentialité",
                    "u": baseurl + "politique-de-protection-des-donnees-personnelles/"
                });
                $links.push({"n": "Piratage", "u": baseurl + "piratage/"});
                $copy.html(copy_begin + "Tous droits réservés");
            } else if (params.language == "de") {
                $links.push({"n": "Rechtliche Hinweise", "u": baseurl + "rechtliche-hinweise/"});
                $links.push({"n": "Nutzungsbedinungen", "u": baseurl + "nutzungsbedingungen/"});
                $links.push({"n": "Datenschutzrichtlinie", "u": baseurl + "datenschutzrichtlinie/"});
                $links.push({"n": "Piraterie", "u": baseurl + "piraterie/"});
                $copy.html(copy_begin + "Sämtliche Rechte vorbehalten");
            } else if (params.language == "it") {
                $links.push({"n": "Informazioni legali", "u": baseurl + "informazioni-legali/"});
                $links.push({"n": "Condizioni d'uso", "u": baseurl + "condizioni-duso/"});
                $links.push({
                    "n": "Principi di tutela della privacy",
                    "u": baseurl + "principi-di-tutela-della-privacy/"
                });
                $links.push({"n": "Pirateria", "u": baseurl + "pirateria/"});
                $copy.html(copy_begin + "Tutti i diritti riservati");
            } else if (params.language == "ru") {
                $links.push({"n": "Юридическая информация", "u": baseurl + "juridicheskaja-informacija/"});
                $links.push({"n": "Условия использования", "u": baseurl + "pravila-ispolzovanija/"});
                $links.push({
                    "n": "Политика конфиденциальности",
                    "u": baseurl + "pravila-obrabotki-chastnoi-informacii/"
                });
                $links.push({"n": "Пиратство", "u": baseurl + "borba-s-piratstvom/"});
                $copy.html(copy_begin + "Все права защищены");
            } else if (params.language == "es") {
                $links.push({"n": "Información legal", "u": baseurl + "informacion-legal/"});
                $links.push({"n": "Condiciones de uso", "u": baseurl + "terminos-y-condiciones-de-uso/"});
                $links.push({"n": "Política de privacidad", "u": baseurl + "politica-de-privacidad/"});
                $links.push({"n": "Piratería", "u": baseurl + "pirateria/"});
                $copy.html(copy_begin + "Todos los derechos reservados");
            } else if (params.language == "ko") {
                $links.push({"n": "법률 정보", "u": baseurl + "legal-information/"});
                $links.push({"n": "사용권 계약", "u": baseurl + "terms-of-use/"});
                $links.push({"n": "개인정보 보호정책", "u": baseurl + "privacy-policy/"});
                $links.push({"n": "저작권 침해", "u": baseurl + "piracy/"});
                $copy.html(copy_begin + "Copyright");
            } else if (params.language == "zh") {
                $links.push({"n": "法律信息", "u": baseurl + "legal-information/"});
                $links.push({"n": "使用条款", "u": baseurl + "terms-of-use/"});
                $links.push({"n": "隐私政策", "u": baseurl + "privacy-policy/"});
                $links.push({"n": "隐私", "u": baseurl + "piracy/"});
                $copy.html(copy_begin + "保留所有权利");
            } else if (params.language == "ja") {
                $links.push({"n": "法的事項", "u": baseurl + "legal-information/"});
                $links.push({"n": "利用規約", "u": baseurl + "terms-of-use/"});
                $links.push({"n": "個人情報管理方針", "u": baseurl + "privacy-policy/"});
                $links.push({"n": "著作権侵害", "u": baseurl + "piracy/"});
                $copy.html(copy_begin + "無断複写・複製・転載を禁ず");
            } else if (params.language == "se") {
                $links.push({"n": "Juridisk information", "u": baseurl + "laglig-information/"});
                $links.push({"n": "Användarvillkor", "u": baseurl + "anvaendningsvillkor/"});
                $links.push({"n": "Sekretesspolicy", "u": baseurl + "politik-gaellande-personuppgifter/"});
                $links.push({"n": "Piratkopiering", "u": baseurl + "piratkopiering/"});
                $copy.html(copy_begin + "Med ensamrätt");
            } else {
                $links.push({"n": "Legal Info", "u": baseurl + "legal-information/"});
                $links.push({"n": "Terms of use", "u": baseurl + "terms-of-use/"});
                $links.push({"n": "Privacy policy", "u": baseurl + "privacy-policy/"});
                $links.push({"n": "Piracy", "u": baseurl + "piracy/"});
                $copy.html(copy_begin + "All rights reserved");
            }

            //var $linksLength = arr.length;
            for (v in $links) {
                var $pipe = $("<span>").addClass(pcss + "pipe");
                var first = 0;
                var last = $links.length - 1;
                // non utilisé actuellement: classe non existante
                /*if(v == 1){
                 $pipe.addClass(pcss+"br");
                 }*/
                if (v == last) {
                    createItemLink($links[v].n, $links[v].u, "span").appendTo($list);
                } else {
                    createItemLink($links[v].n, $links[v].u, "span").append($pipe).appendTo($list.append(' '));
                }
            }

            $list.append($("<span>").addClass(pcss + "copy").append($copy));
            return $list;
        };
        return this.each(function () {
            var $this = $(this);
            $this.css("padding-top", "56px").css("position", "inherit"); // shift parent object

            var $logo = $("<h3>").addClass(pcss + "logo").append(
                $("<a>").attr("href", baseurl).append(
                    $("<span>").addClass(pcss + "hide").html("Dassault Systèmes")
                )
            ); // create logo


            // <!-- SOCIAL CONTENT
            var $btnSocial = $("<span>").addClass(pcss + "btn").append(
                $("<span>").addClass(pcss + "hide").html("Tools")
            ).on("click", function () {
                    $sliderSocial.stop().animate({width: 'toggle'}, {"duration": 500, "easing": "swing"});
                    $(".h3ds_social").stop().animate({width: 'toggle'}, {"duration": 500, "easing": "swing"});
                    //$(".h3ds_social").toggleClass("isopen");
                }); // create social btn

            var $sliderSocial = $("<div>").addClass(pcss + "slider").hide().append(displaySocial()); //create social slider
            //var $layerSocial = $("<div>").addClass(pcss+"social").append($sliderSocial);  //create social bock
            $btnSocial.append($sliderSocial);
            // SOCIAL CONTENT -->


            // <!-- TRIGRAM : HTML CONTENT
            var $trigram = $("<span>").addClass(pcss + "trigram")
            $trigram.append(
                $("<span>").addClass(pcss + "trigram_content").append(
                    $("<div>").addClass(pcss + "txt")
                )
            );

            //  Connect : HTML CONTENT -->

            // <!-- Connect : HTML CONTENT
            var $connect = $("<span>").addClass((pcss + "connect"));
            $connect.append(
                $("<a>").addClass(pcss + "banner-btn").append('Connect')
            );

            var $modal = $("<div>")
                .addClass('modal')
                .addClass('fade')
                .attr('id', options.modalId)
                .attr('tabindex', '-1')
                .attr('role', 'dialog')
                .attr('aria-hidden', 'true').append(
                $("<div>").addClass('modal-dialog').append(
                    $("<div>").addClass('modal-content').append(
                        $("<div>").addClass('modal-body').append(
                            $("<button>")
                                .addClass('close')
                                .attr('type', 'button')
                                .attr('data-dismiss', 'modal')
                                .attr('aria-label', 'Close').append(
                                $("<span>").attr('aria-hidden', 'true')
                            )
                        ).append(
                            $("<iframe>")
                                .attr('id', options.modalId + '-iframe')
                                .attr('src', '')
                                .attr('width', '100%')
                                .attr('height', '100%')
                                .attr('frameborder', '0')
                                .attr('allowtransparency', 'true')
                        )
                    )
                )
            );

            //  Connect : HTML CONTENT -->

            var $layerID = $("<div>").addClass(pcss + "id").append(displayID());  //create social bock

            var $compassA = $("<a>").attr("href", compassURL);  //create compass link
            var $compass = $("<div>").addClass(pcss + "compass").append($compassA);  //create compass bock


            var $quickAccess = $("<div>").addClass(pcss + "links").append(displayQuickAccess()); // create quick access
            var $rightSide = $("<div>").addClass(pcss + "right")//.append($btnSocial);//.append($sliderSocial); // create right side
            var $header = $("<div>").addClass("ds").addClass(pcss + params.bgcolor); // create global header
            var $headerWinner = $("<div>").addClass(pcss + "inner").css("padding", "0 " + params.margin + "px");
            var $headerW = $("<div>").addClass(pcss + "center").width(params.width);
            if (!params.hasborder) {
                $header.addClass(pcss + "noborder");
            }

            var $footer = $("<div>").addClass("ds").addClass(pcss + "footer").addClass(pcss + params.bgcolor); // create global footer
            var $footerW = $("<div>").addClass(pcss + "center").width(params.width);
            var $footerLinks = $("<div>").addClass(pcss + "flinks").append(displayFooterLinks()); // create quick access
            customMediaQueries();

            var iconClass = "";
            switch (params.bgcolor) {
                case "black":
                    iconClass = "txtlight";
                    break;
                case "dark":
                    iconClass = "txtlight";
                    break;
                case "grey":
                    iconClass = "txtlight";
                    break;
                case "light":
                    iconClass = "txtdark";
                    break;
                case "white":
                    iconClass = "txtblue";
                    break;
                case "blue":
                    iconClass = "txtlight";
                    break;
                default:
                    iconClass = "txtblue";
                    break;
            }
            $header.addClass(pcss + iconClass);
            $footer.addClass(pcss + iconClass);

            // $header.append($logo).append($rightSide.append($quickAccess));
            $header.append($headerW.append($headerWinner.append($logo).append($rightSide.append($quickAccess))));

            if (params.haslogin) {
                $layerID.prependTo($rightSide);
            }

            if (params.hassocial) {
                $btnSocial.prependTo($rightSide);
            }

            if (params.hastrigram) {
                $trigram.prependTo($rightSide);
            }

            if (params.hasconnect) {
                $connect.prependTo($rightSide);
            }

            if (params.hascompass) {
                $compass.prependTo($rightSide);
            }

            if (params.display_social_btn) {
                $compass.prependTo($rightSide);
            }

            $footer.append($footerLinks);
            $footer.append($footerW.append($footerLinks));


            $header.prependTo($this);
            $modal.prependTo($this);
            if (params.hasfooter) {
                $footer.appendTo($this);
            } else {
                // delete $footer;
            }
            if (params.callback) {
                params.callback();
            }
        });
    };

})(jQuery);