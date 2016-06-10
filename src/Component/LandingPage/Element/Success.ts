/// <reference path="../../../../bower_components/polymer-ts/polymer-ts.d.ts"/>
/// <reference path="../../../Element/AbstractPolymerElement.ts" />

namespace Com.Threeds.Component.LandingPage.Element {

    import AbstractPolymerElement = Com.Threeds.Element.AbstractPolymerElement;

    @component('landingpage-success-element')
    @extend("div")
    export class Success extends AbstractPolymerElement {
        context:any;

        constructor(context:any, data:any) {
            super(data);
            this.context = context;

            if(typeof this.context.settings.form.callback.success == 'function'){
                this.context.settings.form.callback.success();
            }

            let tpl = `<div class="ds-ldp-global-step-2">
                            <div class="ds-ldp-global-container">
                                <div id="ldp" class="ds-lpd-info-form">
                                    <div class="ds-landingpage" is="landingpage-element">
                                        <h3 class="ds-title-ty">${data.title}</h3>
                                        <div class="ds-lpd-info-no-blur" style="background-image: url('${context.settings.backgroundImage}');"></div>
                                    </div>
                                </div>
                                <form class="ds-form ds-ldp-form-container ds-dl-info">
                                    <p>${data.content}</p>
                                    <a href="${context.settings.action.url}" class="ds-link ds-link-arrow-left">
                                        ${context.settings.action.label}<br />
                                        <span>${context.settings.action.content}</span>
                                    </a>
                                </form>
                            </div>

                            <div class="ds-ldp-form-contact">
                                <p>${context.settings.accelerate.content}</p>
                                <a href="${context.settings.accelerate.url}" class="ds-btn ds-btn-shout">${context.settings.accelerate.label}</a>
                            </div>
                        </div>`;

            context.elem.html(tpl);

        }

    }
}

Com.Threeds.Component.LandingPage.Element.Success.register();
