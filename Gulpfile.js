var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	notify = require('gulp-notify');

// Styles
gulp.task('styles', function() {
	gulp.src('sass/main.scss')
	.pipe(sass({style: "expanded"}))	
    .pipe(gulp.dest('css/'))
    .pipe(autoprefixer('last 2 version'))
    .pipe(notify({ message: 'Styles task complete' }))
})

//Watch task
gulp.task('default',function() {
    gulp.watch('sass/*.scss', ['styles']);
})