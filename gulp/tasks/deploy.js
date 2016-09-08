var gulp = require('gulp');
var config = require('../config');
var args = require('yargs').argv;
var sftp = require('gulp-sftp');
var gulpSequence = require('gulp-sequence');
var GulpSSH = require('gulp-ssh')
var environmentHelper = require('../helpers/environment-helper');
var gulpSSH;

gulp.task('deploy', gulpSequence('deploy-upload', 'deploy-cache-rebuild'));


gulp.task('deploy-upload', function () {
    if (environmentHelper.is("demo")) {
        gulp.src(['dist/*', 'dist/**/*'])
            .pipe(sftp(config.env[args.env]));
    }

    if (environmentHelper.is("int")) {
        gulp.src(['dist/*', 'dist/**/*'])
            .pipe(sftp(config.env[args.env]));
    }

    if (environmentHelper.is("qal")) {
        gulp.src(['dist/*', 'dist/**/*'])
            .pipe(sftp(config.env[args.env]));
    }

    if (environmentHelper.is("ppd")) {
        gulp.src(['dist/*', 'dist/**/*'])
            .pipe(sftp(config.env[args.env + '1']))
            .pipe(sftp(config.env[args.env + '2']));
    }

    if (environmentHelper.is("prod")) {
        gulp.src(['dist/*', 'dist/**/*'])
            .pipe(sftp(config.env[args.env + '1']))
            .pipe(sftp(config.env[args.env + '2']));
    }
});

gulp.task('deploy-cache-rebuild', function () {
    if (environmentHelper.is("demo") || environmentHelper.is("int") || environmentHelper.is("qal")) {
        serv1 = new GulpSSH({
            ignoreErrors: false,
            sshConfig: config.env[args.env]
        });

        serv1.exec(['cd ' + config.env[args.env].drushPath, 'drush cr all'], {filePath: 'cache-rebuild-' + args.env + '.log'})
            .pipe(gulp.dest('logs'))
    }

    if (environmentHelper.is("ppd") || environmentHelper.is("prod")) {
        var serv1 = new GulpSSH({
            ignoreErrors: false,
            sshConfig: config.env[args.env + '1']
        });

        serv1.exec(['cd ' + config.env[args.env + '1'].drushPath, 'drush cr all'], {filePath: 'cache-rebuild-' + args.env  + '1' + '.log'})
            .pipe(gulp.dest('logs'))

        var serv2 = new GulpSSH({
            ignoreErrors: false,
            sshConfig: config.env[args.env + '2']
        });

        serv2.exec(['cd ' + config.env[args.env + '2'].drushPath, 'drush cr all'], {filePath: 'cache-rebuild-' + args.env  + '2' + '.log'})
            .pipe(gulp.dest('logs'))
    }
});