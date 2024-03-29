/// <reference path="../../../../bower_components/polymer-ts/polymer-ts.d.ts"/>
/// <reference path="../../../Component/Form/Element/Input.ts" />
/// <reference path="../../../Component/Form/Element/Textarea.ts" />
/// <reference path="../../../Component/Form/Element/Checkbox.ts" />
/// <reference path="../../../Component/Form/Element/Select.ts" />
/// <reference path="../../../Component/Form/Element/FieldGroup.ts" />
/// <reference path="../../../Component/Form/Element/RadioGroup.ts" />
/// <reference path="../../../Element/AbstractPolymerElement.ts" />
/// <reference path="../../../Validator/Email.ts" />
/// <reference path="../../../Validator/Regex.ts" />

namespace Com.Threeds.Component.Form.Element {

    import AbstractPolymerElement = Com.Threeds.Element.AbstractPolymerElement;
    import FieldGroup = Com.Threeds.Component.Form.Element.FieldGroup;

    @component('field-element')
    @extend("div")
    @template(`<template is="dom-if" if="{{error}}"><span class="ds-form-error">{{error}}</span></template>`)
    export class Field extends AbstractPolymerElement {

        @property({type: String})
            error:string;

        data:any;
        public autoComplete:any;

        constructor(context:any, data:any) {
            super(data);
            this.hydrateValidators(data);

            this.data = data;
            this.classList.add('ds-form-group')
            if (typeof data.required != 'undefined' && typeof data.required) {
                this.classList.add('ds-field-required');
            }

            this.classList.add(`ds-form-${data.type}`);

            if (typeof data.fieldclass != 'undefined' ) {
                for (var i = 0; i < data.fieldclass.length; i++) {
                   this.classList.add(data.fieldclass[i]);
                }
            }

            if (data.fieldName == 'optin') {
                this.classList.add(`ds-form-switch`);
                this.classList.add(`ds-no-border`);
            }

            this.classList.add(`field-${data.fieldName}`);
            this.append(context, data);
        }

        label(context:any, data:any):HTMLLabelElement {
            if (!context.settings.display.label && data.type.toLowerCase() != 'checkbox') return;

            let label:HTMLLabelElement = document.createElement('label');
            label.htmlFor = data.fieldName;

            if (data.type != 'checkbox') {
                label.className = 'form-label form-control-label';
            } else {
                label.className = 'form-control-label';
            }

            label.appendChild(document.createTextNode(this.data.label));
            label.appendChild(document.createTextNode(context.settings.styling.label.suffixe));

            if (typeof data.required != 'undefined' && data.required && context.settings.styling.label.mandatory != '') {
                let mandatory = document.createElement('span');
                mandatory.setAttribute('class', 'mandatory');
                mandatory.innerHTML = context.settings.styling.label.mandatory;
                label.appendChild(mandatory);
            }


            return label;
        }

        container(context:any, data:any):HTMLDivElement {
            let type:string = data.type.toLowerCase();
            let container:HTMLDivElement = document.createElement('div');
            //container.classList.add(context.settings.display.label ? 'col-sm-10' : 'col-sm-12');

            return container;
        }


        append(context:any, data:any):void {
            let type:string = data.type.toLowerCase();
            let container:HTMLDivElement = this.container(context, data);
            let label:HTMLLabelElement = this.label(context, data);

            if (type != 'checkbox' && context.settings.display.label) {
                this.appendChild(label);
            }

            switch (type) {
                case 'fieldgroup':
                    this.appendChild(FieldGroup.create(context, data));
                    break;
                case 'select':
                    container.appendChild(Select.create(context, data));
                    this.appendChild(container);
                    break;
                case 'checkbox':
                    data.class =  'ds-form-switch-checkbox';
                    this.appendChild(Checkbox.create(context, data));
                    label.classList.add('ds-form-switch-label');
                    this.appendChild(label);
                    break;
                case 'text':
                    container.appendChild(Input.create(context, data));
                    this.appendChild(container);

                    break;
                case 'textarea':
                    container.appendChild(Textarea.create(context, data));
                    this.appendChild(container);
                    break;
                default :
                    console.log('<!> field no defined');
                    console.log(data);
                    break;
            }

            this.fire('field-create', this);
        }

        hydrateValidators(data:any) {
            let validators:string[] = (data.validators == undefined ? [] : data.validators);

            if(typeof data.regex != "undefined") validators.push(<any>new Com.Threeds.Validator.Regex(data))
            if (data.fieldName == 'email' && data.type != 'hidden') validators.push('Com.Threeds.Validator.Email');
            if (data.required) validators.push('Com.Threeds.Validator.Require');

            if (validators.length) data.validators = validators;
        }

        @listen("error")
        handleError(e:Event, detail:string) {
            this.displayError(detail);
        }

        displayError(detail:string) {
            this.error = detail;

            if (this.error == undefined || this.error == '') {
                this.classList.remove('has-error');
            } else {
                this.classList.add('has-error');
            }
        }

        @listen('field-hide')
        handleHide(e:Event, status:boolean) {
            if (status) {
                this.classList.add('hide');
            } else {
                this.classList.remove('hide');
            }
        }

    }

}

Com.Threeds.Component.Form.Element.Field.register();