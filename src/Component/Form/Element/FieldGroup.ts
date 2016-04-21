/// <reference path="../../../../bower_components/polymer-ts/polymer-ts.d.ts"/>
/// <reference path="../../../Component/Form/Element/Field.ts" />
/// <reference path="../../../Component/Form/Element/Checkbox.ts" />
/// <reference path="../../../Component/Form/Element/Select.ts" />
/// <reference path="../../../Element/AbstractPolymerElement.ts" />

namespace Com.Theeds.Component.Form.Element {

    import AbstractPolymerElement = Com.Theeds.Element.AbstractPolymerElement;

    @component('field-group-element')
    @extend("div")
    export class FieldGroup extends AbstractPolymerElement {

        constructor(context:any, data:any) {
            super(data);
            this.classList.add('form-group');
            this.classList.add('row');

            let label:HTMLLabelElement = document.createElement('label');
            label.className = 'col-sm-2 form-control-label';
            label.innerText = data.label;
            this.appendChild(label);

            let container:HTMLDivElement = document.createElement('div');
            container.classList.add('col-sm-10');

            for (let i in data.items) {
                container.appendChild(Field.create(context, data.items[i]));
            }

            this.appendChild(container);
        }
    }


}

Com.Theeds.Component.Form.Element.FieldGroup.register();