var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/// <reference path="../../../typings/angular2-meteor.d.ts" />
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var DocumentationNavigationComponent = (function () {
    function DocumentationNavigationComponent() {
    }
    DocumentationNavigationComponent = __decorate([
        core_1.Component({
            selector: 'documentation-navigation-component'
        }),
        core_1.View({
            templateUrl: 'client/components/documentation/navigation.html',
            directives: [
                router_1.ROUTER_DIRECTIVES
            ]
        })
    ], DocumentationNavigationComponent);
    return DocumentationNavigationComponent;
})();
exports.DocumentationNavigationComponent = DocumentationNavigationComponent;
//# sourceMappingURL=navigation.js.map