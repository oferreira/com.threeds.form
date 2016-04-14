/// <reference path="../../typings/jquery/jquery.d.ts" />
/// <reference path="../Validator/AbstractValidator.ts" />

namespace Com.Theeds.Validator {

    import AbstractValidator = Com.Theeds.Validator.AbstractValidator;

    export class Require extends AbstractValidator {

        static isValid(value:string):boolean|string {
            if (value == '' || value == undefined) {
                return $.i18n().t('error.field_require');
            }

            return true;
        }

    }
}