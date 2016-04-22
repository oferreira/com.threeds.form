var alertFallback, alerts, canTouch, console, disableScroll, enableScroll, getImageSrc, isDesktop, isHandled, isIE8, isMobile, isTablet, isTouch, noTouch, obj_tap, preventDefault, uniqid, utf8_decode, wheel, _ld, _m, _md, _sd, _tl, _tp,
  __slice = [].slice;

_ld = 1700;

_md = 1440;

_sd = 1280;

_tl = 1024;

_tp = 768;

_m = 480;


/* Console fallback
---------------------------------------
 */

alertFallback = false;

if (typeof console === "undefined" || typeof console.log === "undefined") {
  console = {};
  if (alertFallback) {
    console.log = function(msg) {
      return alert(msg);
    };
  } else {
    console.log = function() {};
  }
}

preventDefault = function(e) {
  e = e || window.event;
  if (e.preventDefault) {
    e.preventDefault();
  }
  return e.returnValue = false;
};

canTouch = function() {
  return $html.hasClass('mzr-touch');
};

noTouch = function() {
  return $html.hasClass('mzr-no-touch');
};

wheel = function(e) {
  return preventDefault(e);
};

disableScroll = function() {
  if (window.addEventListener) {
    window.addEventListener('DOMMouseScroll', wheel, false);
  }
  return window.onmousewheel = document.onmousewheel = wheel;
};

enableScroll = function() {
  if (window.removeEventListener) {
    window.removeEventListener('DOMMouseScroll', wheel, false);
  }
  return window.onmousewheel = document.onmousewheel = null;
};

isIE8 = function() {
  return $('body').hasClass('ie8');
};

isTouch = function() {
  return $('html').hasClass('mzr-touch');
};

isMobile = function() {
  return $('body').hasClass('device-mobile');
};

isTablet = function() {
  return $('body').hasClass('device-tablet');
};

isHandled = function() {
  return $('body').hasClass('device-handled');
};

isDesktop = function() {
  return $('body').hasClass('device-desktop');
};

alerts = function(e) {
  e.preventDefault();
  console.log(this);
  return console.log(e);
};

uniqid = function(prefix) {
  var k, n;
  if (prefix == null) {
    prefix = '';
  }
  n = Math.floor(Math.random() * 11);
  k = Math.floor(Math.random() * 1000000);
  return prefix + k + n;
};

getImageSrc = function($cont, callback) {
  var data, i, im, img, imgs, loaded, obj_merge, src;
  if ($cont == null) {
    $cont = false;
  }
  if (callback == null) {
    callback = false;
  }
  if ($cont) {
    imgs = $cont.find('img, .background-image');
  } else {
    imgs = $('img, .background-image');
  }
  if (imgs.length === 0) {
    return;
  }
  i = 0;
  loaded = 0;
  while (i < imgs.length) {
    img = $(imgs[i]);
    if (!img.hasClass('image-loaded')) {
      data = img.data();
      src = data.src;
      if (window.devicePixelRatio > 1) {
        src = data.srcX2;
      }
      if (img.is('img')) {
        img.attr('src', src);
      } else {
        img.css({
          backgroundImage: 'url(' + src + ')'
        });
      }
      if (callback) {
        im = new Image();
        im.src = src;
        img.load(function() {
          loaded++;
          if (loaded === imgs.length) {
            return callback();
          }
        });
      }
      img.addClass('image-loaded');
    }
    i++;
    obj_merge = function() {
      var xs;
      xs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    };
  }
  if ((typeof xs !== "undefined" && xs !== null ? xs.length : void 0) > 0) {
    return obj_tap({}, function(m) {
      var k, v, x, _i, _len, _results;
      _results = [];
      for (_i = 0, _len = xs.length; _i < _len; _i++) {
        x = xs[_i];
        _results.push((function() {
          var _results1;
          _results1 = [];
          for (k in x) {
            v = x[k];
            _results1.push(m[k] = v);
          }
          return _results1;
        })());
      }
      return _results;
    });
  }
};

obj_tap = function(o, fn) {
  fn(o);
  return o;
};

utf8_decode = function(str_data) {
  var ac, c1, c2, c3, c4, i, tmp_arr;
  tmp_arr = [];
  i = 0;
  ac = 0;
  c1 = 0;
  c2 = 0;
  c3 = 0;
  c4 = 0;
  str_data += '';
  while (i < str_data.length) {
    c1 = str_data.charCodeAt(i);
    if (c1 <= 191) {
      tmp_arr[ac++] = String.fromCharCode(c1);
      i++;
    } else if (c1 <= 223) {
      c2 = str_data.charCodeAt(i + 1);
      tmp_arr[ac++] = String.fromCharCode((c1 & 31) << 6 | c2 & 63);
      i += 2;
    } else if (c1 <= 239) {
      c2 = str_data.charCodeAt(i + 1);
      c3 = str_data.charCodeAt(i + 2);
      tmp_arr[ac++] = String.fromCharCode((c1 & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
      i += 3;
    } else {
      c2 = str_data.charCodeAt(i + 1);
      c3 = str_data.charCodeAt(i + 2);
      c4 = str_data.charCodeAt(i + 3);
      c1 = (c1 & 7) << 18 | (c2 & 63) << 12 | (c3 & 63) << 6 | c4 & 63;
      c1 -= 0x10000;
      tmp_arr[ac++] = String.fromCharCode(0xD800 | c1 >> 10 & 0x3FF);
      tmp_arr[ac++] = String.fromCharCode(0xDC00 | c1 & 0x3FF);
      i += 4;
    }
  }
  return tmp_arr.join('');
};

(function($) {
  $.fn.serializeFormJSON = function() {
    var a, o;
    o = {};
    a = this.serializeArray();
    $.each(a, function() {
      if (o[this.name]) {
        if (!o[this.name].push) {
          o[this.name] = [o[this.name]];
        }
        o[this.name].push(this.value || '');
      } else {
        o[this.name] = this.value || '';
      }
    });
    return o;
  };
})(jQuery);


/*
 * Interface object
 * =======================================================================
 */
var Interface,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Interface = (function() {

  /* Constructor
  =================================================
   */
  function Interface(params) {
    if (params == null) {
      params = {};
    }
    this.init = __bind(this.init, this);
    this.resize = __bind(this.resize, this);
    this.scroll = __bind(this.scroll, this);
    this.toggleMenu = __bind(this.toggleMenu, this);
    this.closeMenu = __bind(this.closeMenu, this);
    this.openMenu = __bind(this.openMenu, this);
    this.hideLoader = __bind(this.hideLoader, this);
    this.showLoader = __bind(this.showLoader, this);
    this.prependLoader = __bind(this.prependLoader, this);
    this.storage = new Storage();
    this.deviceWidth = $window.width();
    this.deviceHeight = $window.height();
    this.resizing = 0;
    this.resizeTimeout = 300;
    this.scrollLimit = 300;
    this.scrollLimitMobile = 150;
    this.scrollTop = 0;
    this.lastScrollTop = 0;
    this.$layout = $('.layout');
    $window.resize(this.resize);
    $window.scroll(this.scroll);
    this.resize();
    this.scroll();
  }


  /* Show loader
  =================================================
   */

  Interface.prototype.prependLoader = function($wrapper, c) {
    if (c == null) {
      c = 'cache-section';
    }
    return $wrapper.prepend("<div class=\"cache " + c + "\">\n  <div class=\"spinner\" viewBox=\"0 0 66 66\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle class=\"path\" cx=\"33\" cy=\"33\" r=\"30\"></circle>\n  </div>\n</div>");
  };


  /* Show loader
  =================================================
   */

  Interface.prototype.showLoader = function() {
    return $html.addClass('changing-state-loading');
  };


  /* Hide loader
  =================================================
   */

  Interface.prototype.hideLoader = function() {
    return $html.removeClass('changing-state-loading');
  };


  /* Open menu
  =================================================
   */

  Interface.prototype.openMenu = function() {
    return $html.addClass('layout-menu-open');
  };


  /* Close menu
  =================================================
   */

  Interface.prototype.closeMenu = function() {
    return $html.removeClass('layout-menu-open');
  };


  /* Toggle menu
  =================================================
   */

  Interface.prototype.toggleMenu = function() {
    if ($html.hasClass('layout-menu-open')) {
      return this.closeMenu();
    } else {
      return this.openMenu();
    }
  };


  /* Scroll window
  =================================================
   */

  Interface.prototype.scroll = function() {
    var limit;
    this.scrollTop = $window.scrollTop();
    limit = this.scrollLimit;
    if (this.deviceWidth <= 1024) {
      limit = this.scrollLimitMobile;
    }
    if (this.scrollTop > limit) {
      $html.addClass('is-scrolled');
      if (this.scrollTop > this.lastScrollTop) {
        $html.removeClass('is-scrolled-up').addClass('is-scrolled-down');
      } else {
        $html.removeClass('is-scrolled-down').addClass('is-scrolled-up');
      }
    } else {
      $html.removeClass('is-scrolled is-scrolled-up is-scrolled-down');
    }
    return this.lastScrollTop = this.scrollTop;
  };


  /* Resize window
  =================================================
   */

  Interface.prototype.resize = function() {
    $html.addClass('is-resizing');
    this.deviceWidth = $window.width();
    this.deviceHeight = $window.height();
    clearTimeout(this.resizing);
    return this.resizing = setTimeout(function() {
      return $html.removeClass('is-resizing');
    }, this.resizeTimeout);
  };


  /* Initialization
  =================================================
   */

  Interface.prototype.init = function($wrapper) {
    var $select, $selects, select, _i, _len;
    if ($wrapper == null) {
      $wrapper = $html;
    }
    $wrapper.find('.toggle-main-menu').on('click', this.toggleMenu);
    $selects = $wrapper.find('.select, .ds-select');
    for (_i = 0, _len = $selects.length; _i < _len; _i++) {
      select = $selects[_i];
      $select = $(select);
      if ($select.prop('multiple')) {
        $select.dsMultiselect();
      } else {
        $select.dsSelect();
      }
    }
    $wrapper.find('.checkbox, .ds-checkbox').dsCheckbox();
    $wrapper.find('.radio').dsRadio();
    $wrapper.find('.input-file').dsFileInput();
    $wrapper.find('.input-date').dsDateInput();
    $wrapper.find('.header').dsHeader();
    $wrapper.find('.toggle-favorite').dsToggleFavorite();
    $wrapper.find('.like').dsToggleLike();
    $wrapper.find('.scroll-to').dsScrollToTarget();
    $wrapper.find('.section-news').dsNews();
    $wrapper.find('.ds-cards').dsHome();
    $wrapper.find('.related-project ').dsRelatedProject();
    $wrapper.find('.isotop-filter').dsGetSoftware();
    $wrapper.find('.wahts-next').dsWhatsNext();
    $wrapper.find('.universities').dsCard();
    $wrapper.find('.limit-text').dsLimitText();
    $wrapper.find('.section-institutions').dsInstitutions();
    $wrapper.find('.section-showroom').dsShowroom();
    $wrapper.find('.section-experiences').dsExperiences();
    $wrapper.find('.form-options').dsFormOptions();
    $wrapper.find('.ds-form').dsForm();
    $wrapper.find('.hidden-fields').dsHiddenFields();
    $wrapper.find('.panel-focus').dsPanelFocus();
    $wrapper.find('.panel-contact').dsPanelContact();
    $wrapper.find('.panel-tabs').dsPanelTabs();
    $wrapper.find('.panel-table').dsPanelTable();
    $wrapper.find('.panel-accordion').dsPanelAccordion();
    $wrapper.find('.topic-heading').dsTopicHeading();
    $wrapper.find('.topic-video').dsTopicVideo();
    $wrapper.find('.topic-wrapper').dsTopicSlideshow();
    $wrapper.find('.testimonials').dsTestimonials();
    $wrapper.find('.accordion').dsAccordion();
    $wrapper.find('.toggle').dsToggle();
    $wrapper.find('.slider').dsSlider();
    $wrapper.find('.footer').dsFooter();
    $wrapper.find('.call-dialog').dsDialog();
    $wrapper.find('.masonry').dsMasonry();
    $wrapper.find('.ds-banner').dsBanner();
    $wrapper.find('.badge').dsBadge();
    $wrapper.find('.video').dsVideo();
    $wrapper.find('.timeline').dsTimeline();
    $wrapper.find('.timeline-forms').dsTimelineForms();
    $wrapper.find('.wysiwyg').dsWysiwyg();
    // $wrapper.find('.breadcrumbs').dsBreadcrumbs();
    $wrapper.find('.read-more-content').dsReadMoreContent();
    $wrapper.find('.horizontal-scroll-wrapper').dsHorizontalScroll();
    $wrapper.find('.full-height').dsFullHeight();
    $wrapper.find('.ranking').dsRanking();
    $wrapper.find('.gallery').dsGallery();
    $wrapper.find('.ds-tabs').dsTabs();
    $wrapper.find('.group-checkbox').dsOpenFilter();
    $wrapper.find('.ds-dragscroll').dsDragMove();
    return $wrapper;
  };

  return Interface;

})();


/*
 * Storage object
 * =======================================================================
 */
var Storage,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Storage = (function() {

  /* Constructor
  =================================================
   */
  function Storage() {
    this.clear = __bind(this.clear, this);
    this.put = __bind(this.put, this);
    this.get = __bind(this.get, this);
  }


  /* Get value
  =================================================
   */

  Storage.prototype.get = function(name) {
    return sessionStorage.getItem(name);
  };


  /* Put value
  =================================================
   */

  Storage.prototype.put = function(name, value) {
    return sessionStorage.setItem(name, value);
  };


  /* Clear
  =================================================
   */

  Storage.prototype.clear = function() {
    return sessionStorage.clear();
  };

  return Storage;

})();

(function($) {
  return $.fn.dsAccordion = function(options) {
    return this.each(function() {

      /* Variables
      ---------------------------------------
       */
      var $items, $searchBox, $this, $titles, collapse, data, expand, filter, hide, init, show, speed, toggle;
      $this = $(this);
      $titles = $this.find('.accordion-item-title');
      $items = $this.find('.accordion-item');
      data = $this.data();
      $searchBox = $(data.searchBox);
      speed = 300;

      /* Expand
      ---------------------------------------
       */
      hide = function($accordion) {
        $accordion.addClass('is-hidden');
        return $accordion.stop().slideUp(speed);
      };

      /* Collapse
      ---------------------------------------
       */
      show = function($accordion) {
        $accordion.removeClass('is-hidden');
        return $accordion.stop().slideDown(speed, function() {
          return $(this).attr('style', '');
        });
      };

      /* Expand
      ---------------------------------------
       */
      expand = function($accordion) {
        $accordion.addClass('is-active');
        return $accordion.find('.accordion-item-content').stop().slideDown(speed);
      };

      /* Collapse
      ---------------------------------------
       */
      collapse = function($accordion) {
        $accordion.removeClass('is-active');
        return $accordion.find('.accordion-item-content').stop().slideUp(speed);
      };

      /* Toggle
      ---------------------------------------
       */
      toggle = function(e) {
        var $accordion;
        $accordion = $(e.currentTarget).parents('.accordion-item');
        if ($accordion.hasClass('is-active')) {
          return collapse($accordion);
        } else {
          return expand($accordion);
        }
      };

      /* Filter
      ---------------------------------------
       */
      filter = function(e) {
        
        var $item, item, match, query, text, _i, _len, _results;
        query = $searchBox.val().toLowerCase();
        _results = [];
        for (_i = 0, _len = $items.length; _i < _len; _i++) {
          item = $items[_i];
          $item = $(item);
          if (query === '') {
            show($item);
            continue;
          }
          text = $item.find('.accordion-item-title').text() + ' ' + $item.find('.accordion-item-content').text();
          match = text.toLowerCase().match(query);
          if (match != null) {
            _results.push(show($item));
          } else {
            _results.push(hide($item));
          }
        }
        return _results;
      };

      /* Initialize
      ---------------------------------------
       */
      init = function() {
        var $accordion, title, _i, _len;
        if ($searchBox.length > 0) {
          $searchBox.on('keyup', filter);
        }
        for (_i = 0, _len = $titles.length; _i < _len; _i++) {
          title = $titles[_i];
          $accordion = $(title).parents('.accordion-item');
          if ($accordion.hasClass('is-active')) {
            expand($accordion);
          }
        }
        return $titles.on('click', toggle);
      };
      return init();
    });
  };
})(jQuery);

(function($) {
  return $.fn.dsBadge = function(options) {
    return this.each(function() {

      /* Variables
      ---------------------------------------
       */
      var $background, $front, $frontWrapper, $this, badgeLoaded, data, init, setPercent, speed, svgPath;
      $this = $(this);
      svgPath = 'images/badges/';
      speed = 500;
      data = {
        level: 1,
        percent: 0,
        animate: false
      };
      $.extend(true, data, $this.data());
      $this.addClass('badge-' + data.level);
      $frontWrapper = $('<div class="badge-front-wrapper"></div>');
      $front = $('<div class="badge-front"></div>');
      $background = $('<div class="badge-background"></div>');

      /* Load badge
      ---------------------------------------
       */
      badgeLoaded = function() {
        var $svg;
        $this.find('defs').remove();
        $svg = $this.find('svg');
        $front.append($svg.clone());
        $background.append($svg.clone());
        $this.append($background);
        $this.append($frontWrapper);
        $frontWrapper.append($front);
        $svg.remove();
        return setTimeout(function() {
          return setPercent(data.percent, data.animate);
        }, 300);
      };

      /* Set percent
      ---------------------------------------
       */
      setPercent = function(value, animate) {
        if (animate == null) {
          animate = false;
        }
        value = 100 - value;
        if (animate) {
          return $frontWrapper.stop().animate({
            height: value + '%'
          }, speed);
        } else {
          return $frontWrapper.css('height', value + '%');
        }
      };

      /* Initialize
      ---------------------------------------
       */
      init = function() {
        return $this.load(svgPath + 'badge-' + data.level + '.svg', badgeLoaded);
      };
      return init();
    });
  };
})(jQuery);

(function($) {
  return $.fn.dsBanner = function(options) {
    return this.each(function() {

      /* Variables
      ---------------------------------------
       */
      var $lang, $langMenu, $profile, $profileMenu, $this, closeLanguage, closeProfile, init, langTimeout, openLanguage, openProfile, profileTimeout, resize, toggleLanguage, toggleProfile, wait;
      $this = $(this);
      $profile = $this.find('.ds-profile');
      $profileMenu = $this.find('.ds-profile-menu');
      $lang = $this.find('.ds-lang');
      $langMenu = $this.find('.ds-lang-menu');
      profileTimeout = 0;
      langTimeout = 0;
      wait = 300;

      /* Open languages
      ---------------------------------------
       */
      openLanguage = function() {
        $window.on('scroll', closeLanguage);
        clearTimeout(langTimeout);
        $lang.addClass('is-open');
        return $langMenu.addClass('is-open');
      };

      /* Close languages
      ---------------------------------------
       */
      closeLanguage = function() {
        clearTimeout(langTimeout);
        return langTimeout = setTimeout(function() {
          $window.off('scroll', closeLanguage);
          $lang.removeClass('is-open');
          return $langMenu.removeClass('is-open');
        }, wait);
      };

      /* Toggle languages
      ---------------------------------------
       */
      toggleLanguage = function() {
        if ($lang.hasClass('is-open')) {
          return closeLanguage();
        } else {
          return openLanguage();
        }
      };

      /* Resize
      ---------------------------------------
       */
      resize = function() {
        if ($profileMenu.length > 0) {
          $profileMenu.css('right', Math.round($this.width() - ($profile.position().left + $profile.outerWidth(true))));
        }
        if ($langMenu.length > 0) {
          return $langMenu.css('right', Math.round($this.width() - ($lang.position().left + $lang.outerWidth(true))));
        }
      };

      /* Initialize
      ---------------------------------------
       */
      init = function() {
        resize();
        $window.resize(resize);
        if (canTouch()) {
          wait = 0;
          $profile.on('click', toggleProfile);
          return $lang.on('click', toggleLanguage);
        } else {
          $profile.on('mouseover', openProfile);
          $profile.on('mouseout', closeProfile);
          $profileMenu.on('mouseover', openProfile);
          $profileMenu.on('mouseout', closeProfile);
          $lang.on('mouseover', openLanguage);
          $lang.on('mouseout', closeLanguage);
          $langMenu.on('mouseover', openLanguage);
          return $langMenu.on('mouseout', closeLanguage);
        }
      };
      return init();
    });
  };
})(jQuery);

(function($) {
  return $.fn.dsBreadcrumbs = function() {
    return this.each(function() {

      /* Variables
      ---------------------------------------
       */
      var $breadcrumbs, $container, $containerScroll, $this, init, resize, scroller;
      $this = $(this);
      scroller = {};
      $breadcrumbs = $this.find('.breadcrumb');
      $containerScroll = $this.find('.breadcrumb-group');
      $container = $this.find('> .container');
      if (typeof $container.attr('id') === 'undefined') {
        $container.attr('id', uniqid('scroll_'));
      }

      /* Resize
      ---------------------------------------
       */
      resize = function() {
        var $breadcrumb, breadcrumb, width, _i, _len;
        width = 2;
        for (_i = 0, _len = $breadcrumbs.length; _i < _len; _i++) {
          breadcrumb = $breadcrumbs[_i];
          $breadcrumb = $(breadcrumb);
          width += $breadcrumb.outerWidth(true);
        }
        $containerScroll.width(width);
        return setTimeout(function() {
          scroller.refresh();
          return scroller.scrollTo(scroller.maxScrollX, 0, 0);
        }, 10);
      };

      /* Initialize
      ---------------------------------------
       */
      init = function() {
        return setTimeout(function() {
          scroller = new IScroll('#' + $container.attr('id'), {
            scrollX: true,
            scrollY: false,
            mouseWheel: false,
            scrollbars: false,
            click: true,
            eventPassthrough: true,
            preventDefault: false
          });
          $window.resize(resize);
          return setTimeout(resize, 1);
        }, 10);
      };
      return init();
    });
  };
})(jQuery);

(function($) {
  return $.fn.dsCheckbox = function(options) {
    return this.each(function() {

      /* Variables
      ---------------------------------------
       */
      var $checkbox, $label,$pp, $this, check, classes, init, name, toggle, uncheck;
      $this = $(this);
      $this.wrap('<div class=""></div>');
      classes = $this.attr('class');
      $this.attr('class', '');
      $this = $this.parent().attr('class', classes);
      $checkbox = $this.find('input[type="checkbox"]');
      name = $checkbox.attr('name');
      $label = $('label[for="' + name + '"]');
      $pp = $this.parent();
      /* Toggle
      ---------------------------------------
       */
      toggle = function(e) {
        if ($this.hasClass('is-checked')) {
          return uncheck();
        } else {
          return check();
        }
      };

      /* Active
      ---------------------------------------
       */
      check = function(trigger) {
        if (trigger == null) {
          trigger = true;
        }
        $this.addClass('is-checked');
        if($this.hasClass('parent')) {
          $this.parent().addClass('is-checked');
        }
        $checkbox.prop('checked', true);
        if (trigger) {
          return $checkbox.trigger('change');
        }
      };

      /* Desuncheck
      ---------------------------------------
       */
      uncheck = function(trigger) {
        if (trigger == null) {
          trigger = true;
        }
        $this.removeClass('is-checked');
        if($this.hasClass('parent')) {
          $this.parent().removeClass('is-checked');
        }
        $checkbox.prop('checked', false);
        if (trigger) {
          return $checkbox.trigger('change');
        }
      };

      /* Initialize
      ---------------------------------------
       */
      init = function() {
        $label.on('click', toggle);
        
        if($this.hasClass('parent')){
          $pp.on('click', toggle);          
        }else {
          $this.on('click', toggle);
        }


        if ($checkbox.prop('checked')) {
          return check(false);
        }
      };
      return init();
    });
  };
})(jQuery);

(function($) {
  return $.fn.dsDateInput = function(options) {
    return this.each(function() {

      /* Variables
      ---------------------------------------
       */
      var $btn, $this, data, init, openCalendar;
      $this = $(this);
      console.log($this);
      if ($this.next().hasClass('btn')) {
        $btn = $this.next();
      } else {
        $btn = [];
      }
      data = {};
      $.extend(true, data, $this.data());

      /* Open calendar
      ---------------------------------------
       */
      openCalendar = function() {
        console.log('open calendar');
        return $this.datepicker('show');
      };

      /* Initialize
      ---------------------------------------
       */
      init = function() {
        options = {};
        $this.datepicker(options);
        if ($btn.length > 0) {
          return $btn.on('click', openCalendar);
        }
      };
      return init();
    });
  };
})(jQuery);

(function($) {
  return $.fn.dsDialog = function(options) {
    return this.each(function() {

      /* Variables
      ---------------------------------------
       */
      var $cache, $dialog, $dialogWrapper, $this, append, callDialog, data, dialogParams, hide, init, onEscape, params, place, show;
      $this = $(this);
      data = $this.data();
      params = {
        autoStart: false,
        top: null
      };
      if (data.dialogParams != null) {
        dialogParams = data.dialogParams;
      } else {
        dialogParams = {};
      }
      $.extend(true, params, dialogParams);
      $cache = [];
      $dialogWrapper = [];
      $dialog = [];

      /* On escape
      ---------------------------------------
       */
      onEscape = function(e) {
        if (e.keyCode === 27) {
          return hide();
        }
      };

      /* Hide
      ---------------------------------------
       */
      hide = function() {
        $cache.velocity({
          opacity: [0, 1]
        }, 200);
        $dialog.velocity({
          opacity: [0, 1]
        }, 200);
        return setTimeout(function() {
          $html.removeClass('has-dialog');
          $html.off('keyup', onEscape);
          $cache.off('click', hide);
          $cache.remove();
          return $dialogWrapper.remove();
        }, 600);
      };

      /* Show
      ---------------------------------------
       */
      show = function() {
        var pluginParams;
        $html.addClass('has-dialog');
        ds.init($dialogWrapper);
        if (data.pluginParams != null) {
          pluginParams = data.pluginParams;
        } else {
          pluginParams = {};
        }
        if (data.plugin) {
          $dialog[data.plugin](pluginParams);
        }
        $dialog.find('.close-dialog').on('click', function(e) {
          e.preventDefault();
          return hide();
        });
        $html.on('keyup', onEscape);
        $cache.on('click', hide);
        return place();
      };

      /* Append dialog
      ---------------------------------------
       */
      append = function(content) {
        $dialog = $(content);
        $cache = $('<div class="cache cache-dialog"></div>');
        $body.append($cache);
        $dialogWrapper = $('<div class="dialog-wrapper"></div>');
        $dialogWrapper.append($dialog);
        $body.append($dialogWrapper);
        return setTimeout(show, 100);
      };

      /* Place/resize dialog
      ---------------------------------------
       */
      place = function() {
        var dialogTop, scrollTop, top;
        $dialog.css('top', 'auto');
        if (params.top != null) {
          $dialog.css('top', params.top);
          $('html, body').stop().animate({
            scrollTop: 0
          }, 300);
          return;
        }
        scrollTop = $window.scrollTop();
        top = Math.round(scrollTop + ($window.height() * .5) - ($dialog.height() * .5));
        if (top < 0) {
          top = 0;
        }
        $dialog.css('top', top);
        dialogTop = $dialog.offset().top;
        if (dialogTop < scrollTop) {
          top = dialogTop - 20;
          if (top < 0) {
            top = 0;
          }
          return $('html, body').stop().animate({
            scrollTop: top
          }, 300);
        }
      };

      /* Call dialog
      ---------------------------------------
       */
      callDialog = function(e) {
        if (e == null) {
          e = null;
        }
        if (e != null) {
          e.preventDefault();
        }
        ds.showLoader();
        return $.ajax({
          url: $this.attr('href'),
          contentType: 'text/html',
          dataType: 'html',
          method: 'get'
        }).done(function(content) {
          ds.hideLoader();
          return append(content);
        }).error(function() {
          $this.removeClass('is-loading');
          return console.log('error');
        });
      };

      /* Initialize
      ---------------------------------------
       */
      init = function() {
        $this.on('click', callDialog);
        if (params.autoStart) {
          $('html, body').stop().animate({
            scrollTop: 0
          }, 1);
          return callDialog();
        }
      };
      return init();
    });
  };
})(jQuery);

(function($) {
  return $.fn.dsLoginDialog = function(_options) {
    var options;
    if (_options == null) {
      _options = {};
    }
    options = {
      initialTab: '#login'
    };
    $.extend(true, options, _options);
    return this.each(function() {

      /* Variables
      ---------------------------------------
       */
      var $forms, $links, $passwords, $switches, $this, checkPassword, init, onSubmit, setTab, switchTab;
      $this = $(this);
      ds.prependLoader($this, 'cache-dialog-content');
      $switches = $this.find('.ds-login-tab-switcher a');
      $links = $this.find('.ds-login-tab-link');
      $forms = $this.find('form');
      $passwords = $this.find('input[type="password"]');

      /* Switch tab
      ---------------------------------------
       */
      switchTab = function(e) {
        var $switch, id;
        e.preventDefault();
        $switch = $(e.currentTarget);
        id = $switch.attr('href');
        return setTab(id);
      };

      /* Set tab
      ---------------------------------------
       */
      setTab = function(id) {
        var $switch, $tab;
        $tab = $this.find(id);
        $tab.addClass('is-active').siblings().removeClass('is-active');
        $switch = $this.find('a[href="' + id + '"]');
        if ($switch.length > 0 && $switch.parent().hasClass('ds-login-tab-switcher')) {
          return $switch.parent().addClass('is-active').siblings().removeClass('is-active');
        } else {
          return $switches.each(function() {
            return $(this).parent().removeClass('is-active');
          });
        }
      };

      /* Submit form
      ---------------------------------------
       */
      onSubmit = function(e) {
        var $form, $submit;
        e.preventDefault();
        $form = $(e.currentTarget);
        $submit = $form.find('.ds-submit');
        console.log($form);
        $this.addClass('is-loading');
        return $.ajax({
          url: window.location.href,
          data: $form.serializeArray(),
          method: $form.attr('method')
        }).done(function() {
          return setTimeout(function() {
            var targetId;
            $this.removeClass('is-loading');
            console.log('ok');
            targetId = $submit.data('target-id');
            if (targetId != null) {
              return setTab(targetId);
            }
          }, 750);
        }).error(function() {
          $this.removeClass('is-loading');
          return console.log('error');
        });
      };

      /* Check password
      ---------------------------------------
       */
      checkPassword = function(e) {
        var $conditionWrapper, $conditions, $input, value;
        $input = $(e.currentTarget);
        $conditions = $input.parent().find('.ds-password-condition');
        value = $input.val();
        if ($conditions.length > 0) {
          $conditionWrapper = $conditions.eq(0).parent();
          if (value === '') {
            return $conditionWrapper.slideUp(300);
          } else {
            $conditionWrapper.slideDown(300);
            return $conditions.each(function(i) {
              var $condition, length, matches, regex;
              $condition = $(this);
              regex = new RegExp($condition.data('regex'), 'g');
              length = $condition.data('length');
              matches = value.match(regex);
              if (matches != null) {
                if (length > 0 && matches.length >= length) {
                  $condition.addClass('is-valid');
                } else {
                  $condition.removeClass('is-valid');
                }
                return;
              }
              if ((matches == null) && length === 0) {
                $condition.addClass('is-valid');
              } else {
                $condition.removeClass('is-valid');
              }
            });
          }
        }
      };

      /* Initialize
      ---------------------------------------
       */
      init = function() {
        $switches.on('click', switchTab);
        $links.on('click', switchTab);
        $forms.on('submit', onSubmit);
        $passwords.on('focus', checkPassword);
        $passwords.on('keyup', checkPassword);
        return setTab(options.initialTab);
      };
      return init();
    });
  };
})(jQuery);

(function($) {
  return $.fn.dsExperiences = function(options) {
    options = {
      containerSelector: 'ds-experiences',
      itemSelector: '.ds-experience'
    };
    return this.each(function() {

      /* Variables
      ---------------------------------------
       */
      var $experiences, $filters, $groups, $loadMore, $scroller, $this, $loaded, filter, getCurrentFilters, init, loadExperiences, nbrOk, size, resizeTimeout, resizeWait;
      $this = $(this);
      ds.prependLoader($this);
      $groups = $this.find('.ds-filters');
      $filters = $this.find('.ds-filter');
      $experiences = $this.find(options.itemSelector);
      $scroller = $this.find('.experiences-scroller');
      $loadMore = $this.find('.load-more');
      nbrOk = true;
      resizeTimeout = 0;
      resizeWait = 100;
      $loaded = false;

      /* Load news
      ---------------------------------------
       */
      loadExperiences = function(e) {
        var el;
        $this.addClass('is-loading');
        $loaded = true;
        return $.ajax({
          url: 'visit-our-lab/experiences.html',
          contentType: 'text/html',
          dataType: 'html',
          data: 'filter = '+getCurrentFilter(),
          method: 'get'
        }).done(function(content) {
          $this.removeClass('is-loading');
          if(content){
            var $content;
            
            $content = $(content);
            $loaded = false;
            $scroller.append($content);

            el = (getCurrentFilter() == '*') ? '.ds-experience' : getCurrentFilter();

            size($(el),0);
            return $scroller.isotope('appended', $content);
          }else {
            return false;
          }
        }).error(function() {
          $this.removeClass('is-loading');
          return console.log('error');
        });
      };

      scroll = function(e) {         
        if($(window).scrollTop() >= $('.experiences-scroller').offset().top + $('.experiences-scroller').outerHeight() - window.innerHeight) {
          if($loaded == false)
              loadExperiences(e);
        }     
      };

      /* Filter
      ---------------------------------------
       */

      getCurrentFilter = function() {
        var $filter;
        $filter = $groups.find('.is-active');
        return $filter.data('filter');
      };



      /* Filter
      ---------------------------------------
       */
      filter = function(e) {

        var $filter;
        if (e == null) {
          e = null;
        }
        if (e != null) {
          $filter = $(e.currentTarget);
          $filter.addClass('is-active').siblings().removeClass('is-active');
          filter = $filter.data('filter');
        } else {
          filter = getCurrentFilter();
        }
        if (filter === '*') {
          size($experiences,1);
          $scroller.isotope({
            filter: '*'
          });
          return true;
        }

        //console.log(filter);
         size($(filter),1);
        return $scroller.isotope({
          filter: filter,
        });
      };


      /* Resize
      ---------------------------------------
       */
      size = function($element,$remove) {
          //var $j,$k;
          $j = 0;
          $k = 0;
          if($remove == 1 )
              $(options.itemSelector).removeClass('big big-x');
          //$experiences
          $element.each(function(i) {
            
            var $experience;
            $j++;
            $k++;
            $experience = $(this);
            $element.eq(1).addClass('big');
            if( $j == 8 ) {
                $j = 0;
                $element.eq(i+1).addClass('big');
            }
            if( $k == 3 ) {
                $k = 0;
                $element.eq(i).addClass('big-x');
            }
          
          });

          // console.log($j);
         return $scroller.isotope('layout'); 
      };

      /* Initialize
      ---------------------------------------
       */
      init = function() {
        $scroller.isotope({
          itemSelector: options.itemSelector
        });
        size($experiences,1);
        $(window).scroll(scroll);
        $filters.on('click', filter);
        // $loadMore.on('click', loadExperiences);
        // return $(window).on('resize', resize);
      };
      return init();
    });
  };
})(jQuery);

(function($) {
  return $.fn.dsFileInput = function(options) {
    return this.each(function() {

      /* Variables
      ---------------------------------------
       */
      var $filename, $img, $input, $preview, $remove, $text, $this, createLayout, data, displayName, displayPreview, getPreview, init, removePreview, resize;
      $this = $(this);
      $input = [];
      $text = [];
      $preview = [];
      $img = [];
      $remove = [];
      $filename = '';
      data = {
        btnClasses: '',
        preview: false
      };
      $.extend(true, data, $this.data());

      /* Create Layout
      ---------------------------------------
       */
      createLayout = function() {
        var btnClasses, classes;
        $this.wrap('<div></div>');
        classes = $this.attr('class');
        $this.attr('class', '');
        $this = $this.parent().attr('class', classes);
        $input = $this.find('input');
        $this.prepend('<span class="file-text"></span>');
        btnClasses = data.btnClasses;
        $text = $this.find('.file-text');
        if (btnClasses != null) {
          $text.addClass(btnClasses);
        }
        $this.prepend('<span class="file-name"></span>');
        $filename = $this.find('.file-name');
        if (data.preview) {
          $this.addClass('file-with-preview');
          $remove = $('<span class="file-remove"><i class="fa fa-times"></i></span>');
          $preview = $('<div class="file-preview"><div class="file-preview-image center-image"></div></div>');
          $img = $preview.find('.file-preview-image');
          $this.prepend($preview);
          return $this.prepend($remove);
        }
      };

      /* Display preview
      ---------------------------------------
       */
      getPreview = function(e) {
        var file, files, i, _results;
        files = $input[0].files;
        _results = [];
        for (i in files) {
          file = files[i];
          if (parseInt(i) !== 0) {
            break;
          }
          _results.push(displayPreview(window.URL.createObjectURL(file)));
        }
        return _results;
      };

      /* Display preview
      ---------------------------------------
       */
      displayPreview = function(url) {
        $img.css({
          backgroundImage: 'url(\'' + url + '\')'
        });
        if (!$this.hasClass('has-preview')) {
          $this.addClass('has-preview');
          return $input.trigger('file.display');
        }
      };

      /* Remove preview
      ---------------------------------------
       */
      removePreview = function(e) {
        $input.val('');
        $this.removeClass('has-preview');
        $img.css({
          backgroundImage: 'none'
        });
        return $input.trigger('file.remove');
      };

      /* Display name
      ---------------------------------------
       */
      displayName = function(e) {
        var arr, filename;
        filename = $input.val();
        if (filename.match(/\\/)) {
          arr = filename.split('\\');
        }
        if (filename.match(/\//)) {
          arr = filename.split('/');
        }
        if (arr != null) {
          filename = arr[arr.length - 1];
          return $filename.text(filename);
        }
      };

      /* Resize
      ---------------------------------------
       */
      resize = function() {
        return $filename.css({
          paddingLeft: $text.outerWidth(true) + 'px'
        });
      };

      /* Initialize
      ---------------------------------------
       */
      init = function() {
        createLayout();
        $text.text($input.attr('placeholder'));
        $input.change(function(e) {
          displayName(e);
          if (data.preview) {
            return getPreview(e);
          }
        });
        if ($remove.length > 0) {
          $remove.on('click', removePreview);
        }
        return setTimeout(resize, 50);
      };
      init();
      return $window.resize(resize);
    });
  };
})(jQuery);

(function($) {
  return $.fn.dsFooter = function(options) {
    return this.each(function() {

      /* Variables
      ---------------------------------------
       */
      var $contents, $items, $this, $titles, collapse, expand, init, resize, speed, toggle;
      $this = $(this);
      $items = $this.find('.footer-item');
      $titles = $this.find('.footer-item-title');
      $contents = $this.find('.footer-item-content');
      speed = 300;

      /* Expand
      ---------------------------------------
       */
      expand = function($item) {
        $item.addClass('is-active');
        return $item.find('.footer-item-content').stop().slideDown(speed);
      };

      /* Collapse
      ---------------------------------------
       */
      collapse = function($item) {
        $item.removeClass('is-active');
        return $item.find('.footer-item-content').stop().slideUp(speed);
      };

      /* Toggle
      ---------------------------------------
       */
      toggle = function(e) {
        var $item;
        if (ds.deviceWidth > _m) {
          return false;
        }
        $item = $(e.currentTarget).parent();
        if ($item.hasClass('is-active')) {
          return collapse($item);
        } else {
          return expand($item);
        }
      };

      /* Resize
      ---------------------------------------
       */
      resize = function(e) {
        var $left, $right, height, i, leftHeight, rightHeight;
        if (e == null) {
          e = null;
        }
        if (ds.deviceWidth > _tp) {
          $items.attr('style', '');
          $contents.attr('style', '');
        }
        if (ds.deviceWidth <= _tp && ds.deviceWidth > _m) {
          $items.attr('style', '');
          $contents.attr('style', '');
          i = 0;
          while (i <= $items.length) {
            if (i % 2 === 0 && i !== 0) {
              $left = $items.eq(i - 2);
              $right = $items.eq(i - 1);
              leftHeight = $left.height();
              rightHeight = $right.height();
              height = leftHeight;
              if (height < rightHeight) {
                height = rightHeight;
              }
              $left.height(height);
              $right.height(height);
            }
            i++;
          }
        }
        if (ds.deviceWidth <= _m) {
          $items.attr('style', '');
          return $items.each(function() {
            var $item;
            $item = $(this);
            if (!$item.hasClass('is-active')) {
              return collapse($item);
            }
          });
        }
      };

      /* Initialize
      ---------------------------------------
       */
      init = function() {
        resize();
        return $titles.on('click', toggle);
      };
      init();
      return $window.resize(resize);
    });
  };
})(jQuery);

(function($) {
  return $.fn.dsFormOptions = function(options) {
    return this.each(function() {

      /* Variables
      ---------------------------------------
       */
      var $this, $wrapper, getFormData, init, listenForm, speed, submitForm, timeout, wait;
      $this = $(this);
      ds.prependLoader($this, 'cache-form');
      $wrapper = $this.find($this.data('wrapper'));
      speed = 300;
      timeout = 0;
      wait = 1000;

      /* Submit form
      ---------------------------------------
       */
      getFormData = function() {
        var data, key, part, serialized, values, _i, _len;
        serialized = $this.serializeArray();
        data = {};
        for (_i = 0, _len = serialized.length; _i < _len; _i++) {
          part = serialized[_i];
          if (data[part.name] == null) {
            data[part.name] = [];
          }
          data[part.name].push(part.value);
        }
        for (key in data) {
          values = data[key];
          if (values.length === 1) {
            data[key] = values[0];
          }
        }
        return data;
      };

      /* Submit form
      ---------------------------------------
       */
      submitForm = function(e) {
        var data;
        e.preventDefault();
        if ($this.hasClass('is-loading')) {
          return false;
        }
        $this.addClass('is-loading');
        data = getFormData();
        return $.ajax({
          url: $this.attr('action'),
          contentType: 'text/html',
          dataType: 'html',
          method: 'get'
        }).done(function(content) {
          var $content, $newWrapper;
          $content = $(content);
          $wrapper = $this.find($this.data('wrapper'));
          $newWrapper = $wrapper.clone().html($content);
          $wrapper.stop().velocity({
            opacity: [0, 1],
            translateY: ['20px', '0px']
          }, {
            duration: speed
          });
          setTimeout(function() {
            console.log($newWrapper);
            $wrapper.replaceWith($newWrapper);
            ds.init($newWrapper);
            return $newWrapper.stop().velocity({
              opacity: [1, 0],
              translateY: ['0px', '20px']
            }, {
              duration: speed
            });
          }, speed);
          return $this.removeClass('is-loading');
        }).error(function() {
          $this.removeClass('is-loading');
          return console.log('error');
        });
      };

      /* Listen form
      ---------------------------------------
       */
      listenForm = function(e) {
        e.preventDefault();
        clearTimeout(timeout);
        return timeout = setTimeout(function() {
          return submitForm(e);
        }, wait);
      };

      /* Initialize
      ---------------------------------------
       */
      init = function() {
        $this.on('submit', submitForm);
        $this.find('select').on('change', listenForm);
        return $this.find('input, textarea').on('keyup change', listenForm);
      };
      return init();
    });
  };
})(jQuery);

(function($) {
  return $.fn.dsFullHeight = function(options) {
    return this.each(function() {

      /* Variables
      ---------------------------------------
       */
      var $parent, $this, init, resize;
      $this = $(this);
      $parent = $this.parent();

      /* Filter
      ---------------------------------------
       */
      resize = function(e) {
        $this.css('height', 'auto');
        return setTimeout(function() {
          return $this.css('height', $parent.innerHeight() + 'px');
        }, 100);
      };

      /* Initialize
      ---------------------------------------
       */
      init = function() {
        resize();
        return $window.resize(resize);
      };
      return init();
    });
  };
})(jQuery);

(function($) {
  return $.fn.dsGallery = function(options) {
    return this.each(function() {

      /* Variables
      ---------------------------------------
       */
      var $fullScreen, $items, $this, close, init, onItemClick, resize, speed;
      $this = $(this);
      $items = $this.find('.gallery-item');
      $fullScreen = [];
      speed = 500;

      /* Close
      ---------------------------------------
       */
      close = function() {
        return $fullScreen.velocity({
          opacity: [0, 1]
        }, {
          duration: speed,
          complete: function() {
            return $fullScreen.remove();
          }
        });
      };

      /* On item click
      ---------------------------------------
       */
      onItemClick = function(e) {
        var $item;
        $item = $(e.currentTarget);
        $fullScreen = $("<div class=\"gallery-fullscreen\">\n  <div class=\"gallery-fullscreen-inner\">\n    " + ($item.html()) + "\n  </div>\n</div>");
        $body.append($fullScreen);
        return resize(null, function() {
          $fullScreen.velocity({
            opacity: [1, 0]
          }, {
            duration: speed
          });
          return $fullScreen.on('click', close);
        });
      };

      /* Resize
      ---------------------------------------
       */
      resize = function(e, callback) {
        var $img, $inner, height, ratio;
        if (e == null) {
          e = null;
        }
        if (callback == null) {
          callback = null;
        }
        $items.css('height', 'auto');
        height = $items.eq(0).width();
        $items.height(height);
        if ($fullScreen.length > 0) {
          $inner = $fullScreen.find('.gallery-fullscreen-inner');
          $img = $fullScreen.find('img');
          ratio = $img.width() / $img.height();
          $img.css({
            width: 'auto',
            height: 'auto'
          });
          if ($img.width() > $inner.width()) {
            $img.css({
              width: $inner.width(),
              height: $inner.width() / ratio
            });
          }
          if ($img.height() > $inner.height()) {
            $img.css({
              width: $inner.height() * ratio,
              height: $inner.height()
            });
          }
          $img.css({
            marginLeft: Math.round($img.width() * -.5),
            marginTop: Math.round($img.height() * -.5)
          });
          if (callback != null) {
            return callback();
          }
        }
      };

      /* Initialize
      ---------------------------------------
       */
      init = function() {
        resize();
        $window.resize(resize);
        return $items.on('click', onItemClick);
      };
      return init();
    });
  };
})(jQuery);

(function($) {
  return $.fn.dsHeader = function(options) {
    return this.each(function() {

      /* Variables
      ---------------------------------------
       */
      var $copy, $this, init, resize;
      $this = $(this);
      $copy = {};

      /* Resize
      ---------------------------------------
       */
      resize = function() {};

      /* Initialize
      ---------------------------------------
       */
      init = function() {
        $copy = $this.clone(true, true).addClass('is-fixed');
        return $body.prepend($copy);
      };
      return init();
    });
  };
})(jQuery);

(function($) {
  return $.fn.dsHorizontalScroll = function(options) {
    return this.each(function() {

      /* Variables
      ---------------------------------------
       */
      var $items, $next, $prev, $scroller, $this, $wrapper, init, next, prev, resize, scroller;
      $this = $(this);
      options = {
        scrollByPages: 2,
        speed: 600
      };
      $.extend(options, $this.data());
      console.log(options);
      $wrapper = $this.find('.horizontal-scroll');
      if (typeof $wrapper.attr('id') === 'undefined') {
        $wrapper.attr('id', uniqid('scroll_'));
      }
      $scroller = $this.find('.horizontal-scroll-container');
      $items = $this.find('.horizontal-scroll-item');
      $prev = $this.find('.horizontal-scroll-left');
      $next = $this.find('.horizontal-scroll-right');
      scroller = {};

      /* Previous
      ---------------------------------------
       */
      prev = function() {
        var position;
        position = scroller.x + (scroller.wrapperWidth - $items.eq(0).width());
        if (position > $items.eq(0).width()) {
          position = 0;
        }
        return scroller.scrollTo(position, 0, options.speed);
      };

      /* Next
      ---------------------------------------
       */
      next = function() {
        var position;
        console.log(scroller);
        position = scroller.x - (scroller.wrapperWidth - $items.eq(0).width());
        if (position < scroller.maxScrollX + $items.eq(0).width()) {
          position = scroller.maxScrollX;
        }
        return scroller.scrollTo(position, 0, options.speed);
      };

      /* Resize
      ---------------------------------------
       */
      resize = function() {
        var $item, item, width, _i, _len;
        width = 2;
        for (_i = 0, _len = $items.length; _i < _len; _i++) {
          item = $items[_i];
          $item = $(item);
          width += $item.outerWidth(true);
        }
        $scroller.width(width);
        return setTimeout(function() {
          var height;
          height = $this.height();
          $prev.attr('style', '');
          $next.attr('style', '');
          $prev.height(height);
          $next.height(height);
          return scroller.refresh();
        }, 50);
      };

      /* Initialize
      ---------------------------------------
       */
      init = function() {
        setTimeout(function() {
          scroller = new IScroll('#' + $wrapper.attr('id'), {
            scrollX: true,
            scrollY: false,
            mouseWheel: false,
            scrollbars: false,
            click: true,
            eventPassthrough: true,
            preventDefault: false
          });
          $window.resize(resize);
          return setTimeout(resize, 1);
        }, 10);
        $prev.on('click', prev);
        return $next.on('click', next);
      };
      return init();
    });
  };
})(jQuery);

(function($) {
  return $.fn.dsInstitutions = function(options) {
    return this.each(function() {

      /* Variables
      ---------------------------------------
       */
      var $country, $sort, $institutions, $loadMore, $search, $searchBtn, $this,$loaded,scroll, collapse, expand, init, loadInstitutions, speed, toggle, zIndex;
      $this = $(this);
      ds.prependLoader($this);
      $country = $this.find('.panel-options-select-country select');
      $sort = $this.find('.ds-sort select');
      $search = $this.find('.panel-options-search input');
      $searchBtn = $this.find('.panel-options-search .btn');
      $institutions = $this.find('.institutions-wrapper .row');
      $loadMore = $this.find('.load-more');
      $loaded = false;
      speed = 250;
      zIndex = 10;

      /* Expand
      ---------------------------------------
       */
      expand = function($institution) {
        $institution.css('z-index', zIndex++);
        $institution.addClass('is-open');
        return $institution.find('.institution-toggle').stop().slideDown(speed, function() {
          return $institutions.isotope('layout');
        });
      };

      /* Collapse
      ---------------------------------------
       */
      collapse = function($institution) {
        $institution.removeClass('is-open');
        return $institution.find('.institution-toggle').stop().slideUp(speed, function() {
          return $institutions.isotope('layout');
        });
      };

      /* Toggle
      ---------------------------------------
       */
      toggle = function(e) {
        var $institution;
        $institution = $(e.currentTarget).parents('.institution');
        if ($institution.hasClass('is-open')) {
          return collapse($institution);
        } else {
          return expand($institution);
        }
      };

      /* Load institutions
      ---------------------------------------
       */
      loadInstitutions = function(e, replace) {
        if (replace == null) {
          replace = false;
        }
        $this.addClass('is-loading');
        $loaded = true;
        return $.ajax({
          url: 'institutions/all.html',
          data: {
            country: $country.val(),
            query: $search.val(),
            sort: $sort.val()
          },
          contentType: 'text/html',
          dataType: 'html',
          method: 'get'
        }).done(function(content) {
          $this.removeClass('is-loading');
          if(content){
            var $content;
            $content = $(content);
            $loaded = false;
            if (replace) {
              $institutions.isotope('remove', $institutions.children()).isotope('layout');
              $institutions.prepend($content).isotope('insert', $content);              
              return $content.find('.ds-card').dsCard();              
            } else {
              $institutions.append($content).isotope('appended', $content);
              return $content.find('.ds-card').dsCard();
            }

          }else {
            return false;
          }
        }).error(function() {
          $this.removeClass('is-loading');
          return console.log('error');
        });
      };

      /* infinite scroll 
      ---------------------------------------
      */
      scroll = function(e) {  
        console.log($loaded);       
         if($(window).scrollTop() >= $('.institutions-wrapper').offset().top + $('.institutions-wrapper').outerHeight() - window.innerHeight) {
            if($loaded == false)
                 return loadInstitutions(e);
          }     
      };

      /* Initialize
      ---------------------------------------
       */
      init = function() {
        setTimeout(function() {
          return $institutions.isotope({
            itemSelector: '.col-institution'
          });
        }, 50);
        // $loadMore.on('click', function(e) {
        //   return loadInstitutions(e);
        // });
        $country.on('change', function(e) {
          return loadInstitutions(e, true);
        });

         $sort.on('change', function(e) {
          return loadInstitutions(e, true);
        });
        // $institutions.on('click', '.institution-handle', toggle);
        $search.on('keyup', function(e) {
          if (e.keyCode === 13) {
            return loadInstitutions(e, true);
          }
        });

        $(window).scroll(scroll);
        return $searchBtn.on('click', function(e) {
          if ($search.val() !== '') {
            return loadInstitutions(e, true);
          }
        });
      };
      return init();
    });
  };
})(jQuery);

(function($) {
  return $.fn.dsMasonry = function(options) {
    return this.each(function() {

      /* Variables
      ---------------------------------------
       */
      var $this, init, resize;
      $this = $(this);

      /* Resize
      ---------------------------------------
       */
      resize = function() {
        return $this.masonry('layout');
      };

      /* Initialize
      ---------------------------------------
       */
      init = function() {
        $this.masonry({});
        return setTimeout(resize, 10);
      };
      init();
      return $window.resize(resize);
    });
  };
})(jQuery);

(function($) {
  return $.fn.dsMultiselect = function(options) {
    return this.each(function() {

      /* Variables
      ---------------------------------------
       */
      var $_option, $options, $optionsWrapper, $select, $this, $title, close, closeOptions, cls, disable, enable, init, open, openOptions, speed, timeout, toggle, toggleOptions, _i, _len, _option, _options;
      $this = $(this);
      $this.wrap('<div class="multiselect"></div>');
      $this = $this.parent();
      $select = $this.find('select');
      $this.prepend('<div class="multiselect-title">' + $select.data('title') + '</div>');
      $this.append('<div class="multiselect-options"></div>');
      $title = $this.find('.multiselect-title');
      $optionsWrapper = $this.find('.multiselect-options');
      _options = $select.find('option');
      for (_i = 0, _len = _options.length; _i < _len; _i++) {
        _option = _options[_i];
        $_option = $(_option);
        if ($_option.prop('selected')) {
          cls = '';
        } else {
          cls = 'is-disabled';
        }
        $optionsWrapper.append("<div class=\"multiselect-option " + cls + "\" data-value=\"" + ($_option.val()) + "\">" + ($_option.text()) + "</div>");
      }
      $options = $this.find('.multiselect-option');
      speed = 300;
      timeout = 0;

      /* Open options
      ---------------------------------------
       */
      openOptions = function(e) {
        var $option, option, _j, _len1, _results;
        $this.on('mouseleave', closeOptions);
        $this.addClass('is-open');
        _results = [];
        for (_j = 0, _len1 = $options.length; _j < _len1; _j++) {
          option = $options[_j];
          $option = $(option);
          if ($option.hasClass('is-disabled')) {
            _results.push(open($option));
          } else {
            _results.push(void 0);
          }
        }
        return _results;
      };

      /* Close options
      ---------------------------------------
       */
      closeOptions = function(e) {
        clearTimeout(timeout);
        return timeout = setTimeout(function() {
          var $option, option, _j, _len1, _results;
          $this.off('mouseleave', closeOptions);
          $this.removeClass('is-open');
          _results = [];
          for (_j = 0, _len1 = $options.length; _j < _len1; _j++) {
            option = $options[_j];
            $option = $(option);
            if ($option.hasClass('is-disabled')) {
              _results.push(close($option));
            } else {
              _results.push(void 0);
            }
          }
          return _results;
        }, speed);
      };

      /* Toggle options
      ---------------------------------------
       */
      toggleOptions = function(e) {
        if ($this.hasClass('is-open')) {
          return closeOptions();
        } else {
          return openOptions();
        }
      };

      /* Open option
      ---------------------------------------
       */
      open = function($option) {
        return $option.stop().slideDown(speed);
      };

      /* Close option
           ---------------------------------------
       */
      close = function($option) {
        return $option.stop().slideUp(speed);
      };

      /* Enable option
      ---------------------------------------
       */
      enable = function($option) {
        $option.removeClass('is-disabled');
        $this.find('option[value="' + $option.data('value') + '"]').prop('selected', true);
        return $select.change();
      };

      /* Disable option
      ---------------------------------------
       */
      disable = function($option) {
        $option.addClass('is-disabled');
        $this.find('option[value="' + $option.data('value') + '"]').prop('selected', false);
        $select.change();
        if (!$this.hasClass('is-open')) {
          return close($option);
        }
      };

      /* Toggle option
      ---------------------------------------
       */
      toggle = function(e) {
        var $option;
        $option = $(e.currentTarget);
        if ($option.hasClass('is-disabled')) {
          return enable($option);
        } else {
          return disable($option);
        }
      };

      /* Initialize
      ---------------------------------------
       */
      init = function() {
        $this.find('.is-disabled').hide();
        $this.on('mouseenter', function() {
          return clearTimeout(timeout);
        });
        $title.on('click', toggleOptions);
        return $options.on('click', toggle);
      };
      return init();
    });
  };
})(jQuery);

(function($) {
  return $.fn.dsNews = function(options) {
    return this.each(function() {

      /* Variables
      ---------------------------------------
       */
      var $filters, $loadMore, $news, $this, filter, getCurrentFilter, init, loadNews;
      $this = $(this);
      ds.prependLoader($this);
      $filters = $this.find('.filter');
      $news = $this.find('.news-wrapper > .row');
      $loadMore = $this.find('.load-more');

      /* Load news
      ---------------------------------------
       */
      loadNews = function(e) {
        var filter, url;
        $this.addClass('is-loading');
        url = 'news/';
        filter = getCurrentFilter();
        if (filter === '*') {
          url += 'all';
        } else {
          url += filter;
        }
        url += '.html';
        return $.ajax({
          url: url,
          contentType: 'text/html',
          dataType: 'html',
          method: 'get'
        }).done(function(content) {
          var $content;
          $this.removeClass('is-loading');
          $content = $(content);
          return $news.append($content).isotope('appended', $content);
        }).error(function() {
          $this.removeClass('is-loading');
          return console.log('error');
        });
      };

      /* Filter
      ---------------------------------------
       */
      getCurrentFilter = function() {
        var $filter;
        $filter = $filters.parent().find('.is-active');
        return $filter.data('filter');
      };

      /* Filter
      ---------------------------------------
       */
      filter = function(e) {
        var $filter;
        if (e == null) {
          e = null;
        }
        if (e != null) {
          $filter = $(e.currentTarget);
          $filter.addClass('is-active').siblings().removeClass('is-active');
          filter = $filter.data('filter');
        } else {
          filter = getCurrentFilter();
        }
        if (filter === '*') {
          $news.isotope({
            filter: '*'
          });
          return true;
        }
        return $news.isotope({
          filter: function() {
            var current;
            current = $(this).find('.news').data('case');
            return filter === current;
          }
        });
      };

      /* Initialize
      ---------------------------------------
       */
      init = function() {
        setTimeout(function() {
          return $news.isotope({
            itemSelector: '.col-news'
          });
        }, 50);
        $filters.on('click', filter);
        return $loadMore.on('click', loadNews);
      };
      return init();
    });
  };
})(jQuery);



// =====================dsTabs===============================//
(function($) {
  return $.fn.dsTabs = function(options) {
    return this.each(function() {

      /* Variables
      ---------------------------------------
       */
      var $link, $this, init, speed, toggle;
      $this = $(this);
      $link = $this.find('.ds-tab-link');
      speed = 600;

      /* Toggle
      ---------------------------------------
       */
      toggle = function($el) {
        var $el,$currentAttrValue;
        
        $currentAttrValue = $el.attr('href');
        $this.find($currentAttrValue).fadeIn(speed).siblings().hide();
        return $el.addClass('active').siblings().removeClass('active');

      };

      /* Initialize
      ---------------------------------------
       */
      init = function() {
        $link.each(function(i) {
          var $link;
          $link = $(this);

          if ($link.hasClass('active')) {
            toggle($link);
          }
        });
        return $link.on('click', function(e){
          $link = $(this);
          toggle($link);
          e.preventDefault();
        });
      };
      return init();
    });
  };
})(jQuery);



// =====================dsSlideFilter===============================//
(function($) {
  return $.fn.dsOpenFilter = function(options) {
    return this.each(function() {

      /* Variables
      ---------------------------------------
       */
      var $link, $this, $content, $checkbox, $title, init, open, close, toggle, speed;
      $this = $(this);
      $title = $this.find('.checkbox-title');
      $content = $this.find('.open-panel');
      $checkbox = $content.find('input[type="checkbox"]');
      speed = 600;
      /* open
      ---------------------------------------
       */
      open = function($el) {
        $title.addClass('is-open');        
        return $el.slideDown();

      };

      /* close
      ---------------------------------------
       */
      close = function($el) {
        $title.removeClass('is-open');
        return $el.slideUp();

      };

      /* toggle
      ---------------------------------------
       */
      toggle = function($el) {

        if($title.hasClass('is-open')){
         
          close($el);
        }else{
          
          open($el);
        }

      };

      /* Initialize
      ---------------------------------------
       */
      init = function() {        
        $checkbox.each(function(i) {  
           if($(this).is(':checked'))
             return open($content);
        });
        return $title.on('click', function(e){
          toggle($content);
          e.preventDefault();
        });
      };
      return init();
    });
  };
})(jQuery);


// =====================dsForm===============================//

(function($) {
  return $.fn.dsForm = function(options) {
    return this.each(function() {

      /* Variables
      ---------------------------------------
       */
      var $this, $wrapper, $loaded, $loadMore, $is_scroll, $isotop,  getFormData, init, speed, timeout, wait;
      $this = $(this);
      ds.prependLoader($this, 'cache-form');
      $wrapper = $this.find($this.data('wrapper'));
      $isotop = $wrapper.find('.row');
      $loaded = false;
      $is_scroll = $this.data('scroll');
      speed = 300;
      timeout = 0;
      wait = 1000;
      $loadMore = $wrapper.find('.load-more');


      /* Submit form
      ---------------------------------------
      */
      getFormData = function() {
        var data, key, part, serialized, values, _i, _len;
        serialized = $this.serializeArray();
        data = {};
        for (_i = 0, _len = serialized.length; _i < _len; _i++) {
          part = serialized[_i];
          if (data[part.name] == null) {
            data[part.name] = [];
          }
          data[part.name].push(part.value);
        }
        for (key in data) {
          values = data[key];
          if (values.length === 1) {
            data[key] = values[0];
          }
        }

        data['category'] = $this.find('.filter-category').find('a.active').data("value");

        return data;
      };


      /* change category
      ---------------------------------------
      */

      changeCategory = function(e,el) {
        e.preventDefault();
        $this.find('.filter-category').find('a.active').removeClass('active');
        el.addClass('active');
      };



       /* Load institutions
      ---------------------------------------
      */
      clearData = function(e) {
        e.preventDefault();
       
        $('input[type="number"]').val(0);
        $('input[type="text"]').val('');
        $('input[type="checkbox"]').prop( "checked", false );
        $('input[type="radio"]').prop( "checked", false );
        $('select option').prop('selected',false);
        $('.multiselect-option').addClass('is-disabled').hide();
        
        $this.find('.is-checked').removeClass('is-checked');
        $this.find('.is-on').removeClass('is-on');
        $('.filter-category').find('a').removeClass('active')
         $('.filter-category').find('a:first').addClass('active');

         $('.slider').slider("values", 0, 0);
        $('.slider').slider("values", 1, 0);
        $('.slider').find('.ui-slider-handle i').text('0');
        
      };

      /* Load institutions
      ---------------------------------------
       */
      submitForm = function(e, replace) {
        var data;
        
        if ($this.hasClass('is-loading')) {
          return false;
        }

        $this.addClass('is-loading');
        data = getFormData();
        $loaded = true;

        return $.ajax({
          url: $this.attr('action'),
          contentType: 'text/html',
          dataType: 'html',
          data : data,
          method: 'get'
        }).done(function(content) {
          $this.removeClass('is-loading');
          if(content){
            var $content;
            $content = $(content);
           $loaded = false;
            if (replace) {
              $isotop.isotope('remove', $isotop.children()).isotope('layout');
              return $isotop.prepend($content).isotope('insert', $content);                           
            } else {
              return $isotop.append($content).isotope('appended', $content);
            }

          }else {
            return false;
          }
        }).error(function() {
          $this.removeClass('is-loading');
          return console.log('error');
        });
      };


      /* infinite scroll 
      ---------------------------------------
      */
      scroll = function(e) {  
        
          if( $is_scroll == "no") return false;
         if($(window).scrollTop() >= $isotop.offset().top + $isotop.outerHeight() - window.innerHeight) {
            if($loaded == false && !$('body').hasClass('filter-opened') )
                 return submitForm(e);
          }     
      };


      /* closeFilter
      ---------------------------------------
      */

      closeFilter = function() {
        $('body').find('.ds-popup-filter').removeClass('open');
        $('body').removeClass('filter-opened');
        $('.sidebar-filter').removeClass('open');
        setTimeout(function() {
              $('html').removeClass('hide-scroll');
              $('body').find('.ds-popup-filter').fadeOut(function(){              
                $(this).remove();
              });
        }, 300);
      };


      /* Initialize
      ---------------------------------------
      */
      init = function() {

        setTimeout(function() {
          return $isotop.isotope({
            itemSelector: '.card-col'
          });
        }, 50);

       
        $loadMore.on('click', function(e) {
            submitForm(e);
            e.preventDefault();
        });

        $this.find('.filter-category').find('a').on('click',function(e){
          changeCategory(e,$(this));
          if(!$('body').hasClass('filter-opened'))
            submitForm(e,true);
        });


        $this.on('click','.submit', function(e) {
          
            submitForm(e,true);
            closeFilter();
             setTimeout(function() {
                $('html, body').animate({
                    scrollTop: $isotop.offset().top - 44
                }, 1000);
             },400);

            
            e.preventDefault();
        });

        $(window).resize(function() {
            var mq = window.matchMedia( "(max-width: 1630px)" );
            
            if (mq.matches == false) {
              $('html').removeClass('hide-scroll');
              $('body').removeClass('filter-opened');
              $('.sidebar-filter').removeClass('open');
              $('body').find('.ds-popup-filter').remove();
            }


        });

        $this.find('select').on('change', function(e) {
          if(!$('body').hasClass('filter-opened'))
            submitForm(e,true);
        });

        $this.find('.btn-clear').on('click',function(e){

          clearData(e);
          submitForm(e,true);
        });
         $(window).scroll(scroll);
        
        $this.find('input[type!="text"]').on('keyup change', function(e) {
            if(!$('body').hasClass('filter-opened')){
               setTimeout(function() {
                  submitForm(e,true);
               },20)
            }
              e.preventDefault();
        });

        return $this.find('input[type="text"], textarea').on('keyup change', function(e) {
          if (e.keyCode === 13) {
            if(!$('body').hasClass('filter-opened'))
              submitForm(e,true);
          }
          
        });


      };
      return init();

    });
  };
})(jQuery);

// =====================HOME===============================//
(function($) {
  return $.fn.dsHome = function(options) {
    return this.each(function() {

      /* Variables
      ---------------------------------------
       */
      var $loadMore, $cards, $this,init, loadCards;
      $this = $(this);
      ds.prependLoader($this);
      $cards = $this.find('.cards-wrapper > .row');
      $loadMore = $this.find('.load-more');

      /* Load cards
      ---------------------------------------
       */
      loadCards = function(e) {
        e.preventDefault();
        var filter, url;
        $this.addClass('is-loading');
        url = 'home/home.html';
        
        return $.ajax({
          url: url,
          contentType: 'text/html',
          dataType: 'html',
          method: 'get'
        }).done(function(content) {
          $this.removeClass('is-loading');
          if(content) {
          var $content;        
          $content = $(content);

           $cards.append($content).isotope('appended', $content)
            $content.find('.universities').dsCard();
            return $content.find('.like').dsToggleLike();
          }else {
            return false;
          }

        }).error(function() {
          $this.removeClass('is-loading');
          return console.log('error');
        });
      };

      /* Initialize
      ---------------------------------------
       */
      init = function() {
        setTimeout(function() {
          return $cards.isotope({
            itemSelector: '.card-col'
          });
        }, 50);
       
        return $loadMore.on('click', loadCards);
      };
      return init();
    });
  };
})(jQuery);


(function($) {
  return $.fn.dsToggleLike = function(options) {
    return this.each(function() {

      /* Variables
      ---------------------------------------
       */
      var $this, like, data, url, init, unlinke, request, toggle;
      $this = $(this);
      data = {
        data: 'data'
      };
      url =  $(this).data('href');

      /* like
      ---------------------------------------
       */
      like = function() {
        return request('add', function() {
          return $this.addClass('is-liked');
        });
      };

      /* unlinke
      ---------------------------------------
       */
      unlinke = function() {
        return request('remove', function() {
          return $this.removeClass('is-liked');
        });
      };

      /* Toggle
      ---------------------------------------
       */
      toggle = function(e) {
       
        if ($this.hasClass('is-liked')) {
          return unlinke();
        } else {
          return like();
        }
      };

      /* Request
      ---------------------------------------
       */
      request = function(action, callback) {
               
        return $.ajax({
          url: url,
          data: data
        }).done(function(response) {
          console.log(response);
          if (callback != null) {
            return callback();
          }
        }).error(function() {
          
          return console.log('error');
        });
      };

      /* Initialize
      ---------------------------------------
       */
      init = function() {       
        return $this.on('click', toggle);
      };
      return init();
    });
  };
})(jQuery);


// =====================related project===============================//
(function($) {
  return $.fn.dsRelatedProject = function(options) {
    return this.each(function() {

      /* Variables
      ---------------------------------------
       */
      var $cards, $this,init;
      $this = $(this);
      
      $cards = $this.find('.cards-wrapper > .row');
      

      /* Initialize
      ---------------------------------------
       */
      init = function() {
        setTimeout(function() {
          return $cards.isotope({
            itemSelector: '.card-col'
          });
        }, 50);
       
       
      };
      return init();
    });
  };
})(jQuery);

// =====================whatsNext===============================//
(function($) {
  return $.fn.dsWhatsNext = function(options) {
    return this.each(function() {

      /* Variables
      ---------------------------------------
       */
      var $loadMore, $cards, $this,init, loadCards,$loaded,scroll;
      $this = $(this);
      ds.prependLoader($this);
      $cards = $this.find('.cards-wrapper > .row');
      $loadMore = $this.find('.load-more');
      $loaded = false;
      /* Load cards
      ---------------------------------------
       */
      loadCards = function(e) {
        e.preventDefault();
        var filter, url;
        $this.addClass('is-loading');
        url = 'whats-next/all.html';
        $loaded = true;
        return $.ajax({
          url: url,
          contentType: 'text/html',
          dataType: 'html',
          method: 'get'
        }).done(function(content) {
          var $content;
          $this.removeClass('is-loading');          
          if(content) {
            $content = $(content);
            $cards.append($content).isotope('appended', $content);
            $loaded = false;           
            $content.find('.universities').dsCard();
            return $content.find('.like').dsToggleLike();
          }else {
            return false;
          }
         
        }).error(function() {
          $this.removeClass('is-loading');
          return console.log('error');
        });
      };


      /* infinite scroll 
      ---------------------------------------
      */
      scroll = function(e) {         
         if($(window).scrollTop() >= $('.cards-wrapper').offset().top + $('.cards-wrapper').outerHeight() - window.innerHeight) {
            if($loaded == false)
                loadCards(e);
          }     
      };

      /* Initialize
      ---------------------------------------
       */
      init = function() {
        setTimeout(function() {
          return $cards.isotope({
            itemSelector: '.card-col'
          });
        }, 50);
        
        $(window).scroll(scroll);
        return $loadMore.on('click', loadCards);
      };
      return init();
    });
  };
})(jQuery);

// =====================dsCard===============================//
(function($) {
  return $.fn.dsCard = function(options) {
    return this.each(function() {
      

      /* Variables
      ---------------------------------------
       */
        var $text, $this,init,$cardIsotop,$innerText;
        $this = $(this);
        $text = $this.find('.card-text');
        $innerText = $this.find('.inner-card-text');
        $cardIsotop = $this.parents('.row');//('.cards-wrapper > .row');

        showcChevron = function() {
            if($innerText.height() > 80) {
              $text.append('<div class="ds-show"><i class="fa fa-chevron-down"></i></div>');
            }else {
              $text.find('.ds-show').remove();
            }
        };

        expand = function($institution) {
          
          $institution.addClass('is-open');
          return $cardIsotop.isotope('layout');
        };

        /* Collapse
        ---------------------------------------
         */
        collapse = function($institution) {
          $institution.removeClass('is-open');
          return $cardIsotop.isotope('layout');
        };

        /* Toggle
        ---------------------------------------
         */
        toggle = function(e) {
         
          if ($text.hasClass('is-open')) {
            return collapse($text);
          } else {
            return expand($text);
          }
        };

        /* Initialize
        ---------------------------------------
         */
        init = function() {
          showcChevron();

           $text.on('click', toggle);
          return $(this).find('.ds-show').on('click', toggle);
        };
        init();
        return $window.resize(showcChevron);
    });
  };
})(jQuery);


(function($) {
  return $.fn.dsLimitText = function(options) {
    return this.each(function() {
        var $linHeight, $nbLine, $this, $height, wrapText, init, addChevron, expand, collapse, toggle;

        $this = $(this);
        $nbLine = 4;
        $linHeight = parseInt($this.css('line-height').replace('px', ''));
        $height = $nbLine * $linHeight;


        wrapText = function() {
          $this.height($height);
          $this.wrapInner( "<div class='inner-text'></div>" );
          addChevron();

        };

        addChevron = function() {
            if($this.find('.inner-text').outerHeight() > $height ) {
              $this.append('<div class="ds-show"><i class="fa fa-chevron-down"></i></div>');
            }else {
              $this.find('.ds-show').remove();
            }
        };

        expand = function($el) {  
          if($this.find('.inner-text').outerHeight() > $height ) {
              $el.css('height',$this.find('.inner-text').height());      
            return $el.addClass('is-open');
          }
          return false;
        };

        /* Collapse
        ---------------------------------------
         */
        collapse = function($el) {
          if($this.find('.inner-text').outerHeight() > $height ) {
            $el.css('height',$height);    
            return $el.removeClass('is-open');
          }else {
            return false;
          }
         
        };

        /* Toggle
        ---------------------------------------
         */
        toggle = function(e) {
         
          if ($this.hasClass('is-open')) {
            return collapse($this);
          } else {
            return expand($this);
          }
        };



        init = function() {
          wrapText();
          return $this.on('click', toggle);
          //return $this.find('.ds-show').on('click', toggle);
        };


        init();

    });
   }
})(jQuery);

(function($) {
  return $.fn.dsGetSoftware  = function(options) {
    return this.each(function() {

      /* Variables
      ---------------------------------------
       */
      var $filters, $sort, $cards, $loaded, $this, filter, getCurrentFilter, init, loadNews;
      $this = $(this);
      // ds.prependLoader($this);
      $filters = $this.find('.ds-filter');
      $sort = $this.find('.ds-sort');
      $cards = $this.find('.cards-wrapper > .row');
      //$loadMore = $this.find('.load-more');
      $loaded = false;

      /* Filter
      ---------------------------------------
       */
      getCurrentFilter = function() {
        var $filter;
        $filter = $filters.parent().find('.is-active');
        return $filter.data('filter');
      };

      /* Filter
      ---------------------------------------
       */
      filter = function(e) {
        var $filter;
        if (e == null) {
          e = null;
        }
        if (e != null) {
          $filter = $(e.currentTarget);
          $filter.addClass('is-active').siblings().removeClass('is-active');
          filter = $filter.data('filter');
        } else {
          filter = getCurrentFilter();
        }
        if (filter === '*') {
          $cards.isotope({
            filter: '*'
          });
          return true;
        }
        return $cards.isotope({
          filter: function() {
            var current;
            current = $(this).find('.ds-card').data('case');
            return filter === current;
          }
        });
      };

       getData = function() {
        var data,e;
        data = {}

        $sort.find("option").each(function() {
            var e = $( this ).attr('data-sort-by'),
            t = $( this ).attr('data-sort-type'),
            type = ( t && (t == 'int') ) ? 'parseInt' : ' ';
            data[e] =  '[data-'+e+'] ' + type;

        });
        return data;
      }


      /* Sort
      ---------------------------------------
       */

      sort = function(e) {
        // alert('llll');
        var sortBy = $(this).find('option:selected').attr('data-sort-by'),
            valOrder = $(this).find('option:selected').attr('data-sort-Order'),
            order = ( valOrder && (valOrder == 'asc') ) ? true : false;
         return $cards.isotope({                
                sortBy: sortBy,
                sortAscending : order
             })
      }

      /* Load cards
      ---------------------------------------
       */
      loadCards = function(e) {
        e.preventDefault();
        var filter, url;
        $this.addClass('is-loading');
        url = 'get-software/all.html';
        $loaded = true;
        return $.ajax({
          url: url,
          contentType: 'text/html',
          dataType: 'html',
          data: {
            data : getCurrentFilter(),
          },
          method: 'get'
        }).done(function(content) {
          var $content;
          $this.removeClass('is-loading');          
          if(content) {
            $content = $(content);
            $loaded = false;           
            return $cards.append($content).isotope('appended', $content);
            // return $content.find('.universities').dsCard();
          }else {
            return false;
          }
         
        }).error(function() {
          $this.removeClass('is-loading');
          return console.log('error');
        });
      };

       /* infinite scroll 
      ---------------------------------------
      */
      scroll = function(e) {         
         if($(window).scrollTop() >= $('.cards-wrapper').offset().top + $('.cards-wrapper').outerHeight() - window.innerHeight) {
            if($loaded == false)
                loadCards(e);
          }     
      };



      /* Initialize
      ---------------------------------------
       */
      init = function() {
       setTimeout(function() {
           $cards.isotope({
            itemSelector: '.card-col',
            getSortData: getData(),
          });
        }, 50);

        $(window).scroll(scroll);
        $filters.on('click', filter);
        $sort.on('change', sort);
        
      };
      return init();
    });
  };
})(jQuery);


(function($) {
  return $.fn.dsShowroom= function(options) {
    return this.each(function() {

       /* Variables
      ---------------------------------------
       */
      var $product, $showroom, $loadMore, $sort, $search, $searchBtn, $this,$loaded,scroll, collapse, expand, init, loadInstitutions, speed, toggle, zIndex;
      $this = $(this);
      ds.prependLoader($this);
      $product = $this.find('.panel-options-select-country select');
      $search = $this.find('.panel-options-search input');
     // $searchBtn = $this.find('.panel-options-search .btn');
      $showroom = $this.find('.showroom-wrapper .row');
      //$loadMore = $this.find('.load-more');
      $loaded = false;
      $sort = $this.find('.ds-sort');
      speed = 250;
      zIndex = 10;


      getData = function() {


        var data,e;
        data = {}

        $sort.find("option").each(function() {
            var e = $( this ).attr('data-sort-by'),
            t = $( this ).attr('data-sort-type'),
            type = ( t && (t == 'int') ) ? 'parseInt' : ' ';
            data[e] =  '[data-'+e+'] ' + type;

        });
        return data;

      }

      /* Sort
      ---------------------------------------
       */

      sort = function(e) {
        // alert('llll');
        var sortBy = $(this).find('option:selected').attr('data-sort-by'),
            valOrder = $(this).find('option:selected').attr('data-sort-Order'),
            order = ( valOrder && (valOrder == 'asc') ) ? true : false;
         return $showroom.isotope({                
                sortBy: sortBy,
                sortAscending : order
             })
      }

      /* Load Showroom
      ---------------------------------------
      */
      loadShowromm = function(e, replace) {
        if (replace == null) {
          replace = false;
        }
        $this.addClass('is-loading');
        $loaded = true;
        return $.ajax({
          url: 'showroom/all.html',
          data: {
            product: $product.val(),
            query: $search.val()
          },
          contentType: 'text/html',
          dataType: 'html',
          method: 'get'
        }).done(function(content) {
          $this.removeClass('is-loading');
          if(content){
            var $content;
            $content = $(content);
            $loaded = false;
            if (replace) {
              $showroom.isotope('remove', $showroom.children()).isotope('layout');
              $showroom.prepend($content).isotope('insert', $content);              
              return $content.find('.like').dsToggleLike();              
            } else {
              $showroom.append($content).isotope('appended', $content);
              return $content.find('.like').dsToggleLike();
            }

          }else {
            return false;
          }
        }).error(function() {
          $this.removeClass('is-loading');
          return console.log('error');
        });
      };


      /* infinite scroll 
      ---------------------------------------
      */
      scroll = function(e) {        
         if($(window).scrollTop() >= $('.showroom-wrapper').offset().top + $('.showroom-wrapper').outerHeight() - window.innerHeight) {
            if($loaded == false)
                 return loadShowromm(e);
          }     
      };


      /* Initialize
      ---------------------------------------
       */
      init = function() {
        setTimeout(function() {
          return $showroom.isotope({
            itemSelector: '.col-showroom',
            getSortData: getData(),
          });
        }, 50);        
        $product.on('change', function(e) {
          return loadShowromm(e, true);
        });
        
        $search.on('keyup', function(e) {
          if (e.keyCode === 13) {
            return loadShowromm(e, true);
          }
        });

        $(window).scroll(scroll);
        return  $sort.on('change', sort);
      };
      return init();
    });


    };
})(jQuery);






(function($) {
  return $.fn.dsPanelAccordion = function(options) {
    return this.each(function() {

      /* Variables
      ---------------------------------------
       */
      var $this, active, data, init, speed;
      $this = $(this);
      data = $this.data();
      speed = 300;
      if (data.opened === 'true' || data.opened === true || parseInt(data.opened) === 1) {
        active = 0;
      } else {
        active = false;
      }

      /* Initialize
      ---------------------------------------
       */
      init = function() {
        return $this.accordion({
          heightStyle: 'content',
          header: '.panel-accordion-header',
          collapsible: true,
          active: active,
          animate: speed
        });
      };
      return init();
    });
  };
})(jQuery);

(function($) {
  return $.fn.dsPanelContact = function(options) {
    return this.each(function() {

      /* Variables
      ---------------------------------------
       */
      var $content, $text, $this, $title, init, onMouseEnter, onMouseLeave, originalWidth, padding, resize;
      $this = $(this);
      $title = $this.find('.panel-contact-title');
      $content = $this.find('.panel-contact-content');
      $text = $this.find('.panel-contact-text');
      originalWidth = 0;
      padding = 0;

      /* On mouse enter
      ---------------------------------------
       */
      onMouseEnter = function() {
        $content.css('width', originalWidth + 'px');
        return $this.addClass('mouse-over');
      };

      /* On mouse leave
      ---------------------------------------
       */
      onMouseLeave = function() {
        $content.css('width', ($title.width() + padding * 2) + 'px');
        return $this.removeClass('mouse-over');
      };

      /* Resize
      ---------------------------------------
       */
      resize = function() {
        return setTimeout(function() {
          $content.attr('style', '');
          $text.attr('style', '');
          $content.addClass('no-transition');
          $this.removeClass('mouse-over');
          originalWidth = $content.outerWidth(true);
          $text.width($content.width());
          padding = parseInt($content.css('padding-left'));
          padding += 2;
          onMouseLeave();
          return setTimeout(function() {
            return $content.removeClass('no-transition');
          }, 10);
        }, 10);
      };

      /* Initialize
      ---------------------------------------
       */
      init = function() {
        resize();
        $this.on('mouseenter', onMouseEnter);
        return $this.on('mouseleave', onMouseLeave);
      };
      init();
      return $window.resize(resize);
    });
  };
})(jQuery);

(function($) {
  return $.fn.dsPanelFocus = function(options) {
    return this.each(function() {

      /* Variables
      ---------------------------------------
       */
      var $content, $image, $text, $this, init, onMouseEnter, onMouseLeave, resize, speed;
      $this = $(this);
      $image = $this.find('.panel-image');
      $content = $this.find('.panel-content');
      $text = $this.find('.panel-text');
      speed = 150;

      /* On mouse enter
      ---------------------------------------
       */
      onMouseEnter = function() {
        return $text.stop().slideDown(speed);
      };

      /* On mouse leave
      ---------------------------------------
       */
      onMouseLeave = function() {
        return $text.stop().slideUp(speed);
      };

      /* Resize
      ---------------------------------------
       */
      resize = function() {
        var height;
        height = $image.outerHeight(true) + $content.outerHeight(true);
        return $this.height(height);
      };

      /* Initialize
      ---------------------------------------
       */
      init = function() {
        resize();
        $this.on('mouseenter', onMouseEnter);
        return $this.on('mouseleave', onMouseLeave);
      };
      init();
      return $window.resize(resize);
    });
  };
})(jQuery);

(function($) {
  return $.fn.dsPanelTable = function(options) {
    return this.each(function() {

      /* Variables
      ---------------------------------------
       */
      var $header, $rows, $this, columns, init, resize;
      $this = $(this);
      $header = $this.find('.panel-table-header');
      $rows = $this.find('.panel-table-row');
      columns = $header.find('.panel-table-cell').length;
      console.log($header);
      console.log($rows);
      console.log(columns);

      /* Resize
      ---------------------------------------
       */
      resize = function(e) {
        var allWidth, cellWidth, fullWidth, i, width, _i, _len, _results;
        fullWidth = $header.outerWidth();
        allWidth = [];
        i = 0;
        while (i < columns) {
          width = $header.find('.panel-table-cell').eq(i).outerWidth();
          cellWidth = $rows.eq(0).find('.panel-table-cell').eq(i).outerWidth();
          if (width < cellWidth) {
            width = cellWidth;
          }
          allWidth.push(width);
          i++;
        }
        console.log(allWidth);
        _results = [];
        for (i = _i = 0, _len = allWidth.length; _i < _len; i = ++_i) {
          width = allWidth[i];
          _results.push($header.find('.panel-table-cell').eq(i).css('width', (width / fullWidth * 100) + '%'));
        }
        return _results;
      };

      /* Initialize
      ---------------------------------------
       */
      init = function() {};
      return init();
    });
  };
})(jQuery);

(function($) {
  return $.fn.dsPanelTabs = function(options) {
    return this.each(function() {

      /* Variables
      ---------------------------------------
       */
      var $switches, $tabs, $this, collapse, expand, init, speed, toggle;
      $this = $(this);
      $switches = $this.find('.panel-tab-switch');
      $tabs = $this.find('.panel-tab');
      speed = 300;

      /* Expand
      ---------------------------------------
       */
      expand = function($switch, s) {
        if (s == null) {
          s = speed;
        }
        $switch.addClass('is-current');
        $switch.parents('.panel-tabs').find('.panel-tab').eq($switch.index()).stop().slideDown(s);
        return collapse($switch.siblings());
      };

      /* Collapse
      ---------------------------------------
       */
      collapse = function($_switches, s) {
        if (s == null) {
          s = speed;
        }
        return $_switches.each(function(i) {
          var $switch;
          $switch = $(this);
          $switch.removeClass('is-current');
          return $switch.parents('.panel-tabs').find('.panel-tab').eq($switch.index()).stop().slideUp(s);
        });
      };

      /* Toggle
      ---------------------------------------
       */
      toggle = function(e) {
        var $switch;
        $switch = $(e.currentTarget);
        if ($switch.hasClass('is-current')) {
          return collapse($switch);
        } else {
          return expand($switch);
        }
      };

      /* Initialize
      ---------------------------------------
       */
      init = function() {
        $switches.each(function(i) {
          var $switch;
          $switch = $(this);
          if ($switch.hasClass('is-current')) {
            expand($switch, 0);
          }
          return console.log($switch);
        });
        return $switches.on('click', toggle);
      };
      return init();
    });
  };
})(jQuery);

(function($) {
  return $.fn.dsRadio = function(options) {
    return this.each(function() {

      /* Variables
      ---------------------------------------
       */
      var $label, $others, $radio, $this, check, classes, init, name, uncheckOthers, value;
      $this = $(this);
      $this.wrap('<div class=""></div>');
      classes = $this.attr('class');
      $this.attr('class', '');
      $this = $this.parent().attr('class', classes);
      $radio = $this.find('input[type="radio"]');
      name = $radio.attr('name');
      value = $radio.val();
      $label = $('label[for="' + name + '[' + value + ']"]');
      $others = ds.$layout.find('input[name="' + name + '"]');

      /* Active
      ---------------------------------------
       */
      check = function() {
        if ($this.hasClass('is-checked')) {
          return;
        }
        uncheckOthers();
        $this.addClass('is-checked');
        return $radio.prop('checked', true);
      };

      /* Uncheck
      ---------------------------------------
       */
      uncheckOthers = function() {
        $others.parent().removeClass('is-checked');
        return $others.prop('checked', false);
      };

      /* Initialize
      ---------------------------------------
       */
      init = function() {
        $label.on('click', check);
        return $this.on('click', check);
      };
      return init();
    });
  };
})(jQuery);

(function($) {
  return $.fn.dsRanking = function(options) {
    return this.each(function() {

      /* Variables
      ---------------------------------------
       */
      var $stars, $this, data, i, init, lastValue, move, position, reset, resize, setValue, showValue, width;
      $this = $(this);
      data = {
        steps: 10,
        value: 0
      };
      $.extend(data, $this.data());
      position = {};
      width = 0;
      lastValue = data.value;
      i = 0;
      while (i < data.steps) {
        if (i % 2 === 0) {
          $this.append('<span class="star"></span>');
        }
        i++;
      }
      $stars = $this.find('.star');

      /* Show value
      ---------------------------------------
       */
      showValue = function(value) {
        var $star, star, _i, _len;
        value *= .5;
        for (i = _i = 0, _len = $stars.length; _i < _len; i = ++_i) {
          star = $stars[i];
          $star = $(star);
          if (i < value) {
            if (i < value - .5) {
              $star.removeClass('star-half').addClass('star-full');
            } else {
              $star.removeClass('star-full').addClass('star-half');
            }
          } else {
            $star.removeClass('star-full star-half');
          }
        }
        return lastValue = value * 2;
      };

      /* Set value
      ---------------------------------------
       */
      setValue = function() {
        $this.data('value', lastValue);
        data.value = lastValue;
        return $.ajax({
          url: window.location.href,
          method: 'get'
        }).done(function(response) {
          return console.log('done');
        }).error(function() {
          return console.log('error');
        });
      };

      /* Reset
      ---------------------------------------
       */
      reset = function() {
        return showValue(data.value);
      };

      /* Resize
      ---------------------------------------
       */
      resize = function() {
        position = $this.offset();
        return width = $this.width();
      };

      /* Move
      ---------------------------------------
       */
      move = function(e) {
        var value;
        value = Math.round((e.pageX - position.left) / width * 10);
        return showValue(value);
      };

      /* Initialize
      ---------------------------------------
       */
      init = function() {
        resize();
        reset();
        $window.resize(resize);
        $this.on('mouseenter', move);
        $this.on('mousemove', move);
        $this.on('mouseleave', reset);
        return $this.on('click', setValue);
      };
      return init();
    });
  };
})(jQuery);

(function($) {
  return $.fn.dsReadMoreContent = function(options) {
    return this.each(function() {

      /* Variables
      ---------------------------------------
       */
      var $content, $more, $reduced, $this, $wrapper, collapse, content, data, expand, i, init, text, textArr, toggle, txt, _i, _len;
      $this = $(this);
      data = {
        moreText: 'More...',
        lessText: 'Less.',
        wordCount: 10,
        ellipsis: '...',
        speed: 300
      };
      $.extend(data, $this.data());
      content = $this.html();
      textArr = $this.text().split(' ');
      text = '';
      for (i = _i = 0, _len = textArr.length; _i < _len; i = ++_i) {
        txt = textArr[i];
        if (i <= data.wordCount) {
          text += txt + ' ';
        }
      }
      text = text.trim() + data.ellipsis;
      console.log(text);
      $content = $this.clone();
      $wrapper = $('<div class="read-more-wrapper"></div>');
      $wrapper.prepend($content);
      $reduced = $content.clone().text(text);
      $wrapper.prepend($reduced);
      $content.addClass('read-more-content-full');
      $reduced.addClass('read-more-content-reduced');
      $this.replaceWith($wrapper);
      $more = $('<div class="read-more-btn">' + data.moreText + '</div>');
      $wrapper.append($more);

      /* Expand
      ---------------------------------------
       */
      expand = function() {
        $wrapper.addClass('is-expanded');
        $more.text(data.lessText);
        $content.slideDown(data.speed);
        return $reduced.slideUp(data.speed);
      };

      /* Collapse
      ---------------------------------------
       */
      collapse = function() {
        $wrapper.removeClass('is-expanded');
        $more.text(data.moreText);
        $content.slideUp(data.speed);
        return $reduced.slideDown(data.speed);
      };

      /* Toggle
      ---------------------------------------
       */
      toggle = function(e) {
        if ($wrapper.hasClass('is-expanded')) {
          return collapse();
        } else {
          return expand();
        }
      };

      /* Initialize
      ---------------------------------------
       */
      init = function() {
        return $more.on('click', toggle);
      };
      return init();
    });
  };
})(jQuery);

(function($) {
  return $.fn.dsScrollToTarget = function(options) {
    return this.each(function() {
      var $target, $this, data, init, scrollToTarget;
      $this = $(this);
      data = {
        target: 'html'
      };
      $.extend(true, data, $this.data());
      if ($this.is('a')) {
        $target = $($this.attr('href'));
      } else {
        $target = $(data.target);
      }

      /* Scroll to target
      ---------------------------------------
       */
      scrollToTarget = function(e) {
        var position;
        e.preventDefault();
        position = $target.offset().top - 55;
        if (position < 0) {
          position = 0;
        }
        return $('html, body').stop().animate({
          scrollTop: position
        }, 500);
      };

      /* Initialize
      ---------------------------------------
       */
      init = function() {
        return $this.on('click', scrollToTarget);
      };
      return init();
    });
  };
})(jQuery);

(function($) {
  return $.fn.dsHiddenFields = function(options) {
    return this.each(function() {

      /* Variables
      ---------------------------------------
       */
      var $hiddenFilters, $this, $toggle, $toggleWrapper, hide, init, show, speed, toggle;
      $this = $(this);
      $hiddenFilters = $this.find('.hidden-fields-to-hide');
      $toggleWrapper = $this.find('.hidden-fields-toggle-toggle-wrapper');
      $toggle = $this.find('.hidden-fields-toggle');
      speed = 300;

      /* Expand
      ---------------------------------------
       */
      hide = function() {
        $this.removeClass('fields-visible');
        $hiddenFilters.stop().slideUp(speed);
        return $toggleWrapper.stop().slideDown(speed);
      };

      /* Collapse
      ---------------------------------------
       */
      show = function() {
        $this.addClass('fields-visible');
        $hiddenFilters.stop().slideDown(speed);
        return $toggleWrapper.stop().slideUp(speed);
      };

      /* Toggle
      ---------------------------------------
       */
      toggle = function(e) {
        e.preventDefault();
        if ($this.hasClass('fields-visible')) {
          return hide();
        } else {
          return show();
        }
      };

      /* Initialize
      ---------------------------------------
       */
      init = function() {
        return $toggle.on('click', toggle);
      };
      return init();
    });
  };
})(jQuery);

(function($) {
  return $.fn.dsSelect = function(options) {
    return this.each(function() {

      /* Variables
      ---------------------------------------
       */
      var $select, $text, $this, blur, classes, displayName, focus, init;
      $this = $(this);
      $this.wrap('<div class="select"></div>');
      classes = $this.attr('class');
      $this.attr('class', '');
      $this = $this.parent().attr('class', classes);
      $select = $this.find('select');
      $this.prepend('<span class="select-text"></span>');
      $text = $this.find('.select-text');

      /* Display name
      ---------------------------------------
       */
      displayName = function() {
        var text;
        text = $this.find(":selected").text();
        return $text.text(text);
      };

      /* Focus
      ---------------------------------------
       */
      focus = function() {
        return $this.addClass('is-focused');
      };

      /* Blur
      ---------------------------------------
       */
      blur = function() {
        return $this.removeClass('is-focused');
      };

      /* Initialize
      ---------------------------------------
       */
      init = function() {
        displayName();
        $select.on('change', displayName);
        $select.on('focus', focus);
        return $select.on('blur', blur);
      };
      return init();
    });
  };
})(jQuery);

(function($) {
  return $.fn.dsSlider = function(options) {
    return this.each(function() {
      var $inputs, $this, $value, init, setValues;
      $this = $(this);
      $this.wrap('<div></div>');
      $this = $this.parent();
      $this.addClass($this.children().eq(0).attr('class'));
      $this.data($this.children().eq(0).data());
      $this.children().eq(0).attr('class', '');
      $this.wrap('<div class="slider-wrapper"></div>');
      $value = $($this.data('value-selector'));
      $inputs = $this.find('input');
      setValues = function() {
        var $input, i, input, value, _i, _len;
        value = '';
        if ($this.data('prefix')) {
          value = $this.data('prefix');
        }
        var data = {};
        for (i = _i = 0, _len = $inputs.length; _i < _len; i = ++_i) {
          input = $inputs[i];
          $input = $(input);
          value += $input.val() + ' - ';
          data[i] = $input.val();
          $this.find('span.ui-slider-handle').eq(i).html("<i>"+$input.val() + $this.data('suffix') +"</i>");
        }
        
        value = value.substr(0, value.length - 3);
        if ($this.data('suffix')) {
          value = value + $this.data('suffix');
        }
        return $value.text(value);
      };

      /* Initialize
      ---------------------------------------
       */
      init = function() {
        options = {
          values: [$inputs.eq(0).val()],
          min: $this.data('min'),
          max: $this.data('max'),
          start: function(event,ui) {
            $(ui.handle).html("<i>"+ui.value+ $this.data('suffix') +"</i>");
          }
          ,
          slide: function(event, ui) {
            var $input, i, input, _i, _len, _results;
            _results = [];
            for (i = _i = 0, _len = $inputs.length; _i < _len; i = ++_i) {
              input = $inputs[i];
              $input = $(input);
              $input.trigger('keyup');
              $input.val(ui.values[i]);
              _results.push(setValues());
              // console.log(ui);
              $(ui.handle).html("<i>"+ui.value+ $this.data('suffix') +"</i>");
            }
            return _results;
          }
        };
        if ($inputs.length === 2) {
          options.range = true;
          options.values.push($inputs.eq(1).val());
        }
        $this.slider(options);
        return setValues();
      };
      return init();
    });
  };
})(jQuery);

(function($) {
  return $.fn.dsTestimonials = function(options) {
    return this.each(function() {

      /* Variables
      ---------------------------------------
       */
      var $nav, $scroller, $this, init, resize;
      $this = $(this);
      $scroller = $this.find('.testimonials-scroller');
      $nav = {};

      /* Resize
      ---------------------------------------
       */
      resize = function() {
        var width;
        if (($nav.length != null) && $nav.length > 0) {
          width = $('.container').eq(0).width();
          return $nav.css({
            width: width,
            marginLeft: width * -.5
          });
        }
      };

      /* Initialize
      ---------------------------------------
       */
      init = function() {
        resize();
        $scroller.owlCarousel({
          items: 1,
          center: true,
          loop: true,
          nav: true,
          autoHeight: true,
          navText: ['<i class="icon icon-nav-left"></i>', '<i class="icon icon-nav-right"></i>']
        });
        $nav = $this.find('.owl-nav');
        return resize();
      };
      init();
      return $(window).resize(resize);
    });
  };
})(jQuery);

(function($) {
  return $.fn.dsTimelineForms = function() {
    return this.each(function() {

      /* Variables
      ---------------------------------------
       */
      var $fileInputs, $picturesUploader, $picturesUploaderItemWrapper, $picturesUploaderItems, $picturesUploaderScroll, $switches, $this, data, init, onFileDisplay, onFileRemove, resize, scroller, setTab, switchTab;
      $this = $(this);
      data = {
        initialTab: '#comment'
      };
      $.extend(true, data, $this.data());
      $switches = $this.find('.timeline-form-tab-switcher a');
      scroller = {};
      $picturesUploaderItemWrapper = $this.find('.timeline-pictures-uploader-items');
      $picturesUploaderItems = $this.find('.timeline-pictures-uploader-item');
      $picturesUploader = $this.find('.timeline-pictures-uploader');
      $picturesUploaderScroll = $this.find('.timeline-pictures-uploader-scroll');
      if (typeof $picturesUploader.attr('id') === 'undefined') {
        $picturesUploader.attr('id', uniqid('scroll_'));
      }
      $fileInputs = $this.find('input:file');

      /* On file display
      ---------------------------------------
       */
      onFileDisplay = function(e) {
        var $item, $newInput, $newItem;
        $item = $(e.currentTarget).parents('.timeline-pictures-uploader-item');
        console.log('display');
        console.log($item);
        $newItem = $item.clone();
        $newInput = $newItem.find('input');
        $newInput.attr('class', $item.find('.input-file').attr('class'));
        $newInput.val('');
        $newItem.html($newInput.removeClass('has-preview'));
        $newInput.on('file.display', onFileDisplay);
        $newInput.on('file.remove', onFileRemove);
        ds.init($newItem);
        $picturesUploaderItemWrapper.append($newItem);
        $picturesUploaderItems = $this.find('.timeline-pictures-uploader-item');
        return resize(null, function() {
          return scroller.scrollTo(scroller.maxScrollX, 0, 0);
        });
      };

      /* On file remove
      ---------------------------------------
       */
      onFileRemove = function(e) {
        var $item;
        $item = $(e.currentTarget).parents('.timeline-pictures-uploader-item');
        if ($picturesUploaderItems.length > 1) {
          $item.remove();
          $picturesUploaderItems = $this.find('.timeline-pictures-uploader-item');
          return resize();
        }
      };

      /* Resize
      ---------------------------------------
       */
      resize = function(e, callback) {
        var width;
        if (callback == null) {
          callback = null;
        }
        width = $picturesUploaderItems.eq(0).outerWidth(true) * $picturesUploaderItems.length;
        $picturesUploaderScroll.width(width);
        if (width > $picturesUploader.width()) {
          $picturesUploader.addClass('has-scroll');
        } else {
          $picturesUploader.removeClass('has-scroll');
        }
        return setTimeout(function() {
          scroller.refresh();
          if (callback != null) {
            return callback();
          }
        }, 100);
      };

      /* Switch tab
      ---------------------------------------
       */
      switchTab = function(e) {
        var $switch, id;
        e.preventDefault();
        $switch = $(e.currentTarget);
        id = $switch.attr('href');
        return setTab(id);
      };

      /* Set tab
      ---------------------------------------
       */
      setTab = function(id) {
        var $switch, $tab;
        $tab = $this.find(id);
        $tab.addClass('is-active').siblings().removeClass('is-active');
        $switch = $this.find('a[href="' + id + '"]');
        console.log($tab);
        if ($switch.length > 0 && $switch.parent().hasClass('timeline-form-tab-switcher')) {
          return $switch.parent().addClass('is-active').siblings().removeClass('is-active');
        } else {
          return $switches.each(function() {
            return $(this).parent().removeClass('is-active');
          });
        }
      };

      /* Initialize
      ---------------------------------------
       */
      init = function() {
        $window.resize(resize);
        setTimeout(resize, 1);
        setTimeout(function() {
          return scroller = new IScroll('#' + $picturesUploader.attr('id'), {
            scrollX: true,
            scrollY: false,
            mouseWheel: true,
            scrollbars: true,
            eventPassthrough: true,
            preventDefault: false
          });
        }, 10);
        $switches.on('click', switchTab);
        setTab(data.initialTab);
        $fileInputs.on('file.display', onFileDisplay);
        return $fileInputs.on('file.remove', onFileRemove);
      };
      return init();
    });
  };
})(jQuery);

(function($) {
  return $.fn.dsTimeline = function() {
    return this.each(function() {

      /* Variables
      ---------------------------------------
       */
      var $container, $loadMore, $this, init, loadPosts;
      $this = $(this);
      ds.prependLoader($this);
      $loadMore = $this.find('.load-more');
      $container = $this.find('.panel-group-timeline');
      console.log($loadMore);

      /* Load news
      ---------------------------------------
       */
      loadPosts = function(e) {
        $this.addClass('is-loading');
        return $.ajax({
          url: 'timeline/all.html',
          contentType: 'text/html',
          dataType: 'html',
          method: 'get'
        }).done(function(content) {
          var $content, $items;
          $this.removeClass('is-loading');
          $content = $(content);
          ds.init($content);
          $items = $content.children();
          $container.append($items);
          return setTimeout(function() {
            return $window.resize();
          }, 10);
        }).error(function() {
          $this.removeClass('is-loading');
          return console.log('error');
        });
      };

      /* Initialize
      ---------------------------------------
       */
      init = function() {
        return $loadMore.on('click', loadPosts);
      };
      return init();
    });
  };
})(jQuery);

(function($) {
  return $.fn.dsToggleFavorite = function(options) {
    return this.each(function() {

      /* Variables
      ---------------------------------------
       */
      var $this, addToFavorite, data, init, removeFromFavorite, request, toggle;
      $this = $(this);
      data = {
        model: 'course'
      };
      data = $.extend(true, data, $this.data());

      /* Expand
      ---------------------------------------
       */
      addToFavorite = function() {
        return request('add', function() {
          return $this.addClass('is-favorite');
        });
      };

      /* Collapse
      ---------------------------------------
       */
      removeFromFavorite = function() {
        return request('remove', function() {
          return $this.removeClass('is-favorite');
        });
      };

      /* Toggle
      ---------------------------------------
       */
      toggle = function(e) {
        if ($this.hasClass('is-favorite')) {
          return removeFromFavorite();
        } else {
          return addToFavorite();
        }
      };

      /* Request
      ---------------------------------------
       */
      request = function(action, callback) {
        setTimeout(function() {
          if (callback != null) {
            return callback();
          }
        }, 10);
        return;
        return $.ajax({
          url: url,
          data: data
        }).done(function(response) {
          if (callback != null) {
            return callback();
          }
        }).error(function() {
          $this.removeClass('is-loading');
          return console.log('error');
        });
      };

      /* Initialize
      ---------------------------------------
       */
      init = function() {
        return $this.on('click', toggle);
      };
      return init();
    });
  };
})(jQuery);

(function($) {
  return $.fn.dsToggle = function(options) {
    return this.each(function() {
      var $input, $this, disable, enable, init, toggle;
      $this = $(this);
      $this.wrap('<div></div>');
      $this = $this.parent();
      $input = $this.find('input');
      $this.addClass($input.attr('class'));
      $input.attr('class', '');

      /* Toggle
      ---------------------------------------
       */
      toggle = function(e) {
        if ($this.hasClass('is-on')) {
          return disable();
        } else {
          return enable();
        }
      };

      /* Active
      ---------------------------------------
       */
      enable = function(trigger) {
        if (trigger == null) {
          trigger = true;
        }
        $this.addClass('is-on');
        $input.val(1);
        if (trigger) {
          $input.trigger('change');
          return $input.trigger('toggle.on');
        }
      };

      /* Desenable
      ---------------------------------------
       */
      disable = function(trigger) {
        if (trigger == null) {
          trigger = true;
        }
        $this.removeClass('is-on');
        $input.val(0);
        if (trigger) {
          $input.trigger('change');
          return $input.trigger('toggle.off');
        }
      };

      /* Initialize
      ---------------------------------------
       */
      init = function() {
        $this.append('<div class="handle"></div>');
        if (parseInt($input.val()) === 1) {
          enable(false);
        }
        return $this.on('click', toggle);
      };
      return init();
    });
  };
})(jQuery);

(function($) {
  return $.fn.dsTopicHeading = function(options) {
    return this.each(function() {

      /* Variables
      ---------------------------------------
       */
      var $background, $container, $gradient, $this, color, data, hex, rgba0, rgba1;
      $this = $(this);
      data = {
        color: '#025787'
      };
      $.extend(true, data, $this.data());
      $container = $this.find('> .container');
      $gradient = $('<div class="gradient"></div>');
      $background = $('<div class="background-color"></div>');
      $container.append($gradient);
      $container.append($background);
      color = tinycolor(data.color).toRgb();
      rgba0 = 'rgba(' + color.r + ',' + color.g + ',' + color.b + ',1)';
      rgba1 = 'rgba(' + color.r + ',' + color.g + ',' + color.b + ',0)';
      hex = data.color.replace(/#/, '');
      $background.css('background-color', data.color);
      return $gradient.attr('style', "background: -moz-linear-gradient(top, " + rgba0 + " 0%, " + rgba1 + " 100%);\nbackground: -webkit-gradient(linear, left top, left bottom, color-stop(0%," + rgba0 + "), color-stop(100%," + rgba1 + "));\nbackground: -webkit-linear-gradient(top,  " + rgba0 + " 0%," + rgba1 + " 100%);\nbackground: -o-linear-gradient(top,  " + rgba0 + " 0%," + rgba1 + " 100%);\nbackground: -ms-linear-gradient(top,  " + rgba0 + " 0%," + rgba1 + " 100%);\nbackground: linear-gradient(to bottom,  " + rgba0 + " 0%," + rgba1 + " 100%);\nfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#" + hex + "', endColorstr='#00" + hex + "',GradientType=0 );");
    });
  };
})(jQuery);

(function($) {
  return $.fn.dsTopicSlideshow = function(options) {
    return this.each(function() {

      /* Variables
      ---------------------------------------
       */
      var $items, $nav, $scroller, $this, init, resize;
      $this = $(this);
      $scroller = $this.find('.topic-scroller');
      $items = $scroller.find('.topic');
      $nav = {};

      /* Resize
      ---------------------------------------
       */
      resize = function() {
        var width;
        if (($nav.length != null) && $nav.length > 0) {
          width = $('.container').eq(0).width();
          return $nav.css({
            width: width,
            marginLeft: width * -.5
          });
        }
      };

      /* Initialize
      ---------------------------------------
       */
      init = function() {
        resize();
        $scroller.owlCarousel({
          items: 1,
          center: true,
          loop: true,
          nav: true,
          navText: ['<i class="icon icon-nav-left"></i>', '<i class="icon icon-nav-right"></i>']
        });
        $nav = $this.find('.owl-nav');
        return resize();
      };
      init();
      return $(window).resize(resize);
    });
  };
})(jQuery);

(function($) {
  return $.fn.dsTopicVideo = function(options) {
    return this.each(function() {

      /* Variables
      ---------------------------------------
       */
      var $img, $this, $video, init, resize, resizeTimeout, resizeWait;
      $this = $(this);
      $this.prepend('<img class="video-size" src="data:image/jpg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QMvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzAxNCA3OS4xNTY3OTcsIDIwMTQvMDgvMjAtMDk6NTM6MDIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE0IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowRjNBMzM1MTU2MzYxMUU1QjMxQkZEMDY0QzI3NDAwNiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowRjNBMzM1MjU2MzYxMUU1QjMxQkZEMDY0QzI3NDAwNiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjBGM0EzMzRGNTYzNjExRTVCMzFCRkQwNjRDMjc0MDA2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjBGM0EzMzUwNTYzNjExRTVCMzFCRkQwNjRDMjc0MDA2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4AJkFkb2JlAGTAAAAAAQMAFQQDBgoNAAAExAAABOUAAAUWAAAFN//bAIQAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQICAgICAgICAgICAwMDAwMDAwMDAwEBAQEBAQECAQECAgIBAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMD/8IAEQgACQAQAwERAAIRAQMRAf/EAG8AAQEAAAAAAAAAAAAAAAAAAAAJAQEAAAAAAAAAAAAAAAAAAAAAEAEAAAAAAAAAAAAAAAAAAAAgEQEAAAAAAAAAAAAAAAAAAAAgEgEAAAAAAAAAAAAAAAAAAAAgEwEAAAAAAAAAAAAAAAAAAAAg/9oADAMBAAIRAxEAAAG/gAP/2gAIAQEAAQUCH//aAAgBAgABBQIf/9oACAEDAAEFAh//2gAIAQICBj8CH//aAAgBAwIGPwIf/9oACAEBAQY/Ah//2gAIAQEDAT8hH//aAAgBAgMBPyEf/9oACAEDAwE/IR//2gAMAwEAAhEDEQAAEAAP/9oACAEBAwE/EB//2gAIAQIDAT8QH//aAAgBAwMBPxAf/9k="/>');
      $img = $this.find('img');
      $video = $this.find('.video');
      resizeTimeout = 0;
      resizeWait = 300;

      /* Resize
      ---------------------------------------
       */
      resize = function() {
        clearTimeout(resizeTimeout);
        return resizeTimeout = setTimeout(function() {
          return $video.css({
            height: $video.parent().height()
          });
        }, resizeWait);
      };

      /* Initialize
      ---------------------------------------
       */
      init = function() {
        return resize();
      };
      init();
      return $(window).resize(resize);
    });
  };
})(jQuery);

(function($) {
  return $.fn.dsVideo = function() {
    return this.each(function() {
      var $this, height, init, ratio, resize, width;
      $this = $(this);
      width = $this.attr('width');
      height = $this.attr('height');
      ratio = width / height;

      /* Resize
      ---------------------------------------
       */
      resize = function() {
        var realWidth;
        realWidth = $this.outerWidth();
        return $this.height(realWidth / ratio);
      };

      /* Initialize
      ---------------------------------------
       */
      init = function() {
        return resize();
      };
      init();
      return $window.resize(resize);
    });
  };
})(jQuery);

(function($) {
  return $.fn.dsWysiwyg = function(options) {
    return this.each(function() {

      /* Variables
      ---------------------------------------
       */
      var $btns, $editor, $this, btnClick, clearBtns, disableBtn, editorClick, enableBtn, init;
      $this = $(this);
      $this.addClass('wysiwyg-editor');
      $this.attr('id', uniqid('editor_'));
      $editor = [];
      $btns = [];

      /* Clear btns
      ---------------------------------------
       */
      clearBtns = function() {
        return $btns.find('button').removeClass('is-active');
      };

      /* Enable btn
      ---------------------------------------
       */
      enableBtn = function($btn) {
        return $btn.addClass('is-active');
      };

      /* Disable btn
      ---------------------------------------
       */
      disableBtn = function($btn) {
        return $btn.removeClass('is-active');
      };

      /* Btns click
      ---------------------------------------
       */
      btnClick = function(e) {
        var $btn;
        $btn = $(e.currentTarget).find('button');
        if ($btn.hasClass('is-active')) {
          return disableBtn($btn);
        } else {
          return enableBtn($btn);
        }
      };

      /* Editor click
      ---------------------------------------
       */
      editorClick = function(e) {
        var $target;
        $target = $(e.currentTarget);
        if ($target.is('b')) {
          $btns.find('.wysiwyg-bold-button').addClass('is-active');
        }
        if ($target.is('i')) {
          $btns.find('.wysiwyg-italic-button').addClass('is-active');
        }
        if ($target.is('u')) {
          $btns.find('.wysiwyg-underline-button').addClass('is-active');
        }
        if ($target.is('strike')) {
          $btns.find('.wysiwyg-strikethrough-button').addClass('is-active');
        }
        if ($target.is('ul')) {
          $btns.find('.wysiwyg-unorderedList-button').addClass('is-active');
        }
        if ($target.is('ol')) {
          return $btns.find('.wysiwyg-unorderedList-button').addClass('is-active');
        }
      };

      /* Initialize
      ---------------------------------------
       */
      init = function() {
        if ($this.length > 0) {
          $this.trumbowyg({
            prefix: 'wysiwyg-',
            fullscreenable: false,
            closable: false,
            btns: ['bold', 'italic', 'underline', 'strikethrough', 'unorderedList', 'orderedList']
          }).on('tbwblur', clearBtns);
          $editor = $this.parent().find('div.wysiwyg-editor');
          $btns = $this.parent().find('ul.wysiwyg-button-pane li');
          $editor.on('mousedown', clearBtns);
          $editor.on('mouseup', '*', editorClick);
          return $btns.on('click', btnClick);
        }
      };
      return init();
    });
  };
})(jQuery);


(function($) {
  return $.fn.dsDragMove = function(options) {
    return this.each(function() {

      /* Variables
      ---------------------------------------
      */

      var x,y,top,left,down,pointerEventToXY,$this;
      $this = $(this);



      pointerEventToXY = function(e) {
          var out = {x:0, y:0};
          if(e.type == 'touchstart' || e.type == 'touchmove' || e.type == 'touchend' || e.type == 'touchcancel'){
            var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
            out.x = touch.pageX;
            out.y = touch.pageY;
          } else if (e.type == 'mousedown' || e.type == 'mouseup' || e.type == 'mousemove' || e.type == 'mouseover'|| e.type=='mouseout' || e.type=='mouseenter' || e.type=='mouseleave') {
            out.x = e.pageX;
            out.y = e.pageY;
          }
          return out;
      };


      start = function(e) {

        // e.preventDefault();
        down=true;

        x= pointerEventToXY(e).x;
        y= pointerEventToXY(e).y;      

        top=$(this).scrollTop();
        left=$(this).scrollLeft();

      };


      move = function(e) {
          if(down){
              var newX=pointerEventToXY(e).x;
              var newY=pointerEventToXY(e).y;
                     
              $this.scrollTop(top-newY+y);    
              $this.scrollLeft(left-newX+x);    
          }
      };


      end = function(e) {
          down=false;
      };

      /* Initialize
      ---------------------------------------
       */
      init = function() {
        
        $this.on('mousedown touchstart',start);

        $("body").on('mousemove touchmove',move);

        return $("body").on('mouseup touchend',end);

      };

      return init();
    });
  };
})(jQuery);

/* Elements
---------------------------------------
 */
var $body, $document, $html, $window, defineElements, ds, init;

$window = {};

$document = {};

$body = {};

$html = {};

ds = {};


/* Define elements
---------------------------------------
 */

defineElements = function() {
  $window = $(window);
  $document = $(document);
  $body = $('body');
  return $html = $('html');
};


/* Init app
---------------------------------------
 */

init = function() {
  ds = new Interface();
  return ds.init();
};


/* Document ready
---------------------------------------
 */

$(document).ready(function() {
  defineElements();
  return init();
});



$(function() {

  var isSafari = navigator.vendor.indexOf("Apple")==0 && /\sSafari\//.test(navigator.userAgent);

  if(isSafari) $('body').addClass('is-safari');


  $(document).on('click','.ds-card .share, .ds-experience .share',function(e) {
    e.preventDefault();
    var parent = $(this).parent().parent().parent();
    parent.find('.card-share').addClass('is-open')
  });

   $(document).on('click','.header-share  .close',function(e) {
     e.preventDefault();
     var parent = $(this).parent().parent();
      parent.removeClass('is-open')
   });



   $('.ds-show-filter').on('click',function() {
      var $top, $left, $content;

      $top = $(this).offset().top - $(window).scrollTop();
      $left = $(this).offset().left;
      $content = $('.sidebar-filter').html();


      
      $('body').append('<div class="ds-popup-filter"></div>')
      $('body').find('.ds-popup-filter').css({top:$top,left:$left});
      setTimeout(function() {        
        $('body').find('.ds-popup-filter').addClass('open');
        // 
      }, 20);

      
      setTimeout(function() {
        $('body').addClass('filter-opened');
        $('html').addClass('hide-scroll');
        $('.sidebar-filter').addClass('open');
          
      }, 400);
   });

   $(document).on('click','.ds-close-filter, .filter-content .btn-close',function(e) {
      // 
      $('body').find('.ds-popup-filter').removeClass('open');
      $('body').removeClass('filter-opened');
      $('.sidebar-filter').removeClass('open');
      setTimeout(function() {
            $('html').removeClass('hide-scroll');
            $('body').find('.ds-popup-filter').fadeOut(function(){              
              $(this).remove();
            });
      }, 300);
      e.preventDefault();

   });

   $(window).scroll(function() {
      if(!$('.section-filter').length) return;
      if($(window).scrollTop() >= $('.section-filter').offset().top - 44) {
          $('.ds-show-filter').addClass('fixed');
      }else {
           $('.ds-show-filter').removeClass('fixed');
      }  

   });

   $('#search').keyup(function() {
       var dInput = this.value;
       if(dInput.length > 0) {
        $(this).next('.reset-search').fadeIn();
       } else {
        $(this).next('.reset-search').fadeOut();
       }  
  });

   $('#search').on('focusout',function() {
      this.value = '';
      $(this).next('.reset-search').hide();

    });

   $("[data-scrollto]").on( "click", function (e) {
       var scrollto = $(this).data('scrollto');
        $('html, body').animate({ scrollTop: $(scrollto).offset().top}, 1000);
        e.preventDefault();
    });


   $('.ds-share-btn > .plus').on('click',function() {
      var $el,height;
      $el = $(this).parent().find('.wrap-ds-share');
      height = $el.find('.button-wrap').length * 48;
      ;

      if($(this).hasClass('active')){
        $(this).removeClass('active');
        $(this).parent().find('.wrap-ds-share').css('height','240px');
      }else {
        $(this).addClass('active');
        $(this).parent().find('.wrap-ds-share').css('height',height);
        
      }
   });
   
});