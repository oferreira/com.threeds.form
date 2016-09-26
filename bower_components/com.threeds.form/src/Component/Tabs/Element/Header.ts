/// <reference path="../../../Element/AbstractPolymerElement.ts" />

namespace Com.Threeds.Component.Tabs.Element {

    import AbstractPolymerElement = Com.Threeds.Element.AbstractPolymerElement;

    @component('tabs-header-element')
    @extend("div")
    export class Header extends AbstractPolymerElement {

        public settings:any = {
            /*data: {
                0: {
                    name: 'tab 1',
                },
                1: {
                    name: 'tab 2',
                }
            }*/
        };

        constructor(context:any, options:any) {
            super();
            this.settings = $.extend({}, this.settings, options);

            let items:HTMLUListElement = document.createElement('ul');
            items.classList.add('ds-tabs-header');

            let item:HTMLLIElement;
            let link:HTMLAnchorElement;
            for (let k in this.settings.data) {
                link = document.createElement('a');
                link.innerHTML = this.settings.data[k].name;
                link.setAttribute("data-index", k);
                link.href = `#step-${k}`;
                link.onclick = function(e:any){
                    e.preventDefault();
                };
                item = document.createElement('li');
                item.appendChild(link);
                items.appendChild(item);
            }



            //step-0-active
            this.appendChild(items);
        }

    }
}

Com.Threeds.Component.Tabs.Element.Header.register();

