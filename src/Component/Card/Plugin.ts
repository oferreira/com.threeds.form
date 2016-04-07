/// <reference path="../../../typings/jquery/jquery.d.ts" />
/// <reference path="../../Service/Adapter/Exalead.ts" />
/// <reference path="../../Service/ServiceManager.ts" />
/// <reference path="../../Plugin/AbstractPlugin.ts" />
/// <reference path="../../Component/Card/MyElement.ts" />


declare function require(path: string): string;

interface Document {
    registerElement(tagName:string, implementation:any):any;
}

interface JQuery {
    masonry(data?:any, options?:any): JQuery;
    chosen(data?:any, options?:any): JQuery;
    imagesLoaded(data?:any, options?:any): JQuery;
    always(data?:any, options?:any): JQuery;
    done(data?:any, options?:any): JQuery;
    fail(data?:any, options?:any): JQuery;
    progress(data?:any, options?:any): JQuery;
}


namespace Com.Theeds.Component.Card {

    import AbstractPlugin = Com.Theeds.Plugin.AbstractPlugin;
    import MyElement = Com.Theeds.Component.Card.MyElement;

    export class Plugin extends AbstractPlugin {

        public elem:any;
        public settings:any = {
            search: {
                query: '',
                offset: 0,
                limit: 50,
                adapter: 'Com.Theeds.Service.Adapter.Exalead',
                url: 'http://10.8.240.11:10010/',
            },
            infiniteScroll: {
                enable: true
            },
            masonry: {
                itemSelector: '.card-container',
                columnWidth: '.pure-u-md-1-4',
                isAnimated: false,
                percentPosition: true,
                gutter: 0,
                transitionDuration: 0
            },
            hook: {
                search: undefined,
                render: undefined
            },
            render: {
                adapter: 'Com.Theeds.Component.Card.Render'
            }
        };

        constructor(elem:any, options:Object) {

            super(elem, options);
            sessionStorage.setItem("cards_search", JSON.stringify(options));


            let data:any = {"did":28,"url":"uid=2&","buildGroup":"bg0","source":"mysql","slice":1,"score":73333,"sort":0,"groups":[{"id":"card_lang_flag","root":"Top/classproperties/card/lang_flag","refinable":true,"categories":[{"path":"en","fullPath":"Top/classproperties/card/lang_flag/en","id":"Top/classproperties/card/lang_flag/en","zapId":"Top/classproperties/card/lang_flag/en","title":"en","categories":[]}]},{"id":"card_lang_title","root":"Top/classproperties/card/lang_title","refinable":true,"categories":[{"path":"english","fullPath":"Top/classproperties/card/lang_title/english","id":"Top/classproperties/card/lang_title/english","zapId":"Top/classproperties/card/lang_title/english","title":"English","categories":[]}]},{"id":"Source","root":"Top/source","refinable":true,"categories":[{"path":"mysql","fullPath":"Top/source/mysql","id":"Top/source/mysql","zapId":"Top/source/mysql","title":"mysql","categories":[]}]},{"id":"dataModelClass","root":"Top/datamodelclass","refinable":true,"categories":[{"path":"card","fullPath":"Top/datamodelclass/card","id":"Top/datamodelclass/card","zapId":"Top/datamodelclass/card","title":"card","categories":[]}]},{"id":"Language","root":"Top/language","refinable":true,"categories":[{"path":"en","fullPath":"Top/language/en","id":"Top/language/en","zapId":"Top/language/en","title":"en","categories":[]}]},{"id":"card_format_source","root":"Top/classproperties/card/format_source","refinable":true,"categories":[{"path":"3dexperiencelab.3ds.com","fullPath":"Top/classproperties/card/format_source/3dexperiencelab.3ds.com","id":"Top/classproperties/card/format_source/3dexperiencelab.3ds.com","zapId":"Top/classproperties/card/format_source/3dexperiencelab.3ds.com","title":"3dexperiencelab.3ds.com","categories":[]}]},{"id":"card_format_content","root":"Top/classproperties/card/format_content","refinable":true,"categories":[{"path":"blog","fullPath":"Top/classproperties/card/format_content/blog","id":"Top/classproperties/card/format_content/blog","zapId":"Top/classproperties/card/format_content/blog","title":"blog","categories":[]}]},{"id":"card_category_type","root":"Top/classproperties/card/category_type","refinable":true,"categories":[{"path":"life","fullPath":"Top/classproperties/card/category_type/life","id":"Top/classproperties/card/category_type/life","zapId":"Top/classproperties/card/category_type/life","title":"LIFE","categories":[]}]}],"metas":[{"name":"category_type","type":2,"value":"LIFE"},{"name":"deleted","type":0,"value":0},{"name":"format_content","type":2,"value":"blog"},{"name":"format_source","type":2,"value":"3dexperiencelab.3ds.com"},{"name":"hidden","type":0,"value":0},{"name":"image","type":2,"value":"http://3dexperiencelab.3ds.com/en/projects/life/organ_twins/slider/big/DSC02207.jpg"},{"name":"lang_flag","type":2,"value":"en"},{"name":"lang_title","type":2,"value":"English"},{"name":"link","type":2,"value":"http://3ds.co:3000/s/c198601a"},{"name":"start_date","type":0,"value":1447056000},{"name":"summary","type":2,"value":"Advances in 3D printing technology and virtual simulation are creating new opportunities to improve the quality of treatments and patient safety. Biomodex is innovating in this area by developing sophisticated software and fabricating life-like human organs that can be used by medical students to learn and by doctors to practice surgical procedures before proceeding with a live operation. The 3DEXPERIENCE Lab is involved in this project providing Biomodex with access to its FabLab and with assistance using the Dassault SystÃ¨mes? applications for organ design and for the manufacture of its first prototypes."},{"name":"tstamp","type":0,"value":1456498561},{"name":"uid","type":0,"value":2},{"name":"weight","type":0,"value":0},{"name":"fullurl","type":2,"value":"http://3dexperiencelab.3ds.com/en/projects/life/organ_twins/"},{"name":"title","type":3,"value":"Organ Twins"},{"name":"url","type":2,"value":"uid=2&"}]    };
            var el = MyElement.create({});
            document.body.appendChild(el);

            let service = eval('new ' + this.settings.search.adapter);
            //service.groups(this, this.settings.search);
            //service.customGroups(this, {});


            //this.search(this.settings.search);
            //this.infiniteScroll(this);
            //this.bindInputSearch(this);
        }

        bindInputSearch(context:any):void {
            let data:any;
            let value:any;

            $('#' + context.elem.attr('id') + '-search').bind("change paste keyup", function () {
                data = JSON.parse(sessionStorage.getItem('cards_search'));
                value = $(this).val();

                if (data.query != value) {
                    data.query = value;
                    data.offset = 0;
                    context.destroy();
                    context.search(data);
                }
            });
        }

        destroy():void {
            this.elem.masonry('destroy');
            this.elem.html('');
        }

        infiniteScroll(context:any):void {
            if (context.settings.infiniteScroll.enable === true) {
                $(window).scroll(function () {
                    if ($(window).scrollTop() == $(document).height() - $(window).height()) {
                        context.search(context.next(context.settings.search));
                    }
                });
            }
        }

        search(options:any):void {
            if (!options.query.trim())options.query += "#all";
            let conext:any = this;
            let elem:any;
            let values:any;

            $("select[data-exalead-group], select[data-exalead-group-custom]").each(function (index) {
                elem = $(this);

                if (null === (values = elem.val()))return;

                for (let k in values) {
                    if (options.query != '')options.query += " AND ";

                    if(elem.data('exalead-group') != undefined){
                        options.query += `${elem.data('exalead-group')}=(${values[k]})`;
                    } else {
                        options.query += `${elem.data('exalead-group-custom')}=(${values[k]})`;
                    }
                }


            }).promise().done(function () {
                eval('new ' + conext.settings.search.adapter).cards(conext, options);
                sessionStorage.setItem("cards_search", JSON.stringify(options));
            });
        }


        next(options:any):any {
            options.offset = options.offset + 1;
            return options;
        }

        masonry(context:any):any {
            return context.elem.masonry(context.settings.masonry);
        }
    }

    $.fn.cards = function (options:Object) {
        return new Plugin(this, options);
    };
}
