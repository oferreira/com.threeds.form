/// <reference path="../../../typings/angular2-meteor.d.ts" />
/// <reference path="../../../typings/jquery/jquery.d.ts" />

import {Component, View, OnInit} from 'angular2/core';

@Component({
    selector: 'getting-started-component'
})

@View({
    templateUrl: 'client/components/getting-started/getting-started.html',
})


export class GettingStartedComponent implements OnInit{
    ngOnInit() {
        $(".title2").each(function() {
            console.log("h2.title2 = ".concat($(this).html()));
        });
    }
}
