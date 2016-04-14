/// <reference path="../../../../../../bower_components/polymer-ts/polymer-ts.d.ts"/>
/// <reference path="../../../../../../typings/jquery/jquery.d.ts" />

namespace Com.Theeds.Component.Form.Element.Behavior.Neolane {


    export interface FromBehavior {
        valid(): void;
        errors: any;
        context: any;
        dispatch: any;
    }

    export class FromBehavior extends polymer.Base {

        public action(form:any, data:any):void {

            if (Object.isDefined(data, 'result.config')) {
                form.update(data);
            } else if (Object.isDefined(data, 'result.thankYouPage')) {

                if (data.result.properties.displayThankYou) {
                    form.success(data.result.thankYouPage);

                    if (data.result.properties.openUrl) {
                        var w = window.open(data.result.asset.url, '_blank');
                        w.focus();
                    }
                } else if (data.result.properties.openUrl) {
                    form.redirect(data.result.asset.url);
                }

            } else if (Object.isDefined(data, 'result.properties.content') && Object.isDefined(data, 'result.properties.redirect') && data.result.properties.redirect) {
                form.redirect(data.result.properties.content);
            } else if (Object.isDefined(data, 'result.properties.content') && Object.isDefined(data, 'result.properties.redirect') && !data.result.properties.redirect) {
                form.warning(data.result.properties.content);
            } else if (Object.isDefined(data, 'errors.0.error.message')) {
                form.warning(data.errors[0].error.message);
            } else if (Object.isDefined(data, 'errors')) {
                form.errors = data.errors;
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
            if (this.errors.length <= 1) this.post();
        }

        post():void {
            let data:string = Com.Theeds.Component.Form.Element.From.serialize(this);
            this.context.service('form').post(this, data);
        }


        render(type:string, data:any):void {
            if (type == 'form') this.dispatch(data);
        }
    }
}

interface Object {
    isDefined(obj:any, prop:string): boolean;
    isEmpty(obj:any, prop:string): boolean;
}

Object.isDefined = function (obj:any, prop:string) {
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

Object.isEmpty = function (obj:any, prop:string):boolean {
    var parts = prop.split('.');
    for (var i = 0, l = parts.length; i < l; i++) {
        var part = parts[i];
        if (obj !== null && typeof obj === "object" && part in obj) {
            obj = obj[part];
        } else {
            return false;
        }
    }


    return (obj == '' ? true : false);
}