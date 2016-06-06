/// <reference path="../../../typings/jquery/jquery.d.ts" />
/// <reference path="../../Plugin/AbstractPlugin.ts" />
/// <reference path="../../Component/Tabs/Element/Tab.ts" />
/// <reference path="../../Core/Bootstrap.ts" />

namespace Com.Threeds.Component.Tabs {

    import AbstractPlugin = Com.Threeds.Plugin.AbstractPlugin;
    import Tabs = Com.Threeds.Component.Tabs.Element.Tab;
    import Form = Com.Threeds.Component.Form.Element.Form;


    export class Plugin extends AbstractPlugin {
        public elem:any;
        public settings:any = {
            data: {
                0: {
                    title: 'tab 1',
                    content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt'
                },
                1: {
                    title: 'tab 2',
                    content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt'
                }
            }
        };

        constructor(elem:any, options:Object) {
            super(elem, options);
            this.elem = elem;
            this.settings = $.extend({}, this.settings, options);
            this.render();
        }

        render():void{
            console.log('-_>>_>_>_>_>_>_>_>');
            console.log(this.settings.data);
            //this.elem.append(Tabs.create(this, this.settings.data));
        }

    }

    $.namespace('threeds', {
        tabs: function (options:Object) {
            return new Plugin(this, options);
        }
    });
}
