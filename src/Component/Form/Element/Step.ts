/// <reference path="../../../../bower_components/polymer-ts/polymer-ts.d.ts"/>
/// <reference path="../../../Component/Form/Element/Field.ts" />
/// <reference path="../../../Component/Form/Element/FieldGroup.ts" />
/// <reference path="../../../Component/Form/Element/Submit.ts" />
/// <reference path="../../../Element/AbstractPolymerElement.ts" />
/// <reference path="../../../Component/Form/Element/Behavior/NeolaneFromBehavior.ts" />

namespace Com.Theeds.Component.Form.Element {

    import AbstractPolymerElement = Com.Theeds.Element.AbstractPolymerElement;
    import FieldElement = Com.Theeds.Component.Form.Element.Field;
    import FieldGroupElement = Com.Theeds.Component.Form.Element.FieldGroup;
    import SubmitElement = Com.Theeds.Component.Form.Element.Submit;

    @component('step-element')
    @extend("div")
    export class Step extends AbstractPolymerElement {
        @property({type: String, reflectToAttribute: true})
            id:string;

        constructor(context:any, data:any) {
            if (data.success == undefined && !data.success && data.result.config !== undefined) return;
            super(data);

            this.id = data.result.properties.id;
            for (let k in data.result.config) {
                if (data.result.config[k].type == 'fieldgroup') {
                    this.appendChild(FieldGroupElement.create(context, data.result.config[k]));
                } else {
                    this.appendChild(FieldElement.create(context, data.result.config[k]));
                }
            }




            this.appendChild(SubmitElement.create({}));
        }
    }
}

Com.Theeds.Component.Form.Element.Step.register();

