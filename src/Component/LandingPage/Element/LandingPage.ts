/// <reference path="../../../../bower_components/polymer-ts/polymer-ts.d.ts"/>
/// <reference path="../../../Element/AbstractPolymerElement.ts" />
/// <reference path="../../../Component/Tabs/Element/Tabs.ts" />
/// <reference path="../../../Component/Form/Element/Form.ts" />
/// <reference path="../../../Component/Form/Element/Step.ts" />
/// <reference path="../../../Component/LandingPage/Element/Success/Success.ts" />
/// <reference path="../../../Component/LandingPage/Element/Error/Error.ts" />
/// <reference path="../../../Analytics/TagManager.ts" />

interface Element {
    currentPosition: number;
}

namespace Com.Threeds.Component.LandingPage.Element {

    import AbstractPolymerElement = Com.Threeds.Element.AbstractPolymerElement;
    import Tabs = Com.Threeds.Component.Tabs.Element.Tabs;
    import Form = Com.Threeds.Component.Form.Element.Form;
    import Step = Com.Threeds.Component.Form.Element.Step;
    import Success = Com.Threeds.Component.LandingPage.Element.Success.Success;
    import Error = Com.Threeds.Component.LandingPage.Element.Error.Error;
    import TagManager = Com.Threeds.Analytics.TagManager;

    @component('landingpage-element')
    @extend("div")
    export class LandingPage extends AbstractPolymerElement {
        context: any;

        constructor(context: any, data: any) {
            super(data);

            if (typeof context == 'undefined') return;

            this.context = context;

            let tabsContainer: HTMLDivElement = document.createElement('div');
            tabsContainer.classList.add('ds-lpd-info-form');

            let tabsContainer2: HTMLDivElement = document.createElement('div');
            tabsContainer2.classList.add('ds-landingpage');


            let blur: HTMLDivElement = document.createElement('div');

            blur.style.backgroundImage = `url('${this.context.settings.backgroundImage}')`;
            blur.classList.add('ds-lpd-info-blur');

            tabsContainer2.appendChild(this.tabs());
            tabsContainer2.appendChild(blur);
            tabsContainer.appendChild(tabsContainer2);


            this.appendChild(tabsContainer);
            this.appendChild(this.form(data));
        }

        clear(): void {
            while (Polymer.dom(this).firstChild) Polymer.dom(this).removeChild(Polymer.dom(this).firstChild);
            this.innerHTML = '';
        }


        tabs(): polymer.Base {
            let options: Object = {
                data: this.context.settings.steps
            };

            return Tabs.create(this.context, options);
        }

        form(data: any): polymer.Base {
            var self:any = this;

            //console.log('self', self.context);

            if (typeof this.context.settings.hook.setCurrentPosition == 'undefined') {
                this.context.settings.hook.setCurrentPosition = function (context: any, currentPosition: number) {
                    context.context.currentLandingpage().setCurrentPosition(currentPosition);
                };
            }

            if (typeof this.context.settings.hook.success == 'undefined') {
                this.context.settings.hook.success = function (context: any, data: any) {
                    try {
                        localStorage.setItem(context.context.settings.id, 'true');
                    }
                    catch (error) {
                        console.log('localStorage', error);
                    }

                    if (context.context.status.transition) {
                        return;
                    }
                    context.context.status.transition = true;

                    // Reduit la largeur du form
                    context.context.elem.addClass('ds-form-sucess-anim');

                    // Fade le formulaire de droite
                    context.context.elem.find('.ds-form-fieldset').animate({opacity: 0});

                    // Fade les tabs
                    context.context.elem.find('.ds-tabs').animate({

                        opacity: 0

                    }, 300, "linear", function () {
                        // supprime et charge la page Sucess

                        context.context.elem.html('');
                        context.context.elem.append(Success.create(context, context.settings.success));
                        context.context.status.transition = false;

                        // Affiche le titre
                        setTimeout(function () {


                            // Fixe la hauteur du conteneur
                            context.context.elem.find('.ds-lpd-info-form').css({
                                height: context.context.elem.height()
                            });


                            // Affiche le formulaire masqué avec le z index
                            context.context.elem.find('.ds-form-fieldset').css({opacity: 1});

                            // Affiche le message thank you
                            context.context.elem.find('.ds-info-ty').animate({

                                opacity: 1

                            }, 300, "linear", function () {

                                // Supprime l overflow hidden pour pourvoir afficher le block contact
                                context.context.elem.css({overflow: 'visible'});

                                // Reduit la hauteur du block de gauche
                                context.context.elem.find('.ds-block-ty').animate({

                                    height: 331

                                }, 300);

                                // Reduit la hauteur conteneur
                                context.context.elem.animate({

                                    height: 600

                                }, 300, 'linear', function () {

                                    // Affiche le block contact
                                    context.context.elem.find('.ds-ldp-form-contact').animate({
                                        opacity: 1
                                    }, 300);

                                });

                            });

                        }, 1);

                    });

                };
            }

            if (typeof this.context.settings.hook.warning == 'undefined') {
                this.context.settings.hook.warning = function (context: any, message: any) {
                    context.elem.html('');
                    context.elem.attr('class', '');
                    context.elem.addClass('ds-form-sucess-anim');
                    context.elem.append(Error.create(context, context.settings.error));

                };
            }

            if (typeof this.context.settings.hook.transition == 'undefined') {
                this.context.settings.hook.transition = this.transition;
            }

            this.context.settings = $.extend(true, this.context.settings, {
                translate: {
                    elements: {
                        submit: {
                            label: this.context.settings.action.label,
                            0: {
                                label: this.context.settings.nextLabel
                            }
                        }
                    }
                }
            });

            let form: any = Form.create(this.context, data);
            form.classList.add('ds-ldp-form-container');
            return form;
        }

        transition(context: any, currentPosition: number): void {
            try {
                if (localStorage.getItem(context.context.settings.id)) {
                    context.success(context, {})
                    context.context.elem.removeClass('ds-form-sucess-anim');
                    context.context.elem.addClass('ds-form-sucess');
                    return;
                }
            }
            catch (error) {
                console.log('localStorage', error);
            }

            if (context.context.status.transition) {
                return;
            }
            context.context.status.transition = true;

            if (currentPosition == 0 || window.innerWidth <= 1024) {
                if (typeof context.context.settings.hook.setCurrentPosition == 'function') {
                    context.settings.hook.setCurrentPosition(context, currentPosition);
                }

                context._currentPosition = currentPosition;

                context.clear();
                context.appendChild(Step.create(context, context._steps.slice(-1)[0]));
                context.context.status.transition = false;
                return;
            }


            var blockRight = context.context.elem.find('.ds-ldp-form-container');
            var container = context.context.elem.find('.ds-ldp-global-container');

            $(blockRight).animate({
                opacity: 0
            }, 300, "linear", function () {
                context.clear();
                $(blockRight).animate({
                    zIndex: 1,
                    opacity: 1,
                    top: 0
                }, 1, "linear", function () {

                    let step: polymer.Base = Step.create(context, context._steps.slice(-1)[0]);
                    context.appendChild(step);

                    $(blockRight).animate({opacity: 1}, 1);

                    setTimeout(function () {
                        var BlocLeft = context.context.elem.find('.ds-lpd-info-form');
                        var heightBlocLeft = context.context.elem.find('.ds-lpd-info-form').height();
                        var heightBlocRight = context.context.elem.find('.ds-ldp-form-container').height();
                        var heightBlocRightForm = context.context.elem.find('.ds-form-fieldset').outerHeight();

                        //Si la hauteur du form est superieur au block de gauche
                        if (heightBlocRightForm > heightBlocLeft) {

                            // augmente la hauteur du conteneur
                            $(BlocLeft).animate({
                                height: heightBlocRightForm
                            }, 300, "linear", function () {
                                context.context.elem.addClass('ds-anim-width-step-2')
                                    .css({
                                        height: heightBlocRightForm
                                    });

                                if (typeof context.context.settings.hook.setCurrentPosition == 'function') {
                                    context.settings.hook.setCurrentPosition(context, currentPosition);
                                }
                                context._currentPosition = currentPosition;
                                context.context.status.transition = false;
                            });

                        } else {
                            context.context.elem.addClass('ds-anim-width-step-2');

                            if (typeof context.context.settings.hook.setCurrentPosition == 'function') {
                                context.settings.hook.setCurrentPosition(context, currentPosition);
                            }
                            context._currentPosition = currentPosition;

                            context.context.status.transition = false;
                        }
                    }, 1);

                });
            });

        }

        setCurrentPosition(index: number): void {
            this.context.elem.addClass('ds-ldp-global-container');
            this.context.elem.addClass(`ds-ldp-global-step-${index}`);
            Polymer.dom(this).querySelector('.ds-tabs').currentPosition = index;

            if (index == 1) {
                TagManager.create('this', 'page', {
                    page_name: '{page_category}/{env}/{pathname}/Step2/Form',
                    page_category: 'Landing_Page'
                });
            }
        }
    }
}

Com.Threeds.Component.LandingPage.Element.LandingPage.register();

