/// <reference path="../../../../bower_components/polymer-ts/polymer-ts.d.ts"/>
/// <reference path="../../../Component/Form/Element/Step.ts" />
/// <reference path="../../../Element/AbstractPolymerElement.ts" />
/// <reference path="../../../Component/Form/Element/Behavior/Neolane/FormBehavior.ts" />

namespace Com.Threeds.Component.Form.Element {

    import AbstractPolymerElement = Com.Threeds.Element.AbstractPolymerElement;
    import StepElement = Com.Threeds.Component.Form.Element.Step;

    export interface Map<T> {
        [K: string]: T;
    }

    export interface Form {
        behaviors: any;
    }

    @component('form-element')
    @extend("form")
    @behavior(Com.Threeds.Component.Form.Element.Behavior.Neolane.FormBehavior)
    export class Form extends AbstractPolymerElement {
        context:any;

        @property({type: String, reflectToAttribute: true})
            id:string;

        @property({type: String, reflectToAttribute: true})
            name:string;

        @property({type: String, reflectToAttribute: true})
            method:string;

        @property({type: String, reflectToAttribute: true})
            action:string;

        private _currentPosition:number = 0;

        public get currentPosition():number {
            return this._currentPosition;
        }

        public set currentPosition(value:number) {
            if (typeof this.context.settings.hook.setCurrentPosition == 'function') {
                this.settings.hook.setCurrentPosition(this, value);
            }

            this._currentPosition = value;
        }

        public _steps:Object[] = [];

        public _errors:Object[] = [];

        constructor(context:any, data:any) {
            super(data);
            this.context = context;
            this.classList.add('ds-form')
            this.classList.add('ds-ldp-form-container')
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


        add(data:any) {
            if (!((<any>Polymer.dom(this)).node.length)) {
                this._steps.push(data)
                this.currentPosition = 0;
                return true;
            }

            let name:string;
            for (let n = 0; n < ((<any>Polymer.dom(this)).node.length); n++) {
                if (Polymer.dom(this).node[n].name == undefined) continue;
                name = Polymer.dom(this).node[n].name;
                for (let k in data.result.config) {
                    if (data.result.config[k].name = name && data.result.config[k].type != 'hidden') {
                        this._steps.push(data)
                        this.currentPosition++;
                        return true;
                    }
                }
            }

            return false;
        }

        update(data:any) {
            this.add(data);
            this.clear();
            this.appendChild(StepElement.create(this.context, data));
        }

        goTo(id:number):void {
            if (typeof this._steps[id] != "undefined") {
                this.clear();
                this.appendChild(StepElement.create(this.context, this._steps[id]));
                this.currentPosition = id;
            }
        }

        prev():void {
            let id:number = (this.currentPosition - 1);
            this.goTo(id);
        }

        next():void {
            let id:number = (this.currentPosition + 1);
            this.goTo(id);
        }

        append(data:any):Form {
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
            if (typeof this.context.settings.hook.success == 'function') {
                this.context.settings.hook.success(this, data);
            } else {
                this.clear();
                this.innerHTML = `<h1>${data.title}</h1>${data.content}`;
            }
        }

        warning(message:string) {
            if (typeof this.context.settings.hook.warning == 'function') {
                this.context.settings.hook.warning(this, message);
            } else {
                this.clear();
                this.innerHTML = message;
            }
        }

        redirect(url:string) {
            if (typeof this.context.settings.hook.redirect == 'function') {
                this.context.settings.hook.redirect(this, url);
            } else {
                window.location = <any>url;
            }
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

Com.Threeds.Component.Form.Element.Form.register();

