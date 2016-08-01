/// <reference path="../../../../bower_components/polymer-ts/polymer-ts.d.ts"/>
/// <reference path="../../../Component/Header/Element/Nav.ts"/>

namespace Com.Threeds.Component.Header.Element {

    import Nav = Com.Threeds.Component.Header.Element.Nav;

    export class Header {
        context:any;
        data:any;

        constructor(context:any, data:any) {
            this.context = context;
            this.data = data;
        }

        compass():string {
            return `<div class="ds_compass"><a href="${this.context.compassUrl()}"></a></div>`;
        }

        logo():string {
            return `<h3 class="ds_logo"><a href="${this.context.baseUrl()}"><span class="ds_hide">${$.i18n().t('header.logo.title')}</span></a></h3>`;
        }

        nav():string {
            if (!this.context.settings.hasnavigation) return;
            return (new Nav(this.context, this.data)).render();
        }

        render():string {
            return Mustache.render(`
                <div class="ds ds_noborder ${this.context.getClassTheme()} ${this.context.getClassTextColor()}">
                    <div class="ds_center" style="width: 210%;">
                        <div class="ds_inner" style="padding: 0px 55px;">
                            ${this.logo()}
                            <div class="ds_right">
                            ${this.nav()}
                            ${this.compass()}
                            </div>
                        </div>
                    </div>
                </div>
            `, this);
        }
    }
}


