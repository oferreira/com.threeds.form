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
};
