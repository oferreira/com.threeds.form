/// <reference path="../../../typings/jquery/jquery.d.ts" />
/// <reference path="../../Service/Adapter/Exalead.ts" />
/// <reference path="../../Service/ServiceManager.ts" />
/// <reference path="../../Plugin/AbstractPlugin.ts" />
/// <reference path="../../Component/Form/Element/From.ts" />


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

namespace Com.Theeds.Component.Form {

    import AbstractPlugin = Com.Theeds.Plugin.AbstractPlugin;
    import FromElement = Com.Theeds.Component.Form.Element.From;

    export class Plugin extends AbstractPlugin {

        public  settings:any = {
            display: {
                label: true,
                placeholder: true,
            },
            styling: {},
            form: {
                id: '32f91ef071fe9e8974f3e6468c36312d',
                adapter: 'Com.Theeds.Service.Adapter.Neolane',
                url: 'http://dassault-dev.neolane.net/dsx/lp_api.jssp',
            },
            hook: {
                search: undefined,
                render: undefined
            },

        };

        constructor(elem:any, options:Object) {
            super(elem, options);
            this.service('form').form(this, {});
        }

        render(type:string, data:any):void {
            document.body.appendChild(FromElement.create(this, data));
        }
    }

    $.fn.forms = function (options:Object) {
        return new Plugin(this, options);
    };
}
