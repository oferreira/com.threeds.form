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
                fieldName: "op",
                type: "hidden",
                value: data.result.nextAction
            }));


            for (let i = data.result.config.length; i >= 0; i--) {
                if(typeof data.result.config[i] != 'undefined' && data.result.config[i].fieldName != 'optin'){
                    data.result.config[i].fieldclass.push('ds-form-group-element-last');
                    break;
                }
            }

            if (typeof data.result.config[0] != 'undefined'){

                data.result.config[0].fieldclass.push('ds-form-group-element-first');
                console.log(data.result.config[0]);
            }

            for (let k in data.result.config) {
                if (data.result.config[k].type.toLowerCase() == 'hidden') {
                    this.appendChild(Input.create(context, data.result.config[k]));
                } else if (data.result.config[k].type.toLowerCase() == 'radio') {
                    this.appendChild(RadioGroup.create(context, data.result.config[k]));
                } else if (data.result.config[k].type.toLowerCase() == 'fieldgroup') {
                    this.appendChild(FieldGroup.create(context, data.result.config[k]));
                } else {
                    this.appendChild(Field.create(context, data.result.config[k]));
                }
            }


            let container:HTMLElement = document.createElement('div');
            container.classList.add('ds-form-group');
            container.classList.add('ds-no-border');
            container.classList.add('ds-txt-center');

            let options:Object = {value:context.settings.nextLabel, class:'ds-btn-circle'};
            if(context._currentPosition == (Object.keys(context.settings.steps).length -1)){
                options.value = context.settings.action.label;
                options.class = 'ds-btn-scream';
            }
            container.appendChild(SubmitElement.create(context, options));

            this.appendChild(container);
        }

        public get settings():any {
            return this.context.settings;
        }
    }

}

Com.Threeds.Component.Form.Element.Step.register();

