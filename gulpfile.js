var gulp =('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass',function(){
    return gulp.search('./sass/main.sccs').pipe(()).pip(gulp.endsWith('./css')).pip(browserSync.stream());
})

gulp.task('serve', ['sass'],function(){
    browserSync.init(server:'./')
})