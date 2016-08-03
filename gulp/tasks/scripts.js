var gulp = require('gulp'),
    wrapper = require('gulp-wrapper');
var config = require('../config');
var handleErrors = require('../utils/handle-error');
var $ = require('gulp-load-plugins')({
    camelize: true
});
var gulpSequence = require('gulp-sequence');
var addsrc = require('gulp-add-src')
sourcemaps = require('gulp-sourcemaps')
ts = require('gulp-typescript')
babel = require('gulp-babel')
tsProject = ts.createProject('./tsconfig.json')
jshint = require("gulp-jshint"),
    extract = require("gulp-html-extract")
uglify = require('gulp-uglify')
stripComments = require('gulp-strip-comments')
buildHelper = require('../helpers/build-helper')
extend = require('gulp-extend');
var replace = require('gulp-replace');
var translations = require('../../languages/merge.json');
var browserify = require('gulp-browserify');


gulp.task('copy', function () {
    gulp.src([
        "bower_components/webcomponentsjs/**/*",
        "bower_components/polymer/**/*",
        "bower_components/polymer-ts/**/*",
        "bower_components/vanilla-modal/**/*",
        "bower_components/jquery/**/*",

    ], {base: "./bower_components"})
        .pipe(gulp.dest('dist/bower_components'));

    gulp.src([
        "assets/3ds-player/**/*",
        "assets/fonts/**/*",
        "assets/icon/**/*"
    ], {base: "./assets"})
        .pipe(gulp.dest('dist/assets'));

});

gulp.task('threeds-landingpage-js', function () {

    var $return = gulp.src(['src/*.ts', 'src/**/*.ts'])
        .pipe(replace("{'_translations_'}", JSON.stringify(translations)))
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject))
        .pipe(babel())
        .pipe(addsrc.prepend('bower_components/jquery.namespace/jquery.namespace.js'))
        .pipe($.concat('threeds.landingpage.js'))
        .pipe(wrapper({
            header: "(function ($, window) {\n",
            footer: '})(jQuery, window);'
        }))
        .pipe(addsrc.prepend('bower_components/vanilla-modal/dist/index.js'))
        .pipe($.concat('threeds.landingpage.js'))
        .pipe(stripComments())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'));

    if (buildHelper.isRelease()) {
        $return.pipe(uglify())
            .pipe($.concat('threeds.landingpage.min.js'))
            .pipe(gulp.dest('dist'));
    }

    return $return
});

gulp.task('scripts', ['threeds-landingpage-js', 'copy']);
gulp.task('scripts-changed', ['threeds-landingpage-js']);