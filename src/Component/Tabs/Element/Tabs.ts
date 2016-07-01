/// <reference path="../../../Element/AbstractPolymerElement.ts" />
/// <reference path="../../../Component/Tabs/Element/Tab.ts" />
/// <reference path="../../../Component/Tabs/Element/Header.ts" />

namespace Com.Threeds.Component.Tabs.Element {

    import AbstractPolymerElement = Com.Threeds.Element.AbstractPolymerElement;
    import Tabs = Com.Threeds.Component.Tabs.Element.Tab;
    import Header = Com.Threeds.Component.Tabs.Element.Header;

    @component('tabs-element')
    @extend("div")
    export class Tabs extends AbstractPolymerElement {

        public context:any;
        private _currentPosition:number = 0;
        public settings:any = {
            /*data: {
                0: {
                    title: 'tab 1',
                    content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt'
                },
                1: {
                    title: 'tab 2',
                    content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt'
                }
            }*/
        };

        constructor(context:any, options:any, data:any) {
            this.context = context;
            this.settings = $.extend({}, this.settings, options);
            this.classList.add('ds-tabs');

            this.appendChild(Header.create(this, this.settings));

            let container:HTMLDivElement = document.createElement('div');
            container.classList.add('ds-tabs-container');
            for (let k in this.settings.data) {
               container.appendChild(Tab.create(this, this.settings.data[k]));
            }
            this.appendChild(container);
        }

        public get currentPosition():number {
            return this._currentPosition;
        }

        public set currentPosition(value:number) {
            this.context.elem.find('ul.ds-tabs-header').addClass(`step-${value}-active`);
            this.context.elem.find( ".ds-tabs-header li" ).each(function( index, element ) {
                if(index == value){
                    $( element ).addClass('active');
                } else {
                    $( element ).removeClass('active');
                }
            });

            this.context.elem.find( ".ds-tabs-container .ds-tab" ).each(function( index, element ) {
                if(index == value){
                    $( element ).addClass('active');
                } else {
                    $( element ).removeClass('active');
                }
            });

            this._currentPosition = value;
        }

    }
}

Com.Threeds.Component.Tabs.Element.Tabs.register();

