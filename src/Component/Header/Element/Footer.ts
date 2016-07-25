/// <reference path="../../../../bower_components/polymer-ts/polymer-ts.d.ts"/>

namespace Com.Threeds.Component.Header.Element {

    export class Footer {
        context:any;
        links:any = [];

        constructor(context:any, data:any) {
            this.context = context;

            this.links.push({
                "label": this.context.t('legal-information'),
                "url": this.context.url('legal-information'),
                "pipe": true
            });

            this.links.push({
                "label": this.context.t('terms-of-use'),
                "url": this.context.url('terms-of-use'),
                "pipe": true
            });

            this.links.push({
                "label": this.context.t('privacy-policy'),
                "url": this.context.url('privacy-policy'),
                "pipe": true
            });

            this.links.push({
                "label": this.context.t('piracy'),
                "url": this.context.url('piracy')
            });
        }

        render():string {
            return Mustache.render(`
                <div class="ds ds_footer ds_dark ds_txtlight">
                    <div class="ds_center" style="width: 210%;">
                        <div class="ds_flinks">
                            <p>
                                {{#links}}
                                    <span><a href="{{url}}" title="{{label}}"><span>{{label}}</span></a></span>
                                    {{#pipe}}<span class="ds_pipe"></span>{{/pipe}}
                                {{/links}}
                                <span class="ds_copy"><span>${this.context.t('copyright')}</span></span>
                            </p>

                        </div>
                    </div>
                </div>
            `, this);
        }
    }


}


