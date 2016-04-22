var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task('meteor', shell.task([
    'cd doc && meteor'
]))
