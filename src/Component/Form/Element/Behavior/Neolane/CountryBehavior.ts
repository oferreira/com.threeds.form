/// <reference path="../../../../../../bower_components/polymer-ts/polymer-ts.d.ts"/>
/// <reference path="../../../../../../typings/jquery/jquery.d.ts" />

namespace Com.Theeds.Component.Form.Element.Behavior.Neolane {

    export class CountryBehavior extends polymer.Base {


        attached() {

            /*hydrateBehaviors(data:Object) {

                if(data.behaviors.length) {
                    for (let i = 0; i < data.behaviors.length; i++) {
                        // this.behaviors.push(eval(`new ${data.behaviors[i]}()`));
                    }
                }
                if (data.name == 'company') data.behaviors = ['Com.Theeds.Component.Form.Element.Behavior.Neolane.CountryBehavior'];
            }*/



/*
            $(this).find('#company').autocomplete({
                source: function (requete, reponse) { // les deux arguments représentent les données nécessaires au plugin
                    $.ajax({
                        url: 'http://ws.geonames.org/searchJSON', // on appelle le script JSON
                        dataType: 'json', // on spécifie bien que le type de données est en JSON
                        data: {
                            name_startsWith: $('#recherche').val(), // on donne la chaîne de caractère tapée dans le champ de recherche
                            maxRows: 15
                        },
                        success: function (donnee) {
                            reponse($.map(donnee.geonames, function (objet) {
                                return objet.name + ', ' + objet.countryName; // on retourne cette forme de suggestion
                            }));
                        }
                    });
                }
            });
 */
        }


    }
}