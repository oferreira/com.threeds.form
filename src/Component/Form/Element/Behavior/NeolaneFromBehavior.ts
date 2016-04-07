/// <reference path="../../../../../bower_components/polymer-ts/polymer-ts.d.ts"/>
/// <reference path="../../../../../typings/jquery/jquery.d.ts" />

namespace Com.Theeds.Component.Form.Element {


    export class NeolaneFromBehavior extends polymer.Base {

        public action(form:any, data:any):any {

            if (Object.isDefined(data, 'result.config')) {
                form.update(data);
            } else if (Object.isDefined(data, 'result.properties.content')) {
                console.log(data);

            } else if (Object.isDefined(data, 'errors.0.error.message')) {
                form.clean();
                form.innerHTML = `<div class="alert alert-danger" role="alert">${data.errors[0].error.message}</div>`;
            } else if (Object.isDefined(data, 'errors')) {
               form.errors = data.errors;
                console.log(form.errors);


            }

        }

        @listen('submit')
        _onSubmit(e:Event) {
            if (e) e.preventDefault();
            this.submit();
            return false;
        }

        submit():void {
            this.valid();
            if (this.errors.length <= 1) this.context.service('form').post(this, $(this).serialize());
        }


        render(type:string, data:any):void {
            if (type == 'form') this.dispatch(data);
        }
    }
}

interface Object {
    isDefined(): boolean;
}

Object.isDefined = function (obj, prop):boolean {
    var parts = prop.split('.');
    for (var i = 0, l = parts.length; i < l; i++) {
        var part = parts[i];
        if (obj !== null && typeof obj === "object" && part in obj) {
            obj = obj[part];
        } else {
            return false;
        }
    }
    return true;
}
