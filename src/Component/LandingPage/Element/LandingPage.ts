/// <reference path="../../../../bower_components/polymer-ts/polymer-ts.d.ts"/>
/// <reference path="../../../Element/AbstractPolymerElement.ts" />
/// <reference path="../../../Component/Tabs/Element/Tabs.ts" />
/// <reference path="../../../Component/Form/Element/Form.ts" />
/// <reference path="../../../Component/Form/Element/Step.ts" />
/// <reference path="../../../Component/LandingPage/Element/Success.ts" />
/// <reference path="../../../Component/LandingPage/Element/Error.ts" />

namespace Com.Threeds.Component.LandingPage.Element {

    import AbstractPolymerElement = Com.Threeds.Element.AbstractPolymerElement;
    import Tabs = Com.Threeds.Component.Tabs.Element.Tabs;
    import Form = Com.Threeds.Component.Form.Element.Form;
    import Step = Com.Threeds.Component.Form.Element.Step;
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
                    //self.context.elem.html('');
                    //self.context.elem.attr('class', '');
                    //self.context.elem.addClass('ds-ldp-global-step-2');
                    //self.context.elem.append(Success.create(self.context, self.context.settings.success));
                    //return;


                    // Reduit la largeur du form
                    context.context.elem.addClass('ds-form-sucess');

                    // Fade le formulaire de droite
                    context.context.elem.find('.ds-form-fieldset').animate({opacity : 0});

                    // Fade les tabs
                    context.context.elem.find('.ds-tabs').animate({

                        opacity : 0

                    }, 300, "linear", function() {
                        // supprime et charge la page Sucess
                        self.context.elem.html('');
                        self.context.elem.append(Success.create(self.context, self.context.settings.success));


                        // Affiche le titre
                        setTimeout(function() {


                            // Fixe la hauteur du conteneur
                            $(Polymer.dom(context.context.root).querySelector('.ds-lpd-info-form')).css({
                                height: Polymer.dom(context.context.root).querySelector('.ds-ldp-global-container').offsetHeight
                            });

                            // Affiche le formulaire masqué avec le z index
                            context.context.elem.find('.ds-form-fieldset').css({opacity : 1});

                            // Affiche le message thank you
                            context.context.elem.find('.ds-info-ty').animate({

                                opacity : 1

                            }, 300, "linear", function() {

                                    // Supprime l overflow hidden pour pourvoir afficher le block contact
                                    $(Polymer.dom(context.context.root).querySelector('.ds-ldp-global-container.ds-form-sucess')).css({overflow : 'visible'});

                                    // Reduit la hauteur du block de gauche
                                    context.context.elem.find('.ds-block-ty').animate({

                                        height : 331

                                    }, 300);

                                    // Reduit la hauteur conteneur
                                    $(Polymer.dom(context.context.root).querySelector('.ds-form-sucess')).animate({

                                        height : 520

                                    }, 300, 'linear', function(){

                                        // Affiche le block contact
                                        $(Polymer.dom(context.context.root).querySelector('.ds-ldp-form-contact')).animate({
                                            opacity : 1
                                        }, 300);

                                    });

                            });

                        }, 1);

                    });

                };
            }

            if(typeof this.context.settings.hook.warning == 'undefined') {
                this.context.settings.hook.warning = function(context:any, message:any) {
                    self.context.elem.html('');
                    self.context.elem.attr('class', '');
                    self.context.elem.addClass('ds-form-sucess');
                    self.context.elem.append(Error.create(self.context, self.context.settings.error));

                };
            }

            if(typeof this.context.settings.hook.transition == 'undefined') {
                this.context.settings.hook.transition = self.transition;
            }

            return Form.create(this.context, data);
        }

        transition(context:any,currentPosition:number):void{
            if(currentPosition == 0){
                if (typeof context.context.settings.hook.setCurrentPosition == 'function') {
                    context.settings.hook.setCurrentPosition(context, currentPosition);
                }

                context._currentPosition = currentPosition;

                context.clear();
                context.appendChild(Step.create(context, context._steps.slice(-1)[0]));
                return;
            }

            var blockRight = Polymer.dom(context.context.root).querySelector('.ds-ldp-form-container');
            var container = Polymer.dom(context.context.root).querySelector('.ds-ldp-global-container');

            $(blockRight).animate({
                opacity : 0
            }, 300, "linear", function() {
                context.clear();
                $(blockRight).animate({
                    zIndex : 1,
                    opacity : 1,
                    top : 0
                }, 1, "linear", function() {

                    let step:Step = Step.create(context, context._steps.slice(-1)[0]);
                    context.appendChild(step);

                    $(blockRight).animate({opacity : 1}, 1);


                    setTimeout(function() {
                        var BlocLeft = Polymer.dom(context.context.root).querySelector('.ds-lpd-info-form');
                        var heightBlocLeft = Polymer.dom(context.context.root).querySelector('.ds-lpd-info-form').offsetHeight;
                        var heightBlocRight = Polymer.dom(context.context.root).querySelector('.ds-ldp-form-container').offsetHeight;
                        var heightBlocRightForm = Polymer.dom(context.context.root).querySelector('.ds-form-fieldset').offsetHeight;


                        //Si la hauteur du form est superieur au block de gauche
                        if(heightBlocRightForm > heightBlocLeft){

                            // augmente la hauteur du conteneur
                            $(BlocLeft).animate({
                                height: heightBlocRightForm
                            }, 300, "linear", function() {

                                if (typeof context.context.settings.hook.setCurrentPosition == 'function') {
                                    context.settings.hook.setCurrentPosition(context, currentPosition);
                                }
                                context._currentPosition = currentPosition;
                                $(container).addClass('ds-anim-width-step-2');

                                $(container).css({
                                    height : heightBlocRightForm
                                });

                            });

                        }else{
                            if (typeof context.context.settings.hook.setCurrentPosition == 'function') {
                                context.settings.hook.setCurrentPosition(context, currentPosition);
                            }
                            context._currentPosition = currentPosition;
                            $(container).addClass('ds-anim-width-step-2');
                        }
                    }, 1);

                });
            });

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

