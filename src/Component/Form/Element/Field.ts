/// <reference path="../../../../bower_components/polymer-ts/polymer-ts.d.ts"/>
/// <reference path="../../../Component/Form/Element/Input.ts" />
/// <reference path="../../../Component/Form/Element/Checkbox.ts" />
/// <reference path="../../../Component/Form/Element/Select.ts" />
/// <reference path="../../../Element/AbstractPolymerElement.ts" />

namespace Com.Theeds.Component.Form.Element {

    import AbstractPolymerElement = Com.Theeds.Element.AbstractPolymerElement;

    @component('field-element')
    @extend("fieldset")
    @template(`<template is="dom-if" if="{{error}}"><div class="alert alert-danger">{{error}}</div></template><template is="dom-if" if="{{showLabel}}"><label  for="{{data.name}}">{{data.label}}</label></template>`)

    export class Field extends AbstractPolymerElement {

        @property({type: String})
            error:string;

        showLabel:boolean = true;

        data:any;

        constructor(context:any, data:any) {
            super(data);
            this.data = data, this.showLabel = context.settings.display.label;
            this.classList.add('form-group');

            if (data.type == 'select') this.appendChild(Select.create(context, data));
            if (data.type == 'checkbox') this.appendChild(Checkbox.create(context, data));
            if (data.type == 'text') this.appendChild(Input.create(context, data));
            if (data.type == 'hidden') this.classList.add('hide'), this.appendChild(Input.create(context, data));

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

    }

}

Com.Theeds.Component.Form.Element.Field.register();