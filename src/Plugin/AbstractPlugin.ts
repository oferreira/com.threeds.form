/// <reference path="../../typings/jquery/jquery.d.ts" />
/// <reference path="../Core/Bootstrap.ts" />

namespace Com.Threeds.Plugin {

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
            return eval('new ' + Object.find(this.settings,name).adapter);
        }
    }
}