(function ($, Drupal, window) {
;( function( window ) {

		'use strict';

	var transEndEventNames = {
			'WebkitTransition': 'webkitTransitionEnd',
			'MozTransition': 'transitionend',
			'OTransition': 'oTransitionEnd',
			'msTransition': 'MSTransitionEnd',
			'transition': 'transitionend'
		},
		transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
		support = { transitions : Modernizr.csstransitions };

	function extend( a, b ) {
		for( var key in b ) { 
			if( b.hasOwnProperty( key ) ) {
				a[key] = b[key];
			}
		}
		return a;
	}

	function UIMorphingButton( el, options ) {
		this.el = el;
		this.options = extend( {}, this.options );
		extend( this.options, options );
		this._init();
	}

	UIMorphingButton.prototype.options = {
		closeEl : '',
		onBeforeOpen : function() { return false; },
		onAfterOpen : function() { return false; },
		onBeforeClose : function() { return false; },
		onAfterClose : function() { return false; }
	}

	UIMorphingButton.prototype._init = function() {
		this.button = this.el.querySelector( 'button' );
		this.expanded = false;
		this.contentEl = this.el.querySelector( '.morph-content' );
		this._initEvents();
	}

	UIMorphingButton.prototype._initEvents = function() {
		var self = this;
		this.button.addEventListener( 'click', function() { self.toggle(); } );
		if( this.options.closeEl !== '' ) {
			var closeEl = this.el.querySelector( this.options.closeEl );
			if( closeEl ) {
				closeEl.addEventListener( 'click', function() { self.toggle(); } );
			}
		}
		document.onkeydown = function(evt) {
		    evt = evt || window.event;
			if( self.options.closeEl !== '' ) {
				var closeEl = self.el.querySelector( self.options.closeEl );
				if( closeEl && self.expanded) {
					self.toggle();
				}
			}
		};
	}

	UIMorphingButton.prototype.toggle = function() {
		if( this.isAnimating ) return false;

		if( this.expanded ) {
			this.options.onBeforeClose();
		}
		else {
			classie.addClass( this.el, 'active' );
			this.options.onBeforeOpen();
		}

		this.isAnimating = true;

		var self = this,
			onEndTransitionFn = function( ev ) {
				if( ev.target !== this ) return false;

				if( support.transitions ) {
					if( self.expanded && ev.propertyName !== 'opacity' || !self.expanded && ev.propertyName !== 'width' && ev.propertyName !== 'height' && ev.propertyName !== 'left' && ev.propertyName !== 'top' ) {
						return false;
					}
					this.removeEventListener( transEndEventName, onEndTransitionFn );
				}
				self.isAnimating = false;

				if( self.expanded ) {
					classie.removeClass( self.el, 'active' );
					self.options.onAfterClose();
				}
				else {
					self.options.onAfterOpen();
				}

				self.expanded = !self.expanded;
			};

		if( support.transitions ) {
			this.contentEl.addEventListener( transEndEventName, onEndTransitionFn );
		}
		else {
			onEndTransitionFn();
		}

		var buttonPos = this.button.getBoundingClientRect();
		classie.addClass( this.contentEl, 'no-transition' );
		this.contentEl.style.left = 'auto';
		this.contentEl.style.top = 'auto';

		setTimeout( function() { 
			self.contentEl.style.left = buttonPos.left + 'px';
			self.contentEl.style.top = buttonPos.top + 'px';

						if( self.expanded ) {
				classie.removeClass( self.contentEl, 'no-transition' );
				classie.removeClass( self.el, 'open' );
			}
			else {
				setTimeout( function() { 
					classie.removeClass( self.contentEl, 'no-transition' );
					classie.addClass( self.el, 'open' ); 
				}, 25 );
			}
		}, 25 );
	}

	window.UIMorphingButton = UIMorphingButton;

})( window );



( function( window ) {

'use strict';


function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

if ( typeof define === 'function' && define.amd ) {
  define( classie );
} else {
  window.classie = classie;
}

})( window );


var autoComplete = (function(){
    function autoComplete(options){
        if (!document.querySelector) return;

        function hasClass(el, className){ return el.classList ? el.classList.contains(className) : new RegExp('\\b'+ className+'\\b').test(el.className); }

        function addEvent(el, type, handler){
            if (el.attachEvent) el.attachEvent('on'+type, handler); else el.addEventListener(type, handler);
        }
        function removeEvent(el, type, handler){
            if (el.detachEvent) el.detachEvent('on'+type, handler); else el.removeEventListener(type, handler);
        }
        function live(elClass, event, cb, context){
            addEvent(context || document, event, function(e){
                var found, el = e.target || e.srcElement;
                while (el && !(found = hasClass(el, elClass))) el = el.parentElement;
                if (found) cb.call(el, e);
            });
        }

        var o = {
            selector: 0,
            source: 0,
            minChars: 3,
            delay: 150,
            offsetLeft: 0,
            offsetTop: 1,
            cache: 1,
            menuClass: '',
            renderItem: function (item, search){
                search = search.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
                var re = new RegExp("(" + search.split(' ').join('|') + ")", "gi");
                return '<div class="autocomplete-suggestion" data-val="' + item + '">' + item.replace(re, "<b>$1</b>") + '</div>';
            },
            onSelect: function(e, term, item){}
        };
        for (var k in options) { if (options.hasOwnProperty(k)) o[k] = options[k]; }

        var elems = typeof o.selector == 'object' ? [o.selector] : document.querySelectorAll(o.selector);
        for (var i=0; i<elems.length; i++) {
            var that = elems[i];

            that.sc = document.createElement('div');
            that.sc.className = 'autocomplete-suggestions '+o.menuClass;

            that.autocompleteAttr = that.getAttribute('autocomplete');
            that.setAttribute('autocomplete', 'off');
            that.cache = {};
            that.last_val = '';

            that.updateSC = function(resize, next){
                var rect = that.getBoundingClientRect();
                that.sc.style.left = Math.round(rect.left + (window.pageXOffset || document.documentElement.scrollLeft) + o.offsetLeft) + 'px';
                that.sc.style.top = Math.round(rect.bottom + (window.pageYOffset || document.documentElement.scrollTop) + o.offsetTop) + 'px';
                that.sc.style.width = Math.round(rect.right - rect.left) + 'px'; 
                if (!resize) {
                    that.sc.style.display = 'block';
                    if (!that.sc.maxHeight) { that.sc.maxHeight = parseInt((window.getComputedStyle ? getComputedStyle(that.sc, null) : that.sc.currentStyle).maxHeight); }
                    if (!that.sc.suggestionHeight) that.sc.suggestionHeight = that.sc.querySelector('.autocomplete-suggestion').offsetHeight;
                    if (that.sc.suggestionHeight)
                        if (!next) that.sc.scrollTop = 0;
                        else {
                            var scrTop = that.sc.scrollTop, selTop = next.getBoundingClientRect().top - that.sc.getBoundingClientRect().top;
                            if (selTop + that.sc.suggestionHeight - that.sc.maxHeight > 0)
                                that.sc.scrollTop = selTop + that.sc.suggestionHeight + scrTop - that.sc.maxHeight;
                            else if (selTop < 0)
                                that.sc.scrollTop = selTop + scrTop;
                        }
                }
            }
            addEvent(window, 'resize', that.updateSC);
            document.body.appendChild(that.sc);

            live('autocomplete-suggestion', 'mouseleave', function(e){
                var sel = that.sc.querySelector('.autocomplete-suggestion.selected');
                if (sel) setTimeout(function(){ sel.className = sel.className.replace('selected', ''); }, 20);
            }, that.sc);

            live('autocomplete-suggestion', 'mouseover', function(e){
                var sel = that.sc.querySelector('.autocomplete-suggestion.selected');
                if (sel) sel.className = sel.className.replace('selected', '');
                this.className += ' selected';
            }, that.sc);

            live('autocomplete-suggestion', 'mousedown', function(e){
                if (hasClass(this, 'autocomplete-suggestion')) { 
                    var v = this.getAttribute('data-val');
                    that.value = v;
                    o.onSelect(e, v, this);
                    that.sc.style.display = 'none';
                }
            }, that.sc);

            that.blurHandler = function(){
                try { var over_sb = document.querySelector('.autocomplete-suggestions:hover'); } catch(e){ var over_sb = 0; }
                if (!over_sb) {
                    that.last_val = that.value;
                    that.sc.style.display = 'none';
                    setTimeout(function(){ that.sc.style.display = 'none'; }, 350); 
                } else if (that !== document.activeElement) setTimeout(function(){ that.focus(); }, 20);
            };
            addEvent(that, 'blur', that.blurHandler);

            var suggest = function(data){
                var val = that.value;
                that.cache[val] = data;
                if (data.length && val.length >= o.minChars) {
                    var s = '';
                    for (var i=0;i<data.length;i++) s += o.renderItem(data[i], val);
                    that.sc.innerHTML = s;
                    that.updateSC(0);
                }
                else
                    that.sc.style.display = 'none';
            }

            that.keydownHandler = function(e){
                var key = window.event ? e.keyCode : e.which;
                if ((key == 40 || key == 38) && that.sc.innerHTML) {
                    var next, sel = that.sc.querySelector('.autocomplete-suggestion.selected');
                    if (!sel) {
                        next = (key == 40) ? that.sc.querySelector('.autocomplete-suggestion') : that.sc.childNodes[that.sc.childNodes.length - 1]; 
                        next.className += ' selected';
                        that.value = next.getAttribute('data-val');
                    } else {
                        next = (key == 40) ? sel.nextSibling : sel.previousSibling;
                        if (next) {
                            sel.className = sel.className.replace('selected', '');
                            next.className += ' selected';
                            that.value = next.getAttribute('data-val');
                        }
                        else { sel.className = sel.className.replace('selected', ''); that.value = that.last_val; next = 0; }
                    }
                    that.updateSC(0, next);
                    return false;
                }
                else if (key == 27) { that.value = that.last_val; that.sc.style.display = 'none'; }
                else if (key == 13 || key == 9) {
                    var sel = that.sc.querySelector('.autocomplete-suggestion.selected');
                    if (sel && that.sc.style.display != 'none') { o.onSelect(e, sel.getAttribute('data-val'), sel); setTimeout(function(){ that.sc.style.display = 'none'; }, 20); }
                }
            };
            addEvent(that, 'keydown', that.keydownHandler);

            that.keyupHandler = function(e){
                var key = window.event ? e.keyCode : e.which;
                if (!key || (key < 35 || key > 40) && key != 13 && key != 27) {
                    var val = that.value;
                    if (val.length >= o.minChars) {
                        if (val != that.last_val) {
                            that.last_val = val;
                            clearTimeout(that.timer);
                            if (o.cache) {
                                if (val in that.cache) { suggest(that.cache[val]); return; }
                                for (var i=1; i<val.length-o.minChars; i++) {
                                    var part = val.slice(0, val.length-i);
                                    if (part in that.cache && !that.cache[part].length) { suggest([]); return; }
                                }
                            }
                            that.timer = setTimeout(function(){ o.source(val, suggest) }, o.delay);
                        }
                    } else {
                        that.last_val = val;
                        that.sc.style.display = 'none';
                    }
                }
            };
            addEvent(that, 'keyup', that.keyupHandler);

            that.focusHandler = function(e){
                that.last_val = '\n';
                that.keyupHandler(e)
            };
            if (!o.minChars) addEvent(that, 'focus', that.focusHandler);
        }

        this.destroy = function(){
            for (var i=0; i<elems.length; i++) {
                var that = elems[i];
                removeEvent(window, 'resize', that.updateSC);
                removeEvent(that, 'blur', that.blurHandler);
                removeEvent(that, 'focus', that.focusHandler);
                removeEvent(that, 'keydown', that.keydownHandler);
                removeEvent(that, 'keyup', that.keyupHandler);
                if (that.autocompleteAttr)
                    that.setAttribute('autocomplete', that.autocompleteAttr);
                else
                    that.removeAttribute('autocomplete');
                document.body.removeChild(that.sc);
                that = null;
            }
        };
    }
    return autoComplete;
})();

(function(){
    if (typeof define === 'function' && define.amd)
        define('autoComplete', function () { return autoComplete; });
    else if (typeof module !== 'undefined' && module.exports)
        module.exports = autoComplete;
    else
        window.autoComplete = autoComplete;
})();

$.namespace = function (namespaceName, closures) {

    if ($.fn[namespaceName] === undefined) {
        $.fn[namespaceName] = function executor(context) {
            if (this instanceof executor) {
                this.__context__ = context;
            }
            else {
                return new executor(this);
            }
        };
    }

    $.each(closures, function (closureName, closure) {
        $.fn[namespaceName].prototype[closureName] = function () {
            return closure.apply(this.__context__, arguments);
        };
    });

};

addEventListener('WebComponentsReady', function () {
var Com;
(function (Com) {
    var Threeds;
    (function (Threeds) {
        Threeds._config = {
            form: {
                id: '32f91ef071fe9e8974f3e6468c36312d',
                adapter: 'Com.Threeds.Service.Adapter.Neolane',
                url: 'http://dassault-dev.neolane.net/dsx/lp_api.jssp'
            }
        };
    })(Threeds = Com.Threeds || (Com.Threeds = {}));
})(Com || (Com = {}));
var Com;
(function (Com) {
    var Threeds;
    (function (Threeds) {
        Threeds._locale = {
            'en': {
                'error': {
                    'field_invalid': "This field is invalid",
                    'field_require': 'This field is required',
                    'email_invalid': 'A valid email address is required',
                    'checkbox_require': 'Please select the check box'
                }
            },
            'fr': {
                'error': {
                    'field_invalid': "This field is invalid",
                    'field_require': 'This field is required',
                    'email_invalid': 'A valid email address is required',
                    'checkbox_require': 'Please select the check box'
                }
            }
        };
    })(Threeds = Com.Threeds || (Com.Threeds = {}));
})(Com || (Com = {}));
var Com;
(function (Com) {
    var Threeds;
    (function (Threeds) {
        Threeds._parameters = {
            'translator': {
                'lang': 'en',
                'adapter': 'Com.Threeds._locale'
            }
        };
    })(Threeds = Com.Threeds || (Com.Threeds = {}));
})(Com || (Com = {}));
String.prototype.format = function () {
    var formatted = this;
    for (var i = 0; i < arguments.length; i++) {
        var regexp = new RegExp('\\{' + i + '\\}', 'gi');
        formatted = formatted.replace(regexp, arguments[i]);
    }
    return formatted;
};
var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Com;
(function (Com) {
    var Threeds;
    (function (Threeds) {
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
        })(Element = Threeds.Element || (Threeds.Element = {}));
    })(Threeds = Com.Threeds || (Com.Threeds = {}));
})(Com || (Com = {}));
var Com;
(function (Com) {
    var Threeds;
    (function (Threeds) {
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
                            Translator._instance = new Com.Threeds.I18n.Translator(Object.find(Com.Threeds._parameters, 'translator'));
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
                return Com.Threeds.I18n.Translator.instance;
            };
        })(I18n = Threeds.I18n || (Threeds.I18n = {}));
    })(Threeds = Com.Threeds || (Com.Threeds = {}));
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
    var Threeds;
    (function (Threeds) {
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
                    return eval('new ' + Object.find(this.settings, name).adapter);
                };
                return AbstractPlugin;
            }();
            Plugin.AbstractPlugin = AbstractPlugin;
        })(Plugin = Threeds.Plugin || (Threeds.Plugin = {}));
    })(Threeds = Com.Threeds || (Com.Threeds = {}));
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
    var Threeds;
    (function (Threeds) {
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
        })(Service = Threeds.Service || (Threeds.Service = {}));
    })(Threeds = Com.Threeds || (Com.Threeds = {}));
})(Com || (Com = {}));
var Com;
(function (Com) {
    var Threeds;
    (function (Threeds) {
        var Validator;
        (function (Validator) {
            var AbstractValidator = function () {
                function AbstractValidator() {}
                return AbstractValidator;
            }();
            Validator.AbstractValidator = AbstractValidator;
        })(Validator = Threeds.Validator || (Threeds.Validator = {}));
    })(Threeds = Com.Threeds || (Com.Threeds = {}));
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
    var Threeds;
    (function (Threeds) {
        var Validator;
        (function (Validator) {
            var AbstractValidator = Com.Threeds.Validator.AbstractValidator;
            var Email = function (_super) {
                __extends(Email, _super);
                function Email() {
                    _super.apply(this, arguments);
                }
                Email.isValid = function (value) {
                    if (!/^(.+@.+\..{2,4})$/.test(value)) {
                        return $.i18n().t('error.email_invalid');
                    }
                    return true;
                };
                return Email;
            }(AbstractValidator);
            Validator.Email = Email;
        })(Validator = Threeds.Validator || (Threeds.Validator = {}));
    })(Threeds = Com.Threeds || (Com.Threeds = {}));
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
    var Threeds;
    (function (Threeds) {
        var Validator;
        (function (Validator) {
            var AbstractValidator = Com.Threeds.Validator.AbstractValidator;
            var Regex = function (_super) {
                __extends(Regex, _super);
                function Regex(options) {
                    _super.call(this);
                    this.settings = {
                        regex: undefined,
                        errors: {
                            invalid: 'error.field_invalid'
                        }
                    };
                    this.settings = $.extend({}, this.settings, options);
                }
                Regex.prototype.isValid = function (value) {
                    if (typeof this.settings.regex == 'undefined') {
                        console.log('this.settings.regex is not defined !');
                        return false;
                    }
                    if (!eval(this.settings.regex).test(value)) {
                        return $.i18n().t(this.settings.errors.invalid);
                    }
                    return true;
                };
                return Regex;
            }(AbstractValidator);
            Validator.Regex = Regex;
        })(Validator = Threeds.Validator || (Threeds.Validator = {}));
    })(Threeds = Com.Threeds || (Com.Threeds = {}));
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
    var Threeds;
    (function (Threeds) {
        var Validator;
        (function (Validator) {
            var AbstractValidator = Com.Threeds.Validator.AbstractValidator;
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
        })(Validator = Threeds.Validator || (Threeds.Validator = {}));
    })(Threeds = Com.Threeds || (Com.Threeds = {}));
})(Com || (Com = {}));
var Com;
(function (Com) {
    var Threeds;
    (function (Threeds) {
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
        })(Service = Threeds.Service || (Threeds.Service = {}));
    })(Threeds = Com.Threeds || (Com.Threeds = {}));
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
    var Threeds;
    (function (Threeds) {
        var Service;
        (function (Service) {
            var Adapter;
            (function (Adapter) {
                var AbstractAdapter = Com.Threeds.Service.Adapter.AbstractAdapter;
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
        })(Service = Threeds.Service || (Threeds.Service = {}));
    })(Threeds = Com.Threeds || (Com.Threeds = {}));
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
    var Threeds;
    (function (Threeds) {
        var Component;
        (function (Component) {
            var Form;
            (function (Form) {
                var Element;
                (function (Element) {
                    var AbstractPolymerElement = Com.Threeds.Element.AbstractPolymerElement;
                    var Input = function (_super) {
                        __extends(Input, _super);
                        function Input(context, data) {
                            _super.call(this, data);
                            this.type = 'text';
                            this.value = "";
                            this.required = false;
                            this._validators = [];
                            this._errorMessage = '';
                            if (data.type != undefined && data.type != 'hidden') this.classList.add('ds-form-input-text');
                            if (context.settings.display.placeholder) this.placeholder = data.label;
                            if (data.fieldName != undefined) this.id = data.fieldName, this.name = data.fieldName;
                            if (data.required != undefined) this.required = data.required;
                            if (data.type != undefined) this.type = data.type;
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
                            this.fire('field-value-changed', this);
                            this.setAttribute('value', this.value);
                            this.isValid();
                        };
                        Input.prototype.isValid = function () {
                            var message;
                            for (var i = 0; i < this._validators.length; i++) {
                                if (typeof this._validators[i] == 'string') {
                                    message = eval(this._validators[i] + ".isValid(this.value)");
                                    if (typeof message == 'string') {
                                        return this.displayError(message);
                                    }
                                } else if (typeof this._validators[i] == 'object') {
                                    message = this._validators[i].isValid(this.value);
                                }
                            }
                            return this.displayError();
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
                        __decorate([property({ type: Boolean })], Input.prototype, "required", void 0);
                        __decorate([listen('input')], Input.prototype, "_onChange", null);
                        Input = __decorate([component('input-element'), extend("input")], Input);
                        return Input;
                    }(AbstractPolymerElement);
                    Element.Input = Input;
                })(Element = Form.Element || (Form.Element = {}));
            })(Form = Component.Form || (Component.Form = {}));
        })(Component = Threeds.Component || (Threeds.Component = {}));
    })(Threeds = Com.Threeds || (Com.Threeds = {}));
})(Com || (Com = {}));
Com.Threeds.Component.Form.Element.Input.register();
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
    var Threeds;
    (function (Threeds) {
        var Component;
        (function (Component) {
            var Form;
            (function (Form) {
                var Element;
                (function (Element) {
                    var AbstractPolymerElement = Com.Threeds.Element.AbstractPolymerElement;
                    var Textarea = function (_super) {
                        __extends(Textarea, _super);
                        function Textarea(context, data) {
                            _super.call(this, data);
                            this.required = false;
                            this._validators = [];
                            this._errorMessage = '';
                            this.classList.add('ds-form-input-text');
                            if (context.settings.display.placeholder) this.placeholder = data.label;
                            if (data.name != undefined) this.id = data.name, this.name = data.name;
                            if (data.required != undefined) this.required = data.required;
                            if (data.value != undefined) this.value = data.value;
                            if (data.validators != undefined) this._validators = data.validators;
                        }
                        Object.defineProperty(Textarea.prototype, "errorMessage", {
                            get: function () {
                                return this._errorMessage == undefined ? '' : this._errorMessage;
                            },
                            set: function (value) {
                                this._errorMessage = value == undefined ? '' : value;
                            },
                            enumerable: true,
                            configurable: true
                        });
                        Textarea.prototype._onChange = function (e) {
                            this.fire('field-value-changed', this);
                            this.setAttribute('value', this.value);
                            this.isValid();
                        };
                        Textarea.prototype.isValid = function () {
                            var message;
                            for (var i = 0; i < this._validators.length; i++) {
                                message = eval(this._validators[i] + ".isValid(this.value)");
                                if (typeof message == 'string') {
                                    return this.displayError(message);
                                }
                            }
                            return this.displayError();
                        };
                        Textarea.prototype.displayError = function (detail) {
                            this.errorMessage = detail;
                            this.fire('error', this.errorMessage);
                            if (!this.errorMessage) {
                                this.classList.remove('_error');
                                return false;
                            }
                            this.classList.add('_error');
                            return true;
                        };
                        __decorate([property({ type: String, reflectToAttribute: true })], Textarea.prototype, "id", void 0);
                        __decorate([property({ type: String, reflectToAttribute: true })], Textarea.prototype, "name", void 0);
                        __decorate([property({ type: String })], Textarea.prototype, "value", void 0);
                        __decorate([property({ type: String, reflectToAttribute: true })], Textarea.prototype, "placeholder", void 0);
                        __decorate([property({ type: Boolean, reflectToAttribute: true })], Textarea.prototype, "required", void 0);
                        __decorate([listen('input')], Textarea.prototype, "_onChange", null);
                        Textarea = __decorate([component('textarea-element'), extend("textarea")], Textarea);
                        return Textarea;
                    }(AbstractPolymerElement);
                    Element.Textarea = Textarea;
                })(Element = Form.Element || (Form.Element = {}));
            })(Form = Component.Form || (Component.Form = {}));
        })(Component = Threeds.Component || (Threeds.Component = {}));
    })(Threeds = Com.Threeds || (Com.Threeds = {}));
})(Com || (Com = {}));
Com.Threeds.Component.Form.Element.Textarea.register();
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
    var Threeds;
    (function (Threeds) {
        var Component;
        (function (Component) {
            var Form;
            (function (Form) {
                var Element;
                (function (Element) {
                    var AbstractPolymerElement = Com.Threeds.Element.AbstractPolymerElement;
                    var Checkbox = function (_super) {
                        __extends(Checkbox, _super);
                        function Checkbox(context, data) {
                            _super.call(this, data);
                            this.type = 'checkbox';
                            this.checked = false;
                            this.required = false;
                            this.class = 'ds-form-input-checkbox ';
                            this._errorMessage = '';
                            if (data.name != undefined) this.id = data.name, this.name = data.name;
                            if (data.fieldName != undefined) this.id = data.fieldName, this.name = data.fieldName;
                            if (data.required != undefined) this.required = data.required;
                            if (data.value != undefined) this.checked = data.value;
                            if (data.class != undefined) this.class += data.class;
                            if (data.checked != undefined) this.checked = data.checked;
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
                        __decorate([property({ type: String, reflectToAttribute: true })], Checkbox.prototype, "id", void 0);
                        __decorate([property({ type: String, reflectToAttribute: true })], Checkbox.prototype, "name", void 0);
                        __decorate([property({ type: Boolean, reflectToAttribute: true })], Checkbox.prototype, "required", void 0);
                        __decorate([property({ type: String, reflectToAttribute: true })], Checkbox.prototype, "class", void 0);
                        __decorate([listen('change')], Checkbox.prototype, "_onChange", null);
                        Checkbox = __decorate([component('checkbox-element'), extend("input")], Checkbox);
                        return Checkbox;
                    }(AbstractPolymerElement);
                    Element.Checkbox = Checkbox;
                })(Element = Form.Element || (Form.Element = {}));
            })(Form = Component.Form || (Component.Form = {}));
        })(Component = Threeds.Component || (Threeds.Component = {}));
    })(Threeds = Com.Threeds || (Com.Threeds = {}));
})(Com || (Com = {}));
Com.Threeds.Component.Form.Element.Checkbox.register();
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
    var Threeds;
    (function (Threeds) {
        var Component;
        (function (Component) {
            var Form;
            (function (Form) {
                var Element;
                (function (Element) {
                    var AbstractPolymerElement = Com.Threeds.Element.AbstractPolymerElement;
                    var Select = function (_super) {
                        __extends(Select, _super);
                        function Select(context, data) {
                            this.required = false;
                            this.data = [];
                            this._errorMessage = '';
                            this.data = data;
                            _super.call(this, data);
                            if (this.data.name != undefined) this.id = this.data.fieldName, this.name = this.data.fieldName;
                            if (this.data.parentField != undefined) this.parentField = this.data.parentField;
                            this.update();
                        }
                        Select.prototype.clear = function () {
                            while (Polymer.dom(this).firstChild) Polymer.dom(this).removeChild(Polymer.dom(this).firstChild);
                            this.innerHTML = '';
                        };
                        Select.prototype.update = function () {
                            this.clear();
                            var selected = false;
                            for (var k in this.data.options) {
                                if (this.data.value != undefined && this.data.options[k].value == this.data.value) {
                                    this.data.options[k].selected = true;
                                }
                                if (this.data.options[k].selected && this.data.options[k].parentValue != '' && this.parentFieldValue == undefined) {
                                    this.parentFieldValue = this.data.options[k].parentValue;
                                }
                                if (this.data.options[k].selected != undefined && this.data.options[k].selected) {
                                    selected = true;
                                }
                            }
                            var option = {
                                "label": this.data.label,
                                "value": "",
                                "disabled": true,
                                "selected": selected ? true : false
                            };
                            this.data.options.unshift(option);
                            for (var k in this.data.options) {
                                if (this.parentFieldValue == undefined && this.parentField == undefined) {
                                    this.appendChild(Element.Option.create(this, this.data.options[k]));
                                } else if (this.parentFieldValue == this.data.options[k].parentValue) {
                                    this.appendChild(Element.Option.create(this, this.data.options[k]));
                                }
                            }
                            this.fire('field-hide', this.options.length ? false : true);
                        };
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
                            this.fire('field-value-changed', this);
                            for (var i = 0; i < Polymer.dom(this).childNodes.length; i++) {
                                Polymer.dom(this).childNodes[i].selected = Polymer.dom(this).childNodes[i].value === value ? true : false;
                            }
                            this.fire('field-select-value', { 'value': value, 'name': this.name });
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
                        __decorate([listen('change')], Select.prototype, "_onChange", null);
                        Select = __decorate([component('select-element'), extend("select")], Select);
                        return Select;
                    }(AbstractPolymerElement);
                    Element.Select = Select;
                })(Element = Form.Element || (Form.Element = {}));
            })(Form = Component.Form || (Component.Form = {}));
        })(Component = Threeds.Component || (Threeds.Component = {}));
    })(Threeds = Com.Threeds || (Com.Threeds = {}));
})(Com || (Com = {}));
Com.Threeds.Component.Form.Element.Select.register();
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
    var Threeds;
    (function (Threeds) {
        var Component;
        (function (Component) {
            var Form;
            (function (Form) {
                var Element;
                (function (Element) {
                    var AbstractPolymerElement = Com.Threeds.Element.AbstractPolymerElement;
                    var FieldGroup = function (_super) {
                        __extends(FieldGroup, _super);
                        function FieldGroup(context, data) {
                            _super.call(this, data);
                            this.classList.add('ds-form-group');
                            var container = document.createElement('div');
                            container.classList.add('ds-form-group-element');
                            var label = document.createElement('label');
                            label.className = 'col-sm-2 form-control-label';
                            label.innerHTML = data.label;
                            this.appendChild(label);
                            for (var i in data.items) {
                                container.appendChild(Element.Field.create(context, data.items[i]));
                            }
                            this.appendChild(container);
                        }
                        FieldGroup = __decorate([component('field-group-element'), extend("div")], FieldGroup);
                        return FieldGroup;
                    }(AbstractPolymerElement);
                    Element.FieldGroup = FieldGroup;
                })(Element = Form.Element || (Form.Element = {}));
            })(Form = Component.Form || (Component.Form = {}));
        })(Component = Threeds.Component || (Threeds.Component = {}));
    })(Threeds = Com.Threeds || (Com.Threeds = {}));
})(Com || (Com = {}));
Com.Threeds.Component.Form.Element.FieldGroup.register();
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
    var Threeds;
    (function (Threeds) {
        var Component;
        (function (Component) {
            var Form;
            (function (Form) {
                var Element;
                (function (Element) {
                    var AbstractPolymerElement = Com.Threeds.Element.AbstractPolymerElement;
                    var Radio = function (_super) {
                        __extends(Radio, _super);
                        function Radio(context, data) {
                            _super.call(this, data);
                            this.type = 'radio';
                            this.checked = false;
                            this.required = false;
                            this._errorMessage = '';
                            if (data.fieldName != undefined) this.id = data.fieldName, this.name = data.fieldName;
                            if (data.id != undefined) this.id = data.id;
                            if (data.required != undefined) this.required = data.required;
                            if (data.checked != undefined) this.checked = data.checked;
                        }
                        Object.defineProperty(Radio.prototype, "errorMessage", {
                            get: function () {
                                return this._errorMessage == undefined ? '' : this._errorMessage;
                            },
                            set: function (value) {
                                this._errorMessage = value == undefined ? '' : value;
                            },
                            enumerable: true,
                            configurable: true
                        });
                        Radio.prototype._onChange = function (e) {
                            if (this.checked) {
                                this.setAttribute("checked", this.checked.toString());
                            } else {
                                this.removeAttribute("checked");
                            }
                            this.isValid();
                        };
                        Radio.prototype.isValid = function () {
                            if (this.required && this.checked == false) {
                                return this.displayError('This field is required !');
                            }
                            return this.displayError();
                        };
                        Radio.prototype.displayError = function (detail) {
                            this.errorMessage = detail;
                            this.fire('error', this.errorMessage);
                            if (!this.errorMessage) {
                                this.classList.remove('_error');
                                return false;
                            }
                            this.classList.add('_error');
                            return true;
                        };
                        __decorate([property({ type: Boolean, reflectToAttribute: true })], Radio.prototype, "type", void 0);
                        __decorate([property({ type: Boolean, reflectToAttribute: true })], Radio.prototype, "checked", void 0);
                        __decorate([property({ type: String, reflectToAttribute: true })], Radio.prototype, "name", void 0);
                        __decorate([property({ type: Boolean, reflectToAttribute: true })], Radio.prototype, "required", void 0);
                        __decorate([listen('change')], Radio.prototype, "_onChange", null);
                        Radio = __decorate([component('radio-element'), extend("input")], Radio);
                        return Radio;
                    }(AbstractPolymerElement);
                    Element.Radio = Radio;
                })(Element = Form.Element || (Form.Element = {}));
            })(Form = Component.Form || (Component.Form = {}));
        })(Component = Threeds.Component || (Threeds.Component = {}));
    })(Threeds = Com.Threeds || (Com.Threeds = {}));
})(Com || (Com = {}));
Com.Threeds.Component.Form.Element.Radio.register();
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
    var Threeds;
    (function (Threeds) {
        var Component;
        (function (Component) {
            var Form;
            (function (Form) {
                var Element;
                (function (Element) {
                    var AbstractPolymerElement = Com.Threeds.Element.AbstractPolymerElement;
                    var RadioGroup = function (_super) {
                        __extends(RadioGroup, _super);
                        function RadioGroup(context, data) {
                            _super.call(this, data);
                            this.classList.add('ds-form-group');
                            var container = document.createElement('div');
                            container.classList.add('ds-form-group-element');
                            var label = document.createElement('label');
                            label.className = 'form-control-label-group form-control-label';
                            label.innerHTML = data.label;
                            this.appendChild(label);
                            for (var i in data.options) {
                                if (data.options[i].label == '' || data.options[i].value == '') continue;
                                var options = {
                                    id: data.fieldName + "-" + data.options[i].value,
                                    fieldName: data.fieldName,
                                    label: data.options[i].label,
                                    value: data.options[i].value
                                };
                                container.appendChild(this.radio(context, options));
                            }
                            this.appendChild(container);
                        }
                        RadioGroup.prototype.radio = function (context, data) {
                            var container = document.createElement('div');
                            container.classList.add('ds-form-radio');
                            container.appendChild(Element.Radio.create(this, data));
                            var label = document.createElement('label');
                            label.innerHTML = data.label;
                            label.htmlFor = data.id;
                            container.appendChild(label);
                            return container;
                        };
                        RadioGroup = __decorate([component('group-radio-element'), extend("div")], RadioGroup);
                        return RadioGroup;
                    }(AbstractPolymerElement);
                    Element.RadioGroup = RadioGroup;
                })(Element = Form.Element || (Form.Element = {}));
            })(Form = Component.Form || (Component.Form = {}));
        })(Component = Threeds.Component || (Threeds.Component = {}));
    })(Threeds = Com.Threeds || (Com.Threeds = {}));
})(Com || (Com = {}));
Com.Threeds.Component.Form.Element.RadioGroup.register();
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
    var Threeds;
    (function (Threeds) {
        var Component;
        (function (Component) {
            var Form;
            (function (Form) {
                var Element;
                (function (Element) {
                    var AbstractPolymerElement = Com.Threeds.Element.AbstractPolymerElement;
                    var Field = function (_super) {
                        __extends(Field, _super);
                        function Field(context, data) {
                            this.hydrateValidators(data);
                            _super.call(this, data);
                            this.data = data;
                            this.classList.add('ds-form-group');
                            if (typeof data.required != 'undefined' && typeof data.required) {
                                this.classList.add('ds-field-required');
                            }
                            this.classList.add("ds-form-" + data.type);
                            if (typeof data.fieldclass != 'undefined') {
                                for (var i = 0; i < data.fieldclass.length; i++) {
                                    this.classList.add(data.fieldclass[i]);
                                }
                            }
                            if (data.fieldName == 'optin') {
                                this.classList.add("ds-form-switch");
                                this.classList.add("ds-no-border");
                            }
                            this.classList.add("field-" + data.fieldName);
                            this.append(context, data);
                        }
                        Field.prototype.label = function (context, data) {
                            if (!context.settings.display.label && data.type.toLowerCase() != 'checkbox') return;
                            var label = document.createElement('label');
                            label.htmlFor = data.fieldName;
                            if (data.type != 'checkbox') {
                                label.className = 'form-label form-control-label';
                            } else {
                                label.className = 'form-control-label';
                            }
                            label.appendChild(document.createTextNode(this.data.label));
                            label.appendChild(document.createTextNode(context.settings.styling.label.suffixe));
                            if (typeof data.required != 'undefined' && data.required && context.settings.styling.label.mandatory != '') {
                                var mandatory = document.createElement('span');
                                mandatory.setAttribute('class', 'mandatory');
                                mandatory.innerHTML = context.settings.styling.label.mandatory;
                                label.appendChild(mandatory);
                            }
                            return label;
                        };
                        Field.prototype.container = function (context, data) {
                            var type = data.type.toLowerCase();
                            var container = document.createElement('div');
                            return container;
                        };
                        Field.prototype.append = function (context, data) {
                            var type = data.type.toLowerCase();
                            var container = this.container(context, data);
                            var label = this.label(context, data);
                            if (type != 'checkbox' && context.settings.display.label) {
                                this.appendChild(label);
                            }
                            switch (type) {
                                case 'fieldgroup':
                                    this.appendChild(FieldGroupElement.create(context, data));
                                    break;
                                case 'select':
                                    container.appendChild(Element.Select.create(context, data));
                                    this.appendChild(container);
                                    break;
                                case 'checkbox':
                                    data.class = 'ds-form-switch-checkbox';
                                    this.appendChild(Element.Checkbox.create(context, data));
                                    label.classList.add('ds-form-switch-label');
                                    this.appendChild(label);
                                    break;
                                case 'text':
                                    container.appendChild(Element.Input.create(context, data));
                                    this.appendChild(container);
                                    break;
                                case 'textarea':
                                    container.appendChild(Element.Textarea.create(context, data));
                                    this.appendChild(container);
                                    break;
                                default:
                                    console.log('<!> field no defined');
                                    console.log(data);
                                    break;
                            }
                            this.fire('field-create', this);
                        };
                        Field.prototype.hydrateValidators = function (data) {
                            var validators = data.validators == undefined ? [] : data.validators;
                            if (typeof data.regex != "undefined") validators.push(new Com.Threeds.Validator.Regex({ regex: data.regex }));
                            if (data.fieldName == 'email' && data.type != 'hidden') validators.push('Com.Threeds.Validator.Email');
                            if (data.required) validators.push('Com.Threeds.Validator.Require');
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
                        Field.prototype.handleHide = function (e, status) {
                            if (status) {
                                this.classList.add('hide');
                            } else {
                                this.classList.remove('hide');
                            }
                        };
                        __decorate([property({ type: String })], Field.prototype, "error", void 0);
                        __decorate([listen("error")], Field.prototype, "handleError", null);
                        __decorate([listen('field-hide')], Field.prototype, "handleHide", null);
                        Field = __decorate([component('field-element'), extend("div"), template("<template is=\"dom-if\" if=\"{{error}}\"><span class=\"ds-form-error\">{{error}}</span></template>")], Field);
                        return Field;
                    }(AbstractPolymerElement);
                    Element.Field = Field;
                })(Element = Form.Element || (Form.Element = {}));
            })(Form = Component.Form || (Component.Form = {}));
        })(Component = Threeds.Component || (Threeds.Component = {}));
    })(Threeds = Com.Threeds || (Com.Threeds = {}));
})(Com || (Com = {}));
Com.Threeds.Component.Form.Element.Field.register();
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
    var Threeds;
    (function (Threeds) {
        var Component;
        (function (Component) {
            var Form;
            (function (Form) {
                var Element;
                (function (Element) {
                    var AbstractPolymerElement = Com.Threeds.Element.AbstractPolymerElement;
                    var Submit = function (_super) {
                        __extends(Submit, _super);
                        function Submit(context, data) {
                            _super.call(this, data);
                            this.type = 'submit';
                            this.class = 'ds-btn ';
                            if (typeof data.value != undefined) this.value = data.value;
                            if (typeof data.class != undefined) this.class += data.class;
                        }
                        __decorate([property({ type: String, reflectToAttribute: true })], Submit.prototype, "type", void 0);
                        __decorate([property({ type: String, reflectToAttribute: true })], Submit.prototype, "name", void 0);
                        __decorate([property({ type: String, reflectToAttribute: true })], Submit.prototype, "value", void 0);
                        __decorate([property({ type: String, reflectToAttribute: true })], Submit.prototype, "class", void 0);
                        Submit = __decorate([component('submit-element'), extend("input")], Submit);
                        return Submit;
                    }(AbstractPolymerElement);
                    Element.Submit = Submit;
                })(Element = Form.Element || (Form.Element = {}));
            })(Form = Component.Form || (Component.Form = {}));
        })(Component = Threeds.Component || (Threeds.Component = {}));
    })(Threeds = Com.Threeds || (Com.Threeds = {}));
})(Com || (Com = {}));
Com.Threeds.Component.Form.Element.Submit.register();
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
    var Threeds;
    (function (Threeds) {
        var Component;
        (function (Component) {
            var Form;
            (function (Form) {
                var Element;
                (function (Element) {
                    var AbstractPolymerElement = Com.Threeds.Element.AbstractPolymerElement;
                    var SubmitElement = Com.Threeds.Component.Form.Element.Submit;
                    var Step = function (_super) {
                        __extends(Step, _super);
                        function Step(context, data) {
                            if (data.success == undefined && !data.success && data.result.config !== undefined) return;
                            _super.call(this, data);
                            this.classList.add('ds-form-fieldset');
                            this.appendChild(Element.Input.create(context, {
                                fieldName: "op",
                                type: "hidden",
                                value: data.result.nextAction
                            }));
                            for (var i = data.result.config.length; i >= 0; --i) {
                                if (typeof data.result.config[i] != 'undefined' && data.result.config[i].fieldName != 'optin') {
                                    data.result.config[i].fieldclass.push('ds-form-group-last');
                                    break;
                                }
                            }
                            for (var i = 0; i <= data.result.config.length; i++) {
                                if (typeof data.result.config[i] != 'undefined' && data.result.config[i].type != 'hidden') {
                                    data.result.config[i].fieldclass.push('ds-form-group-first');
                                    break;
                                }
                            }
                            for (var k in data.result.config) {
                                if (data.result.config[k].type.toLowerCase() == 'hidden') {
                                    this.appendChild(Element.Input.create(context, data.result.config[k]));
                                } else if (data.result.config[k].type.toLowerCase() == 'radio') {
                                    this.appendChild(Element.RadioGroup.create(context, data.result.config[k]));
                                } else if (data.result.config[k].type.toLowerCase() == 'fieldgroup') {
                                    this.appendChild(Element.FieldGroup.create(context, data.result.config[k]));
                                } else {
                                    this.appendChild(Element.Field.create(context, data.result.config[k]));
                                }
                            }
                            var container = document.createElement('div');
                            container.classList.add('ds-form-group');
                            container.classList.add('ds-no-border');
                            container.classList.add('ds-txt-center');
                            var options = { value: context.settings.nextLabel, class: 'ds-btn-circle' };
                            if (context._currentPosition == Object.keys(context.settings.steps).length - 1) {
                                options.value = context.settings.action.label;
                                options.class = 'ds-btn-scream';
                            }
                            container.appendChild(SubmitElement.create(context, options));
                            this.appendChild(container);
                        }
                        Object.defineProperty(Step.prototype, "settings", {
                            get: function () {
                                return this.context.settings;
                            },
                            enumerable: true,
                            configurable: true
                        });
                        Step = __decorate([component('step-element'), extend("fieldset")], Step);
                        return Step;
                    }(AbstractPolymerElement);
                    Element.Step = Step;
                })(Element = Form.Element || (Form.Element = {}));
            })(Form = Component.Form || (Component.Form = {}));
        })(Component = Threeds.Component || (Threeds.Component = {}));
    })(Threeds = Com.Threeds || (Com.Threeds = {}));
})(Com || (Com = {}));
Com.Threeds.Component.Form.Element.Step.register();
var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Com;
(function (Com) {
    var Threeds;
    (function (Threeds) {
        var Core;
        (function (Core) {
            var Ajax;
            (function (Ajax) {
                var AbstractPlugin = Com.Threeds.Plugin.AbstractPlugin;
                var AutoComplete = function (_super) {
                    __extends(AutoComplete, _super);
                    function AutoComplete(context, elem, options) {
                        _super.call(this, elem, options);
                        this.settings = {
                            api: {
                                adapter: 'Com.Threeds.Service.Adapter.Neolane',
                                serviceName: 'customerAutocomplete'
                            },
                            select: function (data) {}
                        };
                        this.context = context;
                        this.elem = elem;
                        this.settings = $.extend({}, this.settings, options);
                        this.service('api')[this.settings.api.serviceName](this, this.settings);
                    }
                    AutoComplete.prototype.render = function (context, data) {};
                    return AutoComplete;
                }(AbstractPlugin);
                Ajax.AutoComplete = AutoComplete;
            })(Ajax = Core.Ajax || (Core.Ajax = {}));
        })(Core = Threeds.Core || (Threeds.Core = {}));
    })(Threeds = Com.Threeds || (Com.Threeds = {}));
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
    var Threeds;
    (function (Threeds) {
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
                            var FormBehavior = function (_super) {
                                __extends(FormBehavior, _super);
                                function FormBehavior() {
                                    _super.apply(this, arguments);
                                }
                                FormBehavior.prototype.action = function (form, data) {
                                    if (Object.isDefined(data, 'result.config')) {
                                        for (var i = 0; i < data.result.config.length; i++) {
                                            if (typeof data.result.config[i].name != 'undefined' && data.result.config[i].name == 'email' && data.result.config[i].type == 'hidden') {
                                                $('.ds-lpd-info-form').append("<p class=\"ds-email-valid\">" + data.result.config[i].value + "</p>");
                                            }
                                        }
                                        form.update(data);
                                    } else if (Object.isDefined(data, 'result.thankYouPage')) {
                                        form.success(data.result);
                                        if (data.result.properties.openUrl) {}
                                    } else if (Object.isDefined(data, 'result.properties.content') && Object.isDefined(data, 'result.properties.redirect') && data.result.properties.redirect) {
                                        form.success(data.result);
                                    } else if (Object.isDefined(data, 'result.properties.content') && Object.isDefined(data, 'result.properties.redirect') && !data.result.properties.redirect) {
                                        form.warning(data.result.properties.content);
                                    } else if (Object.isDefined(data, 'errors.0.error.message')) {
                                        form.warning(data.errors[0].error.message);
                                    } else if (Object.isDefined(data, 'errors')) {
                                        form.errors = data.errors.fields;
                                    }
                                };
                                FormBehavior.prototype._onCreate = function (e, elem) {};
                                FormBehavior.prototype._onChange = function (e, elem) {
                                    var context = this;
                                    this.updateAllChildrenField(elem, Polymer.dom(this));
                                    var query = $('#company').val();
                                    var isoCode = $('#country').val();
                                    if (elem.name == 'company' && query != undefined && isoCode != undefined && elem.autoComplete == undefined) {
                                        elem.autoComplete = new autoComplete({
                                            selector: "#" + elem.name,
                                            minChars: 3,
                                            source: function (term, suggest) {
                                                term = term.toLowerCase();
                                                $.ajax({
                                                    url: 'http://dassault-test.neolane.net/dsx/dnbWebservice.jssp',
                                                    dataType: 'jsonp',
                                                    data: {
                                                        query: query,
                                                        iso: isoCode
                                                    },
                                                    success: function (data) {
                                                        suggest($.map(data.dnbReponse.responseDetail.candidate, function (objet) {
                                                            return {
                                                                companyName: objet.companyName,
                                                                duns: objet.duns,
                                                                postalCode: objet.postalCode,
                                                                city: objet.city,
                                                                address1: objet.address1,
                                                                address2: objet.address2,
                                                                stateCode: objet.stateCode
                                                            };
                                                        }));
                                                    }
                                                });
                                            },
                                            renderItem: function (item, search) {
                                                search = search.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&amp;');
                                                var re = new RegExp("(" + search.split(' ').join('|') + ")", "gi");
                                                var label = item.companyName.replace(re, "<b>$1</b>");
                                                return '<div class="autocomplete-suggestion" data-companyName="' + item.companyName + '" data-duns="' + item.duns + '" data-postalCode="' + item.postalCode + '" data-city="' + item.city + '" data-address1="' + item.address1 + '" data-address2="' + item.address2 + '" data-stateCode="' + item.stateCode + '" data-val="' + search + '">' + label + '</div>';
                                            },
                                            onSelect: function (e, term, item) {
                                                context.append({
                                                    name: "duns",
                                                    type: "hidden",
                                                    value: item.getAttribute('data-duns')
                                                }).append({
                                                    name: "zipCode",
                                                    type: "hidden",
                                                    value: item.getAttribute('data-postalCode')
                                                }).append({
                                                    name: "city",
                                                    type: "hidden",
                                                    value: item.getAttribute('data-city')
                                                }).append({
                                                    name: "address1",
                                                    type: "hidden",
                                                    value: item.getAttribute('data-address1')
                                                }).append({
                                                    name: "address2",
                                                    type: "hidden",
                                                    value: item.getAttribute('data-address2')
                                                }).append({
                                                    name: "state",
                                                    type: "hidden",
                                                    value: item.getAttribute('data-stateCode')
                                                });
                                                elem.value = item.getAttribute('data-companyName');
                                            }
                                        });
                                    }
                                };
                                FormBehavior.prototype.updateAllChildrenField = function (elem, node) {
                                    for (var i = 0; i < node.childNodes.length; i++) {
                                        if (typeof node.childNodes[i].update == 'function' && node.childNodes[i].parentField == elem.name && node.childNodes[i].parentField != 'undefined') {
                                            node.childNodes[i].parentFieldValue = elem.value;
                                            node.childNodes[i].update();
                                        }
                                        this.updateAllChildrenField(elem, node.childNodes[i]);
                                    }
                                };
                                FormBehavior.prototype._onSubmit = function (e) {
                                    if (e) e.preventDefault();
                                    this.submit();
                                    return false;
                                };
                                FormBehavior.prototype.submit = function () {
                                    this.valid();
                                    if (!Object.keys(this.errors).length) this.post();
                                };
                                FormBehavior.prototype.post = function () {
                                    var data = Com.Threeds.Component.Form.Element.Form.serialize(this);
                                    this.context.service('api').post(this, data);
                                };
                                FormBehavior.prototype.render = function (type, data) {
                                    if (type == 'form') this.dispatch(data);
                                };
                                __decorate([listen('field-create')], FormBehavior.prototype, "_onCreate", null);
                                __decorate([listen('field-value-changed')], FormBehavior.prototype, "_onChange", null);
                                __decorate([listen('submit')], FormBehavior.prototype, "_onSubmit", null);
                                return FormBehavior;
                            }(polymer.Base);
                            Neolane.FormBehavior = FormBehavior;
                        })(Neolane = Behavior.Neolane || (Behavior.Neolane = {}));
                    })(Behavior = Element.Behavior || (Element.Behavior = {}));
                })(Element = Form.Element || (Form.Element = {}));
            })(Form = Component.Form || (Component.Form = {}));
        })(Component = Threeds.Component || (Threeds.Component = {}));
    })(Threeds = Com.Threeds || (Com.Threeds = {}));
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
    var Threeds;
    (function (Threeds) {
        var Component;
        (function (Component) {
            var Form;
            (function (Form_1) {
                var Element;
                (function (Element) {
                    var AbstractPolymerElement = Com.Threeds.Element.AbstractPolymerElement;
                    var Step = Com.Threeds.Component.Form.Element.Step;
                    var Form = function (_super) {
                        __extends(Form, _super);
                        function Form(context, data) {
                            _super.call(this, data);
                            this._currentPosition = 0;
                            this._steps = [];
                            this._errors = [];
                            this.context = context;
                            this.classList.add('ds-form');
                            this.classList.add('ds-ldp-form-container');
                            this.dispatch(data);
                        }
                        Object.defineProperty(Form.prototype, "currentPosition", {
                            get: function () {
                                return this._currentPosition;
                            },
                            set: function (value) {
                                if (typeof this.context.settings.hook.setCurrentPosition == 'function') {
                                    this.settings.hook.setCurrentPosition(this, value);
                                }
                                this._currentPosition = value;
                            },
                            enumerable: true,
                            configurable: true
                        });
                        Object.defineProperty(Form.prototype, "settings", {
                            get: function () {
                                return this.context.settings;
                            },
                            enumerable: true,
                            configurable: true
                        });
                        Object.defineProperty(Form.prototype, "errors", {
                            get: function () {
                                return this._errors;
                            },
                            set: function (value) {
                                this._errors = value;
                                this.dispatchAllErrors(Polymer.dom(this), this._errors);
                            },
                            enumerable: true,
                            configurable: true
                        });
                        Form.prototype.dispatchAllErrors = function (node, errors) {
                            for (var i = 0; i < node.childNodes.length; i++) {
                                if (typeof node.childNodes[i].displayError == 'function') {
                                    for (var k in errors) {
                                        if (node.childNodes[i].name == k) {
                                            node.childNodes[i].displayError(errors[k]);
                                        }
                                    }
                                }
                                this.dispatchAllErrors(node.childNodes[i], errors);
                            }
                        };
                        Form.prototype.valid = function () {
                            this._errors = [];
                            this.validateAllElement(Polymer.dom(this), this._errors);
                        };
                        Form.prototype.validateAllElement = function (node, errors) {
                            var child;
                            for (var i = 0; i < node.childNodes.length; i++) {
                                child = node.childNodes[i];
                                if (typeof child.isValid == 'function') {
                                    if (child.isValid() == true) this._errors[child.name] = child.errorMessage;
                                }
                                this.validateAllElement(child, errors);
                            }
                        };
                        Form.prototype.dispatch = function (data) {
                            if (typeof this.behaviors[0] != undefined && typeof this.behaviors[0].action == 'function') {
                                this.behaviors[0].action(this, data);
                            } else {
                                console.log('Uncaught TypeError: this.behaviors[0].action is not a function');
                            }
                        };
                        Form.prototype.clear = function () {
                            while (Polymer.dom(this).firstChild) Polymer.dom(this).removeChild(Polymer.dom(this).firstChild);
                            this.innerHTML = '';
                        };
                        Form.prototype.add = function (data) {
                            if (!Polymer.dom(this).childNodes.length) {
                                this._steps.push(data);
                                this.currentPosition = 0;
                                return true;
                            }
                            return this.isNewStep(this, Polymer.dom(this), data);
                        };
                        Form.prototype.isNewStep = function (context, node, data) {
                            var child;
                            for (var i = 0; i < node.childNodes.length; i++) {
                                child = node.childNodes[i];
                                if (child.name != undefined) {
                                    for (var k in data.result.config) {
                                        if (data.result.config[k].name = child.name && data.result.config[k].type != 'hidden') {
                                            context._steps.push(data);
                                            context.currentPosition++;
                                            return true;
                                        }
                                    }
                                }
                                return this.isNewStep(context, child, data);
                            }
                            return false;
                        };
                        Form.prototype.update = function (data) {
                            this.add(data);
                            this.transition(this, this.currentPosition);
                        };
                        Form.prototype.dom = function () {
                            return Polymer.dom(context.context.root);
                        };
                        Form.prototype.transition = function (context, currentPosition) {
                            if (currentPosition == 0) {
                                context.clear();
                                context.appendChild(Step.create(context, context._steps.slice(-1)[0]));
                                return;
                            }
                            var blockRight = Polymer.dom(context.context.root).querySelector('.ds-ldp-form-container');
                            var container = Polymer.dom(context.context.root).querySelector('.ds-ldp-global-container');
                            setTimeout(function () {
                                context.clear();
                                $(blockRight).animate({
                                    opacity: 0
                                }, 500, "linear", function () {
                                    $(blockRight).animate({
                                        opacity: 1,
                                        top: 0,
                                        zIndex: 1
                                    }, 10, "linear", function () {
                                        var step = Step.create(context, context._steps.slice(-1)[0]);
                                        context.appendChild(step);
                                        setTimeout(function () {
                                            console.log('sqkodkqs-----');
                                            console.log(Polymer.dom(context.context.root).querySelector('.ds-form-fieldset'));
                                        }, 1);
                                        var heightBlocLeft = Polymer.dom(context.context.root).querySelector('.ds-lpd-info-form').offsetHeight;
                                        var heightBlocRight = Polymer.dom(context.context.root).querySelector('.ds-ldp-form-container').offsetHeight;
                                        console.log('.ds-lpd-info-form');
                                        console.log(heightBlocLeft);
                                        console.log('.ds-ldp-form-container');
                                        console.log(heightBlocRight);
                                        console.log('.ds-form-fieldset');
                                        console.log(Polymer.dom(context.context.root).querySelector('.ds-form-fieldset'));
                                        if (heightBlocRight > heightBlocLeft) {
                                            $(container).animate({
                                                height: heightBlocRight
                                            }, 1000);
                                        }
                                        $(container).animate({
                                            width: "952px"
                                        }, 1000, "swing");
                                    });
                                });
                            }, 0);
                        };
                        Form.prototype.goTo = function (id) {
                            if (typeof this._steps[id] != "undefined") {
                                this.clear();
                                this.appendChild(Step.create(this.context, this._steps[id]));
                                this.currentPosition = id;
                            }
                        };
                        Form.prototype.prev = function () {
                            var id = this.currentPosition - 1;
                            this.goTo(id);
                        };
                        Form.prototype.next = function () {
                            var id = this.currentPosition + 1;
                            this.goTo(id);
                        };
                        Form.prototype.append = function (data) {
                            if (!this.updateChildren(Polymer.dom(this), data)) {
                                this.insertBefore(Element.Input.create(this, data), this.firstChild);
                            }
                            return this;
                        };
                        Form.prototype.updateChildren = function (node, data) {
                            for (var i = 0; i < node.childNodes.length; i++) {
                                if (typeof node.childNodes[i].name != 'undefined' && node.childNodes[i].name == data.name) {
                                    node.childNodes[i].value = data.value;
                                    return true;
                                }
                                if (this.updateChildren(node.childNodes[i], data)) {
                                    return true;
                                }
                            }
                            return false;
                        };
                        Form.prototype.success = function (data) {
                            if (typeof this.context.settings.hook.success == 'function') {
                                this.context.settings.hook.success(this, data);
                            } else {
                                this.clear();
                                this.innerHTML = "<h1>" + data.title + "</h1>" + data.content;
                            }
                        };
                        Form.prototype.warning = function (message) {
                            if (typeof this.context.settings.hook.warning == 'function') {
                                this.context.settings.hook.warning(this, message);
                            } else {
                                this.clear();
                                this.innerHTML = message;
                            }
                        };
                        Form.prototype.redirect = function (url) {
                            if (typeof this.context.settings.hook.redirect == 'function') {
                                this.context.settings.hook.redirect(this, url);
                            } else {
                                window.location = url;
                            }
                        };
                        Form.serialize = function (form) {
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
                        __decorate([property({ type: String, reflectToAttribute: true })], Form.prototype, "id", void 0);
                        __decorate([property({ type: String, reflectToAttribute: true })], Form.prototype, "name", void 0);
                        __decorate([property({ type: String, reflectToAttribute: true })], Form.prototype, "method", void 0);
                        __decorate([property({ type: String, reflectToAttribute: true })], Form.prototype, "action", void 0);
                        Form = __decorate([component('form-element'), extend("form"), behavior(Com.Threeds.Component.Form.Element.Behavior.Neolane.FormBehavior)], Form);
                        return Form;
                    }(AbstractPolymerElement);
                    Element.Form = Form;
                })(Element = Form_1.Element || (Form_1.Element = {}));
            })(Form = Component.Form || (Component.Form = {}));
        })(Component = Threeds.Component || (Threeds.Component = {}));
    })(Threeds = Com.Threeds || (Com.Threeds = {}));
})(Com || (Com = {}));
Com.Threeds.Component.Form.Element.Form.register();
var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Com;
(function (Com) {
    var Threeds;
    (function (Threeds) {
        var Component;
        (function (Component) {
            var Form;
            (function (Form_1) {
                var AbstractPlugin = Com.Threeds.Plugin.AbstractPlugin;
                var Form = Com.Threeds.Component.Form.Element.Form;
                var Plugin = function (_super) {
                    __extends(Plugin, _super);
                    function Plugin(elem, options) {
                        _super.call(this, elem, options);
                        this.settings = {
                            id: 'LDP6312',
                            display: {
                                label: true,
                                placeholder: true
                            },
                            styling: {
                                label: {
                                    suffixe: ' : ',
                                    mandatory: ' * '
                                }
                            },
                            api: {
                                adapter: 'Com.Threeds.Service.Adapter.Neolane',
                                url: 'http://dassault-test.neolane.net/dsx/lp_api.jssp'
                            },
                            hook: {
                                render: undefined,
                                success: undefined,
                                redirect: undefined,
                                warning: undefined,
                                setCurrentPosition: undefined
                            }
                        };
                        this.settings = $.extend({}, this.settings, options);
                        this.service('api').form(this, {});
                    }
                    Plugin.prototype.clear = function () {
                        while (Polymer.dom(this).firstChild) Polymer.dom(this).removeChild(Polymer.dom(this).firstChild);
                        this.innerHTML = '';
                    };
                    Plugin.prototype.render = function (type, data) {
                        this.clear();
                        if (typeof this.settings.hook.render == 'function') {
                            this.settings.hook.render(this, type, data);
                        } else {
                            this.elem.append(Form.create(this, data));
                        }
                    };
                    return Plugin;
                }(AbstractPlugin);
                Form_1.Plugin = Plugin;
                $.namespace('threeds', {
                    form: function (options) {
                        return new Plugin(this, options);
                    }
                });
            })(Form = Component.Form || (Component.Form = {}));
        })(Component = Threeds.Component || (Threeds.Component = {}));
    })(Threeds = Com.Threeds || (Com.Threeds = {}));
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
    var Threeds;
    (function (Threeds) {
        var Component;
        (function (Component) {
            var Tabs;
            (function (Tabs) {
                var Element;
                (function (Element) {
                    var AbstractPolymerElement = Com.Threeds.Element.AbstractPolymerElement;
                    var Tab = function (_super) {
                        __extends(Tab, _super);
                        function Tab(context, data) {
                            _super.call(this, data);
                            this.classList.add('ds-tab');
                            this.innerHTML = data.title;
                        }
                        Tab = __decorate([component('tab-element'), extend("div")], Tab);
                        return Tab;
                    }(AbstractPolymerElement);
                    Element.Tab = Tab;
                })(Element = Tabs.Element || (Tabs.Element = {}));
            })(Tabs = Component.Tabs || (Component.Tabs = {}));
        })(Component = Threeds.Component || (Threeds.Component = {}));
    })(Threeds = Com.Threeds || (Com.Threeds = {}));
})(Com || (Com = {}));
Com.Threeds.Component.Tabs.Element.Tab.register();
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
    var Threeds;
    (function (Threeds) {
        var Component;
        (function (Component) {
            var Tabs;
            (function (Tabs) {
                var Element;
                (function (Element) {
                    var AbstractPolymerElement = Com.Threeds.Element.AbstractPolymerElement;
                    var Header = function (_super) {
                        __extends(Header, _super);
                        function Header(context, options) {
                            _super.call(this);
                            this.settings = {};
                            this.settings = $.extend({}, this.settings, options);
                            var items = document.createElement('ul');
                            items.classList.add('ds-tabs-header');
                            var item;
                            var link;
                            for (var k in this.settings.data) {
                                link = document.createElement('a');
                                link.innerHTML = this.settings.data[k].name;
                                link.setAttribute("data-index", k);
                                link.href = "#step-" + k;
                                link.onclick = function (e) {
                                    e.preventDefault();
                                };
                                item = document.createElement('li');
                                item.appendChild(link);
                                items.appendChild(item);
                            }
                            this.appendChild(items);
                        }
                        Header = __decorate([component('tabs-header-element'), extend("div")], Header);
                        return Header;
                    }(AbstractPolymerElement);
                    Element.Header = Header;
                })(Element = Tabs.Element || (Tabs.Element = {}));
            })(Tabs = Component.Tabs || (Component.Tabs = {}));
        })(Component = Threeds.Component || (Threeds.Component = {}));
    })(Threeds = Com.Threeds || (Com.Threeds = {}));
})(Com || (Com = {}));
Com.Threeds.Component.Tabs.Element.Header.register();
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
    var Threeds;
    (function (Threeds) {
        var Component;
        (function (Component) {
            var Tabs;
            (function (Tabs_1) {
                var Element;
                (function (Element) {
                    var AbstractPolymerElement = Com.Threeds.Element.AbstractPolymerElement;
                    var Header = Com.Threeds.Component.Tabs.Element.Header;
                    var Tabs = function (_super) {
                        __extends(Tabs, _super);
                        function Tabs(context, options, data) {
                            this._currentPosition = 0;
                            this.settings = {};
                            this.context = context;
                            this.settings = $.extend({}, this.settings, options);
                            this.classList.add('ds-tabs');
                            this.appendChild(Header.create(this, this.settings));
                            var container = document.createElement('div');
                            container.classList.add('ds-tabs-container');
                            for (var k in this.settings.data) {
                                container.appendChild(Element.Tab.create(this, this.settings.data[k]));
                            }
                            this.appendChild(container);
                        }
                        Object.defineProperty(Tabs.prototype, "currentPosition", {
                            get: function () {
                                return this._currentPosition;
                            },
                            set: function (value) {
                                this.context.context.elem.find('ul.ds-tabs-header').addClass("step-" + value + "-active");
                                this.context.context.elem.find(".ds-tabs-header li").each(function (index) {
                                    if (index == value) {
                                        $(this).addClass('active');
                                    } else {
                                        $(this).removeClass('active');
                                    }
                                });
                                this.context.context.elem.find(".ds-tabs-container .ds-tab").each(function (index) {
                                    if (index == value) {
                                        $(this).addClass('active');
                                    } else {
                                        $(this).removeClass('active');
                                    }
                                });
                                this._currentPosition = value;
                            },
                            enumerable: true,
                            configurable: true
                        });
                        Tabs = __decorate([component('tabs-element'), extend("div")], Tabs);
                        return Tabs;
                    }(AbstractPolymerElement);
                    Element.Tabs = Tabs;
                })(Element = Tabs_1.Element || (Tabs_1.Element = {}));
            })(Tabs = Component.Tabs || (Component.Tabs = {}));
        })(Component = Threeds.Component || (Threeds.Component = {}));
    })(Threeds = Com.Threeds || (Com.Threeds = {}));
})(Com || (Com = {}));
Com.Threeds.Component.Tabs.Element.Tabs.register();
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
                        var Download = function (_super) {
                            __extends(Download, _super);
                            function Download(context, data) {
                                _super.call(this, data);
                                var tpl = "<div class=\"ds-ldp-global-step-2\">\n                            <div class=\"ds-ldp-global-container\">\n                                <div id=\"ldp\" class=\"ds-lpd-info-form\">\n                                    <div class=\"ds-landingpage\" is=\"landingpage-element\">\n                                        <h3 class=\"ds-title-ty\">" + data.title + "</h3>\n                                        <div class=\"ds-lpd-info-no-blur\" style=\"background-image: url('" + context.settings.backgroundImage + "');\"></div>\n                                    </div>\n                                </div>\n                                <form class=\"ds-form ds-ldp-form-container ds-dl-info\">\n                                    <p>" + data.content + "</p>\n                                    <a href=\"" + context.settings.action.url + "\" class=\"ds-link ds-link-arrow-left\">\n                                        " + context.settings.action.label + "<br />\n                                        <span>" + context.settings.action.content + "</span>\n                                    </a>\n                                </form>\n                            </div>\n\n                            <div class=\"ds-ldp-form-contact\">\n                                <p>" + context.settings.accelerate.content + "</p>\n                                <a href=\"" + context.settings.accelerate.url + "\" target=\"_blank\" class=\"ds-btn ds-btn-shout ds-force-to-download\">" + context.settings.accelerate.label + "</a>\n                            </div>\n                        </div>";
                                this.innerHTML = tpl;
                                var w = window.open(context.settings.accelerate.url, '_blank');
                                w.focus();
                            }
                            Download = __decorate([component('landingpage-success-download-element'), extend("div")], Download);
                            return Download;
                        }(AbstractPolymerElement);
                        Success.Download = Download;
                    })(Success = Element.Success || (Element.Success = {}));
                })(Element = LandingPage.Element || (LandingPage.Element = {}));
            })(LandingPage = Component.LandingPage || (Component.LandingPage = {}));
        })(Component = Threeds.Component || (Threeds.Component = {}));
    })(Threeds = Com.Threeds || (Com.Threeds = {}));
})(Com || (Com = {}));
Com.Threeds.Component.LandingPage.Element.Success.Download.register();
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
                        var Video = function (_super) {
                            __extends(Video, _super);
                            function Video(context, data) {
                                _super.call(this, data);
                                var tpl = "<div class=\"ds-ldp-global-step-2\">\n                            <div class=\"ds-ldp-global-container\">\n                                <div id=\"ldp\" class=\"ds-lpd-info-form\">\n                                    <div class=\"ds-landingpage\" is=\"landingpage-element\">\n                                        <h3 class=\"ds-title-ty\">" + data.title + "</h3>\n                                        <div class=\"ds-lpd-info-no-blur\" style=\"background-image: url('" + context.settings.backgroundImage + "');\"></div>\n                                    </div>\n                                </div>\n                                <form class=\"ds-form ds-ldp-form-container ds-dl-info\">\n                                    <p>" + data.content + "</p>\n\n                                    <div class=\"morph-button morph-button-modal morph-button-modal-4 morph-button-fixed \">\n                                        <button type=\"button\">" + context.settings.action.label + "</button>\n                                        <div class=\"morph-content\">\n                                            <span class=\"icon icon-close\">Close the dialog</span>\n                                            <div id=\"myDiv\">" + context.settings.action.content + "</div>\n                                        </div>\n                                    </div>\n\n                                </form>\n                            </div>\n\n                            <div class=\"ds-ldp-form-contact\">\n                                <p>" + context.settings.accelerate.content + "</p>\n                                <a href=\"" + context.settings.accelerate.url + "\" target=\"_blank\" class=\"ds-btn ds-btn-shout\">" + context.settings.accelerate.label + "</a>\n                            </div>\n                        </div>";
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
                                        jwplayer().stop();
                                        return false;
                                    }
                                });
                                jwplayer.key = "Jk0VV9U22TDjyK6vtdAq9N/pO+cp28R9qfwoMcK5hNY=";
                                jwplayer(this.querySelector('#myDiv')).setup({
                                    "file": context.settings.action.url,
                                    "image": context.settings.action.image,
                                    "height": 360,
                                    "width": 640
                                });
                            }
                            Video = __decorate([component('landingpage-success-video-element'), extend("div")], Video);
                            return Video;
                        }(AbstractPolymerElement);
                        Success.Video = Video;
                    })(Success = Element.Success || (Element.Success = {}));
                })(Element = LandingPage.Element || (LandingPage.Element = {}));
            })(LandingPage = Component.LandingPage || (Component.LandingPage = {}));
        })(Component = Threeds.Component || (Threeds.Component = {}));
    })(Threeds = Com.Threeds || (Com.Threeds = {}));
})(Com || (Com = {}));
Com.Threeds.Component.LandingPage.Element.Success.Video.register();
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
    var Threeds;
    (function (Threeds) {
        var Component;
        (function (Component) {
            var LandingPage;
            (function (LandingPage) {
                var Element;
                (function (Element) {
                    var AbstractPolymerElement = Com.Threeds.Element.AbstractPolymerElement;
                    var Download = Com.Threeds.Component.LandingPage.Element.Success.Download;
                    var Video = Com.Threeds.Component.LandingPage.Element.Success.Video;
                    var Success = function (_super) {
                        __extends(Success, _super);
                        function Success(context, data) {
                            _super.call(this, data);
                            this.context = context;
                            if (typeof this.context.settings.form.callback.success == 'function') {
                                this.context.settings.form.callback.success();
                            }
                            if (this.context.settings.type == 'video') {
                                this.appendChild(Video.create(this, data));
                            } else if (this.context.settings.type == 'download') {
                                this.appendChild(Download.create(this, data));
                            }
                        }
                        Object.defineProperty(Success.prototype, "settings", {
                            get: function () {
                                return this.context.settings;
                            },
                            enumerable: true,
                            configurable: true
                        });
                        Success = __decorate([component('landingpage-success-element'), extend("div")], Success);
                        return Success;
                    }(AbstractPolymerElement);
                    Element.Success = Success;
                })(Element = LandingPage.Element || (LandingPage.Element = {}));
            })(LandingPage = Component.LandingPage || (Component.LandingPage = {}));
        })(Component = Threeds.Component || (Threeds.Component = {}));
    })(Threeds = Com.Threeds || (Com.Threeds = {}));
})(Com || (Com = {}));
Com.Threeds.Component.LandingPage.Element.Success.register();
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
    var Threeds;
    (function (Threeds) {
        var Component;
        (function (Component) {
            var LandingPage;
            (function (LandingPage) {
                var Element;
                (function (Element) {
                    var AbstractPolymerElement = Com.Threeds.Element.AbstractPolymerElement;
                    var Error = function (_super) {
                        __extends(Error, _super);
                        function Error(context, data) {
                            _super.call(this, data);
                            this.context = context;
                            var tpl = "<div class=\"ds-ldp-global-container ds-ldp-global-step-error\">\n                            <div id=\"ldp\" class=\"ds-lpd-info-form\">\n                                <div class=\"ds-landingpage\">\n                                    <div class=\"ds-tabs\">\n                                        <p class=\"ds-ldp-form-error\">" + data.content + "</p>\n                                    </div>\n                                    <div class=\"ds-lpd-info-blur\" style=\"background-image: url('" + context.settings.backgroundImage + "');\"></div>\n                                </div>\n                            </div>\n                        </div>";
                            context.elem.html(tpl);
                        }
                        Error = __decorate([component('landingpage-error-element'), extend("div")], Error);
                        return Error;
                    }(AbstractPolymerElement);
                    Element.Error = Error;
                })(Element = LandingPage.Element || (LandingPage.Element = {}));
            })(LandingPage = Component.LandingPage || (Component.LandingPage = {}));
        })(Component = Threeds.Component || (Threeds.Component = {}));
    })(Threeds = Com.Threeds || (Com.Threeds = {}));
})(Com || (Com = {}));
Com.Threeds.Component.LandingPage.Element.Error.register();
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
    var Threeds;
    (function (Threeds) {
        var Component;
        (function (Component) {
            var LandingPage;
            (function (LandingPage_1) {
                var Element;
                (function (Element) {
                    var AbstractPolymerElement = Com.Threeds.Element.AbstractPolymerElement;
                    var Tabs = Com.Threeds.Component.Tabs.Element.Tabs;
                    var Form = Com.Threeds.Component.Form.Element.Form;
                    var Success = Com.Threeds.Component.LandingPage.Element.Success;
                    var Error = Com.Threeds.Component.LandingPage.Element.Error;
                    var LandingPage = function (_super) {
                        __extends(LandingPage, _super);
                        function LandingPage(context, data) {
                            _super.call(this, data);
                            if (typeof context == 'undefined') return;
                            this.context = context;
                            var tabsContainer = document.createElement('div');
                            tabsContainer.classList.add('ds-lpd-info-form');
                            var tabsContainer2 = document.createElement('div');
                            tabsContainer2.classList.add('ds-landingpage');
                            var blur = document.createElement('div');
                            blur.style.backgroundImage = "url('" + this.context.settings.backgroundImage + "')";
                            blur.classList.add('ds-lpd-info-blur');
                            tabsContainer2.appendChild(this.tabs());
                            tabsContainer2.appendChild(blur);
                            tabsContainer.appendChild(tabsContainer2);
                            this.appendChild(tabsContainer);
                            this.appendChild(this.form(data));
                        }
                        LandingPage.prototype.clear = function () {
                            while (Polymer.dom(this).firstChild) Polymer.dom(this).removeChild(Polymer.dom(this).firstChild);
                            this.innerHTML = '';
                        };
                        LandingPage.prototype.tabs = function () {
                            var options = {
                                data: this.context.settings.steps
                            };
                            return Tabs.create(this, options);
                        };
                        LandingPage.prototype.form = function (data) {
                            var self = this;
                            if (typeof this.context.settings.hook.setCurrentPosition == 'undefined') {
                                this.context.settings.hook.setCurrentPosition = function (context, index) {
                                    self.setCurrentPosition(index);
                                };
                            }
                            if (typeof this.context.settings.hook.success == 'undefined') {
                                this.context.settings.hook.success = function (context, data) {
                                    self.context.elem.html('');
                                    self.context.elem.attr('class', '');
                                    self.context.elem.addClass('ds-ldp-global-step-2');
                                    self.context.elem.append(Success.create(self.context, self.context.settings.success));
                                };
                            }
                            if (typeof this.context.settings.hook.warning == 'undefined') {
                                this.context.settings.hook.warning = function (context, message) {
                                    self.context.elem.html('');
                                    self.context.elem.attr('class', '');
                                    self.context.elem.addClass('ds-ldp-global-step-2');
                                    self.context.elem.append(Error.create(self.context, self.context.settings.error));
                                };
                            }
                            return Form.create(this.context, data);
                        };
                        LandingPage.prototype.setCurrentPosition = function (index) {
                            this.context.elem.attr('class', '');
                            this.context.elem.addClass('ds-ldp-global-container');
                            this.context.elem.addClass("ds-ldp-global-step-" + index);
                            document.querySelector('.ds-tabs').currentPosition = index;
                        };
                        LandingPage = __decorate([component('landingpage-element'), extend("div")], LandingPage);
                        return LandingPage;
                    }(AbstractPolymerElement);
                    Element.LandingPage = LandingPage;
                })(Element = LandingPage_1.Element || (LandingPage_1.Element = {}));
            })(LandingPage = Component.LandingPage || (Component.LandingPage = {}));
        })(Component = Threeds.Component || (Threeds.Component = {}));
    })(Threeds = Com.Threeds || (Com.Threeds = {}));
})(Com || (Com = {}));
Com.Threeds.Component.LandingPage.Element.LandingPage.register();
var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Com;
(function (Com) {
    var Threeds;
    (function (Threeds) {
        var Component;
        (function (Component) {
            var LandingPage;
            (function (LandingPage_1) {
                var AbstractPlugin = Com.Threeds.Plugin.AbstractPlugin;
                var LandingPage = Com.Threeds.Component.LandingPage.Element.LandingPage;
                var Plugin = function (_super) {
                    __extends(Plugin, _super);
                    function Plugin(elem, options) {
                        _super.call(this, elem, options);
                        this.settings = {
                            id: 'LDP6312',
                            type: 'download',
                            backgroundImage: 'http://lorempixel.com/500/680',
                            steps: {
                                0: {
                                    name: '1',
                                    title: 'To download the Case Study, please provide your email'
                                },
                                1: {
                                    name: '2',
                                    title: 'Please provide more informations to complete your Case Study download'
                                }
                            },
                            success: {
                                title: 'Thanks for your download',
                                content: 'Your download should start automatically, if not use the direct link'
                            },
                            action: {
                                url: 'http://www.3ds.com/en/file.pdf',
                                label: 'Download',
                                content: 'PDF - 3,84Mo'
                            },
                            accelerate: {
                                url: 'http://www.3ds.com/en/contact-us',
                                label: 'contact me',
                                content: 'You want to be contacted for a commercial purpose?'
                            },
                            error: {
                                title: 'Sorry !',
                                content: '<p>This service is temporarily unavailable. please try again later or contact the <a href="#" class="btn btn-primary">support</a></p> '
                            },
                            nextLabel: 'Next',
                            prevLabel: 'Back',
                            display: {
                                label: false,
                                placeholder: true
                            },
                            styling: {
                                label: {
                                    suffixe: ' : ',
                                    mandatory: ' * '
                                }
                            },
                            api: {
                                adapter: 'Com.Threeds.Service.Adapter.Neolane',
                                url: 'http://dassault-test.neolane.net/dsx/lp_api.jssp'
                            },
                            hook: {
                                render: undefined,
                                success: undefined,
                                redirect: undefined,
                                warning: undefined,
                                setCurrentPosition: undefined
                            },
                            callback: {
                                success: undefined
                            }
                        };
                        this.elem = elem;
                        this.elem.addClass('ds-ldp-global-container');
                        this.settings = $.extend({}, this.settings, options);
                        if (Object.isDefined(options, 'form.nextLabel')) {
                            this.settings.nextLabel = options.form.nextLabel;
                        }
                        if (Object.isDefined(options, 'form.prevLabel')) {
                            this.settings.prevLabel = options.form.prevLabel;
                        }
                        if (Object.isDefined(options, 'form.api.url')) {
                            this.settings.api.url = options.form.api.url;
                        }
                        if (Object.isDefined(options, 'form.callback')) {
                            this.settings.callback = options.form.callback;
                        }
                        this.service('api').form(this, {});
                    }
                    Plugin.prototype.render = function (type, data) {
                        this.elem.append(LandingPage.create(this, data));
                    };
                    return Plugin;
                }(AbstractPlugin);
                LandingPage_1.Plugin = Plugin;
                $.namespace('threeds', {
                    landingPage: function (options) {
                        return new Plugin(this, options);
                    },
                    dynamicForm3ds: function (options) {
                        return new Plugin(this, options);
                    }
                });
            })(LandingPage = Component.LandingPage || (Component.LandingPage = {}));
        })(Component = Threeds.Component || (Threeds.Component = {}));
    })(Threeds = Com.Threeds || (Com.Threeds = {}));
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
var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Com;
(function (Com) {
    var Threeds;
    (function (Threeds) {
        var Component;
        (function (Component) {
            var Tabs;
            (function (Tabs_1) {
                var AbstractPlugin = Com.Threeds.Plugin.AbstractPlugin;
                var Plugin = function (_super) {
                    __extends(Plugin, _super);
                    function Plugin(elem, options) {
                        _super.call(this, elem, options);
                        this.settings = {
                            data: {
                                0: {
                                    title: 'tab 1',
                                    content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt'
                                },
                                1: {
                                    title: 'tab 2',
                                    content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt'
                                }
                            }
                        };
                        this.elem = elem;
                        this.settings = $.extend({}, this.settings, options);
                        this.render();
                    }
                    Plugin.prototype.render = function () {};
                    return Plugin;
                }(AbstractPlugin);
                Tabs_1.Plugin = Plugin;
                $.namespace('threeds', {
                    tabs: function (options) {
                        return new Plugin(this, options);
                    }
                });
            })(Tabs = Component.Tabs || (Component.Tabs = {}));
        })(Component = Threeds.Component || (Threeds.Component = {}));
    })(Threeds = Com.Threeds || (Com.Threeds = {}));
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
    var Threeds;
    (function (Threeds) {
        var Service;
        (function (Service) {
            var Adapter;
            (function (Adapter) {
                var AbstractAdapter = Com.Threeds.Service.Adapter.AbstractAdapter;
                var Neolane = function (_super) {
                    __extends(Neolane, _super);
                    function Neolane() {
                        _super.apply(this, arguments);
                    }
                    Neolane.prototype.form = function (context, options) {
                        var self = this;
                        $.ajax({
                            type: "GET", dataType: "jsonp", url: context.settings.api.url, data: { op: 'GetFormJson', lpid: context.settings.id },
                            success: function (response) {
                                context.render('form', self.data(response));
                            },
                            error: function (resultat, statut, erreur) {
                                context.render('form', false);
                            }
                        });
                    };
                    Neolane.prototype.post = function (context, data) {
                        var self = this;
                        data['lpid'] = context.settings.id;
                        $.ajax({
                            type: "POST", dataType: "jsonp", url: context.settings.api.url,
                            data: data,
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
                            for (var i = 0; i < reponse.result.config.length; i++) {
                                if (typeof reponse.result.config[i].parentField != 'undefined') {
                                    reponse.result.config[i].parentFieldData = this.findParentData(reponse.result.config[i].parentField, reponse.result.config);
                                }
                            }
                        }
                        return reponse;
                    };
                    Neolane.prototype.clean = function (data) {
                        for (var i = 0; i < data.length; i++) {
                            data[i].fieldclass = [];
                            if (typeof data[i].type != 'undefined' && data[i].type == 'picklist') {
                                data[i].type = 'select';
                            } else if (typeof data[i].type != 'undefined' && data[i].type == 'string') {
                                data[i].type = 'text';
                            } else if (typeof data[i].type != 'undefined' && data[i].type == 'fieldgroup') {
                                this.clean(data[i].items);
                            }
                        }
                    };
                    Neolane.prototype.findParentData = function (parentField, data) {
                        for (var i = 0; i < data.length; i++) {
                            if (data[i].fieldName == parentField) {
                                return data[i];
                            }
                        }
                        return;
                    };
                    Neolane.prototype.hydrate = function (data, values) {
                        for (var i = 0; i < data.length; i++) {
                            if (typeof data[i].fieldName != 'undefined' && values[data[i].fieldName] != 'undefined') {
                                data[i].value = values[data[i].fieldName];
                            } else if (typeof data[i].type != 'undefined' && data[i].type == 'fieldgroup') {
                                this.hydrate(data[i].items, values);
                            }
                        }
                    };
                    return Neolane;
                }(AbstractAdapter);
                Adapter.Neolane = Neolane;
            })(Adapter = Service.Adapter || (Service.Adapter = {}));
        })(Service = Threeds.Service || (Threeds.Service = {}));
    })(Threeds = Com.Threeds || (Com.Threeds = {}));
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
    var Threeds;
    (function (Threeds) {
        var Component;
        (function (Component) {
            var Form;
            (function (Form) {
                var Element;
                (function (Element) {
                    var AbstractPolymerElement = Com.Threeds.Element.AbstractPolymerElement;
                    var Option = function (_super) {
                        __extends(Option, _super);
                        function Option(context, data) {
                            _super.call(this, data);
                            if (data.label != undefined) this.label = data.label;
                            if (data.value != undefined) this.value = encodeURIComponent(data.value);
                            if (data.selected != undefined) this.selected = data.selected;
                            if (data.disabled != undefined) this.disabled = data.disabled;
                        }
                        Option.prototype.labelChanged = function (newValue, oldValue) {
                            this.innerHTML = newValue;
                        };
                        Option.prototype.ready = function () {};
                        __decorate([property({ type: String, reflectToAttribute: true })], Option.prototype, "label", void 0);
                        __decorate([property({ type: String, reflectToAttribute: true })], Option.prototype, "value", void 0);
                        __decorate([property({ type: Boolean, reflectToAttribute: true })], Option.prototype, "selected", void 0);
                        __decorate([property({ type: Boolean, reflectToAttribute: true })], Option.prototype, "disabled", void 0);
                        __decorate([observe("label")], Option.prototype, "labelChanged", null);
                        Option = __decorate([component('option-element'), extend("option")], Option);
                        return Option;
                    }(AbstractPolymerElement);
                    Element.Option = Option;
                })(Element = Form.Element || (Form.Element = {}));
            })(Form = Component.Form || (Component.Form = {}));
        })(Component = Threeds.Component || (Threeds.Component = {}));
    })(Threeds = Com.Threeds || (Com.Threeds = {}));
})(Com || (Com = {}));
Com.Threeds.Component.Form.Element.Option.register();});})(jQuery, Drupal, window);