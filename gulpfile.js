/* globals require, process, __dirname */

(function () {
  'use strict'

  // const gulp = require('gulp')
  const browserSync = require('browser-sync').create()
  const clean = require('gulp-clean')
  const config = require('./gulp-config')
  const gulpSequence = require('gulp-sequence')
  require('require-dir')('./gulp-tasks')

  /**
   * Remove the `dist` folder.
   */
  gulp.task('clean', function () {
    return gulp.src(config.deployDir, { read: false })
      .pipe(clean())
  })

  /**
   * Build out the files.
   */
  gulp.task('build', gulpSequence(['clean'], ['styles', 'html', 'images']))

  /**
   * Task for running browserSync.
   */
  gulp.task('serve', ['build'], () => {
    browserSync.init({
      server: config.server,
      reloadDelay: 600
    })
    gulp.watch([config.paths.twig + '/**/*.twig', config.paths.twig + '/**/*.tpl'], ['html']).on('change', browserSync.reload)
    gulp.watch(config.paths.css + '/**/*.scss', ['styles']).on('change', browserSync.reload)
  })
})()
