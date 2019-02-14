/* globals module */

(function () {
  'use strict'

  const workingDir = './src'
  const deployDir = './public'
  const paths = {
    css: `${workingDir}/sass`,
    twig: `${workingDir}/twig`,
    js: `${workingDir}/js`,
    fonts: `${workingDir}/fonts`,
    images: `${workingDir}/images`,
    libraries: `${workingDir}/libraries`,
    dist_css: `${deployDir}/css`,
    dist_js: `${deployDir}/js`,
    dist_html: `${deployDir}`,
    dist_images: `${deployDir}/img`,
    data: `${workingDir}/data`
  }
  const browserSupport = ['last 2 version', '> 1%', 'ie 9']

  module.exports = {
    workingDir: workingDir,
    deployDir: deployDir,
    paths: paths,
    browserSupport: browserSupport,
    server: deployDir
  }
})()
