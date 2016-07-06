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
buildHelper = require('../helpers/build-helper');

gulp.task('polymer-js', function () {
    gulp.src(["bower_components/polymer/polymer-micro.html", "bower_components/polymer/polymer-mini.html", "bower_components/polymer/polymer.html"])
        .pipe(extract({
            sel: "script"
        }))
        .pipe(addsrc('bower_components/polymer-ts/polymer-ts.js'))
        .pipe(stripComments())
        .pipe(uglify())
        .pipe($.concat('polymer.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('platform-js', function () {
    gulp.src(["bower_components/webcomponentsjs/webcomponents.min.js", "dist/polymer.js", "bower_components/jquery.namespace/jquery.namespace.js", "bower_components/javascript-auto-complete/auto-complete.js"])
        .pipe(stripComments())
        // .pipe(uglify())
        .pipe($.concat('platform.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('app-js', function () {
    var $return = gulp.src(['src/*.ts', 'src/**/*.ts'])
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject))
        .pipe(babel())
        .pipe($.concat('app.js'))
        .pipe(wrapper({
            header: "(function ($) {addEventListener('WebComponentsReady', function () {\n",
            footer: '});})(jQuery);'
        }))
        .pipe(stripComments())
        //.pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'));

    if (buildHelper.isRelease()) {

    }

    return $return;
});

gulp.task('build-js', function () {
    gulp.src(["dist/platform.js", "dist/app.js"])
        .pipe(stripComments())
        //.pipe(uglify())
        .pipe($.concat('build.js'))
        .pipe(gulp.dest('dist'));
});


gulp.task('copy', function () {
    gulp.src([
        "bower_components/webcomponentsjs/**/*",
        "bower_components/polymer/**/*",
        "bower_components/polymer-ts/**/*",
        "bower_components/youtube-iframe-api/**/*",
        "bower_components/youtube-iframe-api/**/*",
        "bower_components/jwplayer/**/*",
        "bower_components/vanilla-modal/**/*"

    ], {base: "./bower_components"})
        .pipe(gulp.dest('dist/bower_components'));

    gulp.src([
        "assets/3ds-player/**/*",
        "assets/fonts/**/*",
        "assets/icon/**/*",
        "assets/images/icon-arrow-circle.svg",
        "assets/images/icon-video.svg",
    ], {base: "./assets"})
        .pipe(gulp.dest('dist/assets'));

});




gulp.task('threeds-landingpage-js', function () {

    var $return = gulp.src(['src/*.ts', 'src/**/*.ts'])
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject))
        .pipe(babel())
        .pipe($.concat('threeds.landingpage.js'))
        .pipe(wrapper({
            header: "addEventListener('WebComponentsReady', function () {\n",
            footer: '});'
        }))
        .pipe(addsrc.prepend('bower_components/jquery.namespace/jquery.namespace.js'))
        .pipe(addsrc.prepend('bower_components/javascript-auto-complete/auto-complete.js'))
        .pipe($.concat('threeds.landingpage.js'))
        .pipe(wrapper({
            header: "(function ($, window) {\n",
            footer: '})(jQuery, window);'
        }))
        .pipe(addsrc.prepend('bower_components/vanilla-modal/dist/index.js'))
        .pipe(addsrc.prepend('bower_components/jquery-file-download/src/Scripts/jquery.fileDownload.js'))
        .pipe($.concat('threeds.landingpage.js'))
        .pipe(stripComments())
        //.pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'));

    if (buildHelper.isRelease()) {

    }

    return $return;
});


//gulp.task('scripts', gulpSequence('polymer-js', 'platform-js', 'app-js', 'build-js'));
gulp.task('scripts', ['threeds-landingpage-js', 'copy']);
gulp.task('scripts-changed', ['threeds-landingpage-js']);