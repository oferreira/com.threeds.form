/// <reference path="../../../typings/angular2-meteor.d.ts" />
import {Component, View} from 'angular2/core';

@Component({
    selector: 'helper-component'
})

@View({
    templateUrl: 'client/components/helper/helper.html',
})


export class HelperComponent {
    constructor() {
    }
}
