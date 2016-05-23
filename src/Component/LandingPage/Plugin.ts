/// <reference path="../../../typings/jquery/jquery.d.ts" />
/// <reference path="../../Service/Adapter/Exalead.ts" />
/// <reference path="../../Service/ServiceManager.ts" />
/// <reference path="../../Plugin/AbstractPlugin.ts" />
/// <reference path="../../Component/Form/Element/Form.ts" />
/// <reference path="../../I18n/Translator.ts" />
/// <reference path="../../Core/Ajax/AutoComplete.ts" />
/// <reference path="../../Component/Tabs/Element/Tabs.ts" />
/// <reference path="../../Component/Form/Element/Form.ts" />

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

namespace Com.Threeds.Component.LandingPage {

    import AbstractPlugin = Com.Threeds.Plugin.AbstractPlugin;
    import Tabs = Com.Threeds.Component.Tabs.Element.Tabs;
    import Form = Com.Threeds.Component.Form.Element.Form;

    export class Plugin extends AbstractPlugin {
        public elem:any;
        public settings:any = {
            id: 'LDP6312',
            type: 'download',
            steps: {
                0: {
                    title: 'tab 1',
                    content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt'
                    button: {
                        'label': 'send'
                    }
                },
                1: {
                    title: 'tab 2',
                    content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt'
                    button: {
                        'label': 'send'
                    }
                }
            },
            success: {
                title: 'Step 1',
                content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua',
            },
            error: {
                title: 'Step 1',
                content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua'
            },
            form: {
                display: {
                    label: false,
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
                callback: {
                    success: undefined
                },
            }
        };

        constructor(elem:any, options:Object) {
            super(elem, options);
            this.elem = elem;
            this.settings = $.extend({}, this.settings, options);
            this.service('form.api').form(this, {});
        }

        tabs():Tabs{
            let options:Object = {
                data: this.settings.steps
            };

            return Tabs.create(this, options);
        }

        form(data:any):Form{
            this.settings.form.id = this.settings.id;
            this.settings.form.callback = this.settings.callback;

            return new Form.create(this,this.settings.form, data);
        }

        render(type:string, data:any):void {
            this.elem.append(this.tabs());

            let container:HTMLDivElement = document.createElement('div');
            container.classList.add('ds-form');
            container.appendChild(this.form(data));
            this.elem.append(container);
        }
    }

    $.namespace('threeds', {
        landingPage: function (options:Object) {
            return new Plugin(this, options);
        }
    });
}
