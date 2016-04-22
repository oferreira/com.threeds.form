/// <reference path="../../../typings/angular2-meteor.d.ts" />
import {Component, View} from 'angular2/core';

@Component({
    selector: 'form-component'
})

@View({
    templateUrl: 'client/components/form/form.html',
})


export class FormComponent {
    constructor() {
    }
}
