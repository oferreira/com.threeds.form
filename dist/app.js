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
                    'field_invalid': "The field \"{0}\" is invalid",
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
String.format = function () {
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
                    if (!/^(.+@.+\..{2,4})$/.test(value)) {
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
                            this.value = 'lorem@lorem.fr';
                            this.required = false;
                            this._validators = [];
                            this._errorMessage = '';
                            if (data.type != undefined && data.type != 'hidden') this.classList.add('form-control');
                            if (context.settings.display.placeholder) this.placeholder = data.label;
                            if (data.name != undefined) this.id = data.name, this.name = data.name;
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
                                message = eval(this._validators[i] + ".isValid(this.value)");
                                if (typeof message == 'string') {
                                    return this.displayError(message);
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
                    var Textarea = function (_super) {
                        __extends(Textarea, _super);
                        function Textarea(context, data) {
                            _super.call(this, data);
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
        })(Component = Theeds.Component || (Theeds.Component = {}));
    })(Theeds = Com.Theeds || (Com.Theeds = {}));
})(Com || (Com = {}));
Com.Theeds.Component.Form.Element.Textarea.register();
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
                        __decorate([property({ type: String, reflectToAttribute: true })], Checkbox.prototype, "id", void 0);
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
                    var Radio = function (_super) {
                        __extends(Radio, _super);
                        function Radio(context, data) {
                            _super.call(this, data);
                            this.type = 'radio';
                            this.checked = false;
                            this.required = false;
                            this._errorMessage = '';
                            if (data.name != undefined) this.id = data.name;
                            if (data.name != undefined) this.name = data.name;
                            if (data.required != undefined) this.required = data.required;
                            if (data.value != undefined) this.checked = data.value;
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
                        __decorate([property({ type: Boolean })], Radio.prototype, "checked", void 0);
                        __decorate([property({ type: String, reflectToAttribute: true })], Radio.prototype, "name", void 0);
                        __decorate([property({ type: Boolean, reflectToAttribute: true })], Radio.prototype, "required", void 0);
                        __decorate([listen('change')], Radio.prototype, "_onChange", null);
                        Radio = __decorate([component('radio-element'), extend("input")], Radio);
                        return Radio;
                    }(AbstractPolymerElement);
                    Element.Radio = Radio;
                })(Element = Form.Element || (Form.Element = {}));
            })(Form = Component.Form || (Component.Form = {}));
        })(Component = Theeds.Component || (Theeds.Component = {}));
    })(Theeds = Com.Theeds || (Com.Theeds = {}));
})(Com || (Com = {}));
Com.Theeds.Component.Form.Element.Radio.register();
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
                            this.required = false;
                            this.data = [];
                            this._errorMessage = '';
                            this.data = data;
                            _super.call(this, data);
                            this.classList.add('form-control');
                            if (this.data.name != undefined) this.id = this.data.name, this.name = this.data.name;
                            if (this.data.parentField != undefined) this.parentField = this.data.parentField;
                            this.update();
                        }
                        Select.prototype.clear = function () {
                            while (Polymer.dom(this).firstChild) Polymer.dom(this).removeChild(Polymer.dom(this).firstChild);
                            this.innerHTML = '';
                        };
                        Select.prototype.update = function () {
                            this.clear();
                            var parentField;
                            if (typeof this.data.parentField != 'undefined') {
                                parentField = document.querySelector("#" + this.data.parentField);
                            }
                            for (var k in this.data.options) {
                                if (this.data.value != undefined && this.data.options[k].value == this.data.value) this.data.options[k].selected = true;
                                if (typeof this.data.parentField != 'undefined') {
                                    if (typeof parentField != 'undefined' && this.data.options[k].parentValue == parentField.options[parentField.selectedIndex].value) this.appendChild(Element.Option.create(this.data.options[k]));
                                } else {
                                    this.appendChild(Element.Option.create(this.data.options[k]));
                                }
                            }
                            this.fire('field-hide', !this.options.length ? false : true);
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
                            this.fire('field-value-changed', this);
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
                    var FieldGroup = function (_super) {
                        __extends(FieldGroup, _super);
                        function FieldGroup(context, data) {
                            _super.call(this, data);
                            this.classList.add('form-group');
                            this.classList.add('row');
                            var label = document.createElement('label');
                            label.className = 'col-sm-2 form-control-label';
                            label.innerText = data.label;
                            this.appendChild(label);
                            var container = document.createElement('div');
                            container.classList.add('col-sm-10');
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
                    var Field = function (_super) {
                        __extends(Field, _super);
                        function Field(context, data) {
                            this.hydrateValidators(data);
                            _super.call(this, data);
                            this.data = data;
                            this.classList.add('form-group');
                            this.classList.add('row');
                            if (typeof data.required != 'undefined' && typeof data.required) {
                                this.classList.add('field-required');
                            }
                            this.classList.add("field-" + data.name);
                            this.append(context, data);
                        }
                        Field.prototype.label = function (context, data) {
                            if (!context.settings.display.label) return;
                            var label = document.createElement('label');
                            label.htmlFor = data.name;
                            if (data.type != 'checkbox' && data.type != 'radio') {
                                label.className = 'col-sm-2 form-control-label';
                            } else {
                                label.className = 'form-control-label';
                            }
                            label.appendChild(document.createTextNode(this.data.label));
                            label.appendChild(document.createTextNode(context.settings.styling.label.suffixe));
                            if (typeof data.required != 'undefined' && data.required && context.settings.styling.label.mandatory != '') {
                                var mandatory = document.createElement('span');
                                mandatory.setAttribute('class', 'mandatory');
                                mandatory.innerText = context.settings.styling.label.mandatory;
                                label.appendChild(mandatory);
                            }
                            return label;
                        };
                        Field.prototype.container = function (context, data) {
                            var type = data.type.toLowerCase();
                            var container = document.createElement('div');
                            container.classList.add(context.settings.display.label ? 'col-sm-10' : 'col-sm-12');
                            return container;
                        };
                        Field.prototype.append = function (context, data) {
                            var type = data.type.toLowerCase();
                            var container = this.container(context, data);
                            var label = this.label(context, data);
                            if (type != 'checkbox' && type != 'radio' && context.settings.display.label) {
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
                                    label.insertBefore(Element.Checkbox.create(context, data), label.firstChild);
                                    container.appendChild(label);
                                    container.classList.add('checkbox');
                                    this.appendChild(container);
                                    break;
                                case 'radio':
                                    label.insertBefore(Element.Radio.create(context, data), label.firstChild);
                                    container.appendChild(label);
                                    container.classList.add('radio');
                                    this.appendChild(container);
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
                        Field.prototype.handleHide = function (e, status) {
                            if (status) {
                                this.classList.remove('hide');
                            } else {
                                this.classList.add('hide');
                            }
                        };
                        __decorate([property({ type: String })], Field.prototype, "error", void 0);
                        __decorate([listen("error")], Field.prototype, "handleError", null);
                        __decorate([listen('field-hide')], Field.prototype, "handleHide", null);
                        Field = __decorate([component('field-element'), extend("div"), template("<template is=\"dom-if\" if=\"{{error}}\"><div class=\"alert alert-danger\">{{error}}</div></template>")], Field);
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
                    var SubmitElement = Com.Theeds.Component.Form.Element.Submit;
                    var Step = function (_super) {
                        __extends(Step, _super);
                        function Step(context, data) {
                            if (data.success == undefined && !data.success && data.result.config !== undefined) return;
                            _super.call(this, data);
                            this.appendChild(Element.Input.create(context, {
                                name: "op",
                                type: "hidden",
                                value: data.result.nextAction
                            }));
                            for (var k in data.result.config) {
                                if (data.result.config[k].type.toLowerCase() == 'hidden') {
                                    this.appendChild(Element.Input.create(context, data.result.config[k]));
                                } else if (data.result.config[k].type.toLowerCase() == 'fieldgroup') {
                                    this.appendChild(Element.FieldGroup.create(context, data.result.config[k]));
                                } else {
                                    this.appendChild(Element.Field.create(context, data.result.config[k]));
                                }
                            }
                            this.appendChild(SubmitElement.create({}));
                        }
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
                                            if (data.result.properties.openUrl) {}
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
                                        form.errors = data.errors.fields;
                                    }
                                };
                                FromBehavior.prototype._onCreate = function (e, elem) {
                                    var context = this;
                                    if (elem.data.name == 'company') {
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
                                                                value: objet.companyName,
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
                                            select: function (event, ui) {
                                                $(this).val(ui.item.value);
                                                context.append({
                                                    name: "duns",
                                                    type: "hidden",
                                                    value: ui.item.duns
                                                }).append({
                                                    name: "zipCode",
                                                    type: "hidden",
                                                    value: ui.item.postalCode
                                                }).append({
                                                    name: "city",
                                                    type: "hidden",
                                                    value: ui.item.city
                                                }).append({
                                                    name: "address1",
                                                    type: "hidden",
                                                    value: ui.item.address1
                                                }).append({
                                                    name: "address2",
                                                    type: "hidden",
                                                    value: ui.item.address2
                                                }).append({
                                                    name: "state",
                                                    type: "hidden",
                                                    value: ui.item.stateCode
                                                });
                                                return false;
                                            }
                                        });
                                    }
                                };
                                FromBehavior.prototype._onChange = function (e, elem) {
                                    for (var n = 0; n < Polymer.dom(this).node.length; n++) {
                                        if (typeof Polymer.dom(this).node[n].parentField != 'undefined' && elem.name == Polymer.dom(this).node[n].parentField) {
                                            for (var i = 0; i < Polymer.dom(this).node.length; i++) {
                                                if (typeof Polymer.dom(this).node[i].name != 'undefined' && Polymer.dom(this).node[i].name.toLowerCase() == Polymer.dom(this).node[n].name.toLowerCase()) {
                                                    Polymer.dom(this).node[i].update();
                                                }
                                            }
                                        }
                                    }
                                };
                                FromBehavior.prototype._onSubmit = function (e) {
                                    if (e) e.preventDefault();
                                    this.submit();
                                    return false;
                                };
                                FromBehavior.prototype.submit = function () {
                                    this.valid();
                                    if (!Object.keys(this.errors).length) this.post();
                                };
                                FromBehavior.prototype.post = function () {
                                    var data = Com.Theeds.Component.Form.Element.From.serialize(this);
                                    this.context.service('form').post(this, data);
                                };
                                FromBehavior.prototype.render = function (type, data) {
                                    if (type == 'form') this.dispatch(data);
                                };
                                __decorate([listen('field-create')], FromBehavior.prototype, "_onCreate", null);
                                __decorate([listen('field-value-changed')], FromBehavior.prototype, "_onChange", null);
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
                            this._currentPosition = 0;
                            this._steps = [];
                            this._errors = [];
                            this.context = context;
                            this.dispatch(data);
                        }
                        Object.defineProperty(From.prototype, "currentPosition", {
                            get: function () {
                                return this._currentPosition;
                            },
                            set: function (value) {
                                if (typeof this.context.settings.hook.setCurrentPosition == 'function') {
                                    this.context.settings.hook.setCurrentPosition(this, value);
                                }
                                this._currentPosition = value;
                            },
                            enumerable: true,
                            configurable: true
                        });
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
                        From.prototype.add = function (data) {
                            if (!Polymer.dom(this).node.length) {
                                this._steps.push(data);
                                this.currentPosition = 0;
                                return true;
                            }
                            var name;
                            for (var n = 0; n < Polymer.dom(this).node.length; n++) {
                                if (Polymer.dom(this).node[n].name == undefined) continue;
                                name = Polymer.dom(this).node[n].name;
                                for (var k in data.result.config) {
                                    if (data.result.config[k].name = name && data.result.config[k].type != 'hidden') {
                                        this._steps.push(data);
                                        this.currentPosition++;
                                        return true;
                                    }
                                }
                            }
                            return false;
                        };
                        From.prototype.update = function (data) {
                            this.add(data);
                            this.clear();
                            this.appendChild(StepElement.create(this.context, data));
                        };
                        From.prototype.goTo = function (id) {
                            if (typeof this._steps[id] != "undefined") {
                                this.clear();
                                this.appendChild(StepElement.create(this.context, this._steps[id]));
                                this.currentPosition = id;
                            }
                        };
                        From.prototype.prev = function () {
                            var id = this.currentPosition - 1;
                            this.goTo(id);
                        };
                        From.prototype.next = function () {
                            var id = this.currentPosition + 1;
                            this.goTo(id);
                        };
                        From.prototype.append = function (data) {
                            for (var i = 0; i < Polymer.dom(this).node.length; i++) {
                                if (typeof Polymer.dom(this).node[i].name != 'undefined' && Polymer.dom(this).node[i].name == data.name) {
                                    Polymer.dom(this).node[i].value = data.value;
                                    return this;
                                }
                            }
                            this.insertBefore(Element.Input.create(this, data), this.firstChild);
                            return this;
                        };
                        From.prototype.success = function (data) {
                            if (typeof this.context.settings.hook.success == 'function') {
                                this.context.settings.hook.success(this, data);
                            } else {
                                this.clear();
                                this.innerHTML = "<h1>" + data.title + "</h1>" + data.content;
                            }
                        };
                        From.prototype.warning = function (message) {
                            if (typeof this.context.settings.hook.warning == 'function') {
                                this.context.settings.hook.warning(this, message);
                            } else {
                                this.clear();
                                this.innerHTML = message;
                            }
                        };
                        From.prototype.redirect = function (url) {
                            if (typeof this.context.settings.hook.redirect == 'function') {
                                this.context.settings.hook.redirect(this, url);
                            } else {
                                window.location = url;
                            }
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
                        From = __decorate([component('form-element'), extend("form"), behavior(Com.Theeds.Component.Form.Element.Behavior.Neolane.FromBehavior)], From);
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
                var From = Com.Theeds.Component.Form.Element.From;
                var Plugin = function (_super) {
                    __extends(Plugin, _super);
                    function Plugin(elem, options) {
                        _super.call(this, elem, options);
                        this.settings = {
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
                            form: {
                                id: 'LDP6312',
                                adapter: 'Com.Theeds.Service.Adapter.Neolane',
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
                        this.service('form').form(this, {});
                    }
                    Plugin.prototype.render = function (type, data) {
                        if (typeof this.settings.hook.render == 'function') {
                            this.settings.hook.render(this, type, data);
                        } else {
                            this.elem.append(From.create(this, data));
                        }
                    };
                    return Plugin;
                }(AbstractPlugin);
                Form.Plugin = Plugin;
                $.fn.form = function (options) {
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
                            type: "GET", dataType: "jsonp", url: context.settings.form.url, data: { op: 'GetFormJson', lpid: context.settings.form.id },
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
                        data['lpid'] = context.settings.form.id;
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
                        Option.prototype.labelChanged = function (newValue, oldValue) {
                            this.innerText = newValue;
                            console.log(newValue);
                        };
                        Option.prototype.ready = function () {};
                        __decorate([property({ type: String, reflectToAttribute: true })], Option.prototype, "label", void 0);
                        __decorate([property({ type: String, reflectToAttribute: true })], Option.prototype, "value", void 0);
                        __decorate([property({ type: Boolean, reflectToAttribute: true })], Option.prototype, "selected", void 0);
                        __decorate([observe("label")], Option.prototype, "labelChanged", null);
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
