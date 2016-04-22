var gulp = require('gulp');
var config = require('../config');
var handleErrors = require('../utils/handle-error');
var $ = require('gulp-load-plugins')({
    camelize: true
});

var buildHelper = require('../helpers/build-helper');
var uglify = require('gulp-uglify')
var extend = require('gulp-extend');
var insert = require('gulp-insert');


gulp.task('locals', function () {
    var $return =  gulp.src('threeds/locals/*.json')
        .pipe(extend('locals.js'))
        .pipe(insert.wrap('var $_i18nData = ', ';'))
        .pipe(gulp.dest('./dist/js'));

    if (buildHelper.isRelease()) {
        $return.pipe($.concat('locals.min.js'))
            .pipe(uglify({
                mangle: false
            }))
            .pipe(gulp.dest('./dist/js/'))
    }
});