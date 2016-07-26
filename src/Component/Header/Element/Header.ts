/// <reference path="../../../../bower_components/polymer-ts/polymer-ts.d.ts"/>

namespace Com.Threeds.Component.Header.Element {

    export class Header {
        context:any;
        links:any = [];

        constructor(context:any, data:any) {
            this.context = context;

            this.links.push({
                "label": $.i18n().t('footer.legal-information'),
                "url": $.i18n().url('footer.legal-information', this.context.baseUrl()),
                "pipe": true
            });

            this.links.push({
                "label": $.i18n().t('footer.terms-of-use'),
                "url": $.i18n().url('footer.terms-of-use', this.context.baseUrl()),
                "pipe": true
            });

            this.links.push({
                "label": $.i18n().t('footer.privacy-policy'),
                "url": $.i18n().url('footer.privacy-policy', this.context.baseUrl()),
                "pipe": true
            });

            this.links.push({
                "label": $.i18n().t('footer.piracy'),
                "url": $.i18n().url('footer.piracy', this.context.baseUrl())
            });
        }

        render():string {
            let date:Date = new Date();
            let copyright:string = $.i18n().t('footer.copyright');
            copyright = copyright.replace(/\{\{Y\}\}/gi, date.getFullYear());

            return Mustache.render(`
                <div class="ds ds_footer ${this.context.getClassTheme()} ${this.context.getClassTextColor()}">
                    <div class="ds_center" style="width: 210%;">
                        <div class="ds_flinks">
                            <p>
                                {{#links}}
                                    <span><a href="{{url}}" title="{{label}}"><span>{{label}}</span></a></span>
                                    {{#pipe}}<span class="ds_pipe"></span>{{/pipe}}
                                {{/links}}
                                <span class="ds_copy"><span>${copyright}</span></span>
                            </p>
                        </div>
                    </div>
                </div>
            `, this);
        }
    }
}


