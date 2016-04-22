(function ($) {
    $.fn.header3ds = function (opt) {
        var defaults = {
            "bgcolor": "blue",
            "secure": false,
            "website": "a",
            "language": "en",
            "hasfooter": false,
            "haslogin": false,
            "hascompass": true,
            "hassocial": false,
            "hastrigram": true,
            "hasconnect": true,
            "hasborder": true,
            "margin": 0,
            "width": "100%",
            "callback": null,
            "modalId": 'myModal',
            "atg": {
                "apiURL": "http://localhost:3000"
            },
            "debug": false
        };


        var ErrorEventListenerInterval = 1000;
        var ErrorEventListenerLimit = 5;

        var $setting = null, $userCookie = null;
        var options = $.extend({}, defaults, opt);


        var init = function () {
            $setting = Setting3DS.prototype.getInstance({
                "language": options.language,
                "atg": options.atg,
                "debug": options.debug,
            });
            $userCookie = UserCookie.prototype.getInstance();
            $.i18n().setLang(options.language);

            WatchJS.watch(options, "language", function (prop, action, newvalue, oldvalue) {
                if (newvalue !== undefined || newvalue !== null) {
                    $.i18n().setLang(newvalue);
                }
            });
        }();

        var pcss = "ds_";
        var bgcolor = ["black", "dark", "grey", "light", "white", "blue"]; // list of choices avalaible
        var lang = ["en", "fr", "de", "en", "it", "es", "ja", "zh", "ko", "ru", "sv", "pt"]; // list of choices avalaible
        var website = ["a", "b", "c", "d", "e", "f", "g", "h"]; // list of choices avalaible
        var optionsTmp = $.extend({}, defaults); // duplicate defaults object's value
        var soc = [
            {n: "facebook", u: "https://www.facebook.com/DassaultSystemes"},
            {n: "linkedin", u: "http://www.linkedin.com/company/3896?trk=tyah"},
            {n: "swym", u: "https://swym.3ds.com/"},
            {n: "twitter", u: "https://twitter.com/dassault3DS"},
            {n: "youtube", u: "http://www.youtube.com/user/DassaultSystemes"},
            {n: "rss", u: "http://www.3ds.com/rss/"}
        ];


        var defineEventListener = function () {
            window.addEventListener("message", function (e) {
                if (e.data == 'CloseModal') {
                    $('#' + options.modalId).modal('hide');
                    $userCookie.auth(true);
                    $userCookie.auth(true);
                }

                if (e.data[0] == 'ResizeModal') {
                    if ((e.data[1] !== undefined || e.data[1] !== null) && e.data[1] > 0) {
                        $('#' + options.modalId).modal('setIframeHeight', [(e.data[1])]);
                    }

                    if ((e.data[2] !== undefined || e.data[2] !== null) && e.data[2] > 0) {
                        $('#' + options.modalId).modal('setIframeWidth', [(e.data[2])]);
                    }
                }
            }, true);

            $(document).on("UrlServiceErrorEvent", function (event, instance, fn, callback) {
                var nbErrorPropertyName = fn.concat('NbError');
                (instance[nbErrorPropertyName] === undefined) ? instance[nbErrorPropertyName] = 1 : instance[nbErrorPropertyName]++;

                if (instance[nbErrorPropertyName] < ErrorEventListenerLimit) {
                    setTimeout(function () {
                        instance[fn](callback);
                    }, (ErrorEventListenerInterval * instance[nbErrorPropertyName]));
                } else if (instance[nbErrorPropertyName] == ErrorEventListenerLimit) {
                    $userCookie.logout();
                }
            });

            $(document).on("3DSUserHasConnectedEvent", function (event, userCookie) {
                console.log('> 3DSUserHasConnectedEvent');
                $(".".concat(pcss, 'btn')).show();
                $(".".concat(pcss, 'trigram')).show();

                if (userCookie._validCookie()) {
                    $(".".concat(pcss, 'trigram')).removeClass(pcss + 'no-trigram');
                    $(".".concat(pcss, 'trigram_content')).html(userCookie.trigram());
                } else {
                    $(".".concat(pcss, 'trigram')).addClass(pcss + 'no-trigram');
                }

                $(".".concat(pcss, 'connect')).hide();
                $(".".concat(pcss, 'compass')).show();
                bindTopbar();
            });

            $(document).on("3DSUserHasDisconnectedEvent", function (event, userCookie) {
                console.log('> 3DSUserHasDisconnectedEvent');
                $(".".concat(pcss, 'connect')).show();
                $(".".concat(pcss, 'trigram')).hide();

                bindTopbar();
                $(".".concat(pcss, 'trigram')).unbind("click");
            });

            $(document).on("3DSApiErrorEvent", function (event, userCookie) {
                console.log('> 3DSApiErrorEvent');
                $(".".concat(pcss, 'connect')).hide();
                $(".".concat(pcss, 'trigram')).hide();
            });

        }();


        function bindTopbar() {
            $.service('url').topbar((function (data) {
                var $_modal = $('#' + options.modalId);

                // connect
                if (data.signInURL !== undefined && data.signInURL !== null) {
                    $(".".concat(pcss, 'connect')).click(function () {
                        $_modal.modal('show')
                    });

                    $('#' + options.modalId + '-iframe').attr('src', data.signInURL);
                }


                // trigram
                if (data.myAccountURL !== undefined && data.myAccountURL !== null) {
                    $(".".concat(pcss, 'trigram')).click(function () {
                        window.location = data.myAccountURL;
                    });
                }
            }));
        }

        function bindLinkOpenModal() {
            $("a[data-threeds-modal]").each(function (index, value){
                console.log($(this).html());
            });
        }
        bindLinkOpenModal();

        // Check if options purposed are availables in list of choice
        var isok = function (value, arr) {
            return ( arr.indexOf(value) != -1 );
        }

        var isbool = function (val, defaultVal) {
            //true by default
            if (defaultVal) {
                if (val == "false" || val == false || val == "0" || val == 0) {
                    var retVal = false;
                } else {
                    var retVal = true;
                }
                //false by default
            } else {
                if (val == "true" || val == true || val == "1" || val == 1) {
                    var retVal = true;
                } else {
                    var retVal = false;
                }
            }
            return retVal;
        }

        if (isok(options.bgcolor, bgcolor)) {
            optionsTmp.bgcolor = options.bgcolor;
        }
        if (isok(options.website, website)) {
            optionsTmp.website = options.website;
        }
        if (isok(options.language, lang)) {
            optionsTmp.language = options.language;
        }
        optionsTmp.secure = isbool(options.secure, defaults.secure);
        optionsTmp.hasfooter = isbool(options.hasfooter, defaults.hasfooter);
        optionsTmp.haslogin = isbool(options.haslogin, defaults.haslogin);
        optionsTmp.hasborder = isbool(options.hasborder, defaults.hasborder);
        optionsTmp.hascompass = isbool(options.hascompass, defaults.hascompass);
        optionsTmp.hassocial = isbool(options.hassocial, defaults.hassocial);
        optionsTmp.hastrigram = isbool(options.hastrigram, defaults.hastrigram);
        optionsTmp.hasconnect = isbool(options.hasconnect, defaults.hasconnect);


        optionsTmp.haslogin = false;

        //check margin value
        var m = options.margin;
        if (typeof(m) != "undefined" && m !== null) {
            optionsTmp.margin = parseInt(m);
        }
        // else: the value defined in 'defaults array (copied in optionsTmp) is used

        //check width value
        var w = options.width;
        var w_unit = "%";
        if (typeof(w) != "undefined" && w !== null) {
            w_unit = (w.match(/(%|px)$/) || ["%"])[0];
            var nmbr = parseInt(w);
            if (w_unit == "%" && nmbr > 100) nmbr = 100;
            optionsTmp.width = ( nmbr + 2 * options.margin ) + w_unit;
        }
        // else: the value defined in 'defaults array (copied in optionsTmp) is used

        if (options.mediaqueries) {
            optionsTmp.mediaqueries = options.mediaqueries;
        }


        var params = $.extend(defaults, optionsTmp); // create objects with conform values
        var baseurlLang = "";
        switch (params.language) {
            case "pt":
                baseurlLang = "pt-br/";
                break;
            // case "de":
            // 	baseurlLang = "de/";
            // 	break;
            default :
                break;
        }
        if (baseurlLang == "" && params.language != "en") {
            baseurlLang = params.language + "/";
        }


        var baseurl = (params.secure) ? "https://www.3ds.com/" + baseurlLang : "http://www.3ds.com/" + baseurlLang;
        var baseurl_nolang = (params.secure) ? "https://www.3ds.com/" : "http://www.3ds.com/";

        var compassURL = baseurl + "about-3ds/3dexperience-platform/";

        var createQAList = function () {
            var links = [];
            if (params.language == "fr") {
                compassURL = baseurl + "a-propos-de-3ds/la-plate-forme-3dexperience/";
                switch (params.website) {
                    case "a" :
                        break;
                    case "b" :
                        links.push({"n": "Industries", "u": baseurl + "industries/"});
                        break;
                    case "c" :
                        links.push({"n": "Industries", "u": baseurl + "industries/"});
                        links.push({"n": "Produits et Services", "u": baseurl + "produits-et-services/"});
                        break;
                    case "d" :
                        links.push({"n": "Passion For Innovation", "u": baseurl + "3dexperience/"});
                        break;
                    case "e" :
                        links.push({"n": "Partenaires", "u": baseurl + "partners/"});
                        break;
                    case "f" :
                        links.push({"n": "CGR", "u": baseurl + "industries/consumer-goods-retail/"});
                        break;
                    case "g" :
                        links.push({"n": "Evénements", "u": baseurl + "evenements/"});
                        break;
                    case "h" :
                        links.push({"n": "Produits et Services", "u": baseurl + "produits-et-services/"});
                        break;
                    default :
                        break;
                }
            } else if (params.language == "de") {
                compassURL = baseurl + "ueber-dassault-systemes/3dexperience-plattform/";
                switch (params.website) {
                    case "a" :
                        break;
                    case "b" :
                        links.push({"n": "Branchen", "u": baseurl + "branchen/"});
                        break;
                    case "c" :
                        links.push({"n": "Branchen", "u": baseurl + "branchen/"});
                        links.push({"n": "Produkte und Services", "u": baseurl + "produkte-und-services/"});
                        break;
                    case "d" :
                        links.push({"n": "Passion For Innovation", "u": baseurl_nolang + "3dexperience/"});
                        break;
                    case "e" :
                        links.push({"n": "Partner", "u": baseurl + "partner/"});
                        break;
                    case "f" :
                        links.push({
                            "n": "Gebrauchsgüter und Handel",
                            "u": baseurl + "branchen/gebrauchsgueter-und-handel/"
                        });
                        break;
                    case "g" :
                        links.push({"n": "Veranstaltungen", "u": baseurl + "veranstaltungen/"});
                        break;
                    case "h" :
                        links.push({"n": "Produkte und Services", "u": baseurl + "produkte-und-services/"});
                        break;
                    default :
                        break;
                }
            } else if (params.language == "it") {
                compassURL = baseurl + "informazioni-su-3ds/piattaforma-3dexperience/";
                switch (params.website) {
                    case "a" :
                        break;
                    case "b" :
                        links.push({"n": "Settori Industriali", "u": baseurl + "settori-industriali/"});
                        break;
                    case "c" :
                        links.push({"n": "settori-industriali", "u": baseurl + "settori-industriali/"});
                        links.push({"n": "Prodotti e Servizi", "u": baseurl + "prodotti-e-servizi/"});
                        break;
                    case "d" :
                        links.push({"n": "Passion For Innovation", "u": baseurl + "passion-for-innovation/"});
                        break;
                    case "e" :
                        links.push({"n": "Partner", "u": baseurl + "partner/"});
                        break;
                    case "f" :
                        links.push({
                            "n": "Prodotti di largo consumo e vendita al dettaglio",
                            "u": baseurl + "settori-industriali/prodotti-di-largo-consumo-e-vendita-al-dettaglio/"
                        });
                        break;
                    case "g" :
                        links.push({"n": "Eventi", "u": baseurl + "eventi/"});
                        break;
                    case "h" :
                        links.push({"n": "Prodotti e Servizi", "u": baseurl + "prodotti-e-servizi/"});
                        break;
                    default :
                        break;
                }
            } else if (params.language == "es") {
                compassURL = baseurl + "acerca-de-3ds/plataforma-3dexperience/";
                switch (params.website) {
                    case "a" :
                        break;
                    case "b" :
                        links.push({"n": "Industrias", "u": baseurl + "industrias/"});
                        break;
                    case "c" :
                        links.push({"n": "Industrias", "u": baseurl + "industrias/"});
                        links.push({"n": "Productos y Servicios", "u": baseurl + "productos-y-servicios/"});
                        break;
                    case "d" :
                        links.push({"n": "Passion For Innovation", "u": baseurl + "passion-for-innovation/"});
                        break;
                    case "e" :
                        links.push({"n": "Partners", "u": baseurl + "partners/"});
                        break;
                    case "f" :
                        links.push({
                            "n": "Bienes de consumo y Venta al por menor",
                            "u": baseurl + "industrias/bienes-de-consumo-y-venta-al-por-menor/"
                        });
                        break;
                    case "g" :
                        links.push({"n": "Eventos", "u": baseurl + "eventos/"});
                        break;
                    case "h" :
                        links.push({"n": "Productos y Servicios", "u": baseurl + "productos-y-servicios/"});
                        break;
                    default :
                        break;
                }
            } else if (params.language == "ja") {
                compassURL = baseurl + "about-3ds/3dexperience-platform/";
                switch (params.website) {
                    case "a" :
                        break;
                    case "b" :
                        links.push({"n": "インダストリー", "u": baseurl + "industries/"});
                        break;
                    case "c" :
                        links.push({"n": "インダストリー", "u": baseurl + "industries/"});
                        links.push({"n": "製品 / サービス", "u": baseurl + "products-services/"});
                        break;
                    case "d" :
                        links.push({"n": "Passion For Innovation", "u": baseurl + "passion-for-innovation/"});
                        break;
                    case "e" :
                        links.push({"n": "パートナー", "u": baseurl + "partners/"});
                        break;
                    case "f" :
                        links.push({"n": "消費財・小売業", "u": baseurl + "industries/consumer-goods-retail/"});
                        break;
                    case "g" :
                        links.push({"n": "イベント/セミナー", "u": baseurl + "events/"});
                        break;
                    case "h" :
                        links.push({"n": "製品 / サービス", "u": baseurl + "products-services/"});
                        break;
                    default :
                        break;
                }
            } else if (params.language == "zh") {
                compassURL = baseurl + "about-3ds/3dexperience-platform/";
                switch (params.website) {
                    case "a" :
                        break;
                    case "b" :
                        links.push({"n": "行业", "u": baseurl + "industries/"});
                        break;
                    case "c" :
                        links.push({"n": "行业", "u": baseurl + "industries/"});
                        links.push({"n": "产品和服务", "u": baseurl + "products-services/"});
                        break;
                    case "d" :
                        links.push({"n": "Passion For Innovation", "u": baseurl + "passion-for-innovation/"});
                        break;
                    case "e" :
                        links.push({"n": "パートナー", "u": baseurl + "partners/"});
                        break;
                    case "f" :
                        links.push({"n": "消費財・小売業", "u": baseurl + "industries/consumer-goods-retail/"});
                        break;
                    case "g" :
                        links.push({"n": "活动", "u": baseurl + "events/"});
                        break;
                    case "h" :
                        links.push({"n": "产品和服务", "u": baseurl + "products-services/"});
                        break;
                    default :
                        break;
                }
            } else if (params.language == "ko") {
                compassURL = baseurl + "about-3ds/3dexperience-platform/";
                switch (params.website) {
                    case "a" :
                        break;
                    case "b" :
                        links.push({"n": "산업", "u": baseurl + "industries/"});
                        break;
                    case "c" :
                        links.push({"n": "산업", "u": baseurl + "industries/"});
                        links.push({"n": "제품과 서비스", "u": baseurl + "products-services/"});
                        break;
                    case "d" :
                        links.push({"n": "Passion For Innovation", "u": baseurl + "passion-for-innovation/"});
                        break;
                    case "e" :
                        links.push({"n": "파트너", "u": baseurl + "partners/"});
                        break;
                    case "f" :
                        links.push({"n": "소비재 산업", "u": baseurl + "industries/consumer-goods-retail/"});
                        break;
                    case "g" :
                        links.push({"n": "이벤트", "u": baseurl + "events/"});
                        break;
                    case "h" :
                        links.push({"n": "제품과 서비스", "u": baseurl + "products-services/"});
                        break;
                    default :
                        break;
                }
            } else if (params.language == "ru") {
                compassURL = baseurl + "o-3ds/platforma-3dexperience/";
                switch (params.website) {
                    case "a" :
                        break;
                    case "b" :
                        links.push({"n": "Отрасли", "u": baseurl + "otrasli/"});
                        break;
                    case "c" :
                        links.push({"n": "Отрасли", "u": baseurl + "otrasli/"});
                        links.push({"n": "Продукты и услуги", "u": baseurl + "produkty-i-uslugi/"});
                        break;
                    case "d" :
                        links.push({"n": "Passion For Innovation", "u": baseurl + "passion-for-innovation/"});
                        break;
                    case "e" :
                        links.push({"n": "Партнеры", "u": baseurl + "partnery/"});
                        break;
                    case "f" :
                        links.push({
                            "n": "Товары широкого потребления и розница",
                            "u": baseurl + "otrasli/tovary-shirokogo-potreblenija-i-roznica/"
                        });
                        break;
                    case "g" :
                        links.push({"n": "События", "u": baseurl + "sobytija/"});
                        break;
                    case "h" :
                        links.push({"n": "Продукты и услуги", "u": baseurl + "produkty-i-uslugi/"});
                        break;
                    default :
                        break;
                }
            } else if (params.language == "sv") {
                compassURL = baseurl + "om-3ds/Plattformen-3DEXPERIENCE/";
                switch (params.website) {
                    case "a" :
                        break;
                    case "b" :
                        links.push({"n": "Branscher", "u": baseurl + "branscher/"});
                        break;
                    case "c" :
                        links.push({"n": "Branscher", "u": baseurl + "branscher/"});
                        links.push({"n": "Produkter och tjänster", "u": baseurl + "produkter-och-tjaenster/"});
                        break;
                    case "d" :
                        links.push({"n": "Passion For Innovation", "u": baseurl + "passion-for-innovation/"});
                        break;
                    case "e" :
                        links.push({"n": "Partner", "u": baseurl + "partners/"});
                        break;
                    case "f" :
                        links.push({
                            "n": "Konsumentprodukter och detaljhandel",
                            "u": baseurl + "branscher/konsumentprodukter-och-detaljhandel/"
                        });
                        break;
                    case "g" :
                        links.push({"n": "Events", "u": baseurl + "events/"});
                        break;
                    case "h" :
                        links.push({"n": "Produkter och tjänster", "u": baseurl + "produkter-och-tjaenster/"});
                        break;
                    default :
                        break;
                }
            } else if (params.language == "pt") {
                compassURL = baseurl + "about-3ds/3dexperience-platform/";
                switch (params.website) {
                    case "a" :
                        break;
                    case "b" :
                        links.push({"n": "Industrias", "u": baseurl + "industrias/"});
                        break;
                    case "c" :
                        links.push({"n": "Industrias", "u": baseurl + "Industrias/"});
                        links.push({"n": "Produtos e Servicos", "u": baseurl + "produtos-e-servicos/"});
                        break;
                    case "d" :
                        links.push({"n": "Passion For Innovation", "u": baseurl + "passion-for-innovation/"});
                        break;
                    case "e" :
                        links.push({"n": "Parceiros", "u": baseurl + "parceiros/"});
                        break;
                    case "f" :
                        links.push({
                            "n": "Consumer Goods & Retail",
                            "u": baseurl + "industries/consumer-goods-retail/"
                        });
                        break;
                    case "g" :
                        links.push({"n": "Eventos", "u": baseurl + "eventos/"});
                        break;
                    case "h" :
                        links.push({"n": "Produtos e Servicos", "u": baseurl + "produtos-e-servicos/"});
                        break;
                    default :
                        break;
                }
            } else {
                compassURL = baseurl + "about-3ds/3dexperience-platform/";
                switch (params.website) {
                    case "a" :
                        break;
                    case "b" :
                        links.push({"n": "Industries", "u": baseurl + "industries/"});
                        break;
                    case "c" :
                        links.push({"n": "Industries", "u": baseurl + "industries/"});
                        links.push({"n": "Products & Services", "u": baseurl + "products-services/"});
                        break;
                    case "d" :
                        links.push({"n": "Passion For Innovation", "u": baseurl + "3dexperience/"});
                        break;
                    case "e" :
                        links.push({"n": "Partners", "u": baseurl + "partners/"});
                        break;
                    case "f" :
                        links.push({
                            "n": "Consumer Goods & Retail",
                            "u": baseurl + "industries/consumer-goods-retail/"
                        });
                        break;
                    case "g" :
                        links.push({"n": "Events", "u": baseurl + "events/"});
                        break;
                    case "h" :
                        links.push({"n": "Products & Services", "u": baseurl + "products-services/"});
                        break;
                    default :
                        break;
                }
            }
            return links;
        }
        var links = createQAList();
        var createItemLink = function (name, url, tag) {
            return $("<" + tag + ">").append(
                $("<a>").attr("href", url).attr("title", name).append($("<span>").html(name))
            );
        }
        var displaySocial = function () {
            var $list = $("<p>");
            for (v in soc) {
                createItemLink(soc[v].n, soc[v].u, "span").addClass(soc[v].n).appendTo($list);
            }
            $list.find("a span").addClass(pcss + "hide");
            return $list;
        }
        var displayQuickAccess = function () {
            var $list = $("<p>");
            for (v in links) {
                createItemLink(links[v].n, links[v].u, "span").appendTo($list);
            }
            return $list;
        };
        var displayID = function () {
            //Not implemented yet => return empty span!
            // var $id = $("<p>").append(
            // 		$("<img>").attr("src","pic-id.jpg").addClass(pcss+"pic")
            // 	).append(
            // 		$("<span>").addClass(pcss+"name").append(
            // 			$("<span>").addClass(pcss+"fname").html("John")
            // 		).append(
            // 			$("<span>").addClass(pcss+"lname").html("Doe")
            // 		)
            // 	);
            // return $id;
            return $("<span>");
        }


        var customMediaQueries = function () {

            if (params.mediaqueries) {

                var mq_style = "";

                for (var i = 0; i < params.mediaqueries.length; i++) {

                    mq_style += "@media screen %min_rule% %max_rule% { %rules% }";
                    var min_rule = "and ( min-width: %min% )";
                    var max_rule = "and ( max-width: %max% )";

                    var mq_i = params.mediaqueries[i];

                    if (mq_i.min && mq_i.min != null && mq_i.min != "") {
                        min_rule = min_rule.replace('%min%', mq_i.min);
                        mq_style = mq_style.replace("%min_rule%", min_rule);
                    } else {
                        mq_style = mq_style.replace("%min_rule%", "");
                    }

                    if (mq_i.max && mq_i.max != null && mq_i.max != "") {
                        max_rule = max_rule.replace('%max%', mq_i.max);
                        mq_style = mq_style.replace("%max_rule%", max_rule);
                    } else {
                        mq_style = mq_style.replace("%max_rule%", "");
                    }

                    var rules = "";

                    if (mq_i.width && mq_i.width != null && mq_i.width != "") {
                        rules += ".ds_center { width: " + mq_i.width + " !important; }"
                    }
                    if (mq_i.margin && mq_i.margin != null && mq_i.margin != "") {
                        rules += ".ds_inner { padding: 0 " + mq_i.margin + " !important; }"
                    }

                    mq_style = mq_style.replace('%rules%', rules);

                }

                $('body').append($('<style>').html(mq_style));
            }
        } // EO customMediaQueries()


        var displayFooterLinks = function () {

            var date = new Date();
            var copy_begin = "© 2002-" + date.getFullYear() + " Dassault Systèmes - ";
            var $list = $("<p>");
            var $links = [];
            var $copy = $("<span>");

            if (params.language == "fr") {
                $links.push({"n": "Informations légales", "u": baseurl + "mentions-legales/"});
                $links.push({"n": "Conditions d'utilisation", "u": baseurl + "conditions-dutilisation/"});
                $links.push({
                    "n": "Politique de confidentialité",
                    "u": baseurl + "politique-de-protection-des-donnees-personnelles/"
                });
                $links.push({"n": "Piratage", "u": baseurl + "piratage/"});
                $copy.html(copy_begin + "Tous droits réservés");
            } else if (params.language == "de") {
                $links.push({"n": "Rechtliche Hinweise", "u": baseurl + "rechtliche-hinweise/"});
                $links.push({"n": "Nutzungsbedinungen", "u": baseurl + "nutzungsbedingungen/"});
                $links.push({"n": "Datenschutzrichtlinie", "u": baseurl + "datenschutzrichtlinie/"});
                $links.push({"n": "Piraterie", "u": baseurl + "piraterie/"});
                $copy.html(copy_begin + "Sämtliche Rechte vorbehalten");
            } else if (params.language == "it") {
                $links.push({"n": "Informazioni legali", "u": baseurl + "informazioni-legali/"});
                $links.push({"n": "Condizioni d'uso", "u": baseurl + "condizioni-duso/"});
                $links.push({
                    "n": "Principi di tutela della privacy",
                    "u": baseurl + "principi-di-tutela-della-privacy/"
                });
                $links.push({"n": "Pirateria", "u": baseurl + "pirateria/"});
                $copy.html(copy_begin + "Tutti i diritti riservati");
            } else if (params.language == "ru") {
                $links.push({"n": "Юридическая информация", "u": baseurl + "juridicheskaja-informacija/"});
                $links.push({"n": "Условия использования", "u": baseurl + "pravila-ispolzovanija/"});
                $links.push({
                    "n": "Политика конфиденциальности",
                    "u": baseurl + "pravila-obrabotki-chastnoi-informacii/"
                });
                $links.push({"n": "Пиратство", "u": baseurl + "borba-s-piratstvom/"});
                $copy.html(copy_begin + "Все права защищены");
            } else if (params.language == "es") {
                $links.push({"n": "Información legal", "u": baseurl + "informacion-legal/"});
                $links.push({"n": "Condiciones de uso", "u": baseurl + "terminos-y-condiciones-de-uso/"});
                $links.push({"n": "Política de privacidad", "u": baseurl + "politica-de-privacidad/"});
                $links.push({"n": "Piratería", "u": baseurl + "pirateria/"});
                $copy.html(copy_begin + "Todos los derechos reservados");
            } else if (params.language == "ko") {
                $links.push({"n": "법률 정보", "u": baseurl + "legal-information/"});
                $links.push({"n": "사용권 계약", "u": baseurl + "terms-of-use/"});
                $links.push({"n": "개인정보 보호정책", "u": baseurl + "privacy-policy/"});
                $links.push({"n": "저작권 침해", "u": baseurl + "piracy/"});
                $copy.html(copy_begin + "Copyright");
            } else if (params.language == "zh") {
                $links.push({"n": "法律信息", "u": baseurl + "legal-information/"});
                $links.push({"n": "使用条款", "u": baseurl + "terms-of-use/"});
                $links.push({"n": "隐私政策", "u": baseurl + "privacy-policy/"});
                $links.push({"n": "隐私", "u": baseurl + "piracy/"});
                $copy.html(copy_begin + "保留所有权利");
            } else if (params.language == "ja") {
                $links.push({"n": "法的事項", "u": baseurl + "legal-information/"});
                $links.push({"n": "利用規約", "u": baseurl + "terms-of-use/"});
                $links.push({"n": "個人情報管理方針", "u": baseurl + "privacy-policy/"});
                $links.push({"n": "著作権侵害", "u": baseurl + "piracy/"});
                $copy.html(copy_begin + "無断複写・複製・転載を禁ず");
            } else if (params.language == "se") {
                $links.push({"n": "Juridisk information", "u": baseurl + "laglig-information/"});
                $links.push({"n": "Användarvillkor", "u": baseurl + "anvaendningsvillkor/"});
                $links.push({"n": "Sekretesspolicy", "u": baseurl + "politik-gaellande-personuppgifter/"});
                $links.push({"n": "Piratkopiering", "u": baseurl + "piratkopiering/"});
                $copy.html(copy_begin + "Med ensamrätt");
            } else {
                $links.push({"n": "Legal Info", "u": baseurl + "legal-information/"});
                $links.push({"n": "Terms of use", "u": baseurl + "terms-of-use/"});
                $links.push({"n": "Privacy policy", "u": baseurl + "privacy-policy/"});
                $links.push({"n": "Piracy", "u": baseurl + "piracy/"});
                $copy.html(copy_begin + "All rights reserved");
            }

            //var $linksLength = arr.length;
            for (v in $links) {
                var $pipe = $("<span>").addClass(pcss + "pipe");
                var first = 0;
                var last = $links.length - 1;
                // non utilisé actuellement: classe non existante
                /*if(v == 1){
                 $pipe.addClass(pcss+"br");
                 }*/
                if (v == last) {
                    createItemLink($links[v].n, $links[v].u, "span").appendTo($list);
                } else {
                    createItemLink($links[v].n, $links[v].u, "span").append($pipe).appendTo($list.append(' '));
                }
            }

            $list.append($("<span>").addClass(pcss + "copy").append($copy));
            return $list;
        };
        return this.each(function () {
            var $this = $(this);
            $this.css("padding-top", "56px").css("position", "inherit"); // shift parent object

            var $logo = $("<h3>").addClass(pcss + "logo").append(
                $("<a>").attr("href", baseurl).append(
                    $("<span>").addClass(pcss + "hide").html("Dassault Systèmes")
                )
            ); // create logo


            // <!-- SOCIAL CONTENT
            var $btnSocial = $("<span>").addClass(pcss + "btn").append(
                $("<span>").addClass(pcss + "hide").html("Tools")
            ).on("click", function () {
                    $sliderSocial.stop().animate({width: 'toggle'}, {"duration": 500, "easing": "swing"});
                    $(".h3ds_social").stop().animate({width: 'toggle'}, {"duration": 500, "easing": "swing"});
                    //$(".h3ds_social").toggleClass("isopen");
                }); // create social btn

            var $sliderSocial = $("<div>").addClass(pcss + "slider").hide().append(displaySocial()); //create social slider
            //var $layerSocial = $("<div>").addClass(pcss+"social").append($sliderSocial);  //create social bock
            $btnSocial.append($sliderSocial);
            // SOCIAL CONTENT -->


            // <!-- TRIGRAM : HTML CONTENT
            var $trigram = $("<span>").addClass(pcss + "trigram")
            $trigram.append(
                $("<span>").addClass(pcss + "trigram_content").append(
                    $("<div>").addClass(pcss + "txt")
                )
            );

            //  Connect : HTML CONTENT -->

            // <!-- Connect : HTML CONTENT
            var $connect = $("<span>").addClass((pcss + "connect"));
            $connect.append(
                $("<a>").addClass(pcss + "banner-btn").append('Connect')
            );

            var $modal = $("<div>")
                .addClass('modal')
                .addClass('fade')
                .attr('id', options.modalId)
                .attr('tabindex', '-1')
                .attr('role', 'dialog')
                .attr('aria-hidden', 'true').append(
                $("<div>").addClass('modal-dialog').append(
                    $("<div>").addClass('modal-content').append(
                        $("<div>").addClass('modal-body').append(
                            $("<button>")
                                .addClass('close')
                                .attr('type', 'button')
                                .attr('data-dismiss', 'modal')
                                .attr('aria-label', 'Close').append(
                                $("<span>").attr('aria-hidden', 'true')
                            )
                        ).append(
                            $("<iframe>")
                                .attr('id', options.modalId + '-iframe')
                                .attr('src', '')
                                .attr('width', '100%')
                                .attr('height', '100%')
                                .attr('frameborder', '0')
                                .attr('allowtransparency', 'true')
                        )
                    )
                )
            );

            //  Connect : HTML CONTENT -->

            var $layerID = $("<div>").addClass(pcss + "id").append(displayID());  //create social bock

            var $compassA = $("<a>").attr("href", compassURL);  //create compass link
            var $compass = $("<div>").addClass(pcss + "compass").append($compassA);  //create compass bock


            var $quickAccess = $("<div>").addClass(pcss + "links").append(displayQuickAccess()); // create quick access
            var $rightSide = $("<div>").addClass(pcss + "right")//.append($btnSocial);//.append($sliderSocial); // create right side
            var $header = $("<div>").addClass("ds").addClass(pcss + params.bgcolor); // create global header
            var $headerWinner = $("<div>").addClass(pcss + "inner").css("padding", "0 " + params.margin + "px");
            var $headerW = $("<div>").addClass(pcss + "center").width(params.width);
            if (!params.hasborder) {
                $header.addClass(pcss + "noborder");
            }

            var $footer = $("<div>").addClass("ds").addClass(pcss + "footer").addClass(pcss + params.bgcolor); // create global footer
            var $footerW = $("<div>").addClass(pcss + "center").width(params.width);
            var $footerLinks = $("<div>").addClass(pcss + "flinks").append(displayFooterLinks()); // create quick access
            customMediaQueries();

            var iconClass = "";
            switch (params.bgcolor) {
                case "black":
                    iconClass = "txtlight";
                    break;
                case "dark":
                    iconClass = "txtlight";
                    break;
                case "grey":
                    iconClass = "txtlight";
                    break;
                case "light":
                    iconClass = "txtdark";
                    break;
                case "white":
                    iconClass = "txtblue";
                    break;
                case "blue":
                    iconClass = "txtlight";
                    break;
                default:
                    iconClass = "txtblue";
                    break;
            }
            $header.addClass(pcss + iconClass);
            $footer.addClass(pcss + iconClass);

            // $header.append($logo).append($rightSide.append($quickAccess));
            $header.append($headerW.append($headerWinner.append($logo).append($rightSide.append($quickAccess))));

            if (params.haslogin) {
                $layerID.prependTo($rightSide);
            }

            if (params.hassocial) {
                $btnSocial.prependTo($rightSide);
            }

            if (params.hastrigram) {
                $trigram.prependTo($rightSide);
            }

            if (params.hasconnect) {
                $connect.prependTo($rightSide);
            }

            if (params.hascompass) {
                $compass.prependTo($rightSide);
            }

            if (params.display_social_btn) {
                $compass.prependTo($rightSide);
            }

            $footer.append($footerLinks);
            $footer.append($footerW.append($footerLinks));


            $header.prependTo($this);
            $modal.prependTo($this);
            if (params.hasfooter) {
                $footer.appendTo($this);
            } else {
                // delete $footer;
            }
            if (params.callback) {
                params.callback();
            }
        });
    };

})(jQuery);