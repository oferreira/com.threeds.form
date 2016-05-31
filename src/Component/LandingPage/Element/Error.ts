/// <reference path="../../../../bower_components/polymer-ts/polymer-ts.d.ts"/>
/// <reference path="../../../Element/AbstractPolymerElement.ts" />

namespace Com.Threeds.Component.LandingPage.Element{

    import AbstractPolymerElement = Com.Threeds.Element.AbstractPolymerElement;

    @component('landingpage-error-element')
    @extend("div")
    export class Error extends AbstractPolymerElement {
        context:any;

        constructor(context:any, data:any) {
            super(data);
            this.context = context;

            let tpl = `<div class="ds-ldp-global-step-3">
                            <div class="ds-ldp-global-container">
                                <div id="ldp" class="ds-lpd-info-form">
                                    <div class="ds-landingpage" is="landingpage-element">
                                        <h3 class="ds-title-ty">${data.title}</h3>
                                        <div class="ds-lpd-info-no-blur" style="background-image: url('${context.settings.backgroundImage}');"></div>
                                    </div>
                                </div>
                            </div>
                        </div>`;

            context.elem.html(tpl);
        }

    }
}

Com.Threeds.Component.LandingPage.Element.Error.register();

