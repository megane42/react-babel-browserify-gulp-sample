var gulp       = require('gulp');
var browserify = require('browserify');
var babelify   = require('babelify');
var source     = require('vinyl-source-stream');
var webserver  = require('gulp-webserver');

gulp.task('browserify', function() {
  browserify('./src/main.jsx', { debug: true })
    .transform(babelify)
    .bundle()
    .on("error", function (err) { console.log("Error : " + err.message); })
    .pipe(source('app.js'))
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
