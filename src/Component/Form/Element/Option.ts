/// <reference path="../../../../bower_components/polymer-ts/polymer-ts.d.ts"/>
/// <reference path="../../../Element/AbstractPolymerElement.ts" />

namespace Com.Threeds.Component.Form.Element {

    import AbstractPolymerElement = Com.Threeds.Element.AbstractPolymerElement;

    @component('option-element')
    @extend("option")
    export class Option extends AbstractPolymerElement {
        @property({type: String, reflectToAttribute: true})
            label:string;

        @property({type: String, reflectToAttribute: true})
            value:string;

        @property({type: Boolean, reflectToAttribute: true})
            selected:boolean;

        constructor(data:any) {
            super(data);
            if (data.label != undefined) this.label = data.label;
            if (data.value != undefined) this.value = data.value;
            if (data.selected != undefined) this.selected = data.selected;
        }

        @observe("label")
        labelChanged(newValue:string, oldValue:string) {
            this.innerText = newValue;
        }

        ready() {
        }
    }
}

Com.Threeds.Component.Form.Element.Option.register();
