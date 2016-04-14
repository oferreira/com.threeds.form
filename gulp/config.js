module.exports = {
    project: {
        name: 'cards-3ds',
    },
    docs: {
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
                base: 'doc/client/stylesheets/sass',
                src: 'doc/client/stylesheets/sass/style.scss',
                dist: 'doc/client/stylesheets'
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
};
