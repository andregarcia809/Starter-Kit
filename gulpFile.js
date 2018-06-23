const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCss = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const pump = require('pump')
const watch = require('gulp-watch');

//Styles Task
//compiles sass, adds prefixers, minifies css
gulp.task('style', function () {
   return gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(cleanCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('./public/css'));
});
// Images min Task
gulp.task('images',  function () {
    return gulp.src('./src/img/**')
    .pipe(imagemin())
    .pipe(gulp.dest('./public/img'))
});

// Scripts Task
// Uglyfies (minifies)
gulp.task('script', function (cb) {
    pump([
          gulp.src('./src/js/**/*.js'),
          uglify(),
          gulp.dest('./public/js/')
      ],
      cb
    );
  });

// Watch Task
// Watches Js
gulp.task('watch', function () {
    gulp.watch('./src/js/**/*.js', ['script']),
    gulp.watch('./src/sass/**/*.scss', ['style']),
    gulp.watch('./src/img/', ['images'])
});

gulp.task('default', ['watch']);
