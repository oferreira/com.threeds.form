var gulp = require('gulp');
var config = require('../config');
var handleErrors = require('../utils/handle-error');
var $ = require('gulp-load-plugins')({
    camelize: true
});
var buildHelper = require('../helpers/build-helper');

gulp.task('images', function () {
    gulp.src(['threeds/img/**']).pipe(gulp.dest('doc/public/img'))
    if (buildHelper.isRelease()) {
        gulp.src(['threeds/img/**']).pipe(gulp.dest('dist/img'))
    }
});

gulp.task('images-changed', ['images']);