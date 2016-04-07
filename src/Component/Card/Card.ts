/// <reference path="../../../typings/jquery/jquery.d.ts" />

interface ICard {
    title: string;
    subTitle: string;
    summary: string;
    link: string;
    image: string;
    categorys: string[];
    brand: string;
}

namespace Com.Theeds.Component.Card {

    export class Card implements ICard {
        public title:string;
        public subTitle:string;
        public summary:string;
        public link:string;
        public image:string;
        public categorys:string[] = [];
        public brand:string;
        public formatSource:string;
        public formatContent:string;
        public startDate:Date;
        private _displayFormat:string = 'portrait'; // landscape, portrait

        constructor(data:any) {
            for (let k in data.metas) {
                if (data.metas[k].name == "title") this.title = data.metas[k].value;
                if (data.metas[k].name == "summary") this.summary = data.metas[k].value;
                if (data.metas[k].name == "link") this.link = data.metas[k].value;
                if (data.metas[k].name == "image") this.image = data.metas[k].value;
                if (data.metas[k].name == "category_type") this.categorys.push(data.metas[k].value);
                if (data.metas[k].name == "brand") this.brand = data.metas[k].value;
                if (data.metas[k].name == "subtitle") this.subTitle = data.metas[k].value;
                if (data.metas[k].name == "format_source") this.formatSource = data.metas[k].value;
                if (data.metas[k].name == "format_content") this.formatContent = data.metas[k].value;
                if (data.metas[k].name == "start_date") this.startDate = new Date(data.metas[k].value * 1000);
            }
        }

        get displayFormat():string {
            return this._displayFormat;
        }

        set displayFormat(value:string) {
            this._displayFormat = value;
        }

        appendTitleRender(elem:any):void {
            if (this.title !== undefined) {
                elem.append(`<h5 class="card-title">${this.title}</h5>`);
            }
        }

        appendSubTitleRender(elem:any):void {
            if (this.subTitle !== undefined) {
                elem.append(`<div class="card-sub-title">${this.subTitle}</div>`);
            }
        }

        appendDateRender(elem:any):void {
            if (this.startDate !== undefined) {
                elem.append(`<h4 class="card-text card-date">${this.startDate.getDay()}/${this.startDate.getMonth()}/${this.startDate.getFullYear()}</h4>`);
            }
        }

        appendSummaryRender(elem:any):void {
            if (this.summary !== undefined) {
                elem.append(`<div class="card-text block-txt">${this.summary}</div>`);
            }
        }

        appendButtonRender(elem:any):void {
            if (this.link !== undefined) {
                let label:string = 'Read more';

                if (this.formatSource !== undefined && decodeURIComponent(this.formatSource).indexOf("jobs") != -1) {
                    label = 'Apply';
                }

                if (this.formatSource !== undefined && decodeURIComponent(this.formatSource).indexOf("customer-stories") != -1) {
                    label = 'Discover';
                }

                if (this.formatSource !== undefined && decodeURIComponent(this.formatSource).indexOf("events") != -1) {
                    label = 'Subscribe';
                }

                elem.append(`<div class="card-footer-right txt-right"><a class="btn-old btn-shout" href="${this.link}" title="${this.title}">${label}</a></div>`);
            }
        }


        appendImageRender(elem:any):void {

            if (this.link !== undefined && this.link.indexOf("youtube") != -1 && this.link.indexOf("v=") != -1) {
                let id:string = this.getUrlParam(this.link, 'v');
                elem.append(`<iframe width="100%" height="${this.videoHeight()}" src="https://www.youtube.com/embed/${id}?rel=0&controls=0&showinfo=0" frameborder="0" allowfullscreen></iframe>`);
            } else if (this.link !== undefined && this.link.indexOf("youtube") != -1) {
                let id:string = this.link.substr(this.link.lastIndexOf('/') + 1);
                elem.append(`<iframe width="100%" height="100%" style="min-height: ${this.videoHeight()}px; " src="https://www.youtube.com/embed/${id}?rel=0&controls=0&showinfo=0" frameborder="0" allowfullscreen></iframe>`);
            } else if (this.image !== undefined) {
                elem.append(`<figure class="card-img"><img src="${this.image}" alt="${this.title}" width="100%" /></figure>`);
            }
        }

        appendBackgroundImageRender(elem:any):void {
            if (this.image !== undefined) {
                elem.addClass('card-format-landscape')
                    .css("background-color", "transparent")
                    .css("background-image", `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(${this.image})`)
                    .css("background-repeat", "repeat, no-repeat")
                    .css("background-attachment", "scroll, scroll")
                    .css("background-position", "0% 0%, center center")
                    .css("background-clip", "border-box, border-box")
                    .css("background-origin", "padding-box, padding-box")
                    .css("background-size", "cover");
            }
        }

        getUrlParam(url:string, param:string):any {
            var results = new RegExp('[\?&]' + param + '=([^&#]*)').exec(url);
            return results[1] || 0;
        }

        isVideo():Boolean {
            if (this.link !== undefined && this.link.indexOf("youtube") != -1 && this.link.indexOf("v=") != -1) {
                return true;
            } else if (this.link !== undefined && this.link.indexOf("youtube") != -1) {
                return true;
            }

            return false;
        }

        videoHeight():number {
            if(this.isLandscape()) return 350;
            return 250;
        }

        isLandscape():Boolean {
            if (this._displayFormat == 'landscape') return true;
            return false;
        }

        isImage():Boolean {
            if (this.formatSource !== undefined && this.formatSource.indexOf("3dexperiencelab") != -1) return true;
            return false;
        }

        uri(text:string):string {
        var tmp = text.replace(/^[^-_a-zA-Z]+/, '').replace(/^-(?:[-0-9]+)/, '-');
        return (tmp && tmp.replace(/[^-_a-zA-Z0-9]+/g, '-')).toLowerCase();
    }

        render():any {
            let container = $('<div>').addClass('card-container');// pure-u-1-1 pure-u-sm-1-2 pure-u-md-1-3 pure-u-lg-1-4
            let article = $('<article>').addClass('card  brand-color');
            let footer = $('<footer>').addClass('footer-card');

            if (this.isLandscape()) {
                container.addClass('pure-u-1-1 pure-u-sm-1-2  pure-u-md-2-4 pure-u-lg-2-4 ');
            } else {
                container.addClass('pure-u-1-1 pure-u-sm-1-2 pure-u-md-1-4 pure-u-lg-1-4');
            }


            for (let k in this.categorys) {
                container.addClass("card-category-type-".concat(this.uri(this.categorys[k])));
            }

            container.addClass("card-format-content-".concat(this.uri(this.formatContent)));

            if (this.isImage()) {
                this.appendBackgroundImageRender(article);
                let front = $('<div>').addClass('card-front')
                let back = $('<div>').addClass('card-back')

                this.appendImageRender(front);



                this.appendSummaryRender(front);
                this.appendSubTitleRender(front);
                this.appendTitleRender(front);
                this.appendDateRender(front);

                front.find('figure img').css('visibility', 'hidden');
                front.find('.card-text.block-txt').css('visibility', 'hidden');


                this.appendImageRender(back);
                this.appendTitleRender(back);
                this.appendSubTitleRender(back);
                this.appendDateRender(back);
                this.appendSummaryRender(back);

                back.find('figure img').css('visibility', 'hidden');

                article.append(front)
                    .append(back)
                    .wrapInner($('<a>').attr('href', this.link));
            } else {
                this.appendImageRender(article);
                this.appendTitleRender(article);
                this.appendSubTitleRender(article);
                this.appendDateRender(article);
                this.appendSummaryRender(article);

                if (!this.isVideo()) {
                    this.appendButtonRender(footer);
                }

                article.append(footer)
            }


            return container.append(article.append(footer));
        }


    }

}
