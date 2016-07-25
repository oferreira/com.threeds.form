/*******************************************************
Header 3DS 0.1.6 | 5/12/2014
Developed by: Fred - iud@3ds.com | Dassault Systèmes
********************************************************/


/******************************************************* 
// minification/obfuscation : http://refresh-sf.com/
*/


(function($){
	$.fn.header3ds=function(opt){
		var options = $.extend({}, opt); 
		var defaults = {
			"bgcolor":"blue",
			"secure":false,
			"website":"a",
			"language":"en",
			"hasfooter":false,
			"haslogin":false,
			"hascompass":true,
			"hasborder":true,
			"margin": 0,
			"width":"100%",
			"callback":null
		};
		var bgcolor = ["black","dark","grey","light","white","blue"]; // list of choices avalaible
		var lang = ["en","fr","de"]; // list of choices avalaible
		var website = ["a","b","c","d","e","f","g","h"]; // list of choices avalaible
		var optionsTmp = $.extend({}, defaults); // duplicate defaults object's value
		var soc = [
			{n:"facebook",	u:"https://www.facebook.com/DassaultSystemes"		},
			{n:"linkedin",	u:"http://www.linkedin.com/company/3896?trk=tyah"	},
			{n:"swym",		u:"https://swym.3ds.com/"							},
			{n:"twitter",	u:"https://twitter.com/dassault3DS"					},
			{n:"youtube",	u:"http://www.youtube.com/user/DassaultSystemes"	},
			{n:"rss",		u:"http://www.3ds.com/rss/"						}
		];
		// Check if options purposed are availables in list of choice
		var isok = function(value, arr) {
			return ( arr.indexOf( value ) != -1 );
		}
		var isbool = function(val, defaultVal) {
			//true by default
			if(defaultVal){
				if(val == "false" || val == false || val == "0" || val == 0){
					var retVal = false;
				}else{
					var retVal = true;
				}
			//false by default
			}else{
				if(val == "true" || val == true || val == "1" || val == 1){
					var retVal = true;
				}else{
					var retVal = false;
				}
			}
			return retVal;
		}
		if(isok(options.bgcolor,bgcolor)){
			optionsTmp.bgcolor = options.bgcolor;
		}
		if(isok(options.website,website)){
			optionsTmp.website = options.website;
		}
		if(isok(options.language,lang)){
			optionsTmp.language = options.language;
		}
		optionsTmp.secure 		= isbool(options.secure,defaults.secure);
		optionsTmp.hasfooter 	= isbool(options.hasfooter,defaults.hasfooter);
		optionsTmp.haslogin 	= isbool(options.haslogin,defaults.haslogin);
		optionsTmp.hasborder 	= isbool(options.hasborder,defaults.hasborder);
		optionsTmp.hascompass 	= isbool(options.hascompass,defaults.hascompass);


		optionsTmp.haslogin 	= false;

		//check width value
		var w = options.width;
		var w_unit = "%";
		if(typeof(w) != "undefined" && w !== null) {
			w_unit = (w.match(/(%|px)$/)||["%"])[0];
			var nmbr = parseInt(w);
			if(w_unit=="%" && nmbr > 100) nmbr = 100;
			optionsTmp.width = nmbr+w_unit;
		}
		// else: the value defined in 'defaults array (copied in optionsTmp) is used

		//check margin value
		var m = options.margin;
		if(w_unit == "%" && (typeof(m) != "undefined" && m !== null)) {
			optionsTmp.margin = parseInt(m);
		}
		// else: the value defined in 'defaults array (copied in optionsTmp) is used

		var pcss = "ds_";
		var params = $.extend(defaults, optionsTmp); // create objects with conform values
		var baseurlLang = "";
		// switch(params.language){
		// 	case "fr":
		// 		baseurlLang = "fr/";
		// 		break;
		// 	case "de":
		// 		baseurlLang = "de/";
		// 		break;
		// 	case "en":
		// 	default :
		// 		break;
		// }

		if(params.language != "en"){
			baseurlLang = params.language+"/";
		}


		var baseurl = (params.secure)?"https://www.3ds.com/"+baseurlLang:"http://www.3ds.com/"+baseurlLang;
		var baseurl_nolang = (params.secure)?"https://www.3ds.com/":"http://www.3ds.com/";

		var compassURL = baseurl+"about-3ds/3dexperience-platform/";

		var createQAList = function(){
			var links = [];
			if(params.language == "fr"){
				compassURL = baseurl+"a-propos-de-3ds/la-plate-forme-3dexperience/";
				switch (params.website){
					case "a" :
						break;
					case "b" :
						links.push( {"n":"Industries",					"u":baseurl+"industries/"							});
						break;
					case "c" :
						links.push( {"n":"Industries", 					"u":baseurl+"industries/" 							});
						links.push( {"n":"Produits et Services", 		"u":baseurl+"produits-et-services/" 				});
						break;
					case "d" :
						links.push( {"n":"Passion For Innovation", 		"u":baseurl+"3dexperience/" 						});
						break;
					case "e" :
						links.push( {"n":"Partenaires", 				"u":baseurl+"partners/" 							});
						break;
					case "f" :
						links.push( {"n":"CGR", 						"u":baseurl+"industries/consumer-goods-retail/" 	});
						break;
					case "g" :
						links.push( {"n":"Evénements", 					"u":baseurl+"evenements/" 							});
						break;
					case "h" :
						links.push( {"n":"Produits et Services", 		"u":baseurl+"produits-et-services/" 				});
						break;
					default :
						break;
				}				
			}else if(params.language == "de"){
				compassURL = baseurl+"ueber-dassault-systemes/3dexperience-plattform/";
				switch (params.website){
					case "a" :
						break;
					case "b" :
						links.push( {"n":"Branchen",					"u":baseurl+"branchen/"								});
						break;
					case "c" :
						links.push( {"n":"Branchen", 					"u":baseurl+"branchen/" 							});
						links.push( {"n":"Produkte und Services", 		"u":baseurl+"produkte-und-services/" 				});
						break;
					case "d" :
						links.push( {"n":"Passion For Innovation", 		"u":baseurl_nolang+"3dexperience/" 					});
						break;
					case "e" :
						links.push( {"n":"Partner", 					"u":baseurl+"partner/" 								});
						break;
					case "f" :
						links.push( {"n":"Gebrauchsgüter und Handel", 	"u":baseurl+"branchen/gebrauchsgueter-und-handel/" 	});
						break;
					case "g" :
						links.push( {"n":"Veranstaltungen", 			"u":baseurl+"veranstaltungen/" 						});
						break;
					case "h" :
						links.push( {"n":"Produkte und Services", 		"u":baseurl+"produkte-und-services/" 				});
						break;
					default :
						break;
				}				
			}else{
				compassURL = baseurl+"about-3ds/3dexperience-platform/";
				switch (params.website){
					case "a" :
						break;
					case "b" :
						links.push( {"n":"Industries",					"u":baseurl+"industries/"							});
						break;
					case "c" :
						links.push( {"n":"Industries", 					"u":baseurl+"industries/" 							});
						links.push( {"n":"Products & Services", 		"u":baseurl+"products-services/" 					});
						break;
					case "d" :
						links.push( {"n":"Passion For Innovation", 		"u":baseurl+"3dexperience/" 						});
						break;
					case "e" :
						links.push( {"n":"Partners", 					"u":baseurl+"partners/" 							});
						break;
					case "f" :
						links.push( {"n":"Consumer Goods & Retail", 	"u":baseurl+"industries/consumer-goods-retail/" 	});
						break;
					case "g" :
						links.push( {"n":"Events", 						"u":baseurl+"events/" 	});
						break;
					case "h" :
						links.push( {"n":"Products & Services", 		"u":baseurl+"products-services/" 					});
						break;
					default :
						break;
				}				
			}
			return links;
		}
		var links = createQAList(); 
		var createItemLink = function(name,url,tag){
			return $("<"+tag+">").append(
					$("<a>").attr("href",url).attr("title",name).append($("<span>").html(name))
			);
		}
		var displaySocial = function(){
			var $list = $("<p>"); 
			for (v in soc) {
				createItemLink(soc[v].n,soc[v].u,"span").addClass(soc[v].n).appendTo($list);
			}
			$list.find("a span").addClass(pcss+"hide");
			return $list;
		}
		var displayQuickAccess = function(){ 
			var $list = $("<p>");
			for (v in links) {
				createItemLink(links[v].n,links[v].u,"span").appendTo($list);
			}
			return $list;
		};  
		var displayID = function(){
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
		var displayFooterLinks = function(){

			var date = new Date();
			var copy_begin = "© 2002-"+date.getFullYear()+" Dassault Systèmes - ";
			var $list = $("<p>");
			var $links = [];
			var $copy = $("<span>");
			if(params.language == "fr"){
				$links.push( {"n":"Informations légales", 				"u":baseurl+"legal-information/"		});
				$links.push( {"n":"Conditions d'utilisation", 			"u":baseurl+"terms-of-use/" 			});
				$links.push( {"n":"Politique de confidentialité", 		"u":baseurl+"privacy-policy/" 			});
				$links.push( {"n":"Piratage", 							"u":baseurl+"piracy/" 					});
				$copy.html(copy_begin+"Tous droits réservés");

			}else if(params.language == "de"){
				$links.push( {"n":"Rechtliche Hinweise", 				"u":baseurl+"rechtliche-hinweise/"		});
				$links.push( {"n":"Nutzungsbedinungen", 				"u":baseurl+"nutzungsbedingungen/" 		});
				$links.push( {"n":"Datenschutzrichtlinie", 				"u":baseurl+"datenschutzrichtlinie/" 	});
				$links.push( {"n":"Piraterie", 							"u":baseurl+"piraterie/" 				});
				$copy.html(copy_begin+"Sämtliche Rechte vorbehalten");
				
			}else{
				$links.push( {"n":"Legal Info", 						"u":baseurl+"legal-information/"		});
				$links.push( {"n":"Terms of use", 						"u":baseurl+"terms-of-use/" 			});
				$links.push( {"n":"Privacy policy", 					"u":baseurl+"privacy-policy/" 			});
				$links.push( {"n":"Piracy", 							"u":baseurl+"piracy/" 					});
				$copy.html(copy_begin+"All rights reserved");
			}
			for (v in $links) {
				var $pipe = $("<span>").addClass(pcss+"pipe");
				var first = 0;
				var last = $links.length-1;
				// non utilisé actuellement: classe non existante
				/*if(v == 1){
					$pipe.addClass(pcss+"br"); 
				}*/
				if(v == last){
					createItemLink($links[v].n,$links[v].u,"span").appendTo($list);
				}else{
					createItemLink($links[v].n,$links[v].u,"span").append($pipe).appendTo($list);
				}
			}

			$list.append($("<span>").addClass(pcss+"copy").append($copy));
			return $list;
		};
		return this.each(function(){
			var $this = $(this);
			$this.css("padding-top","56px").css("position","inherit"); // shift parent object

			var $logo = $("<h3>").addClass(pcss+"logo").append(
					$("<a>").attr("href",baseurl).append(
						$("<span>").addClass(pcss+"hide").html("Dassault Systèmes")
					)
				); // create logo
			var $btnSocial = $("<span>").addClass(pcss+"btn").append(
							$("<span>").addClass(pcss+"hide").html("Tools")
				).on("click",function(){
					$sliderSocial.stop().animate({width:'toggle'},{"duration":500,"easing":"swing"});
					$(".h3ds_social").stop().animate({width:'toggle'},{"duration":500,"easing":"swing"});
					//$(".h3ds_social").toggleClass("isopen");
				}); // create social btn

			var $sliderSocial = $("<div>").addClass(pcss+"slider").hide().append(displaySocial()); //create social slider
			var $layerSocial = $("<div>").addClass(pcss+"social").append($sliderSocial);  //create social bock
			var $layerID = $("<div>").addClass(pcss+"id").append(displayID());  //create social bock

			var $compassA = $("<a>").attr("href",compassURL);  //create compass link
			var $compass = $("<div>").addClass(pcss+"compass").append($compassA);  //create compass bock

			
			var $quickAccess = $("<div>").addClass(pcss+"links").append(displayQuickAccess()); // create quick access
			var $rightSide = $("<div>").addClass(pcss+"right").append($btnSocial).append($sliderSocial); // create right side
			var $header = $("<div>").addClass("ds").addClass(pcss+params.bgcolor); // create global header
			var $headerWinner = $("<div>").addClass(pcss+"inner").css("padding","0 " + params.margin+"px" );
			var $headerW = $("<div>").addClass(pcss+"center").width(params.width);
			if(!params.hasborder){
				$header.addClass(pcss+"noborder");
			}

			var $footer = $("<div>").addClass("ds").addClass(pcss+"footer").addClass(pcss+params.bgcolor); // create global footer
			var $footerW = $("<div>").addClass(pcss+"center").width(params.width);
			var $footerLinks = $("<div>").addClass(pcss+"flinks").append(displayFooterLinks()); // create quick access

			var iconClass = "";
			switch(params.bgcolor){
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
			$header.addClass(pcss+iconClass);
			$footer.addClass(pcss+iconClass);

			// $header.append($logo).append($rightSide.append($quickAccess));
			$header.append($headerW.append($headerWinner.append($logo).append($rightSide.append($quickAccess))));

			if(params.haslogin){
				$layerID.prependTo($rightSide);
			}else{
				delete $layerID;
			}
			if(params.hascompass){
				$compass.prependTo($rightSide);
			}else{
				delete $compass;
			}


			$footer.append($footerLinks);
			$footer.append($footerW.append($footerLinks));


			$header.prependTo($this);
			if(params.hasfooter){
				$footer.appendTo($this);
			}else{
				delete $footer;
			}
			if(params.callback){
				params.callback();
			}
		});
	};

})(jQuery);
