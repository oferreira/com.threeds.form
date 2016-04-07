/// <reference path="../../bower_components/polymer-ts/polymer-ts.d.ts"/>
/// <reference path="../../typings/jquery/jquery.d.ts" />

namespace Com.Theeds.Element {

    export class AbstractPolymerElement extends polymer.Base {
        data:any;

        constructor(data:any) {
            super(data);
        }


    }
}

