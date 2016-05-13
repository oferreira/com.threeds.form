/// <reference path="../../../../../../bower_components/polymer-ts/polymer-ts.d.ts"/>
/// <reference path="../../../../../../typings/jquery/jquery.d.ts" />

namespace Com.Threeds.Component.Form.Element.Behavior.Neolane {


    export interface FormBehavior {
        valid(): void;
        errors: any;
        context: any;
        dispatch: any;
    }

    export class FormBehavior extends polymer.Base {

        public action(form:any, data:any):void {

            if (Object.isDefined(data, 'result.config')) {
                form.update(data);
            } else if (Object.isDefined(data, 'result.thankYouPage')) {

                if (data.result.properties.displayThankYou) {
                    form.success(data.result.thankYouPage);

                    if (data.result.properties.openUrl) {
                        //var w = window.open(data.result.asset.url, '_blank');
                        //w.focus();
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
                form.errors = data.errors.fields;
            }
        }

        @listen('field-create')
        _onCreate(e:Event, elem:any) {
            let context = this;

            if(elem.data.name == 'company'){
                $('#company').autocomplete({
                    source: function (requete, reponse) {
                        $.ajax({
                            url: 'http://dassault-test.neolane.net/dsx/dnbWebservice.jssp',
                            dataType: 'jsonp',
                            data: {
                                query: $('#company').val(),
                                iso: $('#country').val()
                            },
                            success: function (data) {
                                reponse($.map(data.dnbReponse.responseDetail.candidate, function (objet) {
                                    return {
                                        label: objet.companyName,
                                        value: objet.companyName,
                                        duns: objet.duns,
                                        postalCode: objet.postalCode,
                                        city: objet.city,
                                        address1: objet.address1,
                                        address2: objet.address2,
                                        stateCode: objet.stateCode,
                                    };
                                }));
                            },

                        });
                    },
                    select: function(event, ui) {
                        $(this).val(ui.item.value);

                        context.append({
                            name: "duns",
                            type: "hidden",
                            value: ui.item.duns
                        }).append({
                            name: "zipCode",
                            type: "hidden",
                            value: ui.item.postalCode
                        }).append({
                            name: "city",
                            type: "hidden",
                            value: ui.item.city
                        }).append({
                            name: "address1",
                            type: "hidden",
                            value: ui.item.address1
                        }).append({
                            name: "address2",
                            type: "hidden",
                            value: ui.item.address2
                        }).append({
                            name: "state",
                            type: "hidden",
                            value: ui.item.stateCode
                        });



                        return false;
                    }
                });
            }


        }

        @listen('field-value-changed')
        _onChange(e:Event, elem:any) {
            for (let n = 0; n < ((<any>Polymer.dom(this)).node.length); n++) {
                if (typeof  (<any>Polymer.dom(this)).node[n].parentField != 'undefined' && elem.name == Polymer.dom(this).node[n].parentField) {
                    for (let i = 0; i < ((<any>Polymer.dom(this)).node.length); i++) {
                        if (typeof  (<any>Polymer.dom(this)).node[i].name != 'undefined' && Polymer.dom(this).node[i].name.toLowerCase() == Polymer.dom(this).node[n].name.toLowerCase()) {
                            Polymer.dom(this).node[i].update();
                        }
                    }
                }
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
            if (!Object.keys(this.errors).length) this.post();
        }

        post():void {
            let data:string = Com.Threeds.Component.Form.Element.Form.serialize(this);
            this.context.service('api').post(this, data);
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