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