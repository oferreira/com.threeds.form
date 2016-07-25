/// <reference path="../../../../../bower_components/polymer-ts/polymer-ts.d.ts"/>
/// <reference path="../../../../Element/AbstractPolymerElement.ts" />
/// <reference path="../../../../Component/LandingPage/Element/Success/Download.ts" />
/// <reference path="../../../../Component/LandingPage/Element/Success/Video.ts" />


interface Window{
    tc_events_5(context:string, target:string, options:any):void;
}

namespace Com.Threeds.Component.LandingPage.Element.Success {

    import AbstractPolymerElement = Com.Threeds.Element.AbstractPolymerElement;
    import Download = Com.Threeds.Component.LandingPage.Element.Success.Download;
    import Video = Com.Threeds.Component.LandingPage.Element.Success.Video;

    @component('landingpage-success-element')
    @extend("div")
    export class Success extends AbstractPolymerElement {
        context:any;

        constructor(context:any, data:any) {
            super(data);
            this.context = context;

            if(typeof this.context.settings.form.callback.success == 'function'){
                this.context.settings.form.callback.success();
            }

            if (this.context.settings.type == 'video') {
                if(typeof window.tc_events_5 == "function"){
                    window.tc_events_5('this', 'page', {event : 'page', page_name: 'Landing_Pages/What_To_Market/Step3/Video', page_category: 'Landing_Page'});
                    console.log('tc_events_5', 'Landing_Pages/What_To_Market/Step3/Video');
                }
                this.appendChild(Video.create(this, data));
            } else if (this.context.settings.type == 'download') {
                if(typeof window.tc_events_5 == "function"){
                    window.tc_events_5('this', 'page', {event : 'page', page_name: 'Landing_Pages/What_To_Market/Step3/Download', page_category: 'Landing_Page'});
                    console.log('tc_events_5', 'Landing_Pages/What_To_Market/Step3/Download');
                }
                this.appendChild(Download.create(this, data));
            } else if (this.context.settings.type == 'unlock') {
                if(typeof window.tc_events_5 == "function"){
                    window.tc_events_5('this', 'page', {event : 'page', page_name: 'Landing_Pages/What_To_Market/Step3/Unlock', page_category: 'Landing_Page'});
                    console.log('tc_events_5', 'Landing_Pages/What_To_Market/Step3/Unlock');
                }
            }
        }

        public get settings():any {
            return this.context.settings;
        }

    }
}

Com.Threeds.Component.LandingPage.Element.Success.Success.register();

