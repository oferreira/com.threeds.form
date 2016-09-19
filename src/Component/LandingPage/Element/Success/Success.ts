/// <reference path="../../../../../bower_components/polymer-ts/polymer-ts.d.ts"/>
/// <reference path="../../../../Element/AbstractPolymerElement.ts" />
/// <reference path="../../../../Component/LandingPage/Element/Success/Download.ts" />
/// <reference path="../../../../Component/LandingPage/Element/Success/Video.ts" />
/// <reference path="../../../../Analytics/TagManager.ts" />


namespace Com.Threeds.Component.LandingPage.Element.Success {

    import AbstractPolymerElement = Com.Threeds.Element.AbstractPolymerElement;
    import Download = Com.Threeds.Component.LandingPage.Element.Success.Download;
    import Video = Com.Threeds.Component.LandingPage.Element.Success.Video;
    import TagManager = Com.Threeds.Analytics.TagManager;

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
                TagManager.create('this', 'page', {
                    page_name: '{page_category}/{env}/{pathname}/Step3/Video',
                    page_category: 'Landing_Page'
                });
                this.appendChild(Video.create(this, data));
            } else if (this.context.settings.type == 'download') {
                TagManager.create('this', 'page', {
                    page_name: '{page_category}/{env}/{pathname}/Step3/Download',
                    page_category: 'Landing_Page'
                });
                this.appendChild(Download.create(this, data));
            } else if (this.context.settings.type == 'unlock') {
                TagManager.create('this', 'page', {
                    page_name: '{page_category}/{env}/{pathname}/Step3/Unlock',
                    page_category: 'Landing_Page'
                });
            }
        }

        public get settings():any {
            return this.context.settings;
        }

    }
}

Com.Threeds.Component.LandingPage.Element.Success.Success.register();

