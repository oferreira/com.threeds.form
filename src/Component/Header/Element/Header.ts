/// <reference path="../../../../bower_components/polymer-ts/polymer-ts.d.ts"/>

namespace Com.Threeds.Component.Header.Element {

    import AbstractPolymerElement = Com.Threeds.Element.AbstractPolymerElement;

    @component('header-element')
    @extend("div")
    export class Header extends AbstractPolymerElement {
        context:any;

        constructor(context:any, data:any) {
            super(data);
            this.context = context;
            this.classList.add('ds-header')
        }

        public static create(context:any, data:any) {

        }
    }

}

Com.Threeds.Component.Header.Element.Header.register();

