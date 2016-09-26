/// <reference path="../../../../../bower_components/polymer-ts/polymer-ts.d.ts"/>
/// <reference path="../../../../Element/AbstractPolymerElement.ts" />

namespace Com.Threeds.Component.LandingPage.Element.Error{

    import AbstractPolymerElement = Com.Threeds.Element.AbstractPolymerElement;

    @component('landingpage-error-element')
    @extend("div")
    export class Error extends AbstractPolymerElement {
        context:any;

        constructor(context:any, data:any) {
            super(data);
            this.context = context;

            let tpl = `<div class="ds-ldp-global-container ds-ldp-global-step-error">
                            <div id="ldp" class="ds-lpd-info-form">
                                <div class="ds-landingpage">
                                    <div class="ds-tabs">
                                        <p class="ds-ldp-form-error">${data.content}</p>
                                    </div>
                                    <div class="ds-lpd-info-blur" style="background-image: url('${context.settings.backgroundImage}');"></div>
                                </div>
                            </div>
                        </div>`;

            context.elem.html(tpl);
        }

    }
}

Com.Threeds.Component.LandingPage.Element.Error.Error.register();

