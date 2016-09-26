/// <reference path="../../typings/jquery/jquery.d.ts" />
/// <reference path="../Validator/AbstractValidator.ts" />

namespace Com.Threeds.Validator {

    import AbstractValidator = Com.Threeds.Validator.AbstractValidator;

    export class Email extends AbstractValidator {

        static isValid(value:string):boolean|string {
            if (!/^(.+@.+\..{2,4})$/.test(value)) {
                return $.i18n().t('error.email_invalid');
            }

            return true;
        }

    }
}