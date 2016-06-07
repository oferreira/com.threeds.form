/// <reference path="../../../../bower_components/polymer-ts/polymer-ts.d.ts"/>
/// <reference path="../../../Element/AbstractPolymerElement.ts" />

namespace Com.Threeds.Component.Form.Element {

    import AbstractPolymerElement = Com.Threeds.Element.AbstractPolymerElement;

    @component('submit-element')
    @extend("input")
    export class Submit extends AbstractPolymerElement {
        @property({type: String, reflectToAttribute: true})
            type:string = 'submit';

        @property({type: String, reflectToAttribute: true})
            name:string;

        @property({type: String, reflectToAttribute: true})
            value:string;

        @property({type: String, reflectToAttribute: true})
            class:string = 'ds-btn ';

        constructor(context:any, data:any) {
            super(data);
            if (typeof data.value != undefined) this.value = data.value;
            if (typeof data.class != undefined) this.class +=  data.class;
        }
    }
}


Com.Threeds.Component.Form.Element.Submit.register();

