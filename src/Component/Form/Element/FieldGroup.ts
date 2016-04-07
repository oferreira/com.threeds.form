/// <reference path="../../../../bower_components/polymer-ts/polymer-ts.d.ts"/>
/// <reference path="../../../Component/Form/Element/Field.ts" />
/// <reference path="../../../Component/Form/Element/Checkbox.ts" />
/// <reference path="../../../Component/Form/Element/Select.ts" />
/// <reference path="../../../Element/AbstractPolymerElement.ts" />

namespace Com.Theeds.Component.Form.Element {

    import AbstractPolymerElement = Com.Theeds.Element.AbstractPolymerElement;

    @component('field-group-element')
    @extend("fieldset")
    @template('<template is="dom-if" if="{{label}}"><legend>{{label}}</legend></template>')
    export class FieldGroup extends AbstractPolymerElement {

        label:string;

        constructor(context:any, data:any) {
            super(data);
            this.classList.add('form-group');
            if (data.label != 'undefined') this.label = data.label;
            for (let i in data.items) {
                this.appendChild(Field.create(context, data.items[i]));
            }
        }
    }


}

Com.Theeds.Component.Form.Element.FieldGroup.register();