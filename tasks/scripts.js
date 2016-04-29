'use strict';

module.exports = function (gulp, plugins, config, browserSync) {
    return function () {
        var vendorConcat = [],
            vendorNoConcat = [];

        config.vendors.scripts.forEach(function(el){
            if (el.concat){
                vendorConcat.push(el.file);
            }else{
                vendorNoConcat.push(el.file);
            }
        });

        gulp.src(vendorNoConcat)
            .pipe(gulp.dest('dist/assets/js/vendors'))
            .pipe(browserSync.stream());

        gulp.src(vendorConcat)
            .pipe(plugins.concat('vendors.js'))
            .pipe(gulp.dest('dist/assets/js/vendors'))
            .pipe(plugins.uglify())
            .pipe(plugins.rename(function(path){
                path.basename += '.min';
            }))
            .pipe(gulp.dest('dist/assets/js/vendors'))
            .pipe(browserSync.stream());

        gulp.src('src/assets/js/**/*.js')
            .pipe(plugins.concat('scripts.js'))
            .pipe(gulp.dest('dist/assets/js'))
            .pipe(plugins.uglify())
            .pipe(plugins.rename(function(path){
                path.basename += '.min';
            }))
            .pipe(gulp.dest('dist/assets/js'))
            .pipe(browserSync.stream())
            .pipe(plugins.notify('Script files are minified'));
    };
};