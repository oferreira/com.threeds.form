/// <reference path="../../../../bower_components/polymer-ts/polymer-ts.d.ts"/>
/// <reference path="../../../Element/AbstractPolymerElement.ts" />

namespace Com.Theeds.Component.Form.Element {

    import AbstractPolymerElement = Com.Theeds.Element.AbstractPolymerElement;

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
            value:string = 'lorem';

        @property({type: String, reflectToAttribute: true})
            placeholder:string;

        @property({type: Boolean, reflectToAttribute: true})
            required:boolean = false;

        private _errorMessage:string = '';

        constructor(context:any, data:any) {
            super(data);
            this.classList.add('form-control');

            if (context.settings.display.placeholder) this.placeholder = data.label
            if (data.name != undefined) this.id = data.name, this.name = data.name;
            if (data.required != undefined) this.required = data.required;
            if (data.value != undefined) this.value = data.value;
        }

        public get errorMessage():string {
            return (this._errorMessage == undefined ? '' : this._errorMessage);
        }

        public set errorMessage(value:string) {
            this._errorMessage = (value == undefined ? '' : value);
        }

        @listen('input')
        _onChange(e:Event):void {
            this.setAttribute('value', this.value);
            this.isValid();
        }

        isValid() {
            if (!this.required) return this.displayError();

            let detail:string;
            if (this.value == '' || this.value == undefined) detail = 'This field is required !';

            return this.displayError(detail);
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

Com.Theeds.Component.Form.Element.Input.register();

