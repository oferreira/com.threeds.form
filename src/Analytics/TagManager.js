var Com;
(function (Com) {
    var Threeds;
    (function (Threeds) {
        var Analytics;
        (function (Analytics) {
            var TagManager = (function () {
                function TagManager() {
                }
                TagManager.create = function (context, target, options) {
                    var options = $.extend({}, TagManager.settings, options);
                    options.event = 'page';
                    options.page_name.replace(/\{page_category\}/ig, options.page_category);
                    var pathname = window.location.pathname;
                    if (window.location.hash != '') {
                        pathname += window.location.hash;
                    }
                    options.page_name = options.page_name.replace('{env}', TagManager.env());
                    options.page_name = options.page_name.replace('{hostname}', window.location.hostname);
                    options.page_name = options.page_name.replace('{pathname}', pathname);
                    options.page_name = options.page_name.replace('{page_category}', options.page_category);
                    options.page_name = options.page_name.replace('///', '/');
                    options.page_name = options.page_name.replace('//', '/');
                    options.page_name = options.page_name.replace('#', '/');
                    console.log(options);
                    if (typeof window.tc_events_5 == "function") {
                        window.tc_events_5('this', target, options);
                    }
                };
                TagManager.env = function () {
                    var host = window.location.host;
                    if (host.indexOf("ifwe") != -1) {
                        return 'ifwe';
                    }
                    else if (host.indexOf("wtm") != -1 || host.indexOf("offer") != -1) {
                        return 'wtm';
                    }
                    else if (host.indexOf("localhost") != -1) {
                        return 'localhost';
                    }
                    else {
                        return window.location.host;
                    }
                };
                TagManager.settings = {
                    event: 'page',
                    page_name: '',
                    page_category: ''
                };
                return TagManager;
            })();
            Analytics.TagManager = TagManager;
        })(Analytics = Threeds.Analytics || (Threeds.Analytics = {}));
    })(Threeds = Com.Threeds || (Com.Threeds = {}));
})(Com || (Com = {}));
