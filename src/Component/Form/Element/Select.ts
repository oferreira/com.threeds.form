/// <reference path="../../../../bower_components/polymer-ts/polymer-ts.d.ts"/>
/// <reference path="../../../Element/AbstractPolymerElement.ts" />
/// <reference path="../../../Element/AbstractPolymerElement.ts" />

namespace Com.Threeds.Component.Form.Element {

    import AbstractPolymerElement = Com.Threeds.Element.AbstractPolymerElement;

    @component('select-element')
    @extend("select")
    export class Select extends AbstractPolymerElement {

        @property({type: String, reflectToAttribute: true})
            name:string;

        @property({type: Boolean, reflectToAttribute: true})
            required:boolean = false;

        parentField:string;
        parentFieldValue:string;
        value:string;

        data:any = [];

        private _errorMessage:string = '';

        constructor(context:any, data:any) {
            this.data = data;
            super(data);
            if (this.data.name != undefined) this.id = this.data.fieldName, this.name = this.data.fieldName;
            if (this.data.parentField != undefined) this.parentField = this.data.parentField;

            this.update();
        }


        clear():void {
            while (Polymer.dom(this).firstChild) Polymer.dom(this).removeChild(Polymer.dom(this).firstChild);
            this.innerHTML = '';
        }

        update():void {
            this.clear();

            let selected:Boolean = false;
            for (let k in this.data.options) {
                if (this.data.value != undefined && this.data.options[k].value == this.data.value) {
                    this.data.options[k].selected = true;
                }

                if(this.data.options[k].selected && this.data.options[k].parentValue != '' && this.parentFieldValue == undefined){
                    this.parentFieldValue = this.data.options[k].parentValue
                }

                if (this.data.options[k].selected != undefined && this.data.options[k].selected) {
                    selected = true;
                }
            }




            for (let k in this.data.options) {
                if ( (this.parentFieldValue == undefined && this.parentField == undefined) || (this.parentFieldValue == this.data.options[k].parentValue)) {
                    let option:any = {
                        "label": this.data.label,
                        "value": "",
                        "disabled": true,
                        "selected": (selected ? true:false)
                    };

                    this.appendChild(Option.create(this, option));
                    break;
                }
            }

            for (let k in this.data.options) {
                if (this.parentFieldValue == undefined && this.parentField == undefined) {
                    this.appendChild(Option.create(this, this.data.options[k]));
                } else if (this.parentFieldValue == this.data.options[k].parentValue) {
                    this.appendChild(Option.create(this, this.data.options[k]));
                }
            }

            this.fire('field-hide', (this.options.length ? false : true))
        }

        public get errorMessage():string {
            return (this._errorMessage == undefined ? '' : this._errorMessage);
        }

        public set errorMessage(value:string) {
            this._errorMessage = (value == undefined ? '' : value);
        }

        @listen('change')
        _onChange(e:Event):void {
            this.selectOption(this.value);
            this.isValid();
        }

      selectOption(value:string):void {
            this.fire('field-value-changed', this);
            for (let i = 0; i < (<any>Polymer.dom(this)).childNodes.length; i++) {
                (<any>Polymer.dom(this)).childNodes[i].selected = ((<any>Polymer.dom(this)).childNodes[i].value === value ? true : false);
            }
          this.fire('field-select-value', {'value': value, 'name': this.name});
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

Com.Threeds.Component.Form.Element.Select.register();
