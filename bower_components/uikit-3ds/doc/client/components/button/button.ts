/// <reference path="../../../typings/angular2-meteor.d.ts" />
import {Component, View} from 'angular2/core';

@Component({
    selector: 'button-component'
})

@View({
    templateUrl: 'client/components/button/button.html',
})


export class ButtonComponent {
    constructor() {
    }
}
