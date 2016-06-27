/// <reference path="../../Plugin/AbstractPlugin.ts" />

namespace Com.Threeds.Core.Ajax {

    import AbstractPlugin = Com.Threeds.Plugin.AbstractPlugin;

    export class AutoComplete extends AbstractPlugin {
        context:any;

        public settings:any = {
            api: {
                adapter: 'Com.Threeds.Service.Adapter.Neolane',
                serviceName: 'customerAutocomplete'
            },
            select: function (data){

            }
        };

        public elem:any;


        constructor(context:any, elem:any, options:Object) {
            super(elem, options);
            this.context = context;
            this.elem = elem;
            this.settings = $.extend({}, this.settings, options);


            this.service('api')[this.settings.api.serviceName](this, this.settings);
        }

        render(context:any, data:any) {
        }


    }
}
