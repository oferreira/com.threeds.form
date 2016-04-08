/// <reference path="../../../../bower_components/polymer-ts/polymer-ts.d.ts"/>
/// <reference path="../../../Component/Form/Element/Step.ts" />
/// <reference path="../../../Element/AbstractPolymerElement.ts" />
/// <reference path="../../../Component/Form/Element/Behavior/NeolaneFromBehavior.ts" />

namespace Com.Theeds.Component.Form.Element {

    import AbstractPolymerElement = Com.Theeds.Element.AbstractPolymerElement;
    import StepElement = Com.Theeds.Component.Form.Element.Step;

    export interface From {
        behaviors: any;
    }

    @component('form-element')
    @extend("form")
    @behavior(Com.Theeds.Component.Form.Element.NeolaneFromBehavior)
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

        public _errors:any = [];

        constructor(context:any, data:any) {
            super(data);
            this.context = context;
            this.dispatch(data);
        }

        public get errors():any {
            return this._errors;
        }

        public set errors(value:any) {
            this._errors = value;

            for (let i = 0; i < ((<any>Polymer.dom(this)).node.length); i++) {
                if (typeof  (<any>Polymer.dom(this)).node[i].displayError === 'function') {
                    for (var k in this._errors) {
                        if ((<any>Polymer.dom(this)).node[i].name == k) {
                            (<any>Polymer.dom(this)).node[i].displayError(this._errors[k]);
                        }
                    }
                }
            }
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

        success(data:any) {
            this.clear();
            this.innerHTML = `<h1>${data.title}</h1>${data.content}`;
        }

        warning(message:string) {
            this.clear();
            this.innerHTML = message;
        }

        redirect(url:any) {
            window.location = url;
        }
    }
}

Com.Theeds.Component.Form.Element.From.register();

