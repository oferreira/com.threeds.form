var gulp = require('gulp');
var config = require('../config');
var $ = require('gulp-load-plugins')({
    camelize: true
});

gulp.task('build', [
    'clean',
    'styles',
    'scripts',
    'fonts',
    'images'
], function () {

});


gulp.task('build-changed', [
    'styles-changed',
    'fonts-changed',
    'images-changed',
    'scripts-changed'
], function () {

});

gulp.task('build-documentation', function () {
    gulp.src('dist/fonts/**').pipe(gulp.dest('doc/client/libs/threeds/fonts'));
    gulp.src('dist/img/**').pipe(gulp.dest('doc/client/libs/threeds/img'));
});
