var gulp = require('gulp'),
    wrapper = require('gulp-wrapper');
var config = require('../config');
var handleErrors = require('../utils/handle-error');
var $ = require('gulp-load-plugins')({
    camelize: true
});
var gulpSequence = require('gulp-sequence');
var addsrc = require('gulp-add-src');
var sourcemaps = require('gulp-sourcemaps');
var ts = require('gulp-typescript');
var babel = require('gulp-babel');
var tsProject = ts.createProject('./tsconfig.json');
var vulcanize = require('gulp-vulcanize');
var jshint = require("gulp-jshint"),
    extract = require("gulp-html-extract")
uglify = require('gulp-uglify');


var buildHelper = require('../helpers/build-helper');
gulp.task('app-js', function() {

    gulp.src(["bower_components/polymer/polymer-micro.html", "bower_components/polymer/polymer-mini.html", "bower_components/polymer/polymer.html"])
        .pipe(extract({
            sel: "script"
        }))
        .pipe(addsrc('bower_components/polymer-ts/polymer-ts.js'))
        .pipe(addsrc('bower_components/webcomponentsjs/webcomponents-lite.js'))
        .pipe(addsrc('bower_components/jquery.namespace/jquery.namespace.js'))
        .pipe(uglify())
        .pipe($.concat('platform.js'))
        .pipe(gulp.dest('dist'));

    var $return = gulp.src(['src/*.ts', 'src/**/*.ts'])
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject))
        .pipe(babel())
        .pipe($.concat('app.js'))
        .pipe(wrapper({
            header: "$(function () {addEventListener('WebComponentsReady', function () {\n",
            footer: '});});'
        }))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'));

    if(buildHelper.isRelease()){

    }

    return $return;
});

gulp.task('scripts', ['app-js']);
gulp.task('scripts-changed', ['scripts']);