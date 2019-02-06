var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

gulp.task('watch', function () {
    return watch('app/scss/styles.scss', { ignoreInitial: false })
    .pipe(sass())
    .pipe(gulp.dest('app/css'));
});

gulp.task('sass', function(){
  return gulp.src('app/scss/styles.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
});
