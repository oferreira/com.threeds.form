/// <reference path="../../typings/jquery/jquery.d.ts" />


interface Document {
    registerElement(tagName:string, implementation:any):any;
}

interface JQuery {
    always(data?:any, options?:any): JQuery;
    done(data?:any, options?:any): JQuery;
    fail(data?:any, options?:any): JQuery;
    progress(data?:any, options?:any): JQuery;
}

namespace Com.Theeds.Plugin {

    export class AbstractPlugin {

        public elem:any;
        public settings:any = {};

        constructor(elem:any, options:Object) {
            this.elem = elem;
            this.settings = $.extend({}, this.settings, options);
        }

        render(type:string, data:any):void {
            return eval(`new ${this.settings.render.adapter}()`)[type](this, data);
        }

        service(name:string):any {
            return eval('new ' + this.settings[name].adapter);
        }
    }
}

