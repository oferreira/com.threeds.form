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

                                    <div class="morph-button morph-button-modal morph-button-modal-4 morph-button-fixed ">
                                        <button type="button">${context.settings.action.label}</button>
                                        <div class="morph-content">
                                            <span class="icon icon-close">Close the dialog</span>
                                            <div id="myDiv">${context.settings.action.content}</div>
                                        </div>
                                    </div>

                                </form>
                            </div>

                            <div class="ds-ldp-form-contact">
                                <p>${context.settings.accelerate.content}</p>
                                <a href="${context.settings.accelerate.url}" target="_blank" class="ds-btn ds-btn-shout">${context.settings.accelerate.label}</a>
                            </div>
                        </div>`;

            this.innerHTML = tpl;

            new UIMorphingButton(this.querySelector('.morph-button'), {
                closeEl: '.icon-close',
                onBeforeOpen: function () {
                    return false;
                },
                onAfterOpen: function () {
                    jwplayer().play();
                },
                onBeforeClose: function () {
                    return false;
                },
                onAfterClose: function () {
                    jwplayer().pause();
                    return false;
                }
            });

            jwplayer.key = "Jk0VV9U22TDjyK6vtdAq9N/pO+cp28R9qfwoMcK5hNY=";
            jwplayer(this.querySelector('#myDiv')).setup({
                "file": context.settings.action.url,
                "image": context.settings.action.image,
                //"skin": 'http://www.3ds.com/templates/3ds-player/3dsSkin/3dsSkin.xml',
                "height": 360,
                "width": 640
            });


        }

    }
}

Com.Threeds.Component.LandingPage.Element.Success.Video.register();