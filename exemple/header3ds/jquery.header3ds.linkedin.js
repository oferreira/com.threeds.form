/*******************************************************
Header 3DS 0.1.6 | 5/12/2014
Developed by: Fred - iud@3ds.com | Dassault Systèmes
********************************************************/


/******************************************************* 
// minification/obfuscation : http://refresh-sf.com/yui/
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
		var lang = ["en","fr"]; // list of choices avalaible
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
			for (x in arr){
				if(arr[x] == value){
					return true;
				}		
			}
			return false;
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
		optionsTmp.secure = options.secure;
		optionsTmp.hasfooter = options.hasfooter;
		optionsTmp.haslogin = options.haslogin;
		optionsTmp.hasborder = options.hasborder;
		optionsTmp.hascompass = options.hascompass;
		//check width value
		var w = options.width;
		var w_unit = "%";
		if(typeof(w) != "undefined" && w !== null) {
			w_unit = (w.match(/(%|px)$/)||["%"])[0];
			var nmbr = parseInt(w);
			if(w_unit=="%" && nmbr > 100) nmbr = 100;
			optionsTmp.width = nmbr+w_unit;
		}else{
			optionsTmp.width = "100%";
		}

		//check margin value
		var m = options.margin;
		optionsTmp.margin = "0";
		if(w_unit == "%" && (typeof(m) != "undefined" && m !== null)) {
			optionsTmp.margin = parseInt(m);
		}

		var pcss = "ds_";
		var params = $.extend(defaults, optionsTmp); // create objects with conform values


		console.log("params.hascompass : " + params.hascompass);

		var baseurlLang = "";
		switch(params.language){
			case "fr":
				baseurlLang = "fr/";
			case "en":
			default :
				break;
		}
		var baseurl = (params.secure)?"https://www.3ds.com/"+baseurlLang:"http://www.3ds.com/"+baseurlLang;
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
			var $id = $("<a>").addClass(pcss+"login_info").attr("href","#").append(
					$("<img>").attr("src","/fileadmin/templates/images/spacer.png").addClass(pcss+"pic")
				).append(
					$("<span>").addClass(pcss+"name").append(
						$("<span>").addClass(pcss+"fname").html("")
					).append(
						$("<span>").addClass(pcss+"lname").html("")
					).append(
						$("<span>").addClass(pcss+"login").html("Login")
					)
				);
			return $id;
			//return $("<span>");
		}
		var displayFooterLinks = function(){
			var $list = $("<p>");
			var $links = [];
			var $copy = $("<span>");
			if(params.language == "fr"){
				$links.push( {"n":"Informations légales", 			"u":baseurl+"legal-information/"			});
				$links.push( {"n":"Conditions d'utilisation", 		"u":baseurl+"terms-of-us/" 					});
				$links.push( {"n":"Politique de confidentialité", 	"u":baseurl+"privacy-policy/" 				});
				$links.push( {"n":"Piratage", 						"u":baseurl+"piracy/" 						});
				$copy.html("© 2002-2014 Dassault Systèmes - Tous droits réservés");
				
			}else{
				$links.push( {"n":"Legal Info", 						"u":baseurl+"legal-information/"		});
				$links.push( {"n":"Terms of use", 						"u":baseurl+"terms-of-us/" 				});
				$links.push( {"n":"Privacy policy", 					"u":baseurl+"privacy-policy/" 			});
				$links.push( {"n":"Piracy", 							"u":baseurl+"piracy/" 					});
				$copy.html("© 2002-2014 Dassault Systèmes - All rights reserved");
			}
			for (v in $links) {
				var $pipe = $("<span>").addClass(pcss+"pipe");
				first = 0;
				last = $links.length-1;
				if(v == 1){
					$pipe.addClass(pcss+"br");
				}
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
			if(params.hascompass == "true"){
				$compass.prependTo($rightSide);
				console.log("true");
			}else{
				delete $compass;
				console.log("false");
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
