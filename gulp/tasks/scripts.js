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
      //  .pipe(uglify())
        .pipe($.concat('polymer.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('webcomponents-js', function () {
    gulp.src(["bower_components/webcomponentsjs/webcomponents.min.js", "dist/polymer.js","bower_components/jquery.namespace/jquery.namespace.js", "bower_components/javascript-auto-complete/auto-complete.min.js"])
        .pipe(stripComments())
        //.pipe(uglify())
        .pipe($.concat('webcomponents.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('app-js', function() {
    var $return = gulp.src(['src/*.ts', 'src/**/*.ts'])
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject))
        .pipe(babel())
        .pipe($.concat('app.js'))
        .pipe(wrapper({
            header: "$(function () {addEventListener('WebComponentsReady', function () {\n",
            footer: '});});'
        }))
        .pipe(stripComments())
        //.pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'));

    if(buildHelper.isRelease()){

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