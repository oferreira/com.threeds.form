/// <reference path="../../../../bower_components/polymer-ts/polymer-ts.d.ts"/>
/// <reference path="../../../Component/Form/Element/Field.ts" />
/// <reference path="../../../Component/Form/Element/Checkbox.ts" />
/// <reference path="../../../Component/Form/Element/Select.ts" />
/// <reference path="../../../Element/AbstractPolymerElement.ts" />

namespace Com.Threeds.Component.Form.Element {

    import AbstractPolymerElement = Com.Threeds.Element.AbstractPolymerElement;

    @component('field-group-element')
    @extend("div")
    export class FieldGroup extends AbstractPolymerElement {

        constructor(context:any, data:any) {
            super(data);
            this.classList.add('ds-form-group-element');

            let label:HTMLLabelElement = document.createElement('label');
            label.className = 'col-sm-2 form-control-label';
            label.innerHTML = data.label;
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

Com.Threeds.Component.Form.Element.FieldGroup.register();