'use strict';

module.exports = function (gulp, plugins, config, browserSync) {
    return function () {
        var pngquant = require('imagemin-pngquant');
        
        var options = {
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        };

        gulp.src('src/assets/img/**/*.+(jpg|jpeg|gif|png|svg)')
            .pipe(plugins.imagemin(options))
            .pipe(gulp.dest('dist/assets/img'))
            .pipe(browserSync.stream())
            .pipe(plugins.notify('Images are compressed'));
    };
};