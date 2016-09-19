interface Window {
    tc_events_5(context:string, target:string, options:any):void;
}


namespace Com.Threeds.Analytics {

    export class TagManager {

        public static settings:any = {
            event: 'page',
            page_name: '', // {page_category}/What_To_Market/{hostname}/{pathname}/Step2/Form
            page_category: '' // Landing_Page
        };


        public static create(context:string, target:string, options:any) {

            let options:any = $.extend({}, TagManager.settings, options);
            options.event = 'page';
            options.page_name.replace(/\{page_category\}/ig, options.page_category);
            let pathname:string = window.location.pathname;
            if(window.location.hash != ''){
                pathname += window.location.hash;
            }

            options.page_name = options.page_name.replace('{env}', TagManager.env());
            options.page_name = options.page_name.replace('{hostname}', window.location.hostname);
            options.page_name = options.page_name.replace('{pathname}', pathname);
            options.page_name = options.page_name.replace('{page_category}', options.page_category);
            options.page_name = options.page_name.replace('///', '/');
            options.page_name = options.page_name.replace('//', '/');
            options.page_name = options.page_name.replace('#', '/');


            console.log(options);

            if (typeof window.tc_events_5 == "function") {
                window.tc_events_5('this', target, options);
            }
        }

        public static env():string {

            let host:string = window.location.host;
            //let host:string = 'http://offer.3ds.com/engineered-fly#improve-engineering-productivity';


            if (host.indexOf("ifwe") !=-1) {
                return 'ifwe';
            } else if (host.indexOf("wtm") !=-1 || host.indexOf("offer") !=-1) {
                return 'wtm';
            } else if (host.indexOf("localhost") !=-1) {
                return 'localhost';
            } else {
                return window.location.host;
            }
        }

    }
}