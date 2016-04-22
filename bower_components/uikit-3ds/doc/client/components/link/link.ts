/// <reference path="../../../typings/angular2-meteor.d.ts" />
import {Component, View} from 'angular2/core';

@Component({
    selector: 'link-component'
})

@View({
    templateUrl: 'client/components/link/link.html',
})

export class LinkComponent {
    constructor() {
    }
}
