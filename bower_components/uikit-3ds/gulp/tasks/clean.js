var gulp = require('gulp');
var config = require('../config');
var handleErrors = require('../utils/handle-error');
var $ = require('gulp-load-plugins')({
    camelize: true
});
var buildHelper = require('../helpers/build-helper');

var del = require('del');
var fs = require('fs');

gulp.task('clean-styles', function(){
    //del(['./dist/css'])
});

gulp.task('clean-scripts', function(){
    //del(['./dist/js'])
});

gulp.task('clean-images', function(){
    if (buildHelper.isRelease()) {
        //del(['./dist/img'])
    }
});

gulp.task('clean-fonts', function(){
    if (buildHelper.isRelease()) {
        //del(['./dist/fonts'])
    }
});

gulp.task('clean', ['clean-styles', 'clean-scripts', 'clean-images', 'clean-fonts']);

