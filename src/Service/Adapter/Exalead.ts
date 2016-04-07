/// <reference path="../../../typings/jquery/jquery.d.ts" />
/// <reference path="../../Service/Adapter/AbstractAdapter.ts" />


namespace Com.Theeds.Service.Adapter {

    import AbstractAdapter = Com.Theeds.Service.Adapter.AbstractAdapter;

    export class Exalead extends AbstractAdapter {

        cards(context:any, options:any):void {
            let query = encodeURIComponent(options.query);
            let offset = (options.limit * options.offset);
            let limit = options.limit;

            $.ajax({
                type: "GET",
                //dataType: "jsonp",url: `${options.url}search-api/search?q=${query}&applicationId=default&b=${offset}&hf=${limit}&d=all&output_format=json`,
                dataType: "json",url: 'data/customer-story.json',
                //dataType: "json",url: 'data/events.json',
                //dataType: "json",url: 'data/debug.json',
                //dataType: "json",url: 'data/videos.json',
                //dataType: "json",url: 'data/cards.json',
                success: function (data:any) {
                    context.render('cards', data);
                },
                error: function (resultat:any, statut:any, erreur:any) {
                    context.render('cards', false);
                }
            });
        }

        groups(context:any, options:any):void {
            $.ajax({
                type: "GET",
                //dataType: "jsonp",url: `${options.url}search-api/search?q=%23all&applicationId=default&b=0&hf=0&d=all&output_format=json`,
                dataType: "json",url: 'data/groups.json',
                success: function (data:any) {
                    context.render('groups', data);
                },
                error: function (resultat:any, statut:any, erreur:any) {
                    context.render('groups', false);
                }
            });
        }

        customGroups(context:any, options:any):void {
            $.ajax({
                type: "GET",
                dataType: "json",url: 'data/custom-groups.json',
                success: function (data:any) {
                    context.render('customGroups', data);
                },
                error: function (resultat:any, statut:any, erreur:any) {
                    context.render('customGroups', false);
                }
            });
        }


    }
}
