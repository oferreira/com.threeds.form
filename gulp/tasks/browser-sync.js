var gulp = require('gulp');
var config = require('../config');
var browserSync = require('browser-sync');

gulp.task('browser-sync', function(){
    browserSync({
        notify: false,
        open: false,
        port: 2000,
        ghostMode: false,
        server: {
            baseDir: config.app.browserSync.root + '/',
            middleware: function (req, res, next) {
                //console.log('Adding CORS header for ' + req.method + ': ' + req.url);
                res.setHeader('Access-Control-Allow-Origin', '*');
                next();
            }
        }

    });
})
