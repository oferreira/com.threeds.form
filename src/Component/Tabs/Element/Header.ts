/// <reference path="../../../Element/AbstractPolymerElement.ts" />

namespace Com.Threeds.Component.Tabs.Element {

    import AbstractPolymerElement = Com.Threeds.Element.AbstractPolymerElement;

    @component('tabs-header-element')
    @extend("div")
    export class Header extends AbstractPolymerElement {

        public settings:any = {
            data: {
                0: {
                    title: 'tab 1',
                },
                1: {
                    title: 'tab 2',
                }
            }
        };

        constructor(context:any, data:any) {
            super(data);

            let items:HTMLUListElement = document.createElement('ul');
            items.classList.add('ds-tabs-header');

            let item:HTMLLIElement;
            let link:HTMLAnchorElement;
            for (let k in this.settings.data) {
                link = document.createElement('a');
                link.innerHTML = this.settings.data[k].title;
                link.setAttribute("data-index", k);
                link.href = `#step-${k}`;

                link.onclick = function(e:any){
                    alert('event click disabled ...');
                    e.preventDefault();
                };
                item = document.createElement('li');
                item.appendChild(link);
                items.appendChild(item);
            }

            this.appendChild(items);
        }

    }
}

Com.Threeds.Component.Tabs.Element.Header.register();

