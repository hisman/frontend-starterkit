'use strict';

module.exports = function (gulp, plugins, config, browserSync) {
    return function () {
        var fonts = ['src/assets/fonts/**/*', '!src/assets/fonts/.gitkeep'];

        config.vendors.fonts.forEach(function(el){
            fonts.push(el + '**/*');
        });

        gulp.src(fonts)
            .pipe(gulp.dest('dist/assets/fonts'))
            .pipe(browserSync.stream())
            .pipe(plugins.notify('Fonts are copied'));
    };
};