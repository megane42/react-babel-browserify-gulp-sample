var gulp       = require('gulp');
var browserify = require('browserify');
var babelify   = require('babelify');
var source     = require('vinyl-source-stream');
var buffer     = require('vinyl-buffer');
var webserver  = require('gulp-webserver');
var uglify     = require('gulp-uglify');
var plumber    = require('gulp-plumber');
var concat     = require('gulp-concat');
var css_minify = require('gulp-minify-css');

gulp.task('browserify', function() {
  browserify('./src/js/main.jsx', { debug: true })
    .transform(babelify)
    .bundle()
    .on("error", function (err) { console.log("Error : " + err.message); })
    .pipe(source('app.min.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('./app/js/'))
});

gulp.task('css', function () {
  gulp.src('./src/css/**/*.css')
      .pipe(plumber())
      .pipe(concat('style.min.css'))
      .pipe(css_minify())
      .pipe(gulp.dest('./app/css/'));
});

gulp.task('watch', function() {
  gulp.watch('./src/js/*.jsx', ['browserify']);
  gulp.watch('./src/css/**/*.css', ['css']);
});

gulp.task('webserver', function() {
  gulp.src('./app')
    .pipe(webserver({
      host: '0.0.0.0',
      livereload: true
    }));
});

gulp.task('default', ['browserify', 'css', 'watch', 'webserver']);
