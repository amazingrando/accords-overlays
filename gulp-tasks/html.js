/* globals require, process, __dirname */

(function () {
  'use strict'

  const gulp = require('gulp')
  const config = require('../gulp-config')
  const fs = require('fs')
  const path = require('path')
  const twig = require('gulp-twig')
  const w3cjs = require('gulp-w3cjs')

  /**
   * HTML.
   */
  gulp.task('html', ['test-html'])

  /**
   * Build HTML.
   */
  gulp.task('build-html', () => {
    let htmlSource = [
      config.paths.twig + '/*.twig'
    ]
    return gulp.src(htmlSource)
      .pipe(twig())
      .pipe(gulp.dest(config.paths.dist_html))
  })

  /**
   * Test HTML against W3C standards.
   */
  gulp.task('test-html', ['build-html'], () => {
    return gulp.src(config.paths.dist_html)
      .pipe(w3cjs())
      .pipe(w3cjs.reporter())
  })
})()
