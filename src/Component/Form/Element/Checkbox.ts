/// <reference path="../../../../bower_components/polymer-ts/polymer-ts.d.ts"/>
/// <reference path="../../../Element/AbstractPolymerElement.ts" />

namespace Com.Threeds.Component.Form.Element {

    import AbstractPolymerElement = Com.Threeds.Element.AbstractPolymerElement;

    @component('checkbox-element')
    @extend("input")
    export class Checkbox extends AbstractPolymerElement {

        @property({type: Boolean, reflectToAttribute: true})
            type:string = 'checkbox';

        @property({type: Boolean})
            checked:boolean = false;

        @property({type: String, reflectToAttribute: true})
            id:string;

        @property({type: String, reflectToAttribute: true})
            name:string;

        @property({type: Boolean, reflectToAttribute: true})
            required:boolean = false;

        @property({type: String, reflectToAttribute: true})
        class:string = 'ds-form-input-checkbox ';

        private _errorMessage:string = '';

        constructor(context:any, data:any) {
            super(data);
            if (data.name != undefined) this.id = data.name, this.name = data.name;
            if (data.fieldName != undefined) this.id = data.fieldName, this.name = data.fieldName;
            if (data.required != undefined) this.required = data.required;
            if (data.value != undefined) this.checked = data.value;
            if (data.class != undefined) this.class += data.class;
        }

        public get errorMessage():string {
            return (this._errorMessage == undefined ? '' : this._errorMessage);
        }

        public set errorMessage(value:string) {
            this._errorMessage = (value == undefined ? '' : value);
        }

        @listen('change')
        _onChange(e:Event):void {
            if (this.checked) {
                this.setAttribute("checked", this.checked.toString());
            } else {
                this.removeAttribute("checked");
            }

            this.isValid();
        }

        isValid() {
            if (this.required  && this.checked == false) {
                return this.displayError('This field is required !');
            }

            return this.displayError();
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

Com.Threeds.Component.Form.Element.Checkbox.register();

