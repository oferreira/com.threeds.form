/// <reference path="../../Plugin/AbstractPlugin.ts" />

namespace Com.Theeds.Core.Ajax {

    import AbstractPlugin = Com.Theeds.Plugin.AbstractPlugin;

    export class AutoComplete extends AbstractPlugin {
        public settings:any = {
            api: {
                adapter: 'Com.Theeds.Service.Adapter.Neolane',
                serviceName: 'customerAutocomplete'
            },
            select: function (data){

            }
        };

        public elem:any;


        constructor(elem:any, options:Object) {
            super(elem, options);
            this.elem = elem;
            this.settings = $.extend({}, this.settings, options);

            this.service('api')[this.settings.api.serviceName](this, this.settings);
        }

        render(conext:any, data:any) {
            console.log('render -->_>_>_>_>_>_>_>_>_');
            console.log(data);
        }


    }
}
