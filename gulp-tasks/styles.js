/* globals require, process, __dirname */

(function () {
  'use strict'

  const gulp = require('gulp')
  const browserSync = require('browser-sync').create()
  const config = require('../gulp-config')
  const prefix = require('gulp-autoprefixer')
  const sass = require('gulp-sass')
  const sassGlob = require('gulp-sass-glob')
  const sourcemaps = require('gulp-sourcemaps')

  /**
   * Generate CSS
   */
  gulp.task('styles', ['browser-support'])

  /**
   * Base CSS
   */
  gulp.task('base-styles', () => {
    return gulp.src(`${config.paths.css}/*.scss`)
      .pipe(sourcemaps.init())
      .pipe(sassGlob())
      .pipe(sass().on('error', sass.logError))
      .pipe(prefix(config.browserSupport))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(config.paths.dist_css))
      .pipe(browserSync.stream())
  })

  /**
   * Browser Support
   */
  gulp.task('browser-support', ['base-styles'], () => {
    return gulp.src(`${config.paths.css}/browser-support/*.scss`)
      .pipe(sassGlob())
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest(config.paths.dist_css))
  })
})()
