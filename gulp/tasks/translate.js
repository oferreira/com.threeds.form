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
extend = require('gulp-extend')
jsonlint = require("gulp-jsonlint");


gulp.task('translate', function () {
    gulp.src('./languages/**/*.json')
        .pipe(jsonlint())
        .pipe(jsonlint.reporter())
        .pipe(extend('./languages/merge.json'))
        .pipe(gulp.dest('./'));
});