var gulp = require('gulp');
var config = require('../config');
var style = require('../class/style').init();

gulp.task('site-styles', function () {
    return style.create(config.threeds.styles.sass)
});

gulp.task('header-styles', function () {
    return style.create(config.header.styles.sass)
});

gulp.task('doc-styles', function () {
    gulp.src([
        'bower_components/pure/grids-min.css',
        'bower_components/pure/grids-responsive-min.css',
        'bower_components/prism/themes/prism.css',
        'bower_components/codemirror/lib/codemirror.css',
    ]).pipe(gulp.dest(config.docs.styles.app.dist));

    style.create(config.docs.styles.app)

    return style.create(config.docs.styles.sass);
});

gulp.task('styles', ['site-styles', 'header-styles', 'doc-styles']);
gulp.task('styles-changed', ['site-styles', 'header-styles', 'doc-styles']);