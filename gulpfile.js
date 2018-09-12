'use strict';

const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const del = require('del');
const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const runSequence = require('run-sequence');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const importCss = require('gulp-import-css');
const concat = require('gulp-concat');

// Set the browser that you want to support
const AUTOPREFIXER_BROWSERS = [
  'ie >= 10',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10'
];

// Gulp task to minify CSS files
gulp.task('styles', function () {
  return gulp.src('./assets/styles/styles.css')
    // Auto-prefix css styles for cross browser compatibility
    .pipe(importCss())
    .pipe(autoprefixer({browsers: AUTOPREFIXER_BROWSERS}))
    // Minify the file
    .pipe(csso())
    // Output
    .pipe(concat('style.min.css'))
    .pipe(gulp.dest('./assets/styles'))
});

// Gulp task to minify all files
gulp.task('default', ['styles'], function () {
  runSequence(
    'styles',
  );
});
