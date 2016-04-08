/// <reference path="../../../../bower_components/polymer-ts/polymer-ts.d.ts"/>
/// <reference path="../../../Element/AbstractPolymerElement.ts" />
/// <reference path="../../../Element/AbstractPolymerElement.ts" />

namespace Com.Theeds.Component.Form.Element {

    import AbstractPolymerElement = Com.Theeds.Element.AbstractPolymerElement;

    @component('select-element')
    @extend("select")
    export class Select extends AbstractPolymerElement {

        @property({type: String, reflectToAttribute: true})
            name:string;

        @property({type: Boolean, reflectToAttribute: true})
            required:boolean = false;

        value:string;

        private _errorMessage:string = '';

        constructor(context:any, data:any) {
            super(data);
            this.classList.add('form-control');
            if (data.name != undefined) this.id = data.name, this.name = data.name;

            for (let k in data.options) {
                if (data.value != undefined && data.options[k].value == data.value) data.options[k].selected = true;
                this.appendChild(Option.create(data.options[k]));
            }
        }


        public get errorMessage():string {
            return (this._errorMessage == undefined ? '' : this._errorMessage);
        }

        public set errorMessage(value:string) {
            this._errorMessage = (value == undefined ? '' : value);
        }

        @listen('input')
        _onChange(e:Event):void {
            this.selectOption(this.value);
        }

        selectOption(value:string):void {
            for (let i = 0; i < (<any>Polymer.dom(this)).node.length; i++) {
                (<any>Polymer.dom(this)).node[i].selected = ((<any>Polymer.dom(this)).node[i].value === value ? true : false);
            }
        }

        isValid() {
            if (!this.required) return this.displayError();

            let detail:string;
            if (!this.value) detail = 'This field is required !';


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

Com.Theeds.Component.Form.Element.Select.register();
