/// <reference path="../../../typings/angular2-meteor.d.ts" />
import {Component, View} from 'angular2/core';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig, APP_BASE_HREF} from 'angular2/router'

@Component({
    selector: 'documentation-navigation-component'
})

@View({
    templateUrl: 'client/components/documentation/navigation.html',
    directives: [
        ROUTER_DIRECTIVES
    ]
})


export class DocumentationNavigationComponent {
    constructor() {
    }
}
