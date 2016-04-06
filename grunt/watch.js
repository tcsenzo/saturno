module.exports = {
  es6Backend: {
    files: ['app/**/*.js', '!app/assets/**/*'],
    tasks: ['newer:babel']
  },
  es6Frontend: {
    files: ['app/assets/js/**/*.js'],
    tasks: ['newer:browserify']
  },
  stylus: {
    files: ['app/assets/stylus/**/*.styl'],
    tasks: ['newer:stylus']
  }
}