/// <reference path="../../../typings/jquery/jquery.d.ts" />
/// <reference path="../../Service/Adapter/Exalead.ts" />
/// <reference path="../../Service/ServiceManager.ts" />
/// <reference path="../../Plugin/AbstractPlugin.ts" />
/// <reference path="../../Component/Form/Element/Form.ts" />
/// <reference path="../../I18n/Translator.ts" />
/// <reference path="../../Core/Bootstrap.ts" />

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
            while (Polymer.dom(this).firstChild) Polymer.dom(this).removeChild(Polymer.dom(this).firstChild);
            this.innerHTML = '';
        }

        render(type:string, data:any):void {
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
