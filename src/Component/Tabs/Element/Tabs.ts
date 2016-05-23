/// <reference path="../../../Element/AbstractPolymerElement.ts" />
/// <reference path="../../../Component/Tabs/Element/Tab.ts" />
/// <reference path="../../../Component/Tabs/Element/Header.ts" />

namespace Com.Threeds.Component.Tabs.Element {

    import AbstractPolymerElement = Com.Threeds.Element.AbstractPolymerElement;
    import Tabs = Com.Threeds.Component.Tabs.Element.Tab;
    import Header = Com.Threeds.Component.Tabs.Element.Header;

    @component('tabs-element')
    @extend("div")
    export class Tabs extends AbstractPolymerElement {
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

        constructor(context:any, options:any, data:any) {
            super(data);
            this.settings = $.extend({}, this.settings, options);

            this.appendChild(Header.create(this, this.settings.data[k]));

            let container:HTMLDivElement = document.createElement('div');
            container.classList.add('ds-tabs-container');
            for (let k in this.settings.data) {
                container.appendChild(Tab.create(this, this.settings.data[k]));
            }

            this.appendChild(container);
        }
    }
}

Com.Threeds.Component.Tabs.Element.Tabs.register();

