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
                        var TagManager = Com.Threeds.Analytics.TagManager;
                        var Video = (function (_super) {
                            __extends(Video, _super);
                            function Video(context, data) {
                                _super.call(this, data);
                                var tpl = "     <div class=\"ds-lpd-info-form ds-block-ty ds-block-video\">\n\n                                <div class=\"ds-info-ty\">\n\n                                     <div class=\"morph-button morph-button-modal morph-button-modal-4 morph-button-fixed \">\n                                        <a href=\"#modal-1\" rel=\"modal:open\" class=\"ds-btn-video test\">" + context.settings.action.label + "</a>\n                                    </div>\n\n                                </div>\n\n                                <div class=\"ds-lpd-info-blur\" style=\"background-image: url('" + context.settings.backgroundImage + "');\"></div>\n\n                            </div>\n\n                            <form class=\"ds-form ds-ldp-form-container ds-dl-info\">\n\n                                <p>" + data.content + "</p>\n\n                            </form>\n\n                            <div class=\"ds-ldp-form-contact\">\n\n                                <p>" + context.settings.accelerate.content + "</p>\n                                <a href=\"" + context.settings.accelerate.url + "\" target=\"_blank\" class=\"ds-btn ds-btn-shout\">" + context.settings.accelerate.label + "</a>\n\n                            </div>\n\n                            <div id=\"modal-1\" style=\"display:none\">\n                               <div id=\"ds-player\"></div>\n                            </div>\n\n                            <div class=\"modal\">\n                                <div class=\"modal-inner\">\n                                    <a rel=\"modal:close\">\u00D7</a>\n                                    <div class=\"modal-content\"></div>\n                                </div>\n                            </div>";
                                this.innerHTML = tpl;
                                if (!this.getYouTubeIdFromURL(context.settings.action.url)) {
                                    var modal = new VanillaModal({
                                        onOpen: function () {
                                            TagManager.create('this', 'page', {
                                                page_name: '{page_category}/{env}/{pathname}/Step3/Video/Play',
                                                page_category: 'Landing_Page'
                                            });
                                            jwplayer().play();
                                        },
                                        onClose: function () {
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
                                        "height": ((window.innerHeight * 90) / 100),
                                        "width": ((window.innerWidth * 90) / 100)
                                    });
                                }
                                else {
                                    var player = new YT.Player('ds-player', {
                                        "height": ((window.innerHeight * 90) / 100),
                                        "width": ((window.innerWidth * 90) / 100),
                                        videoId: this.getYouTubeIdFromURL(context.settings.action.url)
                                    });
                                    var modal = new VanillaModal({
                                        onOpen: function () {
                                            TagManager.create('this', 'page', {
                                                page_name: '{page_category}/{env}/{pathname}/Step3/Video/Play',
                                                page_category: 'Landing_Page'
                                            });
                                            player.playVideo();
                                        },
                                        onClose: function () {
                                            TagManager.create('this', 'page', {
                                                page_name: '{page_category}/{env}/{pathname}/Step3/Video/Stop',
                                                page_category: 'Landing_Page'
                                            });
                                            player.stopVideo();
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
