/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/angular2-meteor.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var angular2_meteor_1 = require('angular2-meteor');
var router_1 = require('angular2/router');
var navigation_1 = require('client/components/documentation/navigation');
var documentation_1 = require('client/components/documentation/documentation');
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
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        $("h2").each(function () {
            console.log('lorem 2');
            console.log($(this).html());
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app'
        }),
        core_1.View({
            templateUrl: 'client/app.html',
            directives: [
                router_1.ROUTER_DIRECTIVES,
                navigation_1.DocumentationNavigationComponent
            ]
        }),
        router_1.RouteConfig([
            { path: '/', as: 'Documentation', component: documentation_1.DocumentationComponent },
            { path: '/getting-started', as: 'Layout', component: getting_started_1.GettingStartedComponent },
            { path: '/layout', as: 'Layout', component: layout_1.LayoutComponent },
            { path: '/color', as: 'Color', component: color_1.ColorComponent },
            { path: '/typography', as: 'Typography', component: typography_1.TypographyComponent },
            { path: '/button', as: 'Button', component: button_1.ButtonComponent },
            { path: '/link', as: 'Link', component: link_1.LinkComponent },
            { path: '/form', as: 'Form', component: form_1.FormComponent },
            { path: '/helper', as: 'Helper', component: helper_1.HelperComponent },
            { path: '/modal', as: 'Modal', component: modal_1.ModalComponent },
            { path: '/card', as: 'Card', component: card_1.CardComponent },
        ])
    ], AppComponent);
    return AppComponent;
})();
angular2_meteor_1.bootstrap(AppComponent, [router_1.ROUTER_PROVIDERS, core_1.provide(router_1.APP_BASE_HREF, { useValue: '/' })]);
//# sourceMappingURL=app.js.map