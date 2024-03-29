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

            for (let i = data.result.config.length; i >= 0; --i) {
                if(typeof data.result.config[i] != 'undefined' && data.result.config[i].fieldName != 'optin'){
                    data.result.config[i].lastElement = true;
                    break;
                }
            }

            for (let i = 0; i <= data.result.config.length; i++) {
                if(typeof data.result.config[i] != 'undefined' && data.result.config[i].type != 'hidden'){
                    data.result.config[i].firstElement = true;
                    break;
                }
            }


            let container:HTMLElement = document.createElement('div');
            container.classList.add('ds-form-fieldset-content');

            let isRounded:boolean = false;
            for (let k in data.result.config) {
                if(data.result.config[k].fieldName == 'optin') continue;
                if (typeof data.result.config[k].firstElement != 'undefined' && data.result.config[k].firstElement) isRounded=true

                if (data.result.config[k].type.toLowerCase() == 'hidden') {
                    this.appendChild(Input.create(context, data.result.config[k]));
                } else if (data.result.config[k].type.toLowerCase() == 'radio') {
                    (isRounded ? container: this).appendChild(RadioGroup.create(context, data.result.config[k]));
                } else if (data.result.config[k].type.toLowerCase() == 'fieldgroup') {
                    (isRounded ? container: this).appendChild(FieldGroup.create(context, data.result.config[k]));
                } else {
                    (isRounded ? container: this).appendChild(Field.create(context, data.result.config[k]));
                }

                if (typeof data.result.config[k].lastElement != 'undefined' && data.result.config[k].lastElement) isRounded=false
            }

            this.appendChild(container);

            for (let k in data.result.config) {
                if(data.result.config[k].fieldName == 'optin') {
                    this.appendChild(Field.create(context, data.result.config[k]));
                }
            }
            
            this.appendChild(this.submit(context));
        }

        submit(context:any):HTMLElement {
            let container:HTMLElement = document.createElement('div');
            container.classList.add('ds-form-group');
            container.classList.add('ds-no-border');
            container.classList.add('ds-txt-center');

            let options:any = {};

            if(context.settings.translate.elements.submit[(Object.keys(context._steps).length -1)] != undefined){
                options.value = context.settings.translate.elements.submit[(Object.keys(context._steps).length -1)].label;
            } else {
                options.value = context.settings.translate.elements.submit.label;
            }

            if(context.settings.styling.button.next[(Object.keys(context._steps).length -1)] != undefined){
                options.class = context.settings.styling.button.next[(Object.keys(context._steps).length -1)].class;
            } else {
                options.class = context.settings.styling.button.next.class;
            }

            container.appendChild(SubmitElement.create(context, options));
            return container;
        }
    }

}

Com.Threeds.Component.Form.Element.Step.register();

