/// <reference path="../../../../bower_components/polymer-ts/polymer-ts.d.ts"/>
/// <reference path="../../../Element/AbstractPolymerElement.ts" />

namespace Com.Threeds.Component.Form.Element {

    import AbstractPolymerElement = Com.Threeds.Element.AbstractPolymerElement;

    @component('option-element')
    @extend("option")
    export class Option extends AbstractPolymerElement {
        @property({type: String, reflectToAttribute: true})
            value:string;

        @property({type: Boolean, reflectToAttribute: true})
            selected:boolean;

        @property({type: Boolean, reflectToAttribute: true})
            disabled:boolean;

        constructor(context:any, data:any) {
            super(data);
            if (typeof data.label != 'undefined') this.label = data.label;
            if (typeof data.value != 'undefined') this.value = data.value;
            if (typeof data.selected != 'undefined') this.selected = data.selected;
            if (typeof data.disabled != 'undefined') this.disabled = data.disabled;
        }

        @observe("label")
        labelChanged(newValue:string, oldValue:string) {
            this.innerHTML = newValue;
        }
    }
}

Com.Threeds.Component.Form.Element.Option.register();
