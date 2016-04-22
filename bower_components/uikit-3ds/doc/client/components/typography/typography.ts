/// <reference path="../../../typings/angular2-meteor.d.ts" />
import {Component, View} from 'angular2/core';
import {FORM_DIRECTIVES, FormBuilder, Control, ControlGroup, Validators} from 'angular2/common';

@Component({
    selector: 'typography-component'
})

@View({
    templateUrl: 'client/components/typography/typography.html',
    directives: [FORM_DIRECTIVES]
})

export class TypographyComponent {
    constructor() {
    }
}
