/// <reference path="../../../typings/angular2-meteor.d.ts" />
/// <reference path="../../../typings/jquery/jquery.d.ts" />

import {Component, View, OnInit} from 'angular2/core';

@Component({
    selector: 'color-component'
})

@View({
    templateUrl: 'client/components/color/color.html',
})


export class ColorComponent implements OnInit {
    ngOnInit() {

        // Automatic color

        //Function to convert hex format to a rgb color
        function rgb2hex(orig) {
            var rgb = orig.replace(/\s/g, '').match(/^rgba?\((\d+),(\d+),(\d+)/i);
            return (rgb && rgb.length === 4) ? "#" +
            ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) +
            ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) +
            ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2) : orig;
        }

        $('.item-bg-color').each(function () {
            var color = rgb2hex($(this).css("background-color"));
            $(this).next().html(color);
        });

    }
}
