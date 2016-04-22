/// <reference path="../../../typings/angular2-meteor.d.ts" />
import {Component, View} from 'angular2/core';

@Component({
    selector: 'modal-component'
})

@View({
    templateUrl: 'client/components/modal/modal.html',
})


export class ModalComponent {
    constructor() {
    }
}
