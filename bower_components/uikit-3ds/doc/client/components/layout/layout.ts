/// <reference path="../../../typings/angular2-meteor.d.ts" />
import {Component, View} from 'angular2/core';

@Component({
    selector: 'layout-component'
})

@View({
    templateUrl: 'client/components/layout/layout.html',
})


export class LayoutComponent {
    constructor() {
    }
}
