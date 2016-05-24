/// <reference path="../../../Element/AbstractPolymerElement.ts" />

namespace Com.Threeds.Component.Tabs.Element {

    import AbstractPolymerElement = Com.Threeds.Element.AbstractPolymerElement;

    @component('tab-element')
    @extend("div")
    export class Tab extends AbstractPolymerElement {
        constructor(context:any, data:any) {
            super(data);
            this.classList.add('ds-tab');
            this.innerHTML = data.content;
        }
    }
}

Com.Threeds.Component.Tabs.Element.Tab.register();

