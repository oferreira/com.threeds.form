/// <reference path="../../typings/jquery/jquery.d.ts" />
/// <reference path="../Validator/AbstractValidator.ts" />

interface JQueryStatic {
    i18n(options?:any): Com.Threeds.I18n.Translator;
}

namespace Com.Threeds.Validator {

    import AbstractValidator = Com.Threeds.Validator.AbstractValidator;

    export class Regex extends AbstractValidator {

        private settings:any = {
            regex: undefined,
            errors: {
                invalid: 'error.field_invalid'
            }
        };

        constructor(options:any) {
            super();
            this.settings = $.extend(true, this.settings, options);
        }

        public isValid(value:string):any {
            if(typeof this.settings.regex == 'undefined'){
                console.log('this.settings.regex is not defined !')
                return false;
            }

            if (!eval(this.settings.regex).test(value)) {
                return $.i18n().t(this.settings.errors.invalid);
            }

            return true;
        }

    }
}