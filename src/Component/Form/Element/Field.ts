/// <reference path="../../../../bower_components/polymer-ts/polymer-ts.d.ts"/>
/// <reference path="../../../Component/Form/Element/Input.ts" />
/// <reference path="../../../Component/Form/Element/Textarea.ts" />
/// <reference path="../../../Component/Form/Element/Checkbox.ts" />
/// <reference path="../../../Component/Form/Element/Radio.ts" />
/// <reference path="../../../Component/Form/Element/Select.ts" />
/// <reference path="../../../Component/Form/Element/FieldGroup.ts" />
/// <reference path="../../../Element/AbstractPolymerElement.ts" />
/// <reference path="../../../Validator/Email.ts" />
/// <reference path="../../../Validator/Email.ts" />

namespace Com.Threeds.Component.Form.Element {

    import AbstractPolymerElement = Com.Threeds.Element.AbstractPolymerElement;

    @component('field-element')
    @extend("div")
    @template(`<template is="dom-if" if="{{error}}"><div class="alert alert-danger">{{error}}</div></template>`)
    export class Field extends AbstractPolymerElement {

        @property({type: String})
            error:string;

        data:any;

        constructor(context:any, data:any) {
            this.hydrateValidators(data);
            super(data);
            this.data = data;
            this.classList.add('ds-form-group-element')
            if (typeof data.required != 'undefined' && typeof data.required) {
                this.classList.add('ds-field-required');
            }
            this.classList.add(`field-${data.name}`);
            this.append(context, data);
        }

        label(context:any, data:Object):HTMLLabelElement {
            if (!context.settings.display.label && data.type.toLowerCase() != 'checkbox' && data.type.toLowerCase() != 'radio') return;

            let label:HTMLLabelElement = document.createElement('label');
            label.htmlFor = data.name;

            if (data.type != 'checkbox' && data.type != 'radio') {
                label.className = 'col-sm-2 form-control-label';
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

        container(context:any, data:Object):HTMLDivElement {
            let type:string = data.type.toLowerCase();
            let container:HTMLDivElement = document.createElement('div');
            container.classList.add(context.settings.display.label ? 'col-sm-10' : 'col-sm-12');

            return container;
        }


        append(context:any, data:Object):void {
            let type:string = data.type.toLowerCase();
            let container:HTMLDivElement = this.container(context, data);
            let label:HTMLLabelElement = this.label(context, data);

            if (type != 'checkbox' && type != 'radio' && context.settings.display.label) {
                this.appendChild(label);
            }

            switch (type) {
                case 'fieldgroup':
                    this.appendChild(FieldGroupElement.create(context, data));
                    break;
                case 'select':
                    container.appendChild(Select.create(context, data));
                    this.appendChild(container);
                    break;
                case 'checkbox':
                    label.insertBefore(Checkbox.create(context, data), label.firstChild);
                    container.appendChild(label);
                    container.classList.add('checkbox');
                    this.appendChild(container);
                    break;
                case 'radio':
                    label.insertBefore(Radio.create(context, data), label.firstChild);
                    container.appendChild(label);
                    container.classList.add('radio');
                    this.appendChild(container);
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

        hydrateValidators(data:Object) {
            let validators:string[] = (data.validators == undefined ? [] : data.validators);

            if (data.name == 'email' && data.type != 'hidden') validators.push('Com.Threeds.Validator.Email');
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
        handleHide(e:Event, status:string) {
            if (status) {
                this.classList.remove('hide');
            } else {
                this.classList.add('hide');
            }
        }

    }

}

Com.Threeds.Component.Form.Element.Field.register();