/// <reference path="../../../../bower_components/polymer-ts/polymer-ts.d.ts"/>
/// <reference path="../../../Element/AbstractPolymerElement.ts" />
/// <reference path="../../../Component/Tabs/Element/Tabs.ts" />
/// <reference path="../../../Component/Form/Element/Form.ts" />

namespace Com.Threeds.Component.LandingPage.Element {

    import AbstractPolymerElement = Com.Threeds.Element.AbstractPolymerElement;
    import Tabs = Com.Threeds.Component.Tabs.Element.Tabs;
    import Form = Com.Threeds.Component.Form.Element.Form;

    @component('landingpage-element')
    @extend("div")
    export class LandingPage extends AbstractPolymerElement {
        context:any;

        constructor(context:any, data:any) {
            super(data);
            this.context = context;
            this.classList.add('ds-landingpage');

            this.appendChild(this.tabs());
            this.appendChild(this.form(data));
        }


        tabs():Tabs{
            let options:Object = {
                data: this.context.settings.steps
            };

            return Tabs.create(this, options);
        }

        form(data:any):Form{
            if(typeof this.context.settings.hook.setCurrentPosition == 'undefined') {
                this.context.settings.hook.setCurrentPosition = this.setCurrentPosition;
            }

            if(typeof this.context.settings.hook.success == 'undefined') {
                this.context.settings.hook.success = this.success;
            }

            if(typeof this.context.settings.hook.warning == 'undefined') {
                this.context.settings.hook.warning = this.error;
            }

            return new Form.create(this.context, data);
        }


        success(context:any, data:any) {
           context.context.elem.html(`<h1>${context.settings.success.title}</h1>${context.context.settings.success.content}`);
        }

        error(context:any, message:string) {
           context.context.elem.html(`<h1>${context.context.settings.error.title}</h1>${context.context.settings.error.content}`);
        }

        setCurrentPosition(context:string, index:number):void {
            let items:any = document.querySelectorAll('ul.ds-tabs-header li');
            for (let i = 0; i < items.length; ++i) {
                if(i === index){
                    items[i].classList.add('active');
                } else {
                    items[i].classList.remove('active');
                }
            }


            let items:any = document.querySelectorAll('.ds-tabs-container .ds-tab');
            for (let i = 0; i < items.length; ++i) {
                if(i === index){
                    items[i].classList.add('active');
                } else {
                    items[i].classList.remove('active');
                }
            }
        }
    }
}

Com.Threeds.Component.LandingPage.Element.LandingPage.register();

