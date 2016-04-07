/// <reference path="../../../bower_components/polymer-ts/polymer-ts.d.ts"/>

namespace Com.Theeds.Component.Card {

    export class MyBehavior extends polymer.Base
    {
        @listen("greet-event")
        onButtonWasClicked(e:Event) {
            console.log('event "greet-event" received');
        }
    }

    @component('my-element')
    @extend("div")
    @template(`<p>I'm a DOM element. This is my local DOM!</p><p>And this is 'greet' property: <span>{{greet}}</span></p><p><button on-click="handleClick">Change greet</button></p><p>Computed property 'greetAll' is <span>{{greetAll}}</span></p>`)
    @style(`:host { display: block; } div { color: red; }`)
    @behavior(MyBehavior)
    export class MyElement extends polymer.Base {

        @property({type: String})
        private greet:string = 'Hello';


        constructor(data:any) {
            super();
        }

        @observe("greet")
        greetChanged(newValue:string, oldValue:string) {
            console.log(`greet has changed from ${oldValue} to ${newValue}`);
        }

        @computed()
        greetAll(test:string):string {
            return test + " to all";
        }

        // event handler
        handleClick(e:Event) {
            this.greet = "Holà";
            this.fire("greet-event");
        }

        // lifecycle methods
        ready() {
            console.log(this['is'], "ready!")
        }

        created() {
        }

        attached() {
        }

        detached() {
        }
    }
}

Com.Theeds.Component.Card.MyElement.register();

