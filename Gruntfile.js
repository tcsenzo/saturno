'use strict';
module.exports = function(grunt) {

  grunt.initConfig({
    babel: {
      options: {
        sourceMap: true,
        presets: ['es2015']
      },
      dist: {
        files: [{
          "expand": true,
          "cwd": "app/",
          "src": ["**/*.js", "!assets/"],
          "dest": "dist/",
          "ext": ".js"
        }]
      }
    },

    watch: {
      es6: {
        files: ['app/**/*.js', '!app/assets'],
        tasks: ['newer:babel']
      },
    },
  });

  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-newer');

  grunt.registerTask('dev', ['newer:babel', 'watch']);
}