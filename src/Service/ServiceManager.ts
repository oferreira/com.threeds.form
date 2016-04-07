/// <reference path="../../typings/jquery/jquery.d.ts" />

namespace Com.Theeds.Service {

    export class ServiceManager {
        instance:ServiceManager;

        constructor() {
            if(typeof ServiceManager.prototype.instance === 'undefined'){

            }
        }

        public get(name:String){
            return eval('new Service.' + name.charAt(0).toUpperCase() + name.slice(1));
         }
    }

    $.fn.service = function (name:String) {
        return (new ServiceManager()).get(name);
    };
}

