/// <reference path="../../../typings/jquery/jquery.d.ts" />
/// <reference path="../../Component/Card/Card.ts" />
/// <reference path="../../Component/Card/Image.ts" />


namespace Com.Theeds.Component.Card {

    import Card = Com.Theeds.Component.Card.Card;
    import Image = Com.Theeds.Component.Card.Image;

    export class Render {

        cards(context:any, data:any):void {
            if (data === false || typeof data === "undefined") return;
            context.elem.addClass('cards pure-g');

            let $grid = context.masonry(context);
            let card:Card;
            for (let k in data.hits) {
                let summary:boolean = false;
                let link:boolean = false;
                let image:boolean = false;
                for (let i in data.hits[k].metas) {
                    if (data.hits[k].metas[i].name == "summary") summary = true;
                    if (data.hits[k].metas[i].name == "link") link = true;
                    if (data.hits[k].metas[i].name == "image") image = true;
                }

                if(summary  && image && link) {
                    card = new Card(data.hits[k]);
                    if(k=='0') card.displayFormat = 'landscape';

                    $(<HTMLElement>card.render()).imagesLoaded().always(function (instance:any) {

                    }).done(function (instance:any) {
                        $grid.append(instance.elements).masonry('appended', instance.elements).masonry();
                    }).fail(function () {

                    }).progress(function (instance:any, image:any) {
                        let gcd:number, pct:number;
                        let naturalWidth = image.img.naturalWidth;
                        let naturalHeight = image.img.naturalHeight;
                        if(naturalWidth != 0 && naturalHeight != 0){
                            gcd = Image.prototype.gcd(naturalWidth, naturalHeight);
                            pct = (((naturalWidth/gcd) *100/(naturalHeight/gcd)) - 100);
                        }
                    });
                }


            }
        }

        groups(context:any, data:any):void {
            if (data === false || typeof data === "undefined") return;

            let elem:any;
            for (let k in data.groups) {
                elem = $("select[data-exalead-group='" + data.groups[k].id + "']");
                if (elem.length) {
                    elem.find('option')
                        .remove()
                        .end()
                        .append('<option value=""></option>');

                    for (let i  in data.groups[k].categories) {
                        elem.append('<option value="' + data.groups[k].categories[i].path + '">' + data.groups[k].categories[i].title + '</option>');
                    }

                    elem.chosen({disable_search_threshold: 10}).bind("change", function () {
                        $('#' + context.elem.attr('id') + '-search').trigger('change');
                    });
                }
            }
        }

        customGroups(context:any, data:any):void {
            if (data === false || typeof data === "undefined") return;

            let elem:any;
            let ref:string;

            $("select[data-exalead-group-custom]").each(function (index) {
                elem = $(this);
                ref = elem.data('exalead-group-custom-ref');

                if (ref == undefined && data[ref] == undefined) return true;

                for (let i  in data[ref]) {
                    elem.append('<option value="' + data[ref][i].title+ '">' + data[ref][i].title + '</option>');
                }

                elem.chosen({disable_search_threshold: 10}).bind("change", function () {
                    $('#' + context.elem.attr('id') + '-search').trigger('change');
                });
            });
        }
    }
}