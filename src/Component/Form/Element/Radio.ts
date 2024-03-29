/// <reference path="../../../../bower_components/polymer-ts/polymer-ts.d.ts"/>
/// <reference path="../../../Element/AbstractPolymerElement.ts" />

namespace Com.Threeds.Component.Form.Element {

    import AbstractPolymerElement = Com.Threeds.Element.AbstractPolymerElement;

    @component('radio-element')
    @extend("input")
    export class Radio extends AbstractPolymerElement {

        @property({type: Boolean, reflectToAttribute: true})
            type:string = 'radio';

        @property({type: Boolean, reflectToAttribute: true})
            checked:boolean = false;

        @property({type: String, reflectToAttribute: true})
            name:string;

        @property({type: Boolean, reflectToAttribute: true})
            required:boolean = false;

        private _errorMessage:string = '';

        constructor(context:any, data:any) {
            super(data);

            if (data.fieldName != undefined) this.id = data.fieldName, this.name = data.fieldName;
            if (data.id != undefined) this.id = data.id;
            if (data.required != undefined) this.required = data.required;
            if (data.checked != undefined) this.checked = data.checked;
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

Com.Threeds.Component.Form.Element.Radio.register();

