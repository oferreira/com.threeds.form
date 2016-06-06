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
    var $return = gulp.src(["bower_components/polymer/polymer-micro.html", "bower_components/polymer/polymer-mini.html", "bower_components/polymer/polymer.html"])
        .pipe(extract({
            sel: "script"
        }))
        .pipe(addsrc('bower_components/polymer-ts/polymer-ts.js'))
        //.pipe(sourcemaps.init())
        .pipe(stripComments())
        .pipe($.concat('polymer.js'))
        //.pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'));


    if (buildHelper.isRelease()) {
        $return.pipe(uglify())
            .pipe($.concat('polymer.min.js'))
            .pipe(gulp.dest('dist'));
    }

    return $return;
});

gulp.task('webcomponents-js', function () {
    var $return = gulp.src(["bower_components/webcomponentsjs/webcomponents.min.js", "dist/polymer.js"])
        //.pipe(sourcemaps.init())
        .pipe(stripComments())
        .pipe($.concat('webcomponents.js'))
        //.pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'));

    if (buildHelper.isRelease()) {
        $return.pipe(uglify())
            .pipe($.concat('webcomponents.min.js'))
            .pipe(gulp.dest('dist'));
    }

    return $return;
});

gulp.task('app-js', function() {
    var $return = gulp.src(['src/*.ts', 'src/**/*.ts'])
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject))
        .pipe(babel())
        .pipe(addsrc('bower_components/jquery.namespace/jquery.namespace.js'))
        .pipe(addsrc('bower_components/javascript-auto-complete/auto-complete.min.js'))
        .pipe($.concat('app.js'))
        .pipe(wrapper({
            header: "$(function () {addEventListener('WebComponentsReady', function () {\n",
            footer: '});});'
        }))
        .pipe(stripComments())
        .pipe(sourcemaps.write('.'));

    if(buildHelper.isRelease()){
        $return.pipe($.concat('app.min.js'))
            .pipe(uglify())
            .pipe(gulp.dest('dist'));
    }

    return $return;
});

gulp.task('build-js', function() {
    gulp.src(["dist/webcomponents.js", "dist/app.js"])
        .pipe(stripComments())
        //.pipe(uglify())
        .pipe($.concat('build.js'))
        .pipe(gulp.dest('dist'));
});


gulp.task('scripts', gulpSequence('polymer-js', 'webcomponents-js', 'app-js', 'build-js'));
gulp.task('scripts-changed', ['app-js']);