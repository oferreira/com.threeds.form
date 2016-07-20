/// <reference path="../../../typings/jquery/jquery.d.ts" />
/// <reference path="../../Service/Adapter/Exalead.ts" />
/// <reference path="../../Service/ServiceManager.ts" />
/// <reference path="../../Plugin/AbstractPlugin.ts" />
/// <reference path="../../I18n/Translator.ts" />
/// <reference path="../../Component/LandingPage/Element/LandingPage.ts" />
/// <reference path="../../Http/Cookie.ts" />

interface Document {
    registerElement(tagName:string, implementation:any):any;
}

interface JQuery {
    masonry(data?:any, options?:any): JQuery;
    chosen(data?:any, options?:any): JQuery;
    imagesLoaded(data?:any, options?:any): JQuery;
    always(data?:any, options?:any): JQuery;
    done(data?:any, options?:any): JQuery;
    fail(data?:any, options?:any): JQuery;
    progress(data?:any, options?:any): JQuery;
}

interface JQueryStatic{
    namespace(namespaceName?:any, closures?:any): JQuery;
}

namespace Com.Threeds.Component.Header {

    import AbstractPlugin = Com.Threeds.Plugin.AbstractPlugin;
    import LandingPage = Com.Threeds.Component.Header.Element.TopBar;

    export class Plugin extends AbstractPlugin {
        public elem:any;
        public status:any = {
            transition:false
        };
        public settings:any = {
            api: {
                adapter: 'Com.Threeds.Service.Adapter.Neolane',
                url: 'http://dassault-test.neolane.net/dsx/lp_api.jssp',
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
        }
    }

    $.namespace('threeds', {
        header: function (options:Object) {
            return (new Plugin(this, options));
        }
    });
}