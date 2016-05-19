var gulp = require('gulp');
var config = require('../config');
var buildHelper = require('../helpers/build-helper');
var handleErrors = require('../utils/handle-error');
var $ = require('gulp-load-plugins')({
    camelize: true
});

var format = require('string-format').extend(String.prototype);
var iconfont = require('gulp-iconfont');
var file = require('gulp-file');
var glyphsMap = require('iconfont-glyphs-map');
var jsonSassObj = require("json-sass-obj")
var sass = require("gulp-sass")

/**
 * A utility that generate a font with files svg
 *
 * @namespace Gulp.Fonts
 * @class FontSvg
 * @constructor
 * @param context
 */
var FontSvg = function (context) {
    /**
     * context
     *
     * @property context
     * @type {Element}
     * @default {Element}
     * @private
     */
    this.context = context;
    this._init();
};

/**
 * initialize all settings
 *
 * @method _init
 * @private
 */
FontSvg.prototype._init = function () {

};

/**
 * create an font with SVG files
 *
 * @method create
 * @public
 * @return {Object}
 *    Gulp.prototype.Gulp
 * @example
 *    var fontSetting = {
 *       filename: 'app',
 *       base: 'threeds/fonts',
 *       src: [
 *           'threeds/fonts/&#42;.js',
 *           'threeds/fonts/&#42;&#42;/&#42;&#42;.js'
 *      ],
 *      dist: 'dist/fonts'
 *    };
 *
 *    Font.prototype.create(fontSetting);
 */
FontSvg.prototype.create = function (args) {
    return gulp.src(args.src)
        .pipe(iconfont(args.options))
        .on('glyphs', function (glyphs) {
            file(args.options.fontName.concat(".json"), JSON.stringify(glyphsMap(glyphs, true, true)))
                .pipe(gulp.dest(args.dist))

            file("_map.scss", JSON.stringify({
                name: args.options.fontName,
                path: args.options.dist,
                glyphs: glyphsMap(glyphs, true, true)
            }))
                .pipe(jsonSassObj({
                    prefix: "$font: ",
                    suffix: " !default;"
                }))
                .pipe(gulp.dest("threeds/sass/fonts/3ds_icons"))
        })
        .pipe(gulp.dest(args.dist))
};

module.exports = {
    init: function () {
        return new FontSvg(this);
    }
};