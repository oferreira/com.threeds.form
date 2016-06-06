/// <reference path="../../../../bower_components/polymer-ts/polymer-ts.d.ts"/>
/// <reference path="../../../Component/Form/Element/Field.ts" />
/// <reference path="../../../Component/Form/Element/FieldGroup.ts" />
/// <reference path="../../../Component/Form/Element/Submit.ts" />
/// <reference path="../../../Element/AbstractPolymerElement.ts" />
/// <reference path="../../../Component/Form/Element/Input.ts" />

namespace Com.Threeds.Component.Form.Element {

    import AbstractPolymerElement = Com.Threeds.Element.AbstractPolymerElement;
    import SubmitElement = Com.Threeds.Component.Form.Element.Submit;

    @component('step-element')
    @extend("fieldset")
    export class Step extends AbstractPolymerElement {
        constructor(context:any, data:any) {
            if (data.success == undefined && !data.success && data.result.config !== undefined) return;
            super(data);
            this.classList.add('ds-form-fieldset');

            this.appendChild(Input.create(context, {
                name: "op",
                type: "hidden",
                value: data.result.nextAction
            }));

            for (let k in data.result.config) {
                if (data.result.config[k].type.toLowerCase() == 'hidden') {
                    this.appendChild(Input.create(context, data.result.config[k]));
                } else if (data.result.config[k].type.toLowerCase() == 'fieldgroup') {
                    this.appendChild(FieldGroup.create(context, data.result.config[k]));
                } else {
                    this.appendChild(Field.create(context, data.result.config[k]));
                }
            }


            let container:HTMLElement = document.createElement('div');
            container.classList.add('ds-form-group-element');
            container.classList.add('ds-border');

            let options:Object = {value:context.settings.nextLabel};
            if(context._currentPosition == (Object.keys(context.settings.steps).length -1)){
                options.value = context.settings.action.label;
            }

            this.appendChild(SubmitElement.create(context, options));
        }

        public get settings():any {
            return this.context.settings;
        }
    }

}

Com.Threeds.Component.Form.Element.Step.register();

