const gulp = require('gulp');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');

// Styles Task
// Uglyfies (minifies)
gulp.task('styles', function () {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
});

// Scripts Task
// Uglyfies (minifies)
gulp.task('scripts', function () {
    gulp.src('./src/js/*.js')
    .pipe(uglify().on('error', uglify.logError))
    .pipe(gulp.dest('./public/minjs'));
});