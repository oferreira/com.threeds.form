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