/// <reference path="../../../../../bower_components/polymer-ts/polymer-ts.d.ts"/>
/// <reference path="../../../../Element/AbstractPolymerElement.ts" />
/// <reference path="../../../../../typings/jwplayer/jwplayer.d.ts" />

namespace Com.Threeds.Component.LandingPage.Element.Success{

    import AbstractPolymerElement = Com.Threeds.Element.AbstractPolymerElement;

    @component('landingpage-success-contact-element')
    @extend("div")
    export class Contact extends AbstractPolymerElement {
        context:any;

        constructor(context:any, data:any) {
            super(data);

            let tpl = `<div id="ldp" class="ds-lpd-info-form ds-block-ty">

                            <div class="ds-landingpage" is="landingpage-element">
                                <h3 class="ds-title-ty ds-info-ty">${data.title}</h3>
                                <div class="ds-lpd-info-blur" style="background-image: url('${context.settings.backgroundImage}');"></div>
                            </div>

                        </div>
                        <form class="ds-form ds-ldp-form-container ds-dl-info">
                            <p>${data.content}</p>
                        </form>


                    <div class="ds-ldp-form-contact">
                        <p>${context.settings.accelerate.content}</p>
                        <a href="${context.settings.accelerate.url}" target="_blank" class="ds-btn ds-btn-shout ds-force-to-download">${context.settings.accelerate.label}</a>
                    </div>`;


            this.innerHTML = tpl;
        }


    }
}

Com.Threeds.Component.LandingPage.Element.Success.Contact.register();