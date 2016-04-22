/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/angular2-meteor.d.ts" />

import {Component, View, NgZone, provide, OnInit} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {bootstrap} from 'angular2-meteor';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig, APP_BASE_HREF} from 'angular2/router';

import {DocumentationNavigationComponent} from 'client/components/documentation/navigation';
import {DocumentationComponent} from 'client/components/documentation/documentation';
import {GettingStartedComponent} from 'client/components/getting-started/getting-started';
import {LayoutComponent} from 'client/components/layout/layout';
import {ColorComponent} from 'client/components/color/color';
import {TypographyComponent} from 'client/components/typography/typography';
import {ButtonComponent} from 'client/components/button/button';
import {LinkComponent} from 'client/components/link/link';
import {FormComponent} from 'client/components/form/form';
import {HelperComponent} from 'client/components/helper/helper';
import {ModalComponent} from 'client/components/modal/modal';
import {CardComponent} from 'client/components/card/card';

@Component({
    selector: 'app'
})

@View({
    templateUrl: 'client/app.html',
    directives: [
        ROUTER_DIRECTIVES,
        DocumentationNavigationComponent
    ]
})

@RouteConfig([
    {path: '/', as: 'Documentation', component: DocumentationComponent},
    {path: '/getting-started', as: 'Layout', component: GettingStartedComponent},
    {path: '/layout', as: 'Layout', component: LayoutComponent},
    {path: '/color', as: 'Color', component: ColorComponent},
    {path: '/typography', as: 'Typography', component: TypographyComponent},
    {path: '/button', as: 'Button', component: ButtonComponent},
    {path: '/link', as: 'Link', component: LinkComponent},
    {path: '/form', as: 'Form', component: FormComponent},
    {path: '/helper', as: 'Helper', component: HelperComponent},
    {path: '/modal', as: 'Modal', component: ModalComponent},
    {path: '/card', as: 'Card', component: CardComponent},
])

class AppComponent implements OnInit{
    ngOnInit() {
        $("h2").each(function() {
            console.log('lorem 2');
            console.log($(this).html());
        });
    }
}

bootstrap(AppComponent, [ROUTER_PROVIDERS, provide(APP_BASE_HREF, {useValue: '/'})]);
