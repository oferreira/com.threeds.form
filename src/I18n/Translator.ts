/// <reference path="../../typings/jquery/jquery.d.ts" />
/// <reference path="../Parameters.ts" />

namespace Com.Threeds.I18n {

    export class Translator {

        public static _instance:Translator;

        private lang:string;
        private adapter:string;

        constructor(options:any) {
            this.lang = options.lang;
            this.adapter = options.adapter;
        }

        public static get instance():Com.Threeds.I18n.Translator {
            if (Translator._instance == undefined) {
                Translator._instance = new Com.Threeds.I18n.Translator(Object.find(Com.Threeds._parameters, 'translator'));
            }

            return Translator._instance;
        }

        public t(key:string):string {
            return <string> Object.find(eval(this.adapter), `${this.lang}.${key}`);
        }
    }

    $.i18n = function () {
        return Com.Threeds.I18n.Translator.instance;
    };
}


Object.find = function (o:any, s:string):boolean {
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