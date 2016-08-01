/// <reference path="../../../../bower_components/polymer-ts/polymer-ts.d.ts"/>

namespace Com.Threeds.Component.Header.Element {

    export class Nav {
        context:any;
        links:any = [];

        constructor(context:any, data:any) {
            this.context = context;
            this.hydrateLinks();
        }

        hydrateLinks():void {
            let links:any = $.i18n().t('header.nav.links');
            if (typeof links == 'object') {
                for (var i = 0; i < links.length; i++) {
                    if (links[i].tags.indexOf(this.context.settings.website) != -1) {
                        this.links.push(links[i]);
                    }
                }
            }
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


