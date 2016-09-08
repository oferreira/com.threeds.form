var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Com;
(function (Com) {
    var Threeds;
    (function (Threeds) {
        var Component;
        (function (Component) {
            var LandingPage;
            (function (LandingPage) {
                var Element;
                (function (Element) {
                    var Success;
                    (function (Success) {
                        var AbstractPolymerElement = Com.Threeds.Element.AbstractPolymerElement;
                        var Video = (function (_super) {
                            __extends(Video, _super);
                            function Video(context, data) {
                                _super.call(this, data);
                                var tpl = "     <div class=\"ds-lpd-info-form ds-block-ty ds-block-video\">\n\n                                <div class=\"ds-info-ty\">\n\n                                     <div class=\"morph-button morph-button-modal morph-button-modal-4 morph-button-fixed \">\n                                        <button class=\"ds-btn-video\" type=\"button\">" + context.settings.action.label + "</button>\n                                        <div class=\"morph-content\">\n                                            <span class=\"icon icon-close\">Close the dialog</span>\n                                            <div id=\"ds-player\"></div>\n                                        </div>\n                                    </div>\n\n                                </div>\n\n                                <div class=\"ds-lpd-info-blur\" style=\"background-image: url('" + context.settings.backgroundImage + "');\"></div>\n\n                            </div>\n\n                            <form class=\"ds-form ds-ldp-form-container ds-dl-info\">\n\n                                <p>" + data.content + "</p>\n\n                            </form>\n\n                            <div class=\"ds-ldp-form-contact\">\n\n                                <p>" + context.settings.accelerate.content + "</p>\n                                <a href=\"" + context.settings.accelerate.url + "\" target=\"_blank\" class=\"ds-btn ds-btn-shout\">" + context.settings.accelerate.label + "</a>\n\n                            </div>";
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
                                }
                                else {
                                    var player = new YT.Player('ds-player', {
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
                            Video.prototype.getYouTubeIdFromURL = function (url) {
                                var matches = url.match(/^.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]{11,11}).*/);
                                return (matches != null && typeof matches[1] == 'string' ? matches[1] : false);
                            };
                            Video = __decorate([
                                component('landingpage-success-video-element'),
                                extend("div")
                            ], Video);
                            return Video;
                        })(AbstractPolymerElement);
                        Success.Video = Video;
                    })(Success = Element.Success || (Element.Success = {}));
                })(Element = LandingPage.Element || (LandingPage.Element = {}));
            })(LandingPage = Component.LandingPage || (Component.LandingPage = {}));
        })(Component = Threeds.Component || (Threeds.Component = {}));
    })(Threeds = Com.Threeds || (Com.Threeds = {}));
})(Com || (Com = {}));
Com.Threeds.Component.LandingPage.Element.Success.Video.register();
