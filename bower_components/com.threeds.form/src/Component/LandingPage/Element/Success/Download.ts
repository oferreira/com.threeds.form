/// <reference path="../../../../../bower_components/polymer-ts/polymer-ts.d.ts"/>
/// <reference path="../../../../Element/AbstractPolymerElement.ts" />
/// <reference path="../../../../Analytics/TagManager.ts" />

interface JQueryStatic{
    fileDownload(url:string):void;
}

namespace Com.Threeds.Component.LandingPage.Element.Success{

    import AbstractPolymerElement = Com.Threeds.Element.AbstractPolymerElement;
    import TagManager = Com.Threeds.Analytics.TagManager;

    @component('landingpage-success-download-element')
    @extend("div")
    export class Download extends AbstractPolymerElement {

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
                            <a href="${context.settings.action.url}" target="_blank" class="ds-link ds-link-download ds-link-arrow-left">
                                ${context.settings.action.label}<br />
                                <span>${context.settings.action.content}</span>
                            </a>

                        </form>


                    <div class="ds-ldp-form-contact">
                        <p>${context.settings.accelerate.content}</p>
                        <a href="${context.settings.accelerate.url}" target="_blank" class="ds-btn ds-btn-shout ds-force-to-download">${context.settings.accelerate.label}</a>
                    </div>`;


            this.innerHTML = tpl;

            this.querySelector('.ds-link-download').addEventListener('click', function (e) {
                e.preventDefault();

                TagManager.create('this', 'page', {
                    page_name: '{page_category}/{env}/{pathname}/Step3/Download/Click',
                    page_category: 'Landing_Page'
                });

                window.open(context.settings.action.url, '_blank');
            });

            $.fileDownload(context.settings.action.url);
        }

    }
}

Com.Threeds.Component.LandingPage.Element.Success.Download.register();

