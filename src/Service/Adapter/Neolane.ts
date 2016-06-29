/// <reference path="../../../typings/jquery/jquery.d.ts" />
/// <reference path="../../Service/Adapter/AbstractAdapter.ts" />


namespace Com.Threeds.Service.Adapter {

    import AbstractAdapter = Com.Threeds.Service.Adapter.AbstractAdapter;

    interface Map<T> {
        [K: string]: T;
    }

    export class Neolane extends AbstractAdapter {

        public form(context:any, options:any):void {
            let self:any = this;


            $.ajax({
                //type: "GET", dataType: "json", url: 'http://localhost:2000/data/landing-page/form/redirect.json',
                //type: "GET", dataType: "json", url: 'http://localhost:2000/data/landing-page/form/success.json',
                type: "GET",dataType: "jsonp",url: context.settings.api.url, data: {op: 'GetFormJson',lpid: context.settings.id},
                //type: "GET", dataType: "json", url: 'http://localhost:2000/data/landing-page/form/success.json',
                //type: "GET",dataType: "json", url: 'data/landing-page/form/step2.test.json',
                //type: "GET",dataType: "json", url: 'http://localhost:2000/data/landing-page/form/success.json',
                //type: "GET",dataType: "json", url: 'data/form/LandingPageAPI-GetFormJson-error-v2.json',
                // type: "GET",dataType: "json", url: 'data/form/LandingPageAPI-GetFormJson-available-step1-v3.json',
                //type: "GET",dataType: "json", url: 'data/form/LandingPageAPI-GetFormJson-notavailable-displaymessage.json',
                //type: "GET",dataType: "json", url: 'data/form/LandingPageAPI-GetFormJson-notavailable-redirection.json',
                //type: "GET",dataType: "json", url: 'data/form/LandingPageAPI-SubmitForm-success-v2.json',
                success: function (response:any) {
                    context.render('form', self.data(response));
                },
                error: function (resultat:any, statut:any, erreur:any) {
                    context.render('form', false);
                }
            });
        }

        public post(context:any, data:any):void {
            let self:any = this;

            data['lpid'] = context.settings.id;

           $.ajax({
                type: "GET", dataType: "jsonp", url: context.settings.api.url,
                data:data,
                success: function (response:Object) {
                    context.render('form', self.data(response));
                },
                error: function (resultat:any, statut:any, erreur:any) {
                    context.render('form', false);
                }
            });

            /*if(Object.keys(data).length > 4){
                $.ajax({
                    type: "GET", dataType: "json", url: '/data/landing-page/form/success.json',
                    data:data,
                    success: function (response:Object) {
                        context.render('form', self.data(response));
                    },
                    error: function (resultat:any, statut:any, erreur:any) {
                        context.render('form', false);
                    }
                });
            } else{
                $.ajax({
                    type: "POST",dataType: "jsonp",url: context.settings.api.url,
                    //type: "GET", dataType: "json", url: 'http://localhost:2000/data/landing-page/form/step2.test.json',
                    //type: "GET", dataType: "json", url: 'http://localhost:2000/data/landing-page/form/success.json',
                    data:data,
                    success: function (response:Object) {
                        context.render('form', self.data(response));
                    },
                    error: function (resultat:any, statut:any, erreur:any) {
                        context.render('form', false);
                    }
                });
            }*/


        }

        public data(reponse:any):any {
            if (typeof reponse.result != 'undefined' && typeof reponse.result.config != 'undefined') {
                this.clean(reponse.result.config);
            }

            if (typeof reponse.result != 'undefined' && typeof reponse.result.config != 'undefined' && typeof reponse.result.data != 'undefined') {
                this.hydrate(reponse.result.config, reponse.result.data);

                for (let i = 0; i < reponse.result.config.length; i++) {
                    if (typeof reponse.result.config[i].parentField != 'undefined') {
                        reponse.result.config[i].parentFieldData = this.findParentData(reponse.result.config[i].parentField , reponse.result.config);
                    }
                }
            }

            return reponse;
        }

        public clean(data:any):any {
            for (let i = 0; i < data.length; i++) {
                data[i].fieldclass = [];

                if (typeof data[i].type != 'undefined' && data[i].type == 'picklist') {
                    data[i].type = 'select';
                } else if (typeof data[i].type != 'undefined' && data[i].type == 'string') {
                    data[i].type = 'text';
                } else if (typeof data[i].type != 'undefined' && data[i].type == 'fieldgroup') {
                    this.clean(data[i].items);
                }
            }
        }


        public findParentData(parentField:any, data:any):any {
            for (let i = 0; i < data.length; i++) {
                if (data[i].fieldName == parentField) {
                    return data[i];
                }
            }
            return;
        }


        public hydrate(data:any, values:any):any {
            for (let i = 0; i < data.length; i++) {
                if (typeof data[i].fieldName != 'undefined' && values[data[i].fieldName] != 'undefined') {
                    data[i].value = values[data[i].fieldName];
                } else if (typeof data[i].type != 'undefined' && data[i].type == 'fieldgroup') {
                    this.hydrate(data[i].items, values);
                }

            }
        }

    }
}


Object.find = function (o:any, s:string):boolean {
    s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
    s = s.replace(/^\./, '');           // strip a leading dot
    var a = s.split('.');
    for (var i = 0, n = a.length; i < n; ++i) {
        var k = a[i];
        if (k in o) {
            o = o[k];
        } else {
            return;
        }
    }
    return o;
}