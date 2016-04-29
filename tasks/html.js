'use strict';

module.exports = function (gulp, plugins, config, browserSync) {
    return function () {
        gulp.src(['src/**/*', '!src/assets/**/*'])
            .pipe(gulp.dest('dist'))
            .pipe(browserSync.stream())
            .pipe(plugins.notify('HTML files are copied'));
    };
};