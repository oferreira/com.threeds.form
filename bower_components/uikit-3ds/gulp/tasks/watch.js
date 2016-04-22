var gulp = require('gulp');
var browserSync = require('browser-sync');
var shell = require('gulp-shell');

gulp.task('watch', ['build', 'browser-sync'], function () {
    console.log(('Build Complete: Starting Site Watch / BrowserSync').green);

    gulp.watch(['threeds/sass/**', 'doc/client/stylesheets/sass/**'], ['styles-changed', browserSync.reload]);
    gulp.watch(['threeds/js/*.js', 'threeds/js/**/*.js', 'threeds/locals/*.json'], ['scripts-changed', browserSync.reload]);
    gulp.watch(['docs/*.html', 'docs/**/*.html', 'docs/**/**/*.html'], browserSync.reload);
    gulp.watch(['gulp/*.js', 'gulp/**/*.js'], ['build-changed'], browserSync.reload);
});
