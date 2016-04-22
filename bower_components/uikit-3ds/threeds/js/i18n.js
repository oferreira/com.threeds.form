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


