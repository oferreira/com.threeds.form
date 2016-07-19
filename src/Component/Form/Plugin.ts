/// <reference path="../../../typings/jquery/jquery.d.ts" />
/// <reference path="../../Service/Adapter/Exalead.ts" />
/// <reference path="../../Service/ServiceManager.ts" />
/// <reference path="../../Plugin/AbstractPlugin.ts" />
/// <reference path="../../Component/Form/Element/Form.ts" />
/// <reference path="../../I18n/Translator.ts" />



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

namespace Com.Threeds.Component.Form {

    import AbstractPlugin = Com.Threeds.Plugin.AbstractPlugin;
    import Form = Com.Threeds.Component.Form.Element.Form;

    export class Plugin extends AbstractPlugin {

        public settings:any = {
            id: 'LDP6312',
            display: {
                label: true,
                placeholder: true,
            },
            styling: {
                label:{
                    suffixe:' : ',
                    mandatory:' * '
                }
            },
            api: {
                adapter: 'Com.Threeds.Service.Adapter.Neolane',
                url: 'http://dassault-test.neolane.net/dsx/lp_api.jssp',
            },
            success: {
                title: 'Thanks for your download',
                content: 'Your download should start automatically, if not use the direct link',

            },
            action: {
                url: 'http://www.3ds.com/en/file.pdf',
                label: 'Download',
                content: 'PDF - 3,84Mo',
            },
            hook: {
                render: undefined,
                success: undefined,
                redirect: undefined,
                warning: undefined,
                setCurrentPosition: undefined,
            },

        };

        constructor(elem:any, options:Object) {
            super(elem, options);

            this.settings = $.extend({}, this.settings, options);
            this.service('api').form(this, {});
        }


        clear() {
            while (this.elem.firstChild) this.elem.removeChild(this.elem.firstChild);
            this.elem.html(null);
            console.log('ezkkzeokr');
        }

        render(type:string, data:any):void {
            console.log('ezkkzeok2222r');
            this.clear();
            if(typeof this.settings.hook.render == 'function'){
                this.settings.hook.render(this, type, data);
            } else {
                this.elem.append(Form.create(this, data));
            }
        }
    }

    $.namespace('threeds', {
        form: function (options:Object) {
            return new Plugin(this, options);
        }
    });
}
