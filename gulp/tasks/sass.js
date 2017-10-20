var gulp = require('gulp');
var gulp_sass = require('gulp-sass');

var config = require('../gulp_config.js');

gulp.task('sass', function() {
    return gulp.src(config.scss.src)
        .pipe(gulp_sass())
        .pipe(gulp.dest(config.scss.dest));
})