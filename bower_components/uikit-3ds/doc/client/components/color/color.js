/// <reference path="../../../typings/angular2-meteor.d.ts" />
/// <reference path="../../../typings/jquery/jquery.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var ColorComponent = (function () {
    function ColorComponent() {
    }
    ColorComponent.prototype.ngOnInit = function () {
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
    };
    ColorComponent = __decorate([
        core_1.Component({
            selector: 'color-component'
        }),
        core_1.View({
            templateUrl: 'client/components/color/color.html'
        })
    ], ColorComponent);
    return ColorComponent;
})();
exports.ColorComponent = ColorComponent;
//# sourceMappingURL=color.js.map