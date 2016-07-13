var gulp = require('gulp'),
    wrapper = require('gulp-wrapper');
var config = require('../config');
var handleErrors = require('../utils/handle-error');
var $ = require('gulp-load-plugins')({
    camelize: true
});
var cbuildHelper = require('../helpers/build-helper');
var minifyCSS = require('gulp-minify-css');

gulp.task('styles', function () {

    var $return = gulp.src(config.app.styles.sass.src, {base: config.app.styles.sass.base})
        .pipe($.plumber({errorHandler: handleErrors}))
        .pipe($.sourcemaps.init())
        .pipe($.sass(config.libs.sass))
        .pipe( $.importCss() )
        .pipe( $.autoprefixer(config.libs.autoPrefixer ) )
        .pipe($.concat('threeds.landingpage.css'))
        .pipe($.sourcemaps.write('./'))
        .pipe(gulp.dest(config.app.styles.sass.dist));

    if( buildHelper.isRelease() ){
        $return.pipe(minifyCSS())
            .pipe($.concat('threeds.landingpage.min.css'))
            .pipe(gulp.dest(config.app.styles.sass.dist));
    }

    return $return;

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