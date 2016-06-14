/// <reference path="../../../../../../bower_components/polymer-ts/polymer-ts.d.ts"/>
/// <reference path="../../../../../../typings/jquery/jquery.d.ts" />
/// <reference path="../../../../../Core/Ajax/AutoComplete.ts" />

namespace Com.Threeds.Component.Form.Element.Behavior.Neolane {


    import AutoComplete = Com.Threeds.Core.Ajax.AutoComplete;

    export interface FormBehavior {
        valid(): void;
        errors: any;
        context: any;
        dispatch: any;
    }

    export class FormBehavior extends polymer.Base {

        public action(form:any, data:any):void {

            if (Object.isDefined(data, 'result.config')) {
                for (let i = 0; i < data.result.config.length; i++) {
                    if(typeof data.result.config[i].name != 'undefined' && data.result.config[i].name == 'email' && data.result.config[i].type == 'hidden'){
                        $('.ds-lpd-info-form').append(`<p class="email-valid">${data.result.config[i].value}</p>`);
                    }
                }
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
                form.errors = data.errors;
            }
        }

        @listen('field-create')
        _onCreate(e:Event, elem:any) {

        }

        @listen('field-value-changed')
        _onChange(e:Event, elem:any) {
            let context = this;
            this.updateAllChildrenField(elem, Polymer.dom(this));

            let query:string = $('#company').val();
            let isoCode:string = $('#country').val();

            if(elem.name == 'company' && query != undefined && isoCode != undefined && elem.autoComplete == undefined){
                elem.autoComplete = new autoComplete({
                    selector: `#${elem.name}`,
                    minChars: 3,
                    source: function(term, suggest){
                        term = term.toLowerCase();

                        $.ajax({
                            url: 'http://dassault-test.neolane.net/dsx/dnbWebservice.jssp',
                            dataType: 'jsonp',
                            data: {
                                query: query,
                                iso: isoCode
                            },
                            success: function (data) {
                                suggest($.map(data.dnbReponse.responseDetail.candidate, function (objet) {
                                    return {
                                        companyName: objet.companyName,
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
                    renderItem: function (item:Object, search:string){
                        search = search.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&amp;');
                        var re = new RegExp("(" + search.split(' ').join('|') + ")", "gi");
                        let label:string = item.companyName.replace(re, "<b>$1</b>");
                        return '<div class="autocomplete-suggestion" data-companyName="'+item.companyName+'" data-duns="'+item.duns+'" data-postalCode="'+item.postalCode+'" data-city="'+item.city+'" data-address1="'+item.address1+'" data-address2="'+item.address2+'" data-stateCode="'+item.stateCode+'" data-val="'+search+'">'+label+'</div>';
                    },
                    onSelect: function(e, term, item){

                        context.append({
                            name: "duns",
                            type: "hidden",
                            value: item.getAttribute('data-duns')
                        }).append({
                            name: "zipCode",
                            type: "hidden",
                            value: item.getAttribute('data-postalCode')
                        }).append({
                            name: "city",
                            type: "hidden",
                            value: item.getAttribute('data-city')
                        }).append({
                            name: "address1",
                            type: "hidden",
                            value: item.getAttribute('data-address1')
                        }).append({
                            name: "address2",
                            type: "hidden",
                            value: item.getAttribute('data-address2')
                        }).append({
                            name: "state",
                            type: "hidden",
                            value: item.getAttribute('data-stateCode')
                        });

                        elem.value = item.getAttribute('data-companyName');
                    }
                });

            }
        }

        updateAllChildrenField(elem:any, node:any) {
            for (let i = 0; i < node.childNodes.length; i++) {
                if(typeof node.childNodes[i].update == 'function' && node.childNodes[i].parentField == elem.name && node.childNodes[i].parentField != 'undefined'){
                    node.childNodes[i].parentFieldValue = elem.value;
                    node.childNodes[i].update();
                }

                this.updateAllChildrenField(elem, node.childNodes[i]);
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