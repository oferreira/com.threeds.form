var gulp = require('gulp');
var config = require('../config');
var handleErrors = require('../utils/handle-error');
var $ = require('gulp-load-plugins')({
    camelize: true
});
var gulpSequence = require('gulp-sequence');
var sourcemaps = require('gulp-sourcemaps');
var ts = require('gulp-typescript');
var babel = require('gulp-babel');
var tsProject = ts.createProject('./tsconfig.json');


var buildHelper = require('../helpers/build-helper');
gulp.task('app-js', function() {

    var $return = gulp.src(['src/*.ts', 'src/**/*.ts'])
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject))
        .pipe(babel())
        .pipe($.concat('app.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'));

    if(buildHelper.isRelease()){

    }

    return $return;
});


gulp.task('scripts', ['app-js'], function() {

});

gulp.task('scripts-changed', ['scripts']);