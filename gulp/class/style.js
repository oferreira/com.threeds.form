var gulp = require('gulp');
var config = require('../config');
var buildHelper = require('../helpers/build-helper');
var handleErrors = require('../utils/handle-error');
var $ = require('gulp-load-plugins')({
    camelize: true
});
var minifyCSS = require('gulp-minify-css');
var stripComments = require('gulp-strip-comments');

/**
 * Style
 * A utility that generate app.css with files scss
 *
 * @namespace Gulp.Styles
 * @class Style
 * @constructor
 * @param context
 */
var Style = function (context) {
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
Style.prototype._init = function () {

};

/**
 * create a css file with files sccs
 *
 * @method create
 * @public
 * @return {Object}
 *    Gulp.prototype.Gulp
 * @example
 *    var styleSetting = {
 *               base: 'threeds/sass',
 *               src: 'threeds/sass/threeds.scss',
 *               dist: 'dist/css'
 *    };ader\r\n// Top section of the modal w/ title and dismiss\r\n.modal-header {\r\n  padding: $modal-title-padding;\r\n  border-bottom: 1px solid $modal-header-border-color;\r\n  @include clearfix;\r\n}\r\n// Close icon\r\n.modal-header .close {\r\n  margin-top:
-2px;\r\n}\r\n\r\n// Title text within header\r\n.modal-title {\r\n  margin: 0;\r\n  line-height: $modal-title-line-height;\r\n}\r\n\r\n// Modal body\r\n// Where all modal content resides (sibling of .modal-header and .modal-footer)\r\n.modal-body {\r\n  posi
tion: relative;\r\n  padding: $modal-inner-padding;\r\n}\r\n\r\n// Footer (for actions)\r\n.modal-footer {\r\n  padding: $modal-inner-padding;\r\n  text-align: right; // right align buttons\r\n  border-top: 1px solid $modal-footer-border-color;\r\n  @include
clearfix; // clear it in case folks use .pull-* classes on buttons\r\n\r\n  // Properly space out buttons\r\n  .btn + .btn {\r\n    margin-left: 5px;\r\n    margin-bottom: 0; // account for input[type=\"submit\"] which gets the bottom margin like all other in
puts\r\n  }\r\n  // but override that for button groups\r\n  .btn-group .btn + .btn {\r\n    margin-left: -1px;\r\n  }\r\n  // and override it for block buttons as well\r\n  .btn-block + .btn-block {\r\n    margin-left: 0;\r\n  }\r\n}\r\n\r\n// Measure scroll
 bar width for padding body during modal show/hide\r\n.modal-scrollbar-measure {\r\n  position: absolute;\r\n  top: -9999px;\r\n  width: 50px;\r\n  height: 50px;\r\n  overflow: scroll;\r\n}\r\n\r\n// Scale up the modal\r\n@media (min-width: $min-bp-sm) {\r\n
// Automatically set modal's width for larger viewports\r\n  .modal-dialog {\r\n    width: $modal-md;\r\n    margin: 3
 *
 *    Style.prototype.create(styleSetting);
 */
Style.prototype.create = function (args) {
    var $return = gulp.src(args.src, {base: args.base})
        .pipe( $.plumber( {errorHandler: handleErrors } ) )
        .pipe( $.sourcemaps.init() )
        .pipe( $.sass(config.libs.sass ) )
        //.pipe( $.importCss() )
        //.pipe( $.autoprefixer(config.libs.autoPrefixer ) )
        .pipe($.sourcemaps.write('./'))

    if( buildHelper.isRelease() ){
        $return.pipe(stripComments())
            .pipe( minifyCSS() )
            .pipe( gulp.dest( args.dist ) );
    }

    return $return.pipe( gulp.dest( args.dist ) );
};

module.exports = {
    init: function () {
        return new Style(this);
    }
};