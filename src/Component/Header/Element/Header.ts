/// <reference path="../../../Component/Header/Element/Nav.ts"/>

namespace Com.Threeds.Component.Header.Element {

    import Nav = Com.Threeds.Component.Header.Element.Nav;

    export class Header {

        context:any;
        data:any;
        elem:HTMLDivElement;

        constructor(context:any, data:any) {
            this.context = context;
            this.data = data;

            this.elem = document.createElement('div');
            this.elem.classList.add('ds');
            this.elem.classList.add('ds_noborder');
            this.elem.classList.add(this.context.getClassTheme());
            this.elem.classList.add(this.context.getClassTextColor());
            this.render();
        }

        compass():string {
            return `<div class="ds_compass"><a href="${this.context.compassUrl()}"></a></div>`;
        }

        logo():string {
            return `<h3 class="ds_logo"><a href="${this.context.baseUrl()}"><span class="ds_hide">${$.i18n().t('header.logo.title')}</span></a></h3>`;
        }

        btnConnect():string {
            return `<span class="ds_connect"><a class="ds_banner-btn">${$.i18n().t('header.connect.label')}</a></span>`;
        }

        trigram():string {
            return `<span class="ds_trigram"><span class="ds_trigram_content"><div class="ds_txt">AAA</div></span></span>`;
        }

        nav():string {
            if (!this.context.settings.hasnavigation) return;
            return (new Nav(this.context, this._data)).render();
        }

        render():string {
            this.elem.innerHTML = Mustache.render(`
                    <div class="ds_center" style="width: 210%;">
                        <div class="ds_inner" style="padding: 0px 55px;">
                            ${this.logo()}
                            <div class="ds_right">
                            ${this.compass()}
                            ${this.btnConnect()}
                            ${this.nav()}
                            ${this.trigram()}
                            </div>
                        </div>
                    </div>
            `, this);

            return this.elem;
        }
    }
}


