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

        parentField:string;
        value:string;

        data:any = [];

        private _errorMessage:string = '';

        constructor(context:any, data:any) {
            this.data = data;
            super(data);
            this.classList.add('form-control');
            if (this.data.name != undefined) this.id = this.data.name, this.name = this.data.name;
            if (this.data.parentField != undefined) this.parentField = this.data.parentField;

            this.update();
        }

        clear():void {
            while (Polymer.dom(this).firstChild) Polymer.dom(this).removeChild(Polymer.dom(this).firstChild);
            this.innerHTML = '';
        }

        update():void {
            this.clear();

            let parentField:any;
            if (typeof  this.data.parentField != 'undefined') {
                parentField = document.querySelector(`#${this.data.parentField}`);
            }

            for (let k in this.data.options) {
                if (this.data.value != undefined && this.data.options[k].value == this.data.value)  this.data.options[k].selected = true;
                if (typeof this.data.parentField != 'undefined') {
                    if (typeof parentField != 'undefined' && this.data.options[k].parentValue == parentField.options[parentField.selectedIndex].value)
                        this.appendChild(Option.create(this.data.options[k]));
                } else {
                    this.appendChild(Option.create(this.data.options[k]));
                }

            }

            this.fire('field-hide', (!this.options.length ? false:true))
        }

        public get errorMessage():string {
            return (this._errorMessage == undefined ? '' : this._errorMessage);
        }

        public set errorMessage(value:string) {
            this._errorMessage = (value == undefined ? '' : value);
        }

        @listen('input')
        _onChange(e:Event):void {
            this.fire('field-value-changed', this);
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
