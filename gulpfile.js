var gulp = require('gulp');
var clean = require('gulp-clean');

gulp.task('cleanPublic', function () {
  return gulp.src('public/*')
    .pipe(clean());
});


gulp.task('copyFiles', ['cleanPublic'], function(){
  return gulp.src([
      "./HipHopcopy.wav",
      "./index.html",
      "./node_modules/jquery/dist/jquery.min.js",
      "./node_modules/wavesurfer.js/dist/wavesurfer.min.js",
      "./node_modules/jstree/dist/**"
  ])
  .pipe(gulp.dest('./public/'));
});


gulp.task('default', ['copyFiles']);
