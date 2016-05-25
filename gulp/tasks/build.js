var gulp = require('gulp');

gulp.task('build', ['scripts', 'styles']);
gulp.task('build-changed', ['scripts-changed', 'styles-changed']);