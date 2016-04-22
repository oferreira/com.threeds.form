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