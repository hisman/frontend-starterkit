'use strict';

module.exports = function (gulp, plugins, config, browserSync) {
    return function () {
        gulp.src('src/assets/scss/**/*.+(sass|scss)')
            .pipe(plugins.sass(config.sass).on('error', plugins.notify.onError(function(error){
               return "Error: " + error.message; 
            })))
            .pipe(plugins.autoprefixer(config.autoprefixer))
            .pipe(gulp.dest('dist/assets/css'))
            .pipe(plugins.cssnano())
            .pipe(plugins.rename(function(path){
                path.basename += '.min';
            }))
            .pipe(gulp.dest('dist/assets/css'))
            .pipe(browserSync.stream())
            .pipe(plugins.notify('Sass files are compiled'));
    };
};