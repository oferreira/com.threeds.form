/// <reference path="../../typings/jquery/jquery.d.ts" />
/// <reference path="../Validator/AbstractValidator.ts" />

interface JQueryStatic {
    i18n(options?:any): Com.Threeds.I18n.Translator;
}

namespace Com.Threeds.Validator {

    import AbstractValidator = Com.Threeds.Validator.AbstractValidator;

    export class Require extends AbstractValidator {

        static isValid(value:string):any {
            if (value == '' || value == undefined) {
                return $.i18n().t('error.field_require');
            }

            return true;
        }

    }
}