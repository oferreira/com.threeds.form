var gulp = require('gulp');
var config = require('../config');
var handleErrors = require('../utils/handle-error');
var $ = require('gulp-load-plugins')({
    camelize: true
});

var script = require('../class/script').init();

gulp.task('js', function () {
    return gulp.src('docs/js/*.js')
        .pipe(connect.reload());
});

gulp.task('jsComplexity', function () {
    console.log(('Starting Complexity Tests').yellow);
    /*return gulp.src(config.files.javascript.complexityFiles)
     .pipe($.plumber({errorHandler: handleError}))
     .pipe($.complexity(config.libs.complexity));*/
});

gulp.task('jsComplexity-changed', function () {
    console.log(('Starting Complexity Tests').yellow);
    /*return gulp.src(config.files.javascript.complexityFiles)
     .pipe($.plumber({errorHandler: handleError()}))
     .pipe($.cached('js-complexity'))
     .pipe($.complexity(config.libs.complexity));*/
});

gulp.task('app-js', function () {
    return script.create(config.threeds.scripts.app);
});

gulp.task('header-js', function () {
    return script.create(config.threeds.scripts.header);
});

gulp.task('doc-all-js', function () {
    gulp.src([
        'bower_components/jquery/dist/jquery.js',
        'bower_components/prism/prism.js',
        'bower_components/codemirror/lib/codemirror.js',
        'bower_components/codemirror/mode/javascript/javascript.js',
        'bower_components/codemirror/mode/css/css.js',
    ]).pipe(gulp.dest(config.docs.scripts.app.dist));

    return script.create(config.docs.scripts.app);
});

gulp.task('site-scripts', ['app-js', 'header-js', 'doc-all-js']);
gulp.task('scripts', ['locals', 'site-scripts']);
gulp.task('scripts-changed', ['locals', 'site-scripts']);
