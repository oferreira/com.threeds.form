/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../../Plugin/AbstractPlugin.ts" />
/// <reference path="../../Component/Header/Element/Header.ts" />
/// <reference path="../../Component/Header/Element/Footer.ts" />

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

            this.createMediaQueries();
            this.createFooter();


            //this.elem.append(Header.create(this, this.settings));
        }

        url(path:string):string{
            return this.baseUrl() + path;
        }

        baseUrl():string{
            return (this.settings.secure ? 'https://':'http://') + 'www.3ds.com/';
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
            return "ds_" + this.settings.bgcolor;
        }

        createFooter():void {
            if (!this.settings.hasfooter) return;
            this.elem.append((new Footer(this, this.settings)).render())
        }


        createMediaQueries() {
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

                let styleElement:HTMLStyleElement = document.createElement('style');
                styleElement.innerHTML = output;
                this.elem.append(styleElement);
            }
        }
    }

    $.namespace('threeds', {
        header: function (options:Object) {
            return (new Plugin(this, options));
        }
    });
}