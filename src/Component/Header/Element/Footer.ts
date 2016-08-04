
namespace Com.Threeds.Component.Header.Element {

    export class Footer {
        context:any;
        links:any = [];

        constructor(context:any, data:any) {
            this.context = context;

            this.links = $.i18n().t('footer.links');
            for (var i = 0; i < (this.links.length-1); i++) {
                this.links[i]['pipe'] = true;
            }
        }

        render():string {
            let date:Date = new Date();
            let copyright:string = $.i18n().t('footer.copyright');
            copyright = copyright.replace(/\{\{Y\}\}/gi, <any>date.getFullYear());

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


