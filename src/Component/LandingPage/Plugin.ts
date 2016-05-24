/// <reference path="../../../typings/jquery/jquery.d.ts" />
/// <reference path="../../Service/Adapter/Exalead.ts" />
/// <reference path="../../Service/ServiceManager.ts" />
/// <reference path="../../Plugin/AbstractPlugin.ts" />
/// <reference path="../../I18n/Translator.ts" />
/// <reference path="../../Component/LandingPage/Element/LandingPage.ts" />

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
    namespace(name?:any, options?:any): JQuery;
}

namespace Com.Threeds.Component.LandingPage {

    import AbstractPlugin = Com.Threeds.Plugin.AbstractPlugin;
    import LandingPage = Com.Threeds.Component.LandingPage.Element.LandingPage;

    export class Plugin extends AbstractPlugin {
        public elem:any;
        public settings:any = {
            id: 'LDP6312',
            type: 'download',
            steps: {
                0: {
                    title: 'tab 1',
                    content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt',
                    button: {
                        'label': 'send'
                    }
                },
                1: {
                    title: 'tab 2',
                    content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt',
                    button: {
                        'label': 'send'
                    }
                }
            },
            success: {
                title: 'Thanks you !',
                content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua',
            },
            error: {
                title: 'Error !',
                content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua'
            },
            display: {
                label: false,
                placeholder: true,
            },
            styling: {
                label: {
                    suffixe: ' : ',
                    mandatory: ' * '
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
        };

        constructor(elem:any, options:Object) {
            super(elem, options);
            this.elem = elem;
            this.settings = $.extend({}, this.settings, options);

            this.service('api').form(this, {});
        }



        render(type:string, data:any):void {
            this.elem.append(LandingPage.create(this, data));
        }
    }

    $.namespace('threeds', {
        landingPage: function (options:Object) {
            return new Plugin(this, options);
        },
        dynamicForm3ds: function (options:Object) {
            return new Plugin(this, options);
        }
    });
}
