'use strict';

var gulp = require('gulp'),
  taskListing = require('gulp-task-listing'),
  rimraf = require('rimraf'),
  exec = require('child_process').exec,
  tslint = require('gulp-tslint');

gulp.task('default', taskListing);

gulp.task('clean', (cb) => {
  rimraf('./dist', cb);
});

gulp.task('compile', ['clean', 'tsc', 'copy'], () => {
  console.log('Clean and Compiled.')
});

gulp.task('watch-compile', () => {
  gulp.watch('src/**/*.ts', ['lint']);
  gulp.watch('src/**/*.ts', ['tsc']);
  gulp.watch('src/config/**/*.json', ['copy']);
});

gulp.task('watch-test', () => {
  gulp.watch('dist/**/*spec.js', ['test']);
});

gulp.task('tsc', (done) => {
  exec('./node_modules/.bin/tsc', (err, stdOut, stdErr) => {
    console.log(stdOut);
    if (err) {
      done(err);
    }
    else {
      done();
    }
  });
});

gulp.task('lint', () => {
  return gulp.src('src/**/*.ts')
    .pipe(tslint())
    .pipe(tslint.report('verbose'));
});

gulp.task('copy', ['copy-config']);

gulp.task('copy-config', () => {
  return gulp.src([
    'src/config/**/*.json',
    '!src/config/env/example',
    '!src/config/env/example/**'
  ])
    .pipe(gulp.dest('./dist/config'));
});

gulp.task('test', (cb) => {

  var testCommand = [
    'NODE_ENV=test',
    './node_modules/.bin/istanbul',
    'cover',
    './node_modules/.bin/_mocha',
    '-x \'*_spec.js\'',
    '--root dist/',
    '--dir test/coverage',
    '--',
    '-R spec',
    '--recursive \'dist/**/*_spec.js\''
  ].join(' ');

  //console.log(testCommand); //cb();

  // exec('./node_modules/.bin/mocha --recursive dist/**/*spec.js', (err, stdOut, stdErr) => {
  exec(testCommand, (err, stdOut, stdErr) => {
    console.log(stdOut);
    console.log(stdErr);
    cb(err);
  });

});
