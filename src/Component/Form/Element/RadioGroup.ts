/// <reference path="../../../../bower_components/polymer-ts/polymer-ts.d.ts"/>
/// <reference path="../../../Component/Form/Element/Radio.ts" />
/// <reference path="../../../Element/AbstractPolymerElement.ts" />

namespace Com.Threeds.Component.Form.Element {

    import AbstractPolymerElement = Com.Threeds.Element.AbstractPolymerElement;

    @component('group-radio-element')
    @extend("div")
    export class RadioGroup extends AbstractPolymerElement {

        constructor(context:any, data:any) {
            super(data);
            this.classList.add('ds-form-group');

            let container:HTMLDivElement = document.createElement('div');
            container.classList.add('ds-form-group-element');

            let label:HTMLLabelElement = document.createElement('label');
            label.className = 'form-control-label-group form-control-label';
            label.innerHTML = data.label;
            this.appendChild(label);


            for (let i in data.options) {
                if (data.options[i].label == '' || data.options[i].value == '') continue;

                let options:any = {
                    id: `${data.fieldName}-${data.options[i].value}`,
                    fieldName: data.fieldName,
                    label: data.options[i].label,
                    value: data.options[i].value
                };

                container.appendChild(this.radio(context, options))
            }

            this.appendChild(container);
        }

        radio(context:any, data:any):HTMLDivElement {
            let container:HTMLDivElement = document.createElement('div');
            container.classList.add('ds-form-radio');


            container.appendChild(Radio.create(this, data));

            let label:HTMLLabelElement = document.createElement('label');
            label.innerHTML = data.label;
            label.htmlFor = data.id;
            container.appendChild(label);

            return container;

        }

    }
}

Com.Threeds.Component.Form.Element.RadioGroup.register();