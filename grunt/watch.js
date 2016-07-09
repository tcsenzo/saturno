module.exports = {
  es6Frontend: {
    files: ['app/assets/js/**/*.js'],
    tasks: ['newer:browserify']
  },
  stylus: {
    files: ['app/assets/stylus/**/*.styl'],
    tasks: ['stylus']
  }
}
