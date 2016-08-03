/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../../Plugin/AbstractPlugin.ts" />
/// <reference path="../../Component/Header/Element/Header.ts" />
/// <reference path="../../Component/Header/Element/Footer.ts" />
/// <reference path="../../Http/Request.ts" />

interface JQueryStatic{
    namespace(namespaceName?:any, closures?:any): JQuery;
}

namespace Com.Threeds.Component.Header {

    import AbstractPlugin = Com.Threeds.Plugin.AbstractPlugin;
    import Header = Com.Threeds.Component.Header.Element.Header;
    import Footer = Com.Threeds.Component.Header.Element.Footer;


    export class Plugin extends AbstractPlugin {
        public elem:any;
        public settings:any = {
            "bgcolor": "dark",
            "secure": false,
            "website": "c",
            "language": "pt",
            "hasnavigation": true,
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
            Com.Threeds._parameters.translator.lang = this.settings.language;
            this.mediaQueries();
           this.header();
            this.elem.css("padding-top","56px").css("position","inherit");


            let ticket:string = Com.Threeds.Http.Request.getParam('ticket');
            if (ticket != null) {
                $.ajax({
                    type: "GET",
                    url: 'https://eu1-ds-iam.3dexperience.3ds.com/serviceValidate?service=' + window.location.href,
                    success: function (data:any) {
                        console.log(data)
                    },
                    error: function (resultat:any, statut:any, erreur:any) {

                    }
                });
            }

            this.footer();
        }

        userInfo():string {
            return this.baseUrl() + path;
        }

        url(path:string):string{
            return this.baseUrl() + path;
        }

        baseUrl():string{
            let path:string = "";
            switch (this.settings.language) {
                case "pt":
                    path = "pt-br/";
                    break;
                case "de":
                    path = "de/";
                    break;
                default :
                    break;
            }
            if (path != "" && this.settings.language != "en") {
                path = this.settings.language + "/";
            }
            return (this.settings.secure ? 'https://' : 'http://') + 'www.3ds.com/' + path;
        }

        compassUrl():string {
            if (this.settings.language == "fr") {
                return `${this.baseUrl()}a-propos-de-3ds/la-plate-forme-3dexperience/`;
            } else if (this.settings.language == "de") {
                return `${this.baseUrl()}ueber-dassault-systemes/3dexperience-plattform/`;
            } else if (this.settings.language == "it") {
                return `${this.baseUrl()}informazioni-su-3ds/piattaforma-3dexperience/`;
            } else if (this.settings.language == "es") {
                return `${this.baseUrl()}acerca-de-3ds/plataforma-3dexperience/`;
            } else if (this.settings.language == "ja") {
                return `${this.baseUrl()}about-3ds/3dexperience-platform/`;
            } else if (this.settings.language == "zh") {
                return `${this.baseUrl()}about-3ds/3dexperience-platform/`;
            } else if (this.settings.language == "ko") {
                return `${this.baseUrl()}about-3ds/3dexperience-platform/`;
            } else if (this.settings.language == "ru") {
                return `${this.baseUrl()}o-3ds/platforma-3dexperience/`;
            } else if (this.settings.language == "sv") {
                return `${this.baseUrl()}om-3ds/Plattformen-3DEXPERIENCE/`;
            } else if (this.settings.language == "pt") {
                return `${this.baseUrl()}about-3ds/3dexperience-platform/`;
            }

            return `${this.baseUrl()}about-3ds/3dexperience-platform/`;
        }

        getClassTextColor():string {
            if (this.settings.bgcolor == 'black')return "ds_txtlight";
            if (this.settings.bgcolor == 'dark') return "ds_txtlight";
            if (this.settings.bgcolor == 'grey') return "ds_txtlight";
            if (this.settings.bgcolor == 'light')return "ds_txtdark";
            if (this.settings.bgcolor == 'white')return "ds_txtblue";
            if (this.settings.bgcolor == 'blue') return "ds_txtlight";

            return "ds_txtblue";
        }

        getClassTheme():string {
            return `ds_${this.settings.bgcolor}`;
        }

        getNoBorder():string {
            return `ds_${this.settings.bgcolor}`;
        }


        footer():void {
            if (!this.settings.hasfooter) return;
            this.elem.append((new Footer(this, this.settings)).render())
        }

        header():void {
            this.elem.append((new Header(this, this.settings)).render())
        }

        mediaQueries() {
            if (this.settings.mediaqueries) {
                let output:string = "";
                let min_rule:string;
                let max_rule:string;

                for (var i = 0; i < this.settings.mediaqueries.length; i++) {
                    let row:any = this.settings.mediaqueries[i];
                    min_rule = "and ( min-width: %min% )";
                    max_rule = "and ( max-width: %max% )";

                    output += "@media screen %min_rule% %max_rule% { %rules% }";

                    if (row.min && row.min != null && row.min != "") {
                        min_rule = min_rule.replace('%min%', row.min);
                        output = output.replace("%min_rule%", min_rule);
                    } else {
                        output = output.replace("%min_rule%", "");
                    }

                    if (row.max && row.max != null && row.max != "") {
                        max_rule = max_rule.replace('%max%', row.max);
                        output = output.replace("%max_rule%", max_rule);
                    } else {
                        output = output.replace("%max_rule%", "");
                    }

                    var rules = "";

                    if (row.width && row.width != null && row.width != "") {
                        rules += ".ds_center { width: " + row.width + " !important; }"
                    }

                    if (row.margin && row.margin != null && row.margin != "") {
                        rules += ".ds_inner { padding: 0 " + row.margin + " !important; }"
                    }

                    output = output.replace('%rules%', rules);

                }

                let css:HTMLStyleElement = document.createElement('style');
                css.innerHTML = output;
                this.elem.append(css);
            }
        }
    }

    $.namespace('threeds', {
        header: function (options:Object) {
            return (new Plugin(this, options));
        }
    });
}