var gulp = require('gulp');
var config = require('../config');
var args = require('yargs').argv;
var sftp = require('gulp-sftp');
var gulpSequence = require('gulp-sequence');
var GulpSSH = require('gulp-ssh')

gulp.task('deploy', gulpSequence('deploy-upload'/*, 'deploy-cache-rebuild'*/));


gulp.task('deploy-upload', function () {
    if (typeof args.env != "undefined" && (args.env != "int" && args.env != "qal" && args.env != "ppd" && args.env && "prod")) {
        console.log('error : ', '--env in not defined or is invalid')
        return false;
    }

    if (args.env == "int") {
        gulp.src(['dist/*', 'dist/**/*'])
            .pipe(sftp(config.env[args.env]));
    }


    if (args.env == "qal") {
        console.log(config.env[args.env]);
        gulp.src(['dist/*', 'dist/**/*'])
            .pipe(sftp(config.env[args.env]));
    }

    if (args.env == "ppd") {
        gulp.src(['dist/*', 'dist/**/*'])
            .pipe(sftp(config.env[args.env + '1']))
            .pipe(sftp(config.env[args.env + '2']));
    }

    if (args.env == "prod") {
        gulp.src(['dist/*', 'dist/**/*'])
            .pipe(sftp(config.env[args.env + '1']))
            .pipe(sftp(config.env[args.env + '2']));
    }
});

gulp.task('deploy-cache-rebuild', function () {
    if (args.env == "int" || args.env == "qal") {
        serv1 = new GulpSSH({
            ignoreErrors: false,
            sshConfig: config.env[args.env]
        });

        serv1.exec(['cd ' + config.env[args.env].drushPath, 'drush cr all'], {filePath: 'cache-rebuild-' + args.env + '.log'})
            .pipe(gulp.dest('logs'))
    }

    if (args.env == "ppd" || args.env == "prod") {
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