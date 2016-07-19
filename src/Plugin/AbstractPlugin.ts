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
            let service = (<any>Object.find(this.settings,name)).adapter;
            return eval('new ' + service);
        }
    }
}

interface Object {
    find(o:any, s:string):any;
}


Object.find = function (o:any, s:string):any {
    s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
    s = s.replace(/^\./, '');           // strip a leading dot
    var a = s.split('.');
    for (var i = 0, n = a.length; i < n; ++i) {
        var k = a[i];
        if (k in o) {
            o = o[k];
        } else {
            return;
        }
    }
    return o;
}