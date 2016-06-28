/// <reference path="../../../../bower_components/polymer-ts/polymer-ts.d.ts"/>
/// <reference path="../../../Element/AbstractPolymerElement.ts" />
/// <reference path="../../../Component/LandingPage/Element/Success/Download.ts" />
/// <reference path="../../../Component/LandingPage/Element/Success/Video.ts" />

namespace Com.Threeds.Component.LandingPage.Element {

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
                this.appendChild(Video.create(this, data));
            } else if (this.context.settings.type == 'download') {
                Download.create(this, data)
                this.appendChild(Download.create(this, data));
            }

        }

        public get settings():any {
            return this.context.settings;
        }

    }
}

Com.Threeds.Component.LandingPage.Element.Success.register();

