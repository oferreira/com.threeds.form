/// <reference path="../../../../bower_components/polymer-ts/polymer-ts.d.ts"/>
/// <reference path="../../../Element/AbstractPolymerElement.ts" />

namespace Com.Threeds.Component.Form.Element {

    import AbstractPolymerElement = Com.Threeds.Element.AbstractPolymerElement;

    @component('input-element')
    @extend("input")
    export class Input extends AbstractPolymerElement {
        @property({type: String, reflectToAttribute: true})
            type:string = 'text';

        @property({type: String, reflectToAttribute: true})
            id:string;

        @property({type: String, reflectToAttribute: true})
            name:string;

        @property({type: String})
            value:string = '';

        @property({type: String, reflectToAttribute: true})
            placeholder:string;

        @property({type: Boolean, reflectToAttribute: false})
            required:boolean = false;

        private _validators:any = [];
        private _errorMessage:string = '';

        constructor(context:any, data:any) {
            super(data);

            if (data.type != undefined && data.type != 'hidden') this.classList.add('ds-form-input-text');
            if (context.settings.display.placeholder) this.placeholder = data.label
            if (data.fieldName != undefined) this.id = data.fieldName, this.name = data.fieldName;
            if (data.required != undefined) this.required = data.required;
            if (data.type != undefined) this.type = data.type;
            if (data.value != undefined) this.value = data.value;
            if (data.validators != undefined) this._validators = data.validators
        }

        public get errorMessage():string {
            return (this._errorMessage == undefined ? '' : this._errorMessage);
        }

        public set errorMessage(value:string) {
            this._errorMessage = (value == undefined ? '' : value);
        }

        @listen('input')
        _onChange(e:Event):void {
            this.fire('field-value-changed', this)
            this.setAttribute('value', this.value);
            this.displayError('');
            //this.classList.remove('_error');
            //console.log('emezam');
            //this.isValid();
        }

        @listen('focus')
        _onFocus(e:Event):void {
            this.displayError('');
        }

        isValid():any {
            let message:any;
            for (let i = 0; i < this._validators.length; i++) {
                if(typeof this._validators[i] == 'string'){
                    message = eval(`${this._validators[i]}.isValid(this.value)`);
                    if (typeof message == 'string') {
                        return this.displayError(message)
                    }
                } else if(typeof this._validators[i] == 'object'){
                    message = this._validators[i].isValid(this.value);
                }
            }

            return this.displayError()
        }

        displayError(detail?:string):boolean {
            this.errorMessage = detail;

            this.fire('error', this.errorMessage);

            if (!this.errorMessage) {
                this.classList.remove('_error');
                return false;
            }

            this.classList.add('_error');
            return true;
        }
    }
}

Com.Threeds.Component.Form.Element.Input.register();

