var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('watch', ['build', 'browser-sync'], function () {
    console.log(('Build Complete: Starting Site Watch / BrowserSync').green);
    gulp.watch(['src/**/**/*', 'src/**/*', 'src/*'], ['build-changed', browserSync.reload]);
    gulp.watch(['sass/**'], ['styles-changed', browserSync.reload]);
});
