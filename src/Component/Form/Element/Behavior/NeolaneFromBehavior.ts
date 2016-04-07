/// <reference path="../../../../../bower_components/polymer-ts/polymer-ts.d.ts"/>
/// <reference path="../../../../../typings/jquery/jquery.d.ts" />
/// <reference path="../../../../Object.ts" />
namespace Com.Theeds.Component.Form.Element {


    export class NeolaneFromBehavior extends polymer.Base {
        private _errors:string[] = [];

        public action(context:any, data:any):any {
            console.log(data);
          // console.log( Object.prototype.isDefined(data, 'data.result.properties.redirect'));
            if (data.success !== undefined && data.success && data.result !== undefined && data.result.config !== undefined) {
                // update form
                context.removeAllStep();
                context.appendStep(data);
            } else if (data.success !== undefined && !data.success && data.errors !== undefined && data.errors[0] !== undefined) {
                // display success


            } else if (data.success !== undefined && !data.success && data.errors !== undefined && data.errors[0] !== undefined) {
                // display error
                context.removeAllStep();
                context.innerHTML = `<div class="alert alert-danger" role="alert">${data.errors[0].error.message}</div>`;
            } else if (data.success !== undefined && !data.success && data.errors !== undefined) {
                // display error
                context.displayErrors(data.errors);
            }
        }



        public get errors():string[] {
            this._errors = [];
            let dom:any = Polymer.dom(this);

            for (let i = 0; i < (dom['node'].length); i++) {
                if (typeof  dom['node'][i].isValid === 'function') {
                    if (dom['node'][i].isValid() == true) this._errors[dom['node'][i].name] = dom['node'][i].errorMessage;
                }
            }

            return this._errors;
        }

        @listen('submit')
        _onSubmit(e:Event) {
            this.submit();
            if (e) e.preventDefault();
            return false;
        }

        submit():void {
            if (Object.getOwnPropertyNames(this.errors).length <= 1) this.context.service('form').post(this, this.serialize());
        }

        render(type:string, data:any):void {
            if (type == 'form') this.dispatch(data);
        }
    }
}