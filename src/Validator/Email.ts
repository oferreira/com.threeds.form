/// <reference path="../../typings/jquery/jquery.d.ts" />

namespace Com.Theeds.Validator {

    import AbstractValidator = Com.Theeds.Validator.AbstractValidator;

    export class Email extends AbstractValidator {
        private _message:Object = {
            'invalid': 'This e-mail address is not valid !'
        };

        isValid(value:string):any {

        }

    }
}
