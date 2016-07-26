/// <reference path="../../../../bower_components/polymer-ts/polymer-ts.d.ts"/>

namespace Com.Threeds.Component.Header.Element {

    export class Nav {
        context:any;
        links:any = [];

        constructor(context:any, data:any) {
            this.context = context;
            this.links = $.i18n().t('footer.links');
        }

        render():string {
            return Mustache.render(`
                    <div class="ds_links">
                        <p>
                            {{#links}}
                                <span><a href="{{url}}" title="{{label}}"><span>{{label}}</span></a></span>
                            {{/links}}
                        </p>
                    </div>
            `, this);
        }
    }
}


