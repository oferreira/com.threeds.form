/// <reference path="../../../../../bower_components/polymer-ts/polymer-ts.d.ts"/>
/// <reference path="../../../../Element/AbstractPolymerElement.ts" />

namespace Com.Threeds.Component.LandingPage.Element.Success{

    import AbstractPolymerElement = Com.Threeds.Element.AbstractPolymerElement;

    @component('landingpage-success-download-element')
    @extend("div")
    export class Download extends AbstractPolymerElement {
        context:any;

        constructor(context:any, data:any) {
            super(data);

            let tpl = `<div id="ldp" class="ds-lpd-info-form ds-block-ty">

                            <div class="ds-landingpage" is="landingpage-element">
                                <h3 class="ds-title-ty">${data.title}</h3>
                                <div class="ds-lpd-info-blur" style="background-image: url('${context.settings.backgroundImage}');"></div>
                            </div>

                        </div>
                        <form class="ds-form ds-ldp-form-container ds-dl-info">

                            <p>${data.content}</p>
                            <a href="${context.settings.action.url}" class="ds-link ds-link-arrow-left">
                                ${context.settings.action.label}<br />
                                <span>${context.settings.action.content}</span>
                            </a>

                        </form>


                    <div class="ds-ldp-form-contact">
                        <p>${context.settings.accelerate.content}</p>
                        <a href="${context.settings.accelerate.url}" target="_blank" class="ds-btn ds-btn-shout ds-force-to-download">${context.settings.accelerate.label}</a>
                    </div>`;


            this.innerHTML = tpl;

            //$.fileDownload(context.settings.action.url);
        }

    }
}

Com.Threeds.Component.LandingPage.Element.Success.Download.register();

