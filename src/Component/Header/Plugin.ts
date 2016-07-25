/// <reference path="../../../typings/jquery/jquery.d.ts" />
/// <reference path="../../Component/Header/Element/Header.ts" />

interface JQueryStatic{
    namespace(namespaceName?:any, closures?:any): JQuery;
}

namespace Com.Threeds.Component.Header {

    import AbstractPlugin = Com.Threeds.Plugin.AbstractPlugin;
    import Header = Com.Threeds.Component.Header.Element.Header;

    export class Plugin extends AbstractPlugin {
        public elem:any;
        public settings:any = {
            "bgcolor": "dark",
            "secure": false,
            "website": "c",
            "language": "pt",
            "hasfooter": true,
            "hascompass": true,
            "hasborder": false,
            "margin": "55",
            "width": "100%",
            "mediaqueries": [
                {
                    "min": "1100px",
                    "max": "1299px",
                    "width": "1000px",
                    "margin": "55px"
                },
                {
                    "min": "1300px",
                    "width": "1200px"
                }
            ],
            "callback":null,
            api: {
                passport: {
                    adapter: 'Com.Threeds.Service.Adapter.Neolane',
                    url: 'http://dassault-test.neolane.net/dsx/lp_api.jssp',
                },
            },
            hook: {
                connected: undefined,
                disconnected: undefined,
                redirect: undefined
            }
        };

        constructor(elem:any, options:any) {
            super(elem, options);
            this.elem = elem;
            this.settings = $.extend({}, this.settings, options);
            this.elem.append(new Header(this, this.settings));
        }
    }

    $.namespace('threeds', {
        header: function (options:Object) {
            return (new Plugin(this, options));
        }
    });
}