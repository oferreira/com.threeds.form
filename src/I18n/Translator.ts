/// <reference path="../../typings/jquery/jquery.d.ts" />
/// <reference path="../Core/Bootstrap.ts" />

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
            return Object.find(eval(this.adapter), `${this.lang}.${key}`);
        }
    }

    $.i18n = function () {
        return Com.Threeds.I18n.Translator.instance;
    };
}