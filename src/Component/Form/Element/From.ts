/// <reference path="../../../../bower_components/polymer-ts/polymer-ts.d.ts"/>
/// <reference path="../../../Component/Form/Element/Step.ts" />
/// <reference path="../../../Element/AbstractPolymerElement.ts" />
/// <reference path="../../../Component/Form/Element/Behavior/Neolane/FromBehavior.ts" />

namespace Com.Theeds.Component.Form.Element {

    import AbstractPolymerElement = Com.Theeds.Element.AbstractPolymerElement;
    import StepElement = Com.Theeds.Component.Form.Element.Step;

    export interface Map<T> {
        [K: string]: T;
    }

    export interface From {
        behaviors: any;
    }

    @component('form-element')
    @extend("form")
    @behavior(Com.Theeds.Component.Form.Element.Behavior.Neolane.FromBehavior)
    export class From extends AbstractPolymerElement {
        context:any;

        @property({type: String, reflectToAttribute: true})
            id:string;

        @property({type: String, reflectToAttribute: true})
            name:string;

        @property({type: String, reflectToAttribute: true})
            method:string;

        @property({type: String, reflectToAttribute: true})
            action:string;

        public _errors:Object[] = [{workPhone: "invalid"}, {custom2: "missing"}, {custom4: "missing"}];

        constructor(context:any, data:any) {
            super(data);
            this.context = context;
            this.dispatch(data);
        }

        public get settings():any {
            return this.context.settings;
        }

        public get errors():Object[] {

            return <Array> this._errors;
        }

        public set errors(value:Object[]) {
            this._errors = value;

            console.log(value);

            for (let i = 0; i < ((<any>Polymer.dom(this)).node.length); i++) {
                if (typeof  (<any>Polymer.dom(this)).node[i].displayError === 'function') {
                    for (var k in this._errors) {
                        if ((<any>Polymer.dom(this)).node[i].name == k) {
                            (<any>Polymer.dom(this)).node[i].displayError(this._errors[k]);
                        }
                    }
                }
            }

            console.log(this._errors);
        }

        public valid() {
            this._errors = [];

            for (let i = 0; i < ((<any>Polymer.dom(this)).node.length); i++) {
                if (typeof  (<any>Polymer.dom(this)).node[i].isValid === 'function') {
                    if ((<any>Polymer.dom(this)).node[i].isValid() == true) this._errors[(<any>Polymer.dom(this)).node[i].name] = (<any>Polymer.dom(this)).node[i].errorMessage;
                }
            }
        }

        dispatch(data:any) {
            if (typeof this.behaviors[0] != undefined && typeof this.behaviors[0].action == 'function') {
                this.behaviors[0].action(this, data);
            } else {
                console.log('Uncaught TypeError: this.behaviors[0].action is not a function');
            }
        }

        clear() {
            while (Polymer.dom(this).firstChild) Polymer.dom(this).removeChild(Polymer.dom(this).firstChild);
            this.innerHTML = '';
        }

        update(data:any) {
            this.clear();
            this.appendChild(StepElement.create(this.context, data));
        }

        append(data:any):From {

            for (let i = 0; i < ((<any>Polymer.dom(this)).node.length); i++) {
                if (typeof  (<any>Polymer.dom(this)).node[i].name != 'undefined' && Polymer.dom(this).node[i].name == data.name) {
                    Polymer.dom(this).node[i].value = data.value;
                    return this;
                }
            }

            this.insertBefore(Input.create(this, data), this.firstChild);

            return this;
        }

        success(data:any) {
            this.clear();
            this.innerHTML = `<h1>${data.title}</h1>${data.content}`;
        }

        warning(message:string) {
            this.clear();
            this.innerHTML = message;
        }

        redirect(url:string) {
            window.location = <any>url;
        }

        static serialize(form:any):string {
            if (!form || form.nodeName !== "FORM") {
                return;
            }

            var i:number, j:number, dict:Map<string> = {};
            for (i = form.elements.length - 1; i >= 0; i = i - 1) {
                if (form.elements[i].name === "" || typeof form.elements[i].name == 'undefined') {
                    continue;
                }

                switch (form.elements[i].nodeName) {
                    case 'INPUT':
                        switch (form.elements[i].type) {
                            case 'text':
                            case 'hidden':
                            case 'password':
                            case 'button':
                            case 'reset':
                            case 'submit':
                                dict[form.elements[i].name] = form.elements[i].value;
                                break;
                            case 'checkbox':
                            case 'radio':
                                if (form.elements[i].checked) {
                                    dict[form.elements[i].name] = encodeURIComponent(form.elements[i].value);
                                }
                                break;
                            case 'file':
                                break;
                        }
                        break;
                    case 'TEXTAREA':
                        dict[form.elements[i].name] = encodeURIComponent(form.elements[i].value);
                        break;
                    case 'SELECT':
                        switch (form.elements[i].type) {
                            case 'select-one':
                                dict[form.elements[i].name] = encodeURIComponent(form.elements[i].value);
                                break;
                            case 'select-multiple':
                                for (j = form.elements[i].options.length - 1; j >= 0; j = j - 1) {
                                    if (form.elements[i].options[j].selected) {
                                        dict[form.elements[i].name] = encodeURIComponent(form.elements[i].options[j].value);
                                    }
                                }
                                break;
                        }
                        break;
                    case 'BUTTON':
                        switch (form.elements[i].type) {
                            case 'reset':
                            case 'submit':
                            case 'button':
                                dict[form.elements[i].name] = encodeURIComponent(form.elements[i].value);
                                break;
                        }
                        break;
                }
            }

            return dict;
        }
    }
}

Com.Theeds.Component.Form.Element.From.register();

