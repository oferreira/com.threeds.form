var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/// <reference path="../../../typings/angular2-meteor.d.ts" />
var core_1 = require('angular2/core');
var common_1 = require('angular2/common');
var TypographyComponent = (function () {
    function TypographyComponent() {
    }
    TypographyComponent = __decorate([
        core_1.Component({
            selector: 'typography-component'
        }),
        core_1.View({
            templateUrl: 'client/components/typography/typography.html',
            directives: [common_1.FORM_DIRECTIVES]
        })
    ], TypographyComponent);
    return TypographyComponent;
})();
exports.TypographyComponent = TypographyComponent;
//# sourceMappingURL=typography.js.map