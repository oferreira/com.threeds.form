$(function () {addEventListener('WebComponentsReady', function () {
var Com;
(function (Com) {
    var Theeds;
    (function (Theeds) {
        Theeds._config = {
            form: {
                id: '32f91ef071fe9e8974f3e6468c36312d',
                adapter: 'Com.Theeds.Service.Adapter.Neolane',
                url: 'http://dassault-dev.neolane.net/dsx/lp_api.jssp'
            }
        };
    })(Theeds = Com.Theeds || (Com.Theeds = {}));
})(Com || (Com = {}));
var Com;
(function (Com) {
    var Theeds;
    (function (Theeds) {
        Theeds._locale = {
            'en': {
                'error': {
                    'field_require': 'This field is required',
                    'email_invalid': 'A valid email address is required',
                    'checkbox_require': 'Please select the check box'
                }
            },
            'fr': {}
        };
    })(Theeds = Com.Theeds || (Com.Theeds = {}));
})(Com || (Com = {}));
var Com;
(function (Com) {
    var Theeds;
    (function (Theeds) {
        Theeds._parameters = {
            'translator': {
                'lang': 'en',
                'adapter': 'Com.Theeds._locale'
            }
        };
    })(Theeds = Com.Theeds || (Com.Theeds = {}));
})(Com || (Com = {}));
var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Com;
(function (Com) {
    var Theeds;
    (function (Theeds) {
        var Element;
        (function (Element) {
            var AbstractPolymerElement = function (_super) {
                __extends(AbstractPolymerElement, _super);
                function AbstractPolymerElement(data) {
                    _super.call(this);
                }
                return AbstractPolymerElement;
            }(polymer.Base);
            Element.AbstractPolymerElement = AbstractPolymerElement;
        })(Element = Theeds.Element || (Theeds.Element = {}));
    })(Theeds = Com.Theeds || (Com.Theeds = {}));
})(Com || (Com = {}));
var Com;
(function (Com) {
    var Theeds;
    (function (Theeds) {
        var I18n;
        (function (I18n) {
            var Translator = function () {
                function Translator(options) {
                    this.lang = options.lang;
                    this.adapter = options.adapter;
                }
                Object.defineProperty(Translator, "instance", {
                    get: function () {
                        if (Translator._instance == undefined) {
                            Translator._instance = new Com.Theeds.I18n.Translator(Object.find(Com.Theeds._parameters, 'translator'));
                        }
                        return Translator._instance;
                    },
                    enumerable: true,
                    configurable: true
                });
                Translator.prototype.t = function (key) {
                    return Object.find(eval(this.adapter), this.lang + "." + key);
                };
                return Translator;
            }();
            I18n.Translator = Translator;
            $.i18n = function () {
                return Com.Theeds.I18n.Translator.instance;
            };
        })(I18n = Theeds.I18n || (Theeds.I18n = {}));
    })(Theeds = Com.Theeds || (Com.Theeds = {}));
})(Com || (Com = {}));
Object.find = function (o, s) {
    s = s.replace(/\[(\w+)\]/g, '.$1');
    s = s.replace(/^\./, '');
    var a = s.split('.');
    for (var i = 0, n = a.length; i < n; ++i) {
        var k = a[i];
        if (k in o) {
            o = o[k];
        } else {
            return;
        }
    }
    return o;
};
var Com;
(function (Com) {
    var Theeds;
    (function (Theeds) {
        var Plugin;
        (function (Plugin) {
            var AbstractPlugin = function () {
                function AbstractPlugin(elem, options) {
                    this.settings = {};
                    this.elem = elem;
                    this.settings = $.extend({}, this.settings, options);
                }
                AbstractPlugin.prototype.render = function (type, data) {
                    return eval("new " + this.settings.render.adapter + "()")[type](this, data);
                };
                AbstractPlugin.prototype.service = function (name) {
                    return eval('new ' + this.settings[name].adapter);
                };
                return AbstractPlugin;
            }();
            Plugin.AbstractPlugin = AbstractPlugin;
        })(Plugin = Theeds.Plugin || (Theeds.Plugin = {}));
    })(Theeds = Com.Theeds || (Com.Theeds = {}));
})(Com || (Com = {}));
var Com;
(function (Com) {
    var Theeds;
    (function (Theeds) {
        var Service;
        (function (Service) {
            var ServiceManager = function () {
                function ServiceManager() {
                    if (typeof ServiceManager.prototype.instance === 'undefined') {}
                }
                ServiceManager.prototype.get = function (name) {
                    return eval('new Service.' + name.charAt(0).toUpperCase() + name.slice(1));
                };
                return ServiceManager;
            }();
            Service.ServiceManager = ServiceManager;
            $.fn.service = function (name) {
                return new ServiceManager().get(name);
            };
        })(Service = Theeds.Service || (Theeds.Service = {}));
    })(Theeds = Com.Theeds || (Com.Theeds = {}));
})(Com || (Com = {}));
var Com;
(function (Com) {
    var Theeds;
    (function (Theeds) {
        var Validator;
        (function (Validator) {
            var AbstractValidator = function () {
                function AbstractValidator() {}
                return AbstractValidator;
            }();
            Validator.AbstractValidator = AbstractValidator;
        })(Validator = Theeds.Validator || (Theeds.Validator = {}));
    })(Theeds = Com.Theeds || (Com.Theeds = {}));
})(Com || (Com = {}));
var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Com;
(function (Com) {
    var Theeds;
    (function (Theeds) {
        var Validator;
        (function (Validator) {
            var AbstractValidator = Com.Theeds.Validator.AbstractValidator;
            var Email = function (_super) {
                __extends(Email, _super);
                function Email() {
                    _super.apply(this, arguments);
                }
                Email.isValid = function (value) {
                    if (!/^.+@.+$/.test(value)) {
                        return $.i18n().t('error.email_invalid');
                    }
                    return true;
                };
                return Email;
            }(AbstractValidator);
            Validator.Email = Email;
        })(Validator = Theeds.Validator || (Theeds.Validator = {}));
    })(Theeds = Com.Theeds || (Com.Theeds = {}));
})(Com || (Com = {}));
var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Com;
(function (Com) {
    var Theeds;
    (function (Theeds) {
        var Validator;
        (function (Validator) {
            var AbstractValidator = Com.Theeds.Validator.AbstractValidator;
            var Require = function (_super) {
                __extends(Require, _super);
                function Require() {
                    _super.apply(this, arguments);
                }
                Require.isValid = function (value) {
                    if (value == '' || value == undefined) {
                        return $.i18n().t('error.field_require');
                    }
                    return true;
                };
                return Require;
            }(AbstractValidator);
            Validator.Require = Require;
        })(Validator = Theeds.Validator || (Theeds.Validator = {}));
    })(Theeds = Com.Theeds || (Com.Theeds = {}));
})(Com || (Com = {}));
var Com;
(function (Com) {
    var Theeds;
    (function (Theeds) {
        var Component;
        (function (Component) {
            var Card;
            (function (Card_1) {
                var Card = function () {
                    function Card(data) {
                        this.categorys = [];
                        this._displayFormat = 'portrait';
                        for (var k in data.metas) {
                            if (data.metas[k].name == "title") this.title = data.metas[k].value;
                            if (data.metas[k].name == "summary") this.summary = data.metas[k].value;
                            if (data.metas[k].name == "link") this.link = data.metas[k].value;
                            if (data.metas[k].name == "image") this.image = data.metas[k].value;
                            if (data.metas[k].name == "category_type") this.categorys.push(data.metas[k].value);
                            if (data.metas[k].name == "brand") this.brand = data.metas[k].value;
                            if (data.metas[k].name == "subtitle") this.subTitle = data.metas[k].value;
                            if (data.metas[k].name == "format_source") this.formatSource = data.metas[k].value;
                            if (data.metas[k].name == "format_content") this.formatContent = data.metas[k].value;
                            if (data.metas[k].name == "start_date") this.startDate = new Date(data.metas[k].value * 1000);
                        }
                    }
                    Object.defineProperty(Card.prototype, "displayFormat", {
                        get: function () {
                            return this._displayFormat;
                        },
                        set: function (value) {
                            this._displayFormat = value;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Card.prototype.appendTitleRender = function (elem) {
                        if (this.title !== undefined) {
                            elem.append("<h5 class=\"card-title\">" + this.title + "</h5>");
                        }
                    };
                    Card.prototype.appendSubTitleRender = function (elem) {
                        if (this.subTitle !== undefined) {
                            elem.append("<div class=\"card-sub-title\">" + this.subTitle + "</div>");
                        }
                    };
                    Card.prototype.appendDateRender = function (elem) {
                        if (this.startDate !== undefined) {
                            elem.append("<h4 class=\"card-text card-date\">" + this.startDate.getDay() + "/" + this.startDate.getMonth() + "/" + this.startDate.getFullYear() + "</h4>");
                        }
                    };
                    Card.prototype.appendSummaryRender = function (elem) {
                        if (this.summary !== undefined) {
                            elem.append("<div class=\"card-text block-txt\">" + this.summary + "</div>");
                        }
                    };
                    Card.prototype.appendButtonRender = function (elem) {
                        if (this.link !== undefined) {
                            var label = 'Read more';
                            if (this.formatSource !== undefined && decodeURIComponent(this.formatSource).indexOf("jobs") != -1) {
                                label = 'Apply';
                            }
                            if (this.formatSource !== undefined && decodeURIComponent(this.formatSource).indexOf("customer-stories") != -1) {
                                label = 'Discover';
                            }
                            if (this.formatSource !== undefined && decodeURIComponent(this.formatSource).indexOf("events") != -1) {
                                label = 'Subscribe';
                            }
                            elem.append("<div class=\"card-footer-right txt-right\"><a class=\"btn-old btn-shout\" href=\"" + this.link + "\" title=\"" + this.title + "\">" + label + "</a></div>");
                        }
                    };
                    Card.prototype.appendImageRender = function (elem) {
                        if (this.link !== undefined && this.link.indexOf("youtube") != -1 && this.link.indexOf("v=") != -1) {
                            var id = this.getUrlParam(this.link, 'v');
                            elem.append("<iframe width=\"100%\" height=\"" + this.videoHeight() + "\" src=\"https://www.youtube.com/embed/" + id + "?rel=0&controls=0&showinfo=0\" frameborder=\"0\" allowfullscreen></iframe>");
                        } else if (this.link !== undefined && this.link.indexOf("youtube") != -1) {
                            var id = this.link.substr(this.link.lastIndexOf('/') + 1);
                            elem.append("<iframe width=\"100%\" height=\"100%\" style=\"min-height: " + this.videoHeight() + "px; \" src=\"https://www.youtube.com/embed/" + id + "?rel=0&controls=0&showinfo=0\" frameborder=\"0\" allowfullscreen></iframe>");
                        } else if (this.image !== undefined) {
                            elem.append("<figure class=\"card-img\"><img src=\"" + this.image + "\" alt=\"" + this.title + "\" width=\"100%\" /></figure>");
                        }
                    };
                    Card.prototype.appendBackgroundImageRender = function (elem) {
                        if (this.image !== undefined) {
                            elem.addClass('card-format-landscape').css("background-color", "transparent").css("background-image", "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(" + this.image + ")").css("background-repeat", "repeat, no-repeat").css("background-attachment", "scroll, scroll").css("background-position", "0% 0%, center center").css("background-clip", "border-box, border-box").css("background-origin", "padding-box, padding-box").css("background-size", "cover");
                        }
                    };
                    Card.prototype.getUrlParam = function (url, param) {
                        var results = new RegExp('[\?&]' + param + '=([^&#]*)').exec(url);
                        return results[1] || 0;
                    };
                    Card.prototype.isVideo = function () {
                        if (this.link !== undefined && this.link.indexOf("youtube") != -1 && this.link.indexOf("v=") != -1) {
                            return true;
                        } else if (this.link !== undefined && this.link.indexOf("youtube") != -1) {
                            return true;
                        }
                        return false;
                    };
                    Card.prototype.videoHeight = function () {
                        if (this.isLandscape()) return 350;
                        return 250;
                    };
                    Card.prototype.isLandscape = function () {
                        if (this._displayFormat == 'landscape') return true;
                        return false;
                    };
                    Card.prototype.isImage = function () {
                        if (this.formatSource !== undefined && this.formatSource.indexOf("3dexperiencelab") != -1) return true;
                        return false;
                    };
                    Card.prototype.uri = function (text) {
                        var tmp = text.replace(/^[^-_a-zA-Z]+/, '').replace(/^-(?:[-0-9]+)/, '-');
                        return (tmp && tmp.replace(/[^-_a-zA-Z0-9]+/g, '-')).toLowerCase();
                    };
                    Card.prototype.render = function () {
                        var container = $('<div>').addClass('card-container');
                        var article = $('<article>').addClass('card  brand-color');
                        var footer = $('<footer>').addClass('footer-card');
                        if (this.isLandscape()) {
                            container.addClass('pure-u-1-1 pure-u-sm-1-2  pure-u-md-2-4 pure-u-lg-2-4 ');
                        } else {
                            container.addClass('pure-u-1-1 pure-u-sm-1-2 pure-u-md-1-4 pure-u-lg-1-4');
                        }
                        for (var k in this.categorys) {
                            container.addClass("card-category-type-".concat(this.uri(this.categorys[k])));
                        }
                        container.addClass("card-format-content-".concat(this.uri(this.formatContent)));
                        if (this.isImage()) {
                            this.appendBackgroundImageRender(article);
                            var front = $('<div>').addClass('card-front');
                            var back = $('<div>').addClass('card-back');
                            this.appendImageRender(front);
                            this.appendSummaryRender(front);
                            this.appendSubTitleRender(front);
                            this.appendTitleRender(front);
                            this.appendDateRender(front);
                            front.find('figure img').css('visibility', 'hidden');
                            front.find('.card-text.block-txt').css('visibility', 'hidden');
                            this.appendImageRender(back);
                            this.appendTitleRender(back);
                            this.appendSubTitleRender(back);
                            this.appendDateRender(back);
                            this.appendSummaryRender(back);
                            back.find('figure img').css('visibility', 'hidden');
                            article.append(front).append(back).wrapInner($('<a>').attr('href', this.link));
                        } else {
                            this.appendImageRender(article);
                            this.appendTitleRender(article);
                            this.appendSubTitleRender(article);
                            this.appendDateRender(article);
                            this.appendSummaryRender(article);
                            if (!this.isVideo()) {
                                this.appendButtonRender(footer);
                            }
                            article.append(footer);
                        }
                        return container.append(article.append(footer));
                    };
                    return Card;
                }();
                Card_1.Card = Card;
            })(Card = Component.Card || (Component.Card = {}));
        })(Component = Theeds.Component || (Theeds.Component = {}));
    })(Theeds = Com.Theeds || (Com.Theeds = {}));
})(Com || (Com = {}));
var Com;
(function (Com) {
    var Theeds;
    (function (Theeds) {
        var Component;
        (function (Component) {
            var Card;
            (function (Card) {
                var Cards = function () {
                    function Cards(data) {}
                    return Cards;
                }();
                Card.Cards = Cards;
            })(Card = Component.Card || (Component.Card = {}));
        })(Component = Theeds.Component || (Theeds.Component = {}));
    })(Theeds = Com.Theeds || (Com.Theeds = {}));
})(Com || (Com = {}));
var Com;
(function (Com) {
    var Theeds;
    (function (Theeds) {
        var Component;
        (function (Component) {
            var Card;
            (function (Card) {
                var Image = function () {
                    function Image() {}
                    Image.prototype.gcd = function (w, h) {
                        return h == 0 ? w : this.gcd(h, w % h);
                    };
                    return Image;
                }();
                Card.Image = Image;
            })(Card = Component.Card || (Component.Card = {}));
        })(Component = Theeds.Component || (Theeds.Component = {}));
    })(Theeds = Com.Theeds || (Com.Theeds = {}));
})(Com || (Com = {}));
var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Com;
(function (Com) {
    var Theeds;
    (function (Theeds) {
        var Component;
        (function (Component) {
            var Card;
            (function (Card) {
                var MyBehavior = function (_super) {
                    __extends(MyBehavior, _super);
                    function MyBehavior() {
                        _super.apply(this, arguments);
                    }
                    MyBehavior.prototype.onButtonWasClicked = function (e) {
                        console.log('event "greet-event" received');
                    };
                    __decorate([listen("greet-event")], MyBehavior.prototype, "onButtonWasClicked", null);
                    return MyBehavior;
                }(polymer.Base);
                Card.MyBehavior = MyBehavior;
                var MyElement = function (_super) {
                    __extends(MyElement, _super);
                    function MyElement(data) {
                        _super.call(this);
                        this.greet = 'Hello';
                    }
                    MyElement.prototype.greetChanged = function (newValue, oldValue) {
                        console.log("greet has changed from " + oldValue + " to " + newValue);
                    };
                    MyElement.prototype.greetAll = function (test) {
                        return test + " to all";
                    };
                    MyElement.prototype.handleClick = function (e) {
                        this.greet = "Holà";
                        this.fire("greet-event");
                    };
                    MyElement.prototype.ready = function () {
                        console.log(this['is'], "ready!");
                    };
                    MyElement.prototype.created = function () {};
                    MyElement.prototype.attached = function () {};
                    MyElement.prototype.detached = function () {};
                    __decorate([property({ type: String })], MyElement.prototype, "greet", void 0);
                    __decorate([observe("greet")], MyElement.prototype, "greetChanged", null);
                    __decorate([computed()], MyElement.prototype, "greetAll", null);
                    MyElement = __decorate([component('my-element'), extend("div"), template("<p>I'm a DOM element. This is my local DOM!</p><p>And this is 'greet' property: <span>{{greet}}</span></p><p><button on-click=\"handleClick\">Change greet</button></p><p>Computed property 'greetAll' is <span>{{greetAll}}</span></p>"), style(":host { display: block; } div { color: red; }"), behavior(MyBehavior)], MyElement);
                    return MyElement;
                }(polymer.Base);
                Card.MyElement = MyElement;
            })(Card = Component.Card || (Component.Card = {}));
        })(Component = Theeds.Component || (Theeds.Component = {}));
    })(Theeds = Com.Theeds || (Com.Theeds = {}));
})(Com || (Com = {}));
Com.Theeds.Component.Card.MyElement.register();
var Com;
(function (Com) {
    var Theeds;
    (function (Theeds) {
        var Service;
        (function (Service) {
            var Adapter;
            (function (Adapter) {
                var AbstractAdapter = function () {
                    function AbstractAdapter() {}
                    return AbstractAdapter;
                }();
                Adapter.AbstractAdapter = AbstractAdapter;
            })(Adapter = Service.Adapter || (Service.Adapter = {}));
        })(Service = Theeds.Service || (Theeds.Service = {}));
    })(Theeds = Com.Theeds || (Com.Theeds = {}));
})(Com || (Com = {}));
var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Com;
(function (Com) {
    var Theeds;
    (function (Theeds) {
        var Service;
        (function (Service) {
            var Adapter;
            (function (Adapter) {
                var AbstractAdapter = Com.Theeds.Service.Adapter.AbstractAdapter;
                var Exalead = function (_super) {
                    __extends(Exalead, _super);
                    function Exalead() {
                        _super.apply(this, arguments);
                    }
                    Exalead.prototype.cards = function (context, options) {
                        var query = encodeURIComponent(options.query);
                        var offset = options.limit * options.offset;
                        var limit = options.limit;
                        $.ajax({
                            type: "GET",
                            dataType: "json", url: 'data/customer-story.json',
                            success: function (data) {
                                context.render('cards', data);
                            },
                            error: function (resultat, statut, erreur) {
                                context.render('cards', false);
                            }
                        });
                    };
                    Exalead.prototype.groups = function (context, options) {
                        $.ajax({
                            type: "GET",
                            dataType: "json", url: 'data/groups.json',
                            success: function (data) {
                                context.render('groups', data);
                            },
                            error: function (resultat, statut, erreur) {
                                context.render('groups', false);
                            }
                        });
                    };
                    Exalead.prototype.customGroups = function (context, options) {
                        $.ajax({
                            type: "GET",
                            dataType: "json", url: 'data/custom-groups.json',
                            success: function (data) {
                                context.render('customGroups', data);
                            },
                            error: function (resultat, statut, erreur) {
                                context.render('customGroups', false);
                            }
                        });
                    };
                    return Exalead;
                }(AbstractAdapter);
                Adapter.Exalead = Exalead;
            })(Adapter = Service.Adapter || (Service.Adapter = {}));
        })(Service = Theeds.Service || (Theeds.Service = {}));
    })(Theeds = Com.Theeds || (Com.Theeds = {}));
})(Com || (Com = {}));
var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Com;
(function (Com) {
    var Theeds;
    (function (Theeds) {
        var Component;
        (function (Component) {
            var Card;
            (function (Card) {
                var AbstractPlugin = Com.Theeds.Plugin.AbstractPlugin;
                var MyElement = Com.Theeds.Component.Card.MyElement;
                var Plugin = function (_super) {
                    __extends(Plugin, _super);
                    function Plugin(elem, options) {
                        _super.call(this, elem, options);
                        this.settings = {
                            search: {
                                query: '',
                                offset: 0,
                                limit: 50,
                                adapter: 'Com.Theeds.Service.Adapter.Exalead',
                                url: 'http://10.8.240.11:10010/'
                            },
                            infiniteScroll: {
                                enable: true
                            },
                            masonry: {
                                itemSelector: '.card-container',
                                columnWidth: '.pure-u-md-1-4',
                                isAnimated: false,
                                percentPosition: true,
                                gutter: 0,
                                transitionDuration: 0
                            },
                            hook: {
                                search: undefined,
                                render: undefined
                            },
                            render: {
                                adapter: 'Com.Theeds.Component.Card.Render'
                            }
                        };
                        sessionStorage.setItem("cards_search", JSON.stringify(options));
                        var data = { "did": 28, "url": "uid=2&", "buildGroup": "bg0", "source": "mysql", "slice": 1, "score": 73333, "sort": 0, "groups": [{ "id": "card_lang_flag", "root": "Top/classproperties/card/lang_flag", "refinable": true, "categories": [{ "path": "en", "fullPath": "Top/classproperties/card/lang_flag/en", "id": "Top/classproperties/card/lang_flag/en", "zapId": "Top/classproperties/card/lang_flag/en", "title": "en", "categories": [] }] }, { "id": "card_lang_title", "root": "Top/classproperties/card/lang_title", "refinable": true, "categories": [{ "path": "english", "fullPath": "Top/classproperties/card/lang_title/english", "id": "Top/classproperties/card/lang_title/english", "zapId": "Top/classproperties/card/lang_title/english", "title": "English", "categories": [] }] }, { "id": "Source", "root": "Top/source", "refinable": true, "categories": [{ "path": "mysql", "fullPath": "Top/source/mysql", "id": "Top/source/mysql", "zapId": "Top/source/mysql", "title": "mysql", "categories": [] }] }, { "id": "dataModelClass", "root": "Top/datamodelclass", "refinable": true, "categories": [{ "path": "card", "fullPath": "Top/datamodelclass/card", "id": "Top/datamodelclass/card", "zapId": "Top/datamodelclass/card", "title": "card", "categories": [] }] }, { "id": "Language", "root": "Top/language", "refinable": true, "categories": [{ "path": "en", "fullPath": "Top/language/en", "id": "Top/language/en", "zapId": "Top/language/en", "title": "en", "categories": [] }] }, { "id": "card_format_source", "root": "Top/classproperties/card/format_source", "refinable": true, "categories": [{ "path": "3dexperiencelab.3ds.com", "fullPath": "Top/classproperties/card/format_source/3dexperiencelab.3ds.com", "id": "Top/classproperties/card/format_source/3dexperiencelab.3ds.com", "zapId": "Top/classproperties/card/format_source/3dexperiencelab.3ds.com", "title": "3dexperiencelab.3ds.com", "categories": [] }] }, { "id": "card_format_content", "root": "Top/classproperties/card/format_content", "refinable": true, "categories": [{ "path": "blog", "fullPath": "Top/classproperties/card/format_content/blog", "id": "Top/classproperties/card/format_content/blog", "zapId": "Top/classproperties/card/format_content/blog", "title": "blog", "categories": [] }] }, { "id": "card_category_type", "root": "Top/classproperties/card/category_type", "refinable": true, "categories": [{ "path": "life", "fullPath": "Top/classproperties/card/category_type/life", "id": "Top/classproperties/card/category_type/life", "zapId": "Top/classproperties/card/category_type/life", "title": "LIFE", "categories": [] }] }], "metas": [{ "name": "category_type", "type": 2, "value": "LIFE" }, { "name": "deleted", "type": 0, "value": 0 }, { "name": "format_content", "type": 2, "value": "blog" }, { "name": "format_source", "type": 2, "value": "3dexperiencelab.3ds.com" }, { "name": "hidden", "type": 0, "value": 0 }, { "name": "image", "type": 2, "value": "http://3dexperiencelab.3ds.com/en/projects/life/organ_twins/slider/big/DSC02207.jpg" }, { "name": "lang_flag", "type": 2, "value": "en" }, { "name": "lang_title", "type": 2, "value": "English" }, { "name": "link", "type": 2, "value": "http://3ds.co:3000/s/c198601a" }, { "name": "start_date", "type": 0, "value": 1447056000 }, { "name": "summary", "type": 2, "value": "Advances in 3D printing technology and virtual simulation are creating new opportunities to improve the quality of treatments and patient safety. Biomodex is innovating in this area by developing sophisticated software and fabricating life-like human organs that can be used by medical students to learn and by doctors to practice surgical procedures before proceeding with a live operation. The 3DEXPERIENCE Lab is involved in this project providing Biomodex with access to its FabLab and with assistance using the Dassault SystÃ¨mes? applications for organ design and for the manufacture of its first prototypes." }, { "name": "tstamp", "type": 0, "value": 1456498561 }, { "name": "uid", "type": 0, "value": 2 }, { "name": "weight", "type": 0, "value": 0 }, { "name": "fullurl", "type": 2, "value": "http://3dexperiencelab.3ds.com/en/projects/life/organ_twins/" }, { "name": "title", "type": 3, "value": "Organ Twins" }, { "name": "url", "type": 2, "value": "uid=2&" }] };
                        var el = MyElement.create({});
                        document.body.appendChild(el);
                        var service = eval('new ' + this.settings.search.adapter);
                    }
                    Plugin.prototype.bindInputSearch = function (context) {
                        var data;
                        var value;
                        $('#' + context.elem.attr('id') + '-search').bind("change paste keyup", function () {
                            data = JSON.parse(sessionStorage.getItem('cards_search'));
                            value = $(this).val();
                            if (data.query != value) {
                                data.query = value;
                                data.offset = 0;
                                context.destroy();
                                context.search(data);
                            }
                        });
                    };
                    Plugin.prototype.destroy = function () {
                        this.elem.masonry('destroy');
                        this.elem.html('');
                    };
                    Plugin.prototype.infiniteScroll = function (context) {
                        if (context.settings.infiniteScroll.enable === true) {
                            $(window).scroll(function () {
                                if ($(window).scrollTop() == $(document).height() - $(window).height()) {
                                    context.search(context.next(context.settings.search));
                                }
                            });
                        }
                    };
                    Plugin.prototype.search = function (options) {
                        if (!options.query.trim()) options.query += "#all";
                        var conext = this;
                        var elem;
                        var values;
                        $("select[data-exalead-group], select[data-exalead-group-custom]").each(function (index) {
                            elem = $(this);
                            if (null === (values = elem.val())) return;
                            for (var k in values) {
                                if (options.query != '') options.query += " AND ";
                                if (elem.data('exalead-group') != undefined) {
                                    options.query += elem.data('exalead-group') + "=(" + values[k] + ")";
                                } else {
                                    options.query += elem.data('exalead-group-custom') + "=(" + values[k] + ")";
                                }
                            }
                        }).promise().done(function () {
                            eval('new ' + conext.settings.search.adapter).cards(conext, options);
                            sessionStorage.setItem("cards_search", JSON.stringify(options));
                        });
                    };
                    Plugin.prototype.next = function (options) {
                        options.offset = options.offset + 1;
                        return options;
                    };
                    Plugin.prototype.masonry = function (context) {
                        return context.elem.masonry(context.settings.masonry);
                    };
                    return Plugin;
                }(AbstractPlugin);
                Card.Plugin = Plugin;
                $.fn.cards = function (options) {
                    return new Plugin(this, options);
                };
            })(Card = Component.Card || (Component.Card = {}));
        })(Component = Theeds.Component || (Theeds.Component = {}));
    })(Theeds = Com.Theeds || (Com.Theeds = {}));
})(Com || (Com = {}));
var Com;
(function (Com) {
    var Theeds;
    (function (Theeds) {
        var Component;
        (function (Component) {
            var Card;
            (function (Card_1) {
                var Card = Com.Theeds.Component.Card.Card;
                var Image = Com.Theeds.Component.Card.Image;
                var Render = function () {
                    function Render() {}
                    Render.prototype.cards = function (context, data) {
                        if (data === false || typeof data === "undefined") return;
                        context.elem.addClass('cards pure-g');
                        var $grid = context.masonry(context);
                        var card;
                        for (var k in data.hits) {
                            var summary = false;
                            var link = false;
                            var image = false;
                            for (var i in data.hits[k].metas) {
                                if (data.hits[k].metas[i].name == "summary") summary = true;
                                if (data.hits[k].metas[i].name == "link") link = true;
                                if (data.hits[k].metas[i].name == "image") image = true;
                            }
                            if (summary && image && link) {
                                card = new Card(data.hits[k]);
                                if (k == '0') card.displayFormat = 'landscape';
                                $(card.render()).imagesLoaded().always(function (instance) {}).done(function (instance) {
                                    $grid.append(instance.elements).masonry('appended', instance.elements).masonry();
                                }).fail(function () {}).progress(function (instance, image) {
                                    var gcd, pct;
                                    var naturalWidth = image.img.naturalWidth;
                                    var naturalHeight = image.img.naturalHeight;
                                    if (naturalWidth != 0 && naturalHeight != 0) {
                                        gcd = Image.prototype.gcd(naturalWidth, naturalHeight);
                                        pct = naturalWidth / gcd * 100 / (naturalHeight / gcd) - 100;
                                    }
                                });
                            }
                        }
                    };
                    Render.prototype.groups = function (context, data) {
                        if (data === false || typeof data === "undefined") return;
                        var elem;
                        for (var k in data.groups) {
                            elem = $("select[data-exalead-group='" + data.groups[k].id + "']");
                            if (elem.length) {
                                elem.find('option').remove().end().append('<option value=""></option>');
                                for (var i in data.groups[k].categories) {
                                    elem.append('<option value="' + data.groups[k].categories[i].path + '">' + data.groups[k].categories[i].title + '</option>');
                                }
                                elem.chosen({ disable_search_threshold: 10 }).bind("change", function () {
                                    $('#' + context.elem.attr('id') + '-search').trigger('change');
                                });
                            }
                        }
                    };
                    Render.prototype.customGroups = function (context, data) {
                        if (data === false || typeof data === "undefined") return;
                        var elem;
                        var ref;
                        $("select[data-exalead-group-custom]").each(function (index) {
                            elem = $(this);
                            ref = elem.data('exalead-group-custom-ref');
                            if (ref == undefined && data[ref] == undefined) return true;
                            for (var i in data[ref]) {
                                elem.append('<option value="' + data[ref][i].title + '">' + data[ref][i].title + '</option>');
                            }
                            elem.chosen({ disable_search_threshold: 10 }).bind("change", function () {
                                $('#' + context.elem.attr('id') + '-search').trigger('change');
                            });
                        });
                    };
                    return Render;
                }();
                Card_1.Render = Render;
            })(Card = Component.Card || (Component.Card = {}));
        })(Component = Theeds.Component || (Theeds.Component = {}));
    })(Theeds = Com.Theeds || (Com.Theeds = {}));
})(Com || (Com = {}));
var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Com;
(function (Com) {
    var Theeds;
    (function (Theeds) {
        var Component;
        (function (Component) {
            var Form;
            (function (Form) {
                var Element;
                (function (Element) {
                    var Behavior;
                    (function (Behavior) {
                        var Neolane;
                        (function (Neolane) {
                            var CountryBehavior = function (_super) {
                                __extends(CountryBehavior, _super);
                                function CountryBehavior() {
                                    _super.apply(this, arguments);
                                }
                                CountryBehavior.prototype.attached = function () {};
                                return CountryBehavior;
                            }(polymer.Base);
                            Neolane.CountryBehavior = CountryBehavior;
                        })(Neolane = Behavior.Neolane || (Behavior.Neolane = {}));
                    })(Behavior = Element.Behavior || (Element.Behavior = {}));
                })(Element = Form.Element || (Form.Element = {}));
            })(Form = Component.Form || (Component.Form = {}));
        })(Component = Theeds.Component || (Theeds.Component = {}));
    })(Theeds = Com.Theeds || (Com.Theeds = {}));
})(Com || (Com = {}));
var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Com;
(function (Com) {
    var Theeds;
    (function (Theeds) {
        var Component;
        (function (Component) {
            var Form;
            (function (Form) {
                var Element;
                (function (Element) {
                    var AbstractPolymerElement = Com.Theeds.Element.AbstractPolymerElement;
                    var Input = function (_super) {
                        __extends(Input, _super);
                        function Input(context, data) {
                            _super.call(this, data);
                            this.type = 'text';
                            this.value = 'lorem';
                            this.required = false;
                            this._validators = [];
                            this._errorMessage = '';
                            this.classList.add('form-control');
                            if (context.settings.display.placeholder) this.placeholder = data.label;
                            if (data.name != undefined) this.id = data.name, this.name = data.name;
                            if (data.required != undefined) this.required = data.required;
                            if (data.value != undefined) this.value = data.value;
                            if (data.validators != undefined) this._validators = data.validators;
                        }
                        Object.defineProperty(Input.prototype, "errorMessage", {
                            get: function () {
                                return this._errorMessage == undefined ? '' : this._errorMessage;
                            },
                            set: function (value) {
                                this._errorMessage = value == undefined ? '' : value;
                            },
                            enumerable: true,
                            configurable: true
                        });
                        Input.prototype._onChange = function (e) {
                            this.setAttribute('value', this.value);
                            this.isValid();
                        };
                        Input.prototype.isValid = function () {
                            var message;
                            for (var i = 0; i < this._validators.length; i++) {
                                message = eval(this._validators[i] + ".isValid").apply(this.value);
                                if (message != undefined) return this.displayError(message);
                            }
                        };
                        Input.prototype.displayError = function (detail) {
                            this.errorMessage = detail;
                            this.fire('error', this.errorMessage);
                            if (!this.errorMessage) {
                                this.classList.remove('_error');
                                return false;
                            }
                            this.classList.add('_error');
                            return true;
                        };
                        __decorate([property({ type: String, reflectToAttribute: true })], Input.prototype, "type", void 0);
                        __decorate([property({ type: String, reflectToAttribute: true })], Input.prototype, "id", void 0);
                        __decorate([property({ type: String, reflectToAttribute: true })], Input.prototype, "name", void 0);
                        __decorate([property({ type: String })], Input.prototype, "value", void 0);
                        __decorate([property({ type: String, reflectToAttribute: true })], Input.prototype, "placeholder", void 0);
                        __decorate([property({ type: Boolean, reflectToAttribute: true })], Input.prototype, "required", void 0);
                        __decorate([listen('input')], Input.prototype, "_onChange", null);
                        Input = __decorate([component('input-element'), extend("input")], Input);
                        return Input;
                    }(AbstractPolymerElement);
                    Element.Input = Input;
                })(Element = Form.Element || (Form.Element = {}));
            })(Form = Component.Form || (Component.Form = {}));
        })(Component = Theeds.Component || (Theeds.Component = {}));
    })(Theeds = Com.Theeds || (Com.Theeds = {}));
})(Com || (Com = {}));
Com.Theeds.Component.Form.Element.Input.register();
var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Com;
(function (Com) {
    var Theeds;
    (function (Theeds) {
        var Component;
        (function (Component) {
            var Form;
            (function (Form) {
                var Element;
                (function (Element) {
                    var AbstractPolymerElement = Com.Theeds.Element.AbstractPolymerElement;
                    var Checkbox = function (_super) {
                        __extends(Checkbox, _super);
                        function Checkbox(context, data) {
                            _super.call(this, data);
                            this.type = 'checkbox';
                            this.checked = false;
                            this.required = false;
                            this._errorMessage = '';
                            if (data.name != undefined) this.id = data.name;
                            if (data.name != undefined) this.name = data.name;
                            if (data.required != undefined) this.required = data.required;
                            if (data.value != undefined) this.checked = data.value;
                        }
                        Object.defineProperty(Checkbox.prototype, "errorMessage", {
                            get: function () {
                                return this._errorMessage == undefined ? '' : this._errorMessage;
                            },
                            set: function (value) {
                                this._errorMessage = value == undefined ? '' : value;
                            },
                            enumerable: true,
                            configurable: true
                        });
                        Checkbox.prototype._onChange = function (e) {
                            if (this.checked) {
                                this.setAttribute("checked", this.checked.toString());
                            } else {
                                this.removeAttribute("checked");
                            }
                            this.isValid();
                        };
                        Checkbox.prototype.isValid = function () {
                            if (this.required && this.checked == false) {
                                return this.displayError('This field is required !');
                            }
                            return this.displayError();
                        };
                        Checkbox.prototype.displayError = function (detail) {
                            this.errorMessage = detail;
                            this.fire('error', this.errorMessage);
                            if (!this.errorMessage) {
                                this.classList.remove('_error');
                                return false;
                            }
                            this.classList.add('_error');
                            return true;
                        };
                        __decorate([property({ type: Boolean, reflectToAttribute: true })], Checkbox.prototype, "type", void 0);
                        __decorate([property({ type: Boolean })], Checkbox.prototype, "checked", void 0);
                        __decorate([property({ type: String, reflectToAttribute: true })], Checkbox.prototype, "name", void 0);
                        __decorate([property({ type: Boolean, reflectToAttribute: true })], Checkbox.prototype, "required", void 0);
                        __decorate([listen('change')], Checkbox.prototype, "_onChange", null);
                        Checkbox = __decorate([component('checkbox-element'), extend("input")], Checkbox);
                        return Checkbox;
                    }(AbstractPolymerElement);
                    Element.Checkbox = Checkbox;
                })(Element = Form.Element || (Form.Element = {}));
            })(Form = Component.Form || (Component.Form = {}));
        })(Component = Theeds.Component || (Theeds.Component = {}));
    })(Theeds = Com.Theeds || (Com.Theeds = {}));
})(Com || (Com = {}));
Com.Theeds.Component.Form.Element.Checkbox.register();
var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Com;
(function (Com) {
    var Theeds;
    (function (Theeds) {
        var Component;
        (function (Component) {
            var Form;
            (function (Form) {
                var Element;
                (function (Element) {
                    var AbstractPolymerElement = Com.Theeds.Element.AbstractPolymerElement;
                    var Select = function (_super) {
                        __extends(Select, _super);
                        function Select(context, data) {
                            _super.call(this, data);
                            this.required = false;
                            this._errorMessage = '';
                            this.classList.add('form-control');
                            if (data.name != undefined) this.id = data.name, this.name = data.name;
                            for (var k in data.options) {
                                if (data.value != undefined && data.options[k].value == data.value) data.options[k].selected = true;
                                this.appendChild(Element.Option.create(data.options[k]));
                            }
                        }
                        Object.defineProperty(Select.prototype, "errorMessage", {
                            get: function () {
                                return this._errorMessage == undefined ? '' : this._errorMessage;
                            },
                            set: function (value) {
                                this._errorMessage = value == undefined ? '' : value;
                            },
                            enumerable: true,
                            configurable: true
                        });
                        Select.prototype._onChange = function (e) {
                            this.selectOption(this.value);
                        };
                        Select.prototype.selectOption = function (value) {
                            for (var i = 0; i < Polymer.dom(this).node.length; i++) {
                                Polymer.dom(this).node[i].selected = Polymer.dom(this).node[i].value === value ? true : false;
                            }
                        };
                        Select.prototype.isValid = function () {
                            if (!this.required) return this.displayError();
                            var detail;
                            if (!this.value) detail = 'This field is required !';
                            return this.displayError(detail);
                        };
                        Select.prototype.displayError = function (detail) {
                            this.errorMessage = detail;
                            this.fire('error', this.errorMessage);
                            if (!this.errorMessage) {
                                this.classList.remove('_error');
                                return false;
                            }
                            this.classList.add('_error');
                            return true;
                        };
                        __decorate([property({ type: String, reflectToAttribute: true })], Select.prototype, "name", void 0);
                        __decorate([property({ type: Boolean, reflectToAttribute: true })], Select.prototype, "required", void 0);
                        __decorate([listen('input')], Select.prototype, "_onChange", null);
                        Select = __decorate([component('select-element'), extend("select")], Select);
                        return Select;
                    }(AbstractPolymerElement);
                    Element.Select = Select;
                })(Element = Form.Element || (Form.Element = {}));
            })(Form = Component.Form || (Component.Form = {}));
        })(Component = Theeds.Component || (Theeds.Component = {}));
    })(Theeds = Com.Theeds || (Com.Theeds = {}));
})(Com || (Com = {}));
Com.Theeds.Component.Form.Element.Select.register();
var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Com;
(function (Com) {
    var Theeds;
    (function (Theeds) {
        var Component;
        (function (Component) {
            var Form;
            (function (Form) {
                var Element;
                (function (Element) {
                    var AbstractPolymerElement = Com.Theeds.Element.AbstractPolymerElement;
                    var Field = function (_super) {
                        __extends(Field, _super);
                        function Field(context, data) {
                            this.showLabel = true;
                            this.hydrateValidators(data);
                            _super.call(this, data);
                            this.data = data, this.showLabel = context.settings.display.label;
                            this.classList.add('form-group');
                            if (data.type == 'select') this.appendChild(Element.Select.create(context, data));
                            if (data.type == 'checkbox') this.appendChild(Element.Checkbox.create(context, data));
                            if (data.type == 'text') this.appendChild(Element.Input.create(context, data));
                            if (data.type == 'hidden') this.classList.add('hide'), this.appendChild(Element.Input.create(context, data));
                        }
                        Field.prototype.hydrateValidators = function (data) {
                            var validators = data.validators == undefined ? [] : data.validators;
                            if (data.name == 'email' && data.type != 'hidden') validators.push('Com.Theeds.Validator.Email');
                            if (data.required) validators.push('Com.Theeds.Validator.Require');
                            if (validators.length) data.validators = validators;
                        };
                        Field.prototype.handleError = function (e, detail) {
                            this.displayError(detail);
                        };
                        Field.prototype.displayError = function (detail) {
                            this.error = detail;
                            if (this.error == undefined || this.error == '') {
                                this.classList.remove('has-error');
                            } else {
                                this.classList.add('has-error');
                            }
                        };
                        __decorate([property({ type: String })], Field.prototype, "error", void 0);
                        __decorate([listen("error")], Field.prototype, "handleError", null);
                        Field = __decorate([component('field-element'), extend("fieldset"), template("<template is=\"dom-if\" if=\"{{error}}\"><div class=\"alert alert-danger\">{{error}}</div></template><template is=\"dom-if\" if=\"{{showLabel}}\"><label  for=\"{{data.name}}\">{{data.label}}</label></template>")], Field);
                        return Field;
                    }(AbstractPolymerElement);
                    Element.Field = Field;
                })(Element = Form.Element || (Form.Element = {}));
            })(Form = Component.Form || (Component.Form = {}));
        })(Component = Theeds.Component || (Theeds.Component = {}));
    })(Theeds = Com.Theeds || (Com.Theeds = {}));
})(Com || (Com = {}));
Com.Theeds.Component.Form.Element.Field.register();
var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Com;
(function (Com) {
    var Theeds;
    (function (Theeds) {
        var Component;
        (function (Component) {
            var Form;
            (function (Form) {
                var Element;
                (function (Element) {
                    var AbstractPolymerElement = Com.Theeds.Element.AbstractPolymerElement;
                    var FieldGroup = function (_super) {
                        __extends(FieldGroup, _super);
                        function FieldGroup(context, data) {
                            _super.call(this, data);
                            this.classList.add('form-group');
                            if (data.label != 'undefined') this.label = data.label;
                            for (var i in data.items) {
                                this.appendChild(Element.Field.create(context, data.items[i]));
                            }
                        }
                        FieldGroup = __decorate([component('field-group-element'), extend("fieldset"), template('<template is="dom-if" if="{{label}}"><legend>{{label}}</legend></template>')], FieldGroup);
                        return FieldGroup;
                    }(AbstractPolymerElement);
                    Element.FieldGroup = FieldGroup;
                })(Element = Form.Element || (Form.Element = {}));
            })(Form = Component.Form || (Component.Form = {}));
        })(Component = Theeds.Component || (Theeds.Component = {}));
    })(Theeds = Com.Theeds || (Com.Theeds = {}));
})(Com || (Com = {}));
Com.Theeds.Component.Form.Element.FieldGroup.register();
var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Com;
(function (Com) {
    var Theeds;
    (function (Theeds) {
        var Component;
        (function (Component) {
            var Form;
            (function (Form) {
                var Element;
                (function (Element) {
                    var AbstractPolymerElement = Com.Theeds.Element.AbstractPolymerElement;
                    var Submit = function (_super) {
                        __extends(Submit, _super);
                        function Submit(context, data) {
                            _super.call(this, data);
                            this.type = 'submit';
                            this.class = 'btn btn-default';
                        }
                        __decorate([property({ type: String, reflectToAttribute: true })], Submit.prototype, "type", void 0);
                        __decorate([property({ type: String, reflectToAttribute: true })], Submit.prototype, "name", void 0);
                        __decorate([property({ type: String })], Submit.prototype, "value", void 0);
                        __decorate([property({ type: String, reflectToAttribute: true })], Submit.prototype, "class", void 0);
                        Submit = __decorate([component('submit-element'), extend("input")], Submit);
                        return Submit;
                    }(AbstractPolymerElement);
                    Element.Submit = Submit;
                })(Element = Form.Element || (Form.Element = {}));
            })(Form = Component.Form || (Component.Form = {}));
        })(Component = Theeds.Component || (Theeds.Component = {}));
    })(Theeds = Com.Theeds || (Com.Theeds = {}));
})(Com || (Com = {}));
Com.Theeds.Component.Form.Element.Submit.register();
var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Com;
(function (Com) {
    var Theeds;
    (function (Theeds) {
        var Component;
        (function (Component) {
            var Form;
            (function (Form) {
                var Element;
                (function (Element) {
                    var AbstractPolymerElement = Com.Theeds.Element.AbstractPolymerElement;
                    var FieldElement = Com.Theeds.Component.Form.Element.Field;
                    var FieldGroupElement = Com.Theeds.Component.Form.Element.FieldGroup;
                    var SubmitElement = Com.Theeds.Component.Form.Element.Submit;
                    var Step = function (_super) {
                        __extends(Step, _super);
                        function Step(context, data) {
                            if (data.success == undefined && !data.success && data.result.config !== undefined) return;
                            _super.call(this, data);
                            this.id = data.result.properties.id;
                            for (var k in data.result.config) {
                                if (data.result.config[k].type == 'fieldgroup') {
                                    this.appendChild(FieldGroupElement.create(context, data.result.config[k]));
                                } else {
                                    this.appendChild(FieldElement.create(context, data.result.config[k]));
                                }
                            }
                            this.appendChild(SubmitElement.create({}));
                        }
                        __decorate([property({ type: String, reflectToAttribute: true })], Step.prototype, "id", void 0);
                        Step = __decorate([component('step-element'), extend("div")], Step);
                        return Step;
                    }(AbstractPolymerElement);
                    Element.Step = Step;
                })(Element = Form.Element || (Form.Element = {}));
            })(Form = Component.Form || (Component.Form = {}));
        })(Component = Theeds.Component || (Theeds.Component = {}));
    })(Theeds = Com.Theeds || (Com.Theeds = {}));
})(Com || (Com = {}));
Com.Theeds.Component.Form.Element.Step.register();
var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Com;
(function (Com) {
    var Theeds;
    (function (Theeds) {
        var Component;
        (function (Component) {
            var Form;
            (function (Form) {
                var Element;
                (function (Element) {
                    var Behavior;
                    (function (Behavior) {
                        var Neolane;
                        (function (Neolane) {
                            var FromBehavior = function (_super) {
                                __extends(FromBehavior, _super);
                                function FromBehavior() {
                                    _super.apply(this, arguments);
                                }
                                FromBehavior.prototype.action = function (form, data) {
                                    if (Object.isDefined(data, 'result.config')) {
                                        form.update(data);
                                    } else if (Object.isDefined(data, 'result.thankYouPage')) {
                                        if (data.result.properties.displayThankYou) {
                                            form.success(data.result.thankYouPage);
                                            if (data.result.properties.openUrl) {
                                                var w = window.open(data.result.asset.url, '_blank');
                                                w.focus();
                                            }
                                        } else if (data.result.properties.openUrl) {
                                            form.redirect(data.result.asset.url);
                                        }
                                    } else if (Object.isDefined(data, 'result.properties.content') && Object.isDefined(data, 'result.properties.redirect') && data.result.properties.redirect) {
                                        form.redirect(data.result.properties.content);
                                    } else if (Object.isDefined(data, 'result.properties.content') && Object.isDefined(data, 'result.properties.redirect') && !data.result.properties.redirect) {
                                        form.warning(data.result.properties.content);
                                    } else if (Object.isDefined(data, 'errors.0.error.message')) {
                                        form.warning(data.errors[0].error.message);
                                    } else if (Object.isDefined(data, 'errors')) {
                                        form.errors = data.errors;
                                    }
                                };
                                FromBehavior.prototype._onSubmit = function (e) {
                                    if (e) e.preventDefault();
                                    this.submit();
                                    return false;
                                };
                                FromBehavior.prototype.submit = function () {
                                    this.valid();
                                    if (this.errors.length <= 1) this.post();
                                };
                                FromBehavior.prototype.post = function () {
                                    var data = Com.Theeds.Component.Form.Element.From.serialize(this);
                                    this.context.service('form').post(this, data);
                                };
                                FromBehavior.prototype.render = function (type, data) {
                                    if (type == 'form') this.dispatch(data);
                                };
                                __decorate([listen('submit')], FromBehavior.prototype, "_onSubmit", null);
                                return FromBehavior;
                            }(polymer.Base);
                            Neolane.FromBehavior = FromBehavior;
                        })(Neolane = Behavior.Neolane || (Behavior.Neolane = {}));
                    })(Behavior = Element.Behavior || (Element.Behavior = {}));
                })(Element = Form.Element || (Form.Element = {}));
            })(Form = Component.Form || (Component.Form = {}));
        })(Component = Theeds.Component || (Theeds.Component = {}));
    })(Theeds = Com.Theeds || (Com.Theeds = {}));
})(Com || (Com = {}));
Object.isDefined = function (obj, prop) {
    var parts = prop.split('.');
    for (var i = 0, l = parts.length; i < l; i++) {
        var part = parts[i];
        if (obj !== null && typeof obj === "object" && part in obj) {
            obj = obj[part];
        } else {
            return false;
        }
    }
    return true;
};
Object.isEmpty = function (obj, prop) {
    var parts = prop.split('.');
    for (var i = 0, l = parts.length; i < l; i++) {
        var part = parts[i];
        if (obj !== null && typeof obj === "object" && part in obj) {
            obj = obj[part];
        } else {
            return false;
        }
    }
    return obj == '' ? true : false;
};
var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Com;
(function (Com) {
    var Theeds;
    (function (Theeds) {
        var Component;
        (function (Component) {
            var Form;
            (function (Form) {
                var Element;
                (function (Element) {
                    var AbstractPolymerElement = Com.Theeds.Element.AbstractPolymerElement;
                    var StepElement = Com.Theeds.Component.Form.Element.Step;
                    var From = function (_super) {
                        __extends(From, _super);
                        function From(context, data) {
                            _super.call(this, data);
                            this._errors = [];
                            this.context = context;
                            this.dispatch(data);
                            $('#company').autocomplete({
                                source: function (requete, reponse) {
                                    $.ajax({
                                        url: 'http://dassault-test.neolane.net/dsx/dnbWebservice.jssp',
                                        dataType: 'jsonp',
                                        data: {
                                            query: $('#company').val(),
                                            iso: $('#country').val()
                                        },
                                        success: function (data) {
                                            reponse($.map(data.dnbReponse.responseDetail.candidate, function (objet) {
                                                return {
                                                    label: objet.companyName,
                                                    value: objet.companyName
                                                };
                                            }));
                                        }
                                    });
                                }
                            });
                        }
                        Object.defineProperty(From.prototype, "settings", {
                            get: function () {
                                return this.context.settings;
                            },
                            enumerable: true,
                            configurable: true
                        });
                        Object.defineProperty(From.prototype, "errors", {
                            get: function () {
                                return this._errors;
                            },
                            set: function (value) {
                                this._errors = value;
                                for (var i = 0; i < Polymer.dom(this).node.length; i++) {
                                    if (typeof Polymer.dom(this).node[i].displayError === 'function') {
                                        for (var k in this._errors) {
                                            if (Polymer.dom(this).node[i].name == k) {
                                                Polymer.dom(this).node[i].displayError(this._errors[k]);
                                            }
                                        }
                                    }
                                }
                            },
                            enumerable: true,
                            configurable: true
                        });
                        From.prototype.valid = function () {
                            this._errors = [];
                            for (var i = 0; i < Polymer.dom(this).node.length; i++) {
                                if (typeof Polymer.dom(this).node[i].isValid === 'function') {
                                    if (Polymer.dom(this).node[i].isValid() == true) this._errors[Polymer.dom(this).node[i].name] = Polymer.dom(this).node[i].errorMessage;
                                }
                            }
                        };
                        From.prototype.dispatch = function (data) {
                            if (typeof this.behaviors[0] != undefined && typeof this.behaviors[0].action == 'function') {
                                this.behaviors[0].action(this, data);
                            } else {
                                console.log('Uncaught TypeError: this.behaviors[0].action is not a function');
                            }
                        };
                        From.prototype.clear = function () {
                            while (Polymer.dom(this).firstChild) Polymer.dom(this).removeChild(Polymer.dom(this).firstChild);
                            this.innerHTML = '';
                        };
                        From.prototype.update = function (data) {
                            this.clear();
                            this.appendChild(StepElement.create(this.context, data));
                        };
                        From.prototype.success = function (data) {
                            this.clear();
                            this.innerHTML = "<h1>" + data.title + "</h1>" + data.content;
                        };
                        From.prototype.warning = function (message) {
                            this.clear();
                            this.innerHTML = message;
                        };
                        From.prototype.redirect = function (url) {
                            window.location = url;
                        };
                        From.serialize = function (form) {
                            if (!form || form.nodeName !== "FORM") {
                                return;
                            }
                            var i,
                                j,
                                dict = {};
                            for (i = form.elements.length - 1; i >= 0; i = i - 1) {
                                if (form.elements[i].name === "" || typeof form.elements[i].name == 'undefined') {
                                    continue;
                                }
                                switch (form.elements[i].nodeName) {
                                    case 'INPUT':
                                        switch (form.elements[i].type) {
                                            case 'text':
                                            case 'hidden':
                                            case 'password':
                                            case 'button':
                                            case 'reset':
                                            case 'submit':
                                                dict[form.elements[i].name] = form.elements[i].value;
                                                break;
                                            case 'checkbox':
                                            case 'radio':
                                                if (form.elements[i].checked) {
                                                    dict[form.elements[i].name] = encodeURIComponent(form.elements[i].value);
                                                }
                                                break;
                                            case 'file':
                                                break;
                                        }
                                        break;
                                    case 'TEXTAREA':
                                        dict[form.elements[i].name] = encodeURIComponent(form.elements[i].value);
                                        break;
                                    case 'SELECT':
                                        switch (form.elements[i].type) {
                                            case 'select-one':
                                                dict[form.elements[i].name] = encodeURIComponent(form.elements[i].value);
                                                break;
                                            case 'select-multiple':
                                                for (j = form.elements[i].options.length - 1; j >= 0; j = j - 1) {
                                                    if (form.elements[i].options[j].selected) {
                                                        dict[form.elements[i].name] = encodeURIComponent(form.elements[i].options[j].value);
                                                    }
                                                }
                                                break;
                                        }
                                        break;
                                    case 'BUTTON':
                                        switch (form.elements[i].type) {
                                            case 'reset':
                                            case 'submit':
                                            case 'button':
                                                dict[form.elements[i].name] = encodeURIComponent(form.elements[i].value);
                                                break;
                                        }
                                        break;
                                }
                            }
                            return dict;
                        };
                        __decorate([property({ type: String, reflectToAttribute: true })], From.prototype, "id", void 0);
                        __decorate([property({ type: String, reflectToAttribute: true })], From.prototype, "name", void 0);
                        __decorate([property({ type: String, reflectToAttribute: true })], From.prototype, "method", void 0);
                        __decorate([property({ type: String, reflectToAttribute: true })], From.prototype, "action", void 0);
                        From = __decorate([component('form-element'), extend("form"), behavior(Com.Theeds.Component.Form.Element.Behavior.Neolane.CountryBehavior), behavior(Com.Theeds.Component.Form.Element.Behavior.Neolane.FromBehavior)], From);
                        return From;
                    }(AbstractPolymerElement);
                    Element.From = From;
                })(Element = Form.Element || (Form.Element = {}));
            })(Form = Component.Form || (Component.Form = {}));
        })(Component = Theeds.Component || (Theeds.Component = {}));
    })(Theeds = Com.Theeds || (Com.Theeds = {}));
})(Com || (Com = {}));
Com.Theeds.Component.Form.Element.From.register();
var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Com;
(function (Com) {
    var Theeds;
    (function (Theeds) {
        var Component;
        (function (Component) {
            var Form;
            (function (Form) {
                var AbstractPlugin = Com.Theeds.Plugin.AbstractPlugin;
                var FromElement = Com.Theeds.Component.Form.Element.From;
                var Plugin = function (_super) {
                    __extends(Plugin, _super);
                    function Plugin(elem, options) {
                        _super.call(this, elem, options);
                        this.settings = {
                            display: {
                                label: true,
                                placeholder: true
                            },
                            styling: {},
                            form: {
                                id: 'LDP6312',
                                adapter: 'Com.Theeds.Service.Adapter.Neolane',
                                url: 'http://dassault-test.neolane.net/dsx/lp_api.jssp'
                            },
                            hook: {
                                search: undefined,
                                render: undefined
                            }
                        };
                        $.i18n().t('title');
                        this.service('form').form(this, {});
                    }
                    Plugin.prototype.render = function (type, data) {
                        document.body.appendChild(FromElement.create(this, data));
                    };
                    return Plugin;
                }(AbstractPlugin);
                Form.Plugin = Plugin;
                $.fn.forms = function (options) {
                    return new Plugin(this, options);
                };
            })(Form = Component.Form || (Component.Form = {}));
        })(Component = Theeds.Component || (Theeds.Component = {}));
    })(Theeds = Com.Theeds || (Com.Theeds = {}));
})(Com || (Com = {}));
var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Com;
(function (Com) {
    var Theeds;
    (function (Theeds) {
        var Service;
        (function (Service) {
            var Adapter;
            (function (Adapter) {
                var AbstractAdapter = Com.Theeds.Service.Adapter.AbstractAdapter;
                var Neolane = function (_super) {
                    __extends(Neolane, _super);
                    function Neolane() {
                        _super.apply(this, arguments);
                    }
                    Neolane.prototype.form = function (context, options) {
                        var self = this;
                        $.ajax({
                            type: "POST",
                            dataType: "jsonp",
                            url: context.settings.form.url,
                            data: {
                                op: 'GetFormJson',
                                lpid: context.settings.form.id
                            },
                            success: function (response) {
                                console.log(response);
                                context.render('form', self.data(response));
                            },
                            error: function (resultat, statut, erreur) {
                                context.render('form', false);
                            }
                        });
                    };
                    Neolane.prototype.post = function (context, data) {
                        var self = this;
                        data['lpid'] = context.settings.form.id;
                        data['op'] = 'SubmitForm';
                        $.ajax({
                            type: "POST",
                            dataType: "jsonp",
                            url: context.settings.form.url,
                            data: data,
                            success: function (response) {
                                console.log(response);
                                context.render('form', self.data(response));
                            },
                            error: function (resultat, statut, erreur) {
                                context.render('form', false);
                            }
                        });
                    };
                    Neolane.prototype.customerAutocomplete = function (context, data) {
                        var self = this;
                        $.ajax({
                            type: "GET",
                            data: data,
                            dataType: "json", url: 'data/form/LandingPageAPI-SubmitForm-error-v2.json',
                            success: function (response) {
                                context.render('form', self.data(response));
                            },
                            error: function (resultat, statut, erreur) {
                                context.render('form', false);
                            }
                        });
                    };
                    Neolane.prototype.data = function (reponse) {
                        if (typeof reponse.result != 'undefined' && typeof reponse.result.config != 'undefined') {
                            this.clean(reponse.result.config);
                        }
                        if (typeof reponse.result != 'undefined' && typeof reponse.result.config != 'undefined' && typeof reponse.result.data != 'undefined') {
                            this.hydrate(reponse.result.config, reponse.result.data);
                        }
                        return reponse;
                    };
                    Neolane.prototype.clean = function (data) {
                        for (var i = 0; i < data.length; i++) {
                            if (typeof data[i].type != 'undefined' && data[i].type == 'picklist') {
                                data[i].type = 'select';
                            } else if (typeof data[i].type != 'undefined' && data[i].type == 'string') {
                                data[i].type = 'text';
                            } else if (typeof data[i].type != 'undefined' && data[i].type == 'fieldgroup') {
                                this.clean(data[i].items);
                            }
                        }
                    };
                    Neolane.prototype.hydrate = function (data, values) {
                        for (var i = 0; i < data.length; i++) {
                            if (typeof data[i].name != 'undefined' && values[data[i].name] != 'undefined') {
                                data[i].value = values[data[i].name];
                            } else if (typeof data[i].type != 'undefined' && data[i].type == 'fieldgroup') {
                                this.hydrate(data[i].items, values);
                            }
                        }
                    };
                    return Neolane;
                }(AbstractAdapter);
                Adapter.Neolane = Neolane;
            })(Adapter = Service.Adapter || (Service.Adapter = {}));
        })(Service = Theeds.Service || (Theeds.Service = {}));
    })(Theeds = Com.Theeds || (Com.Theeds = {}));
})(Com || (Com = {}));
var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Com;
(function (Com) {
    var Theeds;
    (function (Theeds) {
        var Component;
        (function (Component) {
            var Form;
            (function (Form) {
                var Element;
                (function (Element) {
                    var AbstractPolymerElement = Com.Theeds.Element.AbstractPolymerElement;
                    var Option = function (_super) {
                        __extends(Option, _super);
                        function Option(data) {
                            _super.call(this, data);
                            if (data.label != undefined) this.label = data.label;
                            if (data.value != undefined) this.value = data.value;
                            if (data.selected != undefined) this.selected = data.selected;
                        }
                        Option.prototype.ready = function () {};
                        __decorate([property({ type: String, reflectToAttribute: true })], Option.prototype, "label", void 0);
                        __decorate([property({ type: String, reflectToAttribute: true })], Option.prototype, "value", void 0);
                        __decorate([property({ type: Boolean, reflectToAttribute: true })], Option.prototype, "selected", void 0);
                        Option = __decorate([component('option-element'), extend("option")], Option);
                        return Option;
                    }(AbstractPolymerElement);
                    Element.Option = Option;
                })(Element = Form.Element || (Form.Element = {}));
            })(Form = Component.Form || (Component.Form = {}));
        })(Component = Theeds.Component || (Theeds.Component = {}));
    })(Theeds = Com.Theeds || (Com.Theeds = {}));
})(Com || (Com = {}));
Com.Theeds.Component.Form.Element.Option.register();});});
//# sourceMappingURL=app.js.map
