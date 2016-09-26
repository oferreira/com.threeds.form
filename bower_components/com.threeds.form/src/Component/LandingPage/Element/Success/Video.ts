/// <reference path="../../../../../bower_components/polymer-ts/polymer-ts.d.ts"/>
/// <reference path="../../../../Element/AbstractPolymerElement.ts" />
/// <reference path="../../../../../typings/jwplayer/jwplayer.d.ts" />

namespace Com.Threeds.Component.LandingPage.Element.Success{

    import AbstractPolymerElement = Com.Threeds.Element.AbstractPolymerElement;

    @component('landingpage-success-video-element')
    @extend("div")
    export class Video extends AbstractPolymerElement {
        context:any;

        constructor(context:any, data:any) {
            super(data);


            let tpl = `<div class="ds-ldp-global-step-2">
                            <div class="ds-ldp-global-container">
                                <div id="ldp" class="ds-lpd-info-form">
                                    <div class="ds-landingpage" is="landingpage-element">
                                        <h3 class="ds-title-ty">${data.title}</h3>
                                        <div class="ds-lpd-info-no-blur" style="background-image: url('${context.settings.backgroundImage}');"></div>
                                    </div>
                                </div>
                                <form class="ds-form ds-ldp-form-container ds-dl-info">
                                    <p>${data.content}</p>
                                    <a href="${context.settings.action.url}" class="ds-link ds-link-arrow-left">
                                        ${context.settings.action.label}<br />
                                        <span>${context.settings.action.content}</span>
                                    </a>
                                </form>
                            </div>


                        <div id="myDiv">This text will be replaced with a player.</div>

                            <div class="ds-ldp-form-contact">
                                <p>${context.settings.accelerate.content}</p>
                                <a href="${context.settings.accelerate.url}" target="_blank" class="ds-btn ds-btn-shout">${context.settings.accelerate.label}</a>
                            </div>
                        </div>`;

            this.innerHTML = tpl;

            /*jwplayer.key="Jk0VV9U22TDjyK6vtdAq9N/pO+cp28R9qfwoMcK5hNY=";
            jwplayer("myDiv").setup({
                "file": "http://example.com/myVideo.mp4",
                "image": "http://example.com/myImage.png",
                "height": 360,
                "width": 640
            });*/
        }

    }
}

Com.Threeds.Component.LandingPage.Element.Success.Video.register();