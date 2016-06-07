/// <reference path="../../../../bower_components/polymer-ts/polymer-ts.d.ts"/>
/// <reference path="../../../Element/AbstractPolymerElement.ts" />
/// <reference path="../../../Component/Tabs/Element/Tabs.ts" />
/// <reference path="../../../Component/Form/Element/Form.ts" />
/// <reference path="../../../Component/LandingPage/Element/Success.ts" />
/// <reference path="../../../Component/LandingPage/Element/Error.ts" />

namespace Com.Threeds.Component.LandingPage.Element {

    import AbstractPolymerElement = Com.Threeds.Element.AbstractPolymerElement;
    import Tabs = Com.Threeds.Component.Tabs.Element.Tabs;
    import Form = Com.Threeds.Component.Form.Element.Form;
    import Success = Com.Threeds.Component.LandingPage.Element.Success;
    import Error = Com.Threeds.Component.LandingPage.Element.Error;

    @component('landingpage-element')
    @extend("div")
    export class LandingPage extends AbstractPolymerElement {
        context:any;

        constructor(context:any, data:any) {
            super(data);
            if(typeof context =='undefined') return;

            this.context = context;

            let tabsContainer:HTMLDivElement = document.createElement('div');
            tabsContainer.classList.add('ds-lpd-info-form');

            let tabsContainer2:HTMLDivElement = document.createElement('div');
            tabsContainer2.classList.add('ds-landingpage');


            let blur:HTMLDivElement = document.createElement('div');

            blur.style.backgroundImage = `url('${this.context.settings.backgroundImage}')`;
            blur.classList.add('ds-lpd-info-blur');

            tabsContainer2.appendChild(this.tabs());
            tabsContainer2.appendChild(blur);
            tabsContainer.appendChild(tabsContainer2);

            this.appendChild(tabsContainer);
            this.appendChild(this.form(data));
        }

        clear():void {
            while (Polymer.dom(this).firstChild) Polymer.dom(this).removeChild(Polymer.dom(this).firstChild);
            this.innerHTML = '';
        }


        tabs():Tabs{
            let options:Object = {
                data: this.context.settings.steps
            };

            return Tabs.create(this, options);
        }

        form(data:any):Form{
            var self:any = this;
            if(typeof this.context.settings.hook.setCurrentPosition == 'undefined') {
                this.context.settings.hook.setCurrentPosition = function(context, index){
                    self.setCurrentPosition(index);
                };
            }

            if(typeof this.context.settings.hook.success == 'undefined') {
                this.context.settings.hook.success = function(context:any, data:any) {
                    self.context.elem.html('');
                    self.context.elem.attr('class', '');
                    self.context.elem.addClass('ds-ldp-global-step-3');
                    self.context.elem.append(Success.create(self.context, self.context.settings.success));
                };
            }

            if(typeof this.context.settings.hook.warning == 'undefined') {
                this.context.settings.hook.warning = function(context:any, message:any) {
                    self.context.elem.html('');
                    self.context.elem.attr('class', '');
                    self.context.elem.addClass('ds-ldp-global-step-3');
                    self.context.elem.append(Error.create(self.context, self.context.settings.error));
                };
            }

            return Form.create(this.context, data);
        }

        setCurrentPosition(index:number):void {
            this.context.elem.attr('class', '');
            this.context.elem.addClass('ds-ldp-global-container');
            this.context.elem.addClass(`ds-ldp-global-step-${index}`);
            document.querySelector('.ds-tabs').currentPosition = index;
        }
    }
}

Com.Threeds.Component.LandingPage.Element.LandingPage.register();

