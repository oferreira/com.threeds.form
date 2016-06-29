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

            let tpl = `     <div class="ds-lpd-info-form ds-block-ty ds-block-video">

                                <div class="ds-info-ty">

                                     <div class="morph-button morph-button-modal morph-button-modal-4 morph-button-fixed ">
                                        <button class="ds-btn-video" type="button">${context.settings.action.label}</button>
                                        <div class="morph-content">
                                            <span class="icon icon-close">Close the dialog</span>
                                            <div id="ds-player"></div>
                                        </div>
                                    </div>

                                </div>

                                <div class="ds-lpd-info-blur" style="background-image: url('${context.settings.backgroundImage}');"></div>

                            </div>

                            <form class="ds-form ds-ldp-form-container ds-dl-info">

                                <p>${data.content}</p>

                            </form>

                            <div class="ds-ldp-form-contact">

                                <p>${context.settings.accelerate.content}</p>
                                <a href="${context.settings.accelerate.url}" target="_blank" class="ds-btn ds-btn-shout">${context.settings.accelerate.label}</a>

                            </div>`;

            this.innerHTML = tpl;

            if (!this.getYouTubeIdFromURL(context.settings.action.url)) {
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
                        jwplayer().stop();
                        return false;
                    }
                });

                jwplayer.key = "Jk0VV9U22TDjyK6vtdAq9N/pO+cp28R9qfwoMcK5hNY=";
                jwplayer(this.querySelector('#ds-player')).setup({
                    "file": context.settings.action.url,
                    "image": context.settings.action.image,
                    "skin": '/assets/3ds-player/3dsSkin.xml',
                    "height": 360,
                    "width": 640
                });
            } else {
                let player:any = new YT.Player('ds-player', {
                    height: '390',
                    width: '640',
                    videoId: this.getYouTubeIdFromURL(context.settings.action.url)
                });

                new UIMorphingButton(this.querySelector('.morph-button'), {
                    closeEl: '.icon-close',
                    onBeforeOpen: function () {
                        return false;
                    },
                    onAfterOpen: function () {
                        player.playVideo();
                    },
                    onBeforeClose: function () {
                        return false;
                    },
                    onAfterClose: function () {
                        player.stopVideo();
                        return false;
                    }
                });

            }
        }

        getYouTubeIdFromURL(url:string):any {
            let matches:any = url.match(/^.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]{11,11}).*/);
            return (matches!=null && typeof matches[1] == 'string' ? matches[1] : false);
        }

    }
}

Com.Threeds.Component.LandingPage.Element.Success.Video.register();