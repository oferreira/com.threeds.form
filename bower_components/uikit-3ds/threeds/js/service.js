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