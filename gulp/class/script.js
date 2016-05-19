var gulp = require('gulp');
var config = require('../config');
var buildHelper = require('../helpers/build-helper');
var handleErrors = require('../utils/handle-error');
var $ = require('gulp-load-plugins')({
    camelize: true
});

var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify')
var stripComments = require('gulp-strip-comments');
var babel = require("gulp-babel");

/**
 * Script
 *
 * @namespace Gulp.Scripts
 * @class Script
 * @constructor
 * @param context
 */
var Script = function (context) {
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
Script.prototype._init = function () {

};


/**
 * create an app.js with js files concat
 *
 * @method create
 * @public
 * @return {Object}
 *    Gulp.prototype.Gulp
 * @example
 *   var scriptSetting = {
 *               filename: 'app',
 *               base: 'threeds/js',
 *               src: [
 *                   'dist/js/locals.js',
 *                   'threeds/js/&#42;.js',
 *                   'threeds/js/&#42;&#42;/&#42;.js'
 *               ],
 *                dist: 'dist/js'
 *            }
 *
 *    Script.prototype.create(scriptSetting);
 */
Script.prototype.create = function (args) {
    var $return = gulp.src(args.src, {base: args.base}).pipe($.concat(args.filename.concat('.js')))
        .pipe(gulp.dest(args.dist));

    if (buildHelper.isRelease()) {
        $return.pipe($.concat(args.filename.concat('.min.js')))
            .pipe(stripComments())
            .pipe(jshint())
            .pipe($.sourcemaps.init())
            .pipe(uglify({
                mangle: false
            }))
            .pipe($.sourcemaps.write('./'))
            .pipe(gulp.dest(args.dist))
    }
};

module.exports = {
    init: function () {
        return new Script(this);
    }
};
