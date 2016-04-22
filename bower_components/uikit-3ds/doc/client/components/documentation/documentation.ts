/// <reference path="../../../typings/angular2-meteor.d.ts" />
import {Component, View} from 'angular2/core';

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
    selector: 'documentation-component'
})

@View({
    templateUrl: 'client/components/documentation/documentation.html',
    directives: [
        GettingStartedComponent,
        LayoutComponent,
        ColorComponent,
        TypographyComponent,
        ButtonComponent,
        LinkComponent,
        FormComponent,
        HelperComponent,
        ModalComponent,
        CardComponent
    ]
})


export class DocumentationComponent {
    constructor() {
    }
}
