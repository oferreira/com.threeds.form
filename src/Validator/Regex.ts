/// <reference path="../../typings/jquery/jquery.d.ts" />
/// <reference path="../Validator/AbstractValidator.ts" />

namespace Com.Threeds.Validator {

    import AbstractValidator = Com.Threeds.Validator.AbstractValidator;

    export class Regex extends AbstractValidator {

        private settings:any = {
            regex: undefined,
            errors: {
                invalid: 'error.invalid'
            }
        };

        constructor(options:any) {
            super();
            this.settings = $.extend({}, this.settings, options);
        }

        public isValid(value:string):boolean|string {
            if(typeof this.settings.regex == 'undefined'){
                console.log('this.settings.regex is not defined !')
                return false;
            }

            if (this.settings.regex.test(value)) {
                return $.i18n().t(this.settings.settings.errors.invalid);
            }

            return true;
        }

    }
}