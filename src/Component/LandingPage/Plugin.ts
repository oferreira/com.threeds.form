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
        public id:any;
        public elem:any;
        public settings:any = {
            id: 'LDP6312',
            type: 'download',
            backgroundImage: 'http://lorempixel.com/500/680',
            steps: {
                0: {
                    name: '1',
                    title: 'To download the Case Study, please provide your email'
                },
                1: {
                    name: '2',
                    title: 'Please provide more informations to complete your Case Study download'
                }
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
            accelerate: {
                url: 'http://www.3ds.com/en/contact-us',
                label: 'contact me',
                content: 'You want to be contacted for a commercial purpose?',
            },
            error: {
                title: 'Sorry !',
                content: '<p>This service is temporarily unavailable. please try again later or contact the <a href="#" class="btn btn-primary">support</a></p> '
            },
            nextLabel: 'Next',
            prevLabel: 'Back',
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

        constructor(elem:any, options:any) {
            super(elem, options);
            this.elem = elem;
            this.id = elem.attr('id');
            this.elem.addClass('ds-ldp-global-container');
            this.settings = $.extend({}, this.settings, options);


            //console.log(">>>>>>>>>>>>>>>>>>>>>>>>")
            //console.log(elem)
            //console.log(options)
            //console.log(">>>>>>>>>>>>>>>>>>>>>>>>")

            if (Object.isDefined(options, 'form.nextLabel')){
                this.settings.nextLabel = options.form.nextLabel;
            }

            if (Object.isDefined(options, 'form.prevLabel')){
                this.settings.prevLabel = options.form.prevLabel;
            }

            if (Object.isDefined(options, 'form.api.url')){
                this.settings.api.url = options.form.api.url;
            }

            if (Object.isDefined(options, 'form.callback')){
               this.settings.callback = options.form.callback;
            }

            let self:any = this;
            this.service('api').form(self, {});
        }

        render(type:string, data:any):void {
            this.elem.append(LandingPage.create(this, data));

            //console.log('this.parentNode this.parentNodethis.parentNodethis.parentNodethis.parentNode')
            //console.log(this.elem)
        }
    }

    $.namespace('threeds', {
        landingPage: function (options:Object) {
            return (new Plugin(this, options));
        }
    });
}

Object.isDefined = function (obj:any, prop:string) {
    var parts = prop.split('.');
    for (var i = 0, l = parts.length; i < l; i++) {
        var part = parts[i];
        if (obj !== null && typeof obj === "object" && part in obj) {
            obj = obj[part];
        } else {
            return false;
        }
    }
    return true;
}