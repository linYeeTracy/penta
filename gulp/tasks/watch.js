var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('watch', function() {
    watch('./static/scss/**/*.scss', function(){  
        gulp.start('sass');             //出现修改、立马执行sass任务
    })
})