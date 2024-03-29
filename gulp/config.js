var fs = require('fs');
var os = require('os');

module.exports = {
    project: {
        name: 'cards-3ds',
    },
    app: {
        scripts: {
            app: {
                filename: 'app',
                base: 'src',
                src: [
                    'src/*.ts',
                    'src/**/*.ts',
                ],
                dist: 'dist'
            },
        },
        styles: {
            sass: {
                base: 'sass',
                src: 'sass/style.scss',
                dist: 'dist'
            }
        },
        browserSync: {
            root: '.',
        },
    },
    libs: {
        sass: {
            outputStyle: 'nested',
            precision: 10,
            errLogToConsole: true
        },
        autoPrefixer: {
            browsers: ['last 2 versions', 'Firefox ESR', 'Explorer >= 9', 'Android >= 4.1', 'Safari >= 6.1']
        },
        complexity: {
            breakOnErrors: false,
            maintainability: 115,
            errorsOnly: false,
            cyclomatic: 5,
            halstead: 25
        }
    },
    env:{
        "int":{
            host: 'webnode01.drupal.private.int.vpc-eu01.it3ds.net',
            port: 22,
            username: 'wwwdev',
            privateKey: fs.readFileSync(os.homedir() + '/.ssh/oah@3ds.com.ppk'),
            remotePath: '/data/3ds/landingpages/current/src/montage/dist/',
            drushPath: '/data/3ds/landingpages/current/src/'
        },
        "qal":{
            host: 'webnode01.drupal.public.qal.vpc-eu01.it3ds.net',
            port: 22,
            username: 'wwwdev',
            privateKey: fs.readFileSync(os.homedir() + '/.ssh/oah@3ds.com.ppk'),
            remotePath: '/data/3ds/landingpages/current/src/montage/dist/',
            drushPath: '/data/3ds/landingpages/current/src/'
        },
        "ppd1":{
            host: 'webnode01.drupal.private.ppd.vpc-eu01.it3ds.net',
            port: 22,
            username: 'wwwdev',
            privateKey: fs.readFileSync(os.homedir() + '/.ssh/oah@3ds.com.ppk'),
            remotePath: '/data/3ds/landingpages/current/src/montage/dist/',
            drushPath: '/data/3ds/landingpages/current/src/'
        },
        "ppd2":{
            host: 'webnode01.drupal.private.ppd.vpc-eu01.it3ds.net',
            port: 22,
            username: 'wwwdev',
            privateKey: fs.readFileSync(os.homedir() + '/.ssh/oah@3ds.com.ppk'),
            remotePath: '/data/3ds/landingpages/current/src/montage/dist/',
            drushPath: '/data/3ds/landingpages/current/src/'
        },
        "prod1":{
            host: 'webnode01.drupal.private.prd.vpc-eu01.it3ds.net',
            port: 22,
            username: 'wwwdev',
            privateKey: fs.readFileSync(os.homedir() + '/.ssh/oah@3ds.com.ppk'),
            remotePath: '/data/3ds/landingpages/current/src/montage/dist/',
            drushPath: '/data/3ds/landingpages/current/src/'
        },
        "prod2":{
            host: 'webnode01.drupal.private.prd.vpc-eu01.it3ds.net',
            port: 22,
            username: 'wwwdev',
            privateKey: fs.readFileSync(os.homedir() + '/.ssh/oah@3ds.com.ppk'),
            remotePath: '/data/3ds/landingpages/current/src/montage/dist/',
            drushPath: '/data/3ds/landingpages/current/src/'
        }
    }
};
