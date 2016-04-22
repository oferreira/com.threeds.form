var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/// <reference path="../../../typings/angular2-meteor.d.ts" />
var core_1 = require('angular2/core');
var getting_started_1 = require('client/components/getting-started/getting-started');
var layout_1 = require('client/components/layout/layout');
var color_1 = require('client/components/color/color');
var typography_1 = require('client/components/typography/typography');
var button_1 = require('client/components/button/button');
var link_1 = require('client/components/link/link');
var form_1 = require('client/components/form/form');
var helper_1 = require('client/components/helper/helper');
var modal_1 = require('client/components/modal/modal');
var card_1 = require('client/components/card/card');
var DocumentationComponent = (function () {
    function DocumentationComponent() {
    }
    DocumentationComponent = __decorate([
        core_1.Component({
            selector: 'documentation-component'
        }),
        core_1.View({
            templateUrl: 'client/components/documentation/documentation.html',
            directives: [
                getting_started_1.GettingStartedComponent,
                layout_1.LayoutComponent,
                color_1.ColorComponent,
                typography_1.TypographyComponent,
                button_1.ButtonComponent,
                link_1.LinkComponent,
                form_1.FormComponent,
                helper_1.HelperComponent,
                modal_1.ModalComponent,
                card_1.CardComponent
            ]
        })
    ], DocumentationComponent);
    return DocumentationComponent;
})();
exports.DocumentationComponent = DocumentationComponent;
//# sourceMappingURL=documentation.js.map