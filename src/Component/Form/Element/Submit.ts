/// <reference path="../../../../bower_components/polymer-ts/polymer-ts.d.ts"/>
/// <reference path="../../../Element/AbstractPolymerElement.ts" />

namespace Com.Theeds.Component.Form.Element {

    import AbstractPolymerElement = Com.Theeds.Element.AbstractPolymerElement;

    @component('submit-element')
    @extend("input")
    export class Submit extends AbstractPolymerElement {
        @property({type: String, reflectToAttribute: true})
            type:string = 'submit';

        @property({type: String, reflectToAttribute: true})
            name:string;

        @property({type: String})
            value:string;

        @property({type: String, reflectToAttribute: true})
            class:string = 'btn btn-default';

        constructor(context:any, data:any) {
            super(data);
        }
    }
}


Com.Theeds.Component.Form.Element.Submit.register();

