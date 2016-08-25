interface Window {
    tc_events_5(context:string, target:string, options:any):void;
}


namespace Com.Threeds.Analytics {

    export class TagManager {

        public settings:any = {
            event: 'page',
            page_name: '', // {page_category}/What_To_Market/{hostname}/{pathname}/Step2/Form
            page_category: '' // Landing_Page
        };


        public static create(context:string, target:string, options:any) {
            let options:any = $.extend({}, this.settings, options);
            options.page_name.replace(/\{page_category\}/ig, options.page_category);

            let pathname:string = window.location.pathname;
            if(window.location.hash != ''){
                pathname += window.location.hash;
            }

            options.page_name = options.page_name.replace('{hostname}', window.location.hostname);
            options.page_name = options.page_name.replace('{pathname}', pathname);
            options.page_name = options.page_name.replace('{page_category}', options.page_category);
            options.page_name = options.page_name.replace('///', '/');
            options.page_name = options.page_name.replace('//', '/');

            console.log('tc', options.page_name);
            if (typeof window.tc_events_5 == "function") {
                window.tc_events_5(context, target, options);
            }
        }

    }
}