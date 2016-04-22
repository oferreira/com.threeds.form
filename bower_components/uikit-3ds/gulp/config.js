module.exports = {
    project: {
        name: 'uikit3ds',
    },
    docs: {
        scripts: {
            app: {
                filename: 'threeds',
                base: 'threeds/js',
                src: [
                    'dist/js/locals.js',
                    'threeds/js/*.js',
                    'threeds/js/**/*.js'

                ],
                dist: 'doc/client/libs/threeds/js'
            },
        },
        styles: {
            sass: {
                base: 'doc/client/stylesheets/sass',
                src: 'doc/client/stylesheets/sass/style.scss',
                dist: 'doc/public'
            },
            app: {
                base: 'threeds/sass',
                src: 'threeds/sass/threeds.scss',
                dist: 'doc/client/libs/threeds/css'
            },
        },
        browserSync: {
            root: 'docs',
        },
    },
    threeds: {
        scripts: {
            app: {
                filename: 'threeds',
                base: 'threeds/js',
                src: [
                    'dist/js/locals.js',
                    'threeds/js/*.js',
                    'threeds/js/**/*.js'
                ],
                dist: 'dist/js'
            },
            header: {
                filename: 'threeds-header',
                base: 'threeds/js',
                src: [
                    'dist/js/locals.js',
                    'threeds/js/setting.js',
                    'threeds/js/services/user.js',
                    'threeds/js/services/url.js',
                    'threeds/js/services/cache.js',
                    'threeds/js/service.js',
                    'threeds/js/user-cookie.js',
                    'threeds/js/watch.js',
                    'threeds/js/i18n.js',
                    'threeds/js/modal.js',
                    'threeds/js/header.js',
                ],
                dist: 'dist/js'
            }
        },
        styles: {
            sass: {
                base: 'threeds/sass',
                src: 'threeds/sass/threeds.scss',
                dist: 'dist/css'
            },
        },
        fonts: {
            icons: {
                src: 'threeds/img/icon-font/*.svg',
                dist: 'dist/fonts',
                options: {
                    fontName: "3ds_icons",
                    timestamp: 10,
                    appendUnicode:true,
                }
            },
        },
    },
    header: {
        scripts: {},
        styles: {
            sass: {
                base: 'threeds/sass',
                src: 'threeds/sass/threeds-header.scss',
                dist: 'dist/css'
            },
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
};
