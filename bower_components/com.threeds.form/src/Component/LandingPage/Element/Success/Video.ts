/// <reference path="../../../../../bower_components/polymer-ts/polymer-ts.d.ts"/>
/// <reference path="../../../../Element/AbstractPolymerElement.ts" />
/// <reference path="../../../../../typings/jwplayer/jwplayer.d.ts" />
/// <reference path="../../../../../typings/youtube/youtube.d.ts" />
/// <reference path="../../../../Analytics/TagManager.ts" />

interface VanillaModal {
    onOpen(): void;
    onClose(): void;
}

interface VanillaModalStatic {
    new(options: any): VanillaModal;
}
declare var VanillaModal: VanillaModalStatic;

interface JWPlayerStatic {
    key:string;
}

interface JWPlayerStatic {
    (id?: string): JWPlayer;
    (elem?: Element): JWPlayer;
}

namespace Com.Threeds.Component.LandingPage.Element.Success{

    import AbstractPolymerElement = Com.Threeds.Element.AbstractPolymerElement;
    import TagManager = Com.Threeds.Analytics.TagManager;

    @component('landingpage-success-video-element')
    @extend("div")
    export class Video extends AbstractPolymerElement {
        context:any;

        constructor(context:any, data:any) {
            super(data);

            let tpl = `     <div class="ds-lpd-info-form ds-block-ty ds-block-video">

                                <div class="ds-info-ty">

                                     <div class="morph-button morph-button-modal morph-button-modal-4 morph-button-fixed ">
                                        <a href="#modal-1" rel="modal:open" class="ds-btn-video test">${context.settings.action.label}</a>
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

                            </div>

                            <div id="modal-1" style="display:none">
                               <div id="ds-player"></div>
                            </div>

                            <div class="modal">
                                <div class="modal-inner">
                                    <a rel="modal:close">×</a>
                                    <div class="modal-content"></div>
                                </div>
                            </div>`;

            this.innerHTML = tpl;

            if (!this.getYouTubeIdFromURL(context.settings.action.url)) {

                const modal = new VanillaModal({
                    onOpen : function () {
                        TagManager.create('this', 'page', {
                            page_name: '{page_category}/{env}/{pathname}/Step3/Video/Play',
                            page_category: 'Landing_Page'
                        });
                        jwplayer().play();
                    },
                    onClose : function (){
                        TagManager.create('this', 'page', {
                            page_name: '{page_category}/{env}/{pathname}/Step3/Video/Stop',
                            page_category: 'Landing_Page'
                        });
                        jwplayer().stop();
                    }
                });

                jwplayer.key = "Jk0VV9U22TDjyK6vtdAq9N/pO+cp28R9qfwoMcK5hNY=";
                jwplayer(this.querySelector('#ds-player')).setup({
                    "file": context.settings.action.url,
                    "image": context.settings.action.image,
                    "skin": '/assets/3ds-player/3dsSkin.xml',
                    "height": ((window.innerHeight * 90) / 100) ,
                    "width": ((window.innerWidth  * 90) / 100)
                });

            } else {
                let player:any = new YT.Player('ds-player', {
                    "height": ((window.innerHeight * 90) / 100) ,
                    "width": ((window.innerWidth  * 90) / 100),
                    videoId: this.getYouTubeIdFromURL(context.settings.action.url)
                });

                const modal = new VanillaModal({
                    onOpen : function () {
                        TagManager.create('this', 'page', {
                            page_name: '{page_category}/{env}/{pathname}/Step3/Video/Play',
                            page_category: 'Landing_Page'
                        });
                        player.playVideo();
                    },
                    onClose : function (){
                        TagManager.create('this', 'page', {
                            page_name: '{page_category}/{env}/{pathname}/Step3/Video/Stop',
                            page_category: 'Landing_Page'
                        });
                        player.stopVideo();
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