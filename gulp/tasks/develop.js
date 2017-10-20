var gulp = require('gulp'),
    clean = require('gulp-clean');

var config = require('../gulp_config.js');

gulp.task('dev', ['sass','watch']);

gulp.task('clean', function() {
    return gulp.src(config.scss.dest).pipe(clean());
})