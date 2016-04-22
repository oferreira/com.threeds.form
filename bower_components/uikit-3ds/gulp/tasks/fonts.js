var gulp = require('gulp');
var fs = require('fs');
var config = require('../config');
var handleErrors = require('../utils/handle-error');
var fontSvg = require('../class/font-svg').init();
var format = require('string-format').extend(String.prototype);
var buildHelper = require('../helpers/build-helper');

gulp.task('site-fonts', function () {
    gulp.src([
            'threeds/fonts/*.eot',
            'threeds/fonts/*.svg',
            'threeds/fonts/*.ttf',
            'threeds/fonts/*.woff',
            'threeds/fonts/*.woff2',
        ])
        .pipe(gulp.dest('dist/fonts'))
        .pipe(gulp.dest('doc/public/fonts'));

    if (buildHelper.isRelease()) {
        return fontSvg.create(config.threeds.fonts.icons);
    }
});

gulp.task('doc-fonts', function () {

});

gulp.task('fonts', ['site-fonts', 'doc-fonts']);
gulp.task('fonts-changed', ['site-fonts', 'doc-fonts']);