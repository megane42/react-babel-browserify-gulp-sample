var gulp       = require('gulp');
var browserify = require('browserify');
var babelify   = require('babelify');
var source     = require('vinyl-source-stream');
var buffer     = require('vinyl-buffer');
var webserver  = require('gulp-webserver');
var uglify     = require('gulp-uglify');

gulp.task('browserify', function() {
  browserify('./src/main.jsx', { debug: true })
    .transform(babelify)
    .bundle()
    .pipe(source('app.min.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('./app/'))
});

gulp.task('watch', function() {
  gulp.watch('./js/*.jsx', ['browserify'])
});

gulp.task('webserver', function() {
  gulp.src('./app')
    .pipe(webserver({
      host: '0.0.0.0',
      livereload: true
    }));
});

gulp.task('default', ['browserify', 'watch', 'webserver']);
