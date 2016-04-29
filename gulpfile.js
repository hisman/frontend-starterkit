'use strict';

var gulp = require('gulp'),
    config = require('./config.json'),
    plugins = require('gulp-load-plugins')(),
    browserSync = require('browser-sync').create();

/**
 * Get gulp task.
 *
 * @param  {string} task
 * @return {object}
 */
var getTask = function (task) {
    return require('./tasks/' + task)(gulp, plugins, config, browserSync);
}

/*
 |----------------------------------------------------------------
 | Gulp Tasks
 |----------------------------------------------------------------
 */

gulp.task('html', getTask('html'));

gulp.task('sass', getTask('sass'));

gulp.task('fonts', getTask('fonts'));

gulp.task('scripts', getTask('scripts'));

gulp.task('images', getTask('images'));

gulp.task('default', ['sass', 'scripts', 'html', 'images', 'fonts']);

gulp.task('watch', ['default'], function(){
    browserSync.init({
        server: './dist'
    });

    gulp.watch(['src/**/*', '!src/assets/**/*'], ['html']);
    gulp.watch('src/assets/scss/**/*.+(sass|scss)', ['sass']);
    gulp.watch('src/assets/fonts/**/*', ['fonts']);
    gulp.watch('src/assets/js/**/*.js', ['scripts']);
    gulp.watch('src/assets/img/**/*.+(jpg|jpeg|gif|png|svg)', ['images']);
});