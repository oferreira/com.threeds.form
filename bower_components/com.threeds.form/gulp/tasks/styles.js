var gulp = require('gulp'),
    wrapper = require('gulp-wrapper');
var config = require('../config');
var handleErrors = require('../utils/handle-error');
var $ = require('gulp-load-plugins')({
    camelize: true
});

gulp.task('styles', function () {

    var $return = gulp.src(config.app.styles.sass.src, {base: config.app.styles.sass.base})
        .pipe($.plumber({errorHandler: handleErrors}))
        .pipe($.sourcemaps.init())
        .pipe($.sass(config.libs.sass))
        .pipe( $.importCss() )
        .pipe( $.autoprefixer(config.libs.autoPrefixer ) )
        .pipe($.sourcemaps.write('./'));


    return $return.pipe(gulp.dest(config.app.styles.sass.dist));

});

gulp.task('styles-changed', ['styles'], function () {
    /*
     var $return = gulp.src(args.src, {base: args.base})
     .pipe( $.plumber( {errorHandler: handleErrors } ) )
     .pipe( $.sourcemaps.init() )
     .pipe( $.sass(config.libs.sass ) )
     //.pipe( $.importCss() )
     //.pipe( $.autoprefixer(config.libs.autoPrefixer ) )
     .pipe($.sourcemaps.write('./'))

     if( buildHelper.isRelease() ){
     $return.pipe(stripComments())
     .pipe( minifyCSS() )
     .pipe( gulp.dest( args.dist ) );
     }

     return $return.pipe( gulp.dest( args.dist ) );
     */
});