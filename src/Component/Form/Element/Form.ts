/// <reference path="../../../../bower_components/polymer-ts/polymer-ts.d.ts"/>
/// <reference path="../../../Component/Form/Element/Step.ts" />
/// <reference path="../../../Element/AbstractPolymerElement.ts" />
/// <reference path="../../../Component/Form/Element/Behavior/Neolane/FormBehavior.ts" />

namespace Com.Threeds.Component.Form.Element {

    import AbstractPolymerElement = Com.Threeds.Element.AbstractPolymerElement;
    import Step = Com.Threeds.Component.Form.Element.Step;

    export interface Map<T> {
        [K: string]: T;
    }

    export interface Form {
        behaviors: any;
    }

    @component('form-element')
    @extend("form")
    @behavior(Com.Threeds.Component.Form.Element.Behavior.Neolane.FormBehavior)
    export class Form extends AbstractPolymerElement {
        context:any;

        @property({type: String, reflectToAttribute: true})
            id:string;

        @property({type: String, reflectToAttribute: true})
            name:string;

        @property({type: String, reflectToAttribute: true})
            method:string;

        @property({type: String, reflectToAttribute: true})
            action:string;

        private _currentPosition:number = 0;

        public get currentPosition():number {
            return this._currentPosition;
        }

        public set currentPosition(value:number) {
            if (typeof this.context.settings.hook.setCurrentPosition == 'function') {
                this.settings.hook.setCurrentPosition(this, value);
            }

            this._currentPosition = value;
        }

        public _steps:Object[] = [];

        public _errors:Object[] = [];

        constructor(context:any, data:any) {
            super(data);
            this.context = context;
            this.classList.add('ds-form')
            this.classList.add('ds-ldp-form-container')
            this.dispatch(data);
        }

        public get settings():any {
            return this.context.settings;
        }

        public get errors():Object[] {

            return <Array> this._errors;
        }

        public set errors(value:Object[]) {
            this._errors = value;
            this.dispatchAllErrors((<any>Polymer.dom(this)), this._errors);
        }


        dispatchAllErrors(node:any, errors:any) {
            for (let i = 0; i < node.childNodes.length; i++) {
                if (typeof node.childNodes[i].displayError == 'function') {
                    for (var k in errors) {
                        if (node.childNodes[i].name == k) {
                            node.childNodes[i].displayError(errors[k]);
                        }
                    }
                }

                this.dispatchAllErrors(node.childNodes[i], errors);
            }
        }

        public valid() {
            this._errors = [];
            this.validateAllElement((<any>Polymer.dom(this)), this._errors);
        }

        validateAllElement(node:any, errors:any) {
            let child:any;
            for (let i = 0; i < node.childNodes.length; i++) {
                child = node.childNodes[i];

                if(typeof child.isValid == 'function'){
                    if (child.isValid() == true) this._errors[child.name] = child.errorMessage;
                }

                this.validateAllElement(child, errors);

            }
        }

        dispatch(data:any) {
            if (typeof this.behaviors[0] != undefined && typeof this.behaviors[0].action == 'function') {
                this.behaviors[0].action(this, data);
            } else {
                console.log('Uncaught TypeError: this.behaviors[0].action is not a function');
            }
        }

        clear() {
            while (Polymer.dom(this).firstChild) Polymer.dom(this).removeChild(Polymer.dom(this).firstChild);
            this.innerHTML = '';
        }


        add(data:any) {
            if (!((<any>Polymer.dom(this)).childNodes.length)) {
                this._steps.push(data)
                this.currentPosition = 0;
                return true;
            }

            return this.isNewStep(this, (<any>Polymer.dom(this)), data);
        }


        isNewStep(context:any, node:any, data:any):boolean {
            let child:any;
            for (let i = 0; i < node.childNodes.length; i++) {
                child = node.childNodes[i];

                if(child.name != undefined){
                    for (let k in data.result.config) {
                        if (data.result.config[k].name = child.name && data.result.config[k].type != 'hidden') {
                            context._steps.push(data)
                            context.currentPosition++;
                            return true;
                        }
                    }
                }

                return this.isNewStep(context, child, data);


            }

            return false;
        }


        update(data:any) {
            this.add(data);
            //this.clear();
            //this.appendChild(Step.create(this, data));

            this.transition(this, this.currentPosition);
        }


        transition(context:any,currentPosition:number):void{
            /*if(currentPosition == 0){
                context.clear();
                context.appendChild(Step.create(context, context._steps.slice(-1)[0]));
                return;
            }*/

            console.log(Polymer.dom(context.context.root).querySelector('.ds-ldp-global-container').offsetHeight);
            console.log();
            console.log();


            var dom = Polymer.dom(context.context.root);
            var blockRight = dom.querySelector('.ds-ldp-form-container');
            var container = dom.querySelector('.ds-ldp-global-container');

            var heightBlocLeft = dom.querySelector('.ds-lpd-info-form').offsetHeight;
            var heightBlocRight = dom.querySelector('.ds-ldp-form-container').offsetHeight;

            $(blockRight).animate({
                opacity : 0
            }, 500, "linear", function() {

                // A lancer quand le formulaire de la step 2 est chargé

                //remonte le form caché deriere
                $(blockRight).animate({
                    opacity : 1,
                    top : 0,
                    zIndex : 1
                }, 10, "linear", function() {

                    //agrandi le conteneur
                    $(container).animate({
                        width: "952px"
                    }, 1000, "swing");

                });
            });



            //var heightBlocLeft = context.context.elem.find('.ds-lpd-info-form').height();
            //var heightBlocRight = context.context.elem.find('.ds-ldp-form-container').height();


            /*
                    var container = $('.ds-ldp-global-container');
                    var blockLeft = $('.ds-lpd-info-form');
                    var blockRight = $('.ds-ldp-form-container');

                    var heightBlocLeft = blockLeft.height();
                    var heightBlocRight = blockRight.height();

                    var tabsHead =  $('.ds-tabs-header');
                    var tabsContent =  $('.ds-tabs-container');

                        // Step 1
                        if(currentPosition == 0){
                           // callback();

                            return;
                        }

                        // Step 2
                        setTimeout(function() {
                           // callback();

                            //cache le form
                            $(blockRight).animate({
                                opacity : 0
                            }, 500, "linear", function() {

                                // A lancer quand le formulaire de la step 2 est chargé

                                //remonte le form caché deriere
                                $(blockRight).animate({
                                    opacity : 1,
                                    top : 0,
                                    zIndex : 1
                                }, 10, "linear", function() {

                                    // Si la hauteur du form est superieur au block de gauche
                                    if(heightBlocRight > heightBlocLeft){
                                        $(container).animate({
                                            height: heightBlocRight
                                        }, 1000 );
                                    }

                                    //agrandi le conteneur
                                    $(container).animate({
                                        width: "952px"
                                    }, 1000, "swing");

                                    // active la tab 2
                                    $(tabsHead).addClass('step-1-active');
                                    //
                                    //if(tabsContent.hasClass('active'){
                                    //
                                    //}
                                    //
                                    //// active le conteneur 2
                                    //$(tabsContent).addClass('step-1-active');



                                });
                            });
                        }, 0);
            */
        }


        goTo(id:number):void {
            if (typeof this._steps[id] != "undefined") {
                this.clear();
                this.appendChild(Step.create(this.context, this._steps[id]));
                this.currentPosition = id;
            }
        }

        prev():void {
            let id:number = (this.currentPosition - 1);
            this.goTo(id);
        }

        next():void {
            let id:number = (this.currentPosition + 1);
            this.goTo(id);
        }

        append(data:any):Form {
            if(!this.updateChildren(Polymer.dom(this), data)){
                this.insertBefore(Input.create(this, data), this.firstChild);
            }

            return this;
        }

        updateChildren(node:any, data:any):boolean {
            for (let i = 0; i < node.childNodes.length; i++) {
                if(typeof node.childNodes[i].name != 'undefined' && node.childNodes[i].name == data.name){
                    node.childNodes[i].value  = data.value;
                    return true;
                }

                if(this.updateChildren(node.childNodes[i], data)){
                    return true;
                }
            }

            return false;
        }

        success(data:any) {
            if (typeof this.context.settings.hook.success == 'function') {
                this.context.settings.hook.success(this, data);
            } else {
                this.clear();
                this.innerHTML = `<h1>${data.title}</h1>${data.content}`;
            }
        }

        warning(message:string) {
            if (typeof this.context.settings.hook.warning == 'function') {
                this.context.settings.hook.warning(this, message);
            } else {
                this.clear();
                this.innerHTML = message;
            }
        }

        redirect(url:string) {
            if (typeof this.context.settings.hook.redirect == 'function') {
                this.context.settings.hook.redirect(this, url);
            } else {
                window.location = <any>url;
            }
        }

        static serialize(form:any):string {
            if (!form || form.nodeName !== "FORM") {
                return;
            }

            var i:number, j:number, dict:Map<string> = {};
            for (i = form.elements.length - 1; i >= 0; i = i - 1) {
                if (form.elements[i].name === "" || typeof form.elements[i].name == 'undefined') {
                    continue;
                }

                switch (form.elements[i].nodeName) {
                    case 'INPUT':
                        switch (form.elements[i].type) {
                            case 'text':
                            case 'hidden':
                            case 'password':
                            case 'button':
                            case 'reset':
                            case 'submit':
                                dict[form.elements[i].name] = form.elements[i].value;
                                break;
                            case 'checkbox':
                            case 'radio':
                                if (form.elements[i].checked) {
                                    dict[form.elements[i].name] = encodeURIComponent(form.elements[i].value);
                                }
                                break;
                            case 'file':
                                break;
                        }
                        break;
                    case 'TEXTAREA':
                        dict[form.elements[i].name] = encodeURIComponent(form.elements[i].value);
                        break;
                    case 'SELECT':
                        switch (form.elements[i].type) {
                            case 'select-one':
                                dict[form.elements[i].name] = encodeURIComponent(form.elements[i].value);
                                break;
                            case 'select-multiple':
                                for (j = form.elements[i].options.length - 1; j >= 0; j = j - 1) {
                                    if (form.elements[i].options[j].selected) {
                                        dict[form.elements[i].name] = encodeURIComponent(form.elements[i].options[j].value);
                                    }
                                }
                                break;
                        }
                        break;
                    case 'BUTTON':
                        switch (form.elements[i].type) {
                            case 'reset':
                            case 'submit':
                            case 'button':
                                dict[form.elements[i].name] = encodeURIComponent(form.elements[i].value);
                                break;
                        }
                        break;
                }
            }

            return dict;
        }
    }
}

Com.Threeds.Component.Form.Element.Form.register();

