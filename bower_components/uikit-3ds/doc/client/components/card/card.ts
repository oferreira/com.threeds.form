/// <reference path="../../../typings/angular2-meteor.d.ts" />
import {Component, View} from 'angular2/core';

@Component({
    selector: 'card-component'
})

@View({
    templateUrl: 'client/components/card/card.html',
})


export class CardComponent {
    constructor() {
    }
}
