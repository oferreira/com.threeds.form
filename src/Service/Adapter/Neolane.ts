/// <reference path="../../../typings/jquery/jquery.d.ts" />
/// <reference path="../../Service/Adapter/AbstractAdapter.ts" />


namespace Com.Theeds.Service.Adapter {

    import AbstractAdapter = Com.Theeds.Service.Adapter.AbstractAdapter;

    interface Map<T> {
        [K: string]: T;
    }

    export class Neolane extends AbstractAdapter {

/*

 type: "POST",
 dataType: "jsonp",
 url: context.settings.form.url,
 data: {
 op: 'GetFormJson',
 lpid: context.settings.form.id
 },
* */

        public form(context:any, options:any):void {
            let self:any = this;
            $.ajax({

                type: "GET",
                //dataType: "json", url: 'data/form/LandingPageAPI-GetFormJson-error-v2.json',
                //dataType: "json", url: 'data/form/LandingPageAPI-GetFormJson-available-step1-v2.json',
                dataType: "json", url: 'data/form/LandingPageAPI-GetFormJson-available-step2-v2.json',
                //dataType: "json", url: 'data/form/LandingPageAPI-GetFormJson-notavailable-displaymessage.json',
                //dataType: "json", url: 'data/form/LandingPageAPI-GetFormJson-notavailable-redirection.json',
                //dataType: "json", url: 'data/form/LandingPageAPI-SubmitForm-success-v2.json',
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

            if (typeof data == 'string') {
                data = `op=SubmitForm&lpid=${context.settings.form.id}` + (data == 'undefined' || data == '' ? '' : '&' + data);
            } else if (typeof data == 'object'){
                //... @todo implement
            }
/*
 type: "POST",
 dataType: "jsonp",
 url: context.settings.form.url,
 //data: data,
 data:{
 lpid: 'LDP6312',
 op: 'GetFormJson',
 lpid: '',
 lpid: '',
 lpid: '',
 }
 */
            $.ajax({
                type: "GET",

                //dataType: "jsonp",url: `${options.url}search-api/search?q=${query}&applicationId=default&b=${offset}&hf=${limit}&d=all&output_format=json`,
                dataType: "json", url: 'data/form/LandingPageAPI-SubmitForm-error-v2.json',
                success: function (response:any) {
                    context.render('form', self.data(response));
                },
                error: function (resultat:any, statut:any, erreur:any) {
                    context.render('form', false);
                }
            });
        }

        public customerAutocomplete(context:any, data:any):void {
            let self:any = this;
            $.ajax({
                type: "GET",
                //type: "POST",
                data: data,
                //dataType: "jsonp",url: `${options.url}search-api/search?q=${query}&applicationId=default&b=${offset}&hf=${limit}&d=all&output_format=json`,
                dataType: "json", url: 'data/form/LandingPageAPI-SubmitForm-error-v2.json',
                success: function (response:any) {
                    context.render('form', self.data(response));
                },
                error: function (resultat:any, statut:any, erreur:any) {
                    context.render('form', false);
                }
            });
        }

        public data(reponse:any):any {

            console.log(reponse);
            if (typeof reponse.result != 'undefined' && typeof reponse.result.config != 'undefined') {
                this.clean(reponse.result.config);
            }

            if (typeof reponse.result != 'undefined' && typeof reponse.result.config != 'undefined' && typeof reponse.result.data != 'undefined') {
                this.hydrate(reponse.result.config, reponse.result.data);
            }

            return reponse;
        }

        public clean(data:any):any {
            for (let i = 0; i < data.length; i++) {
                if (typeof data[i].type != 'undefined' && data[i].type == 'picklist') {
                    data[i].type = 'select';
                } else if (typeof data[i].type != 'undefined' && data[i].type == 'string') {
                    data[i].type = 'text';
                } else if (typeof data[i].type != 'undefined' && data[i].type == 'fieldgroup') {
                    this.clean(data[i].items);
                }
            }
        }

        public hydrate(data:any, values:any):any {
            for (let i = 0; i < data.length; i++) {
                if (typeof data[i].name != 'undefined' && values[data[i].name] != 'undefined') {
                    data[i].value = values[data[i].name];
                } else if (typeof data[i].type != 'undefined' && data[i].type == 'fieldgroup') {
                    this.hydrate(data[i].items, values);
                }
            }
        }

    }
}
