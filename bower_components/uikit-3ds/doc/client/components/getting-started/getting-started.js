/// <reference path="../../../typings/angular2-meteor.d.ts" />
/// <reference path="../../../typings/jquery/jquery.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var GettingStartedComponent = (function () {
    function GettingStartedComponent() {
    }
    GettingStartedComponent.prototype.ngOnInit = function () {
        $(".title2").each(function () {
            console.log("h2.title2 = ".concat($(this).html()));
        });
    };
    GettingStartedComponent = __decorate([
        core_1.Component({
            selector: 'getting-started-component'
        }),
        core_1.View({
            templateUrl: 'client/components/getting-started/getting-started.html'
        })
    ], GettingStartedComponent);
    return GettingStartedComponent;
})();
exports.GettingStartedComponent = GettingStartedComponent;
//# sourceMappingURL=getting-started.js.map