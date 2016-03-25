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
          "src": ["**/*.js", "!assets/js/*.js"],
          "dest": "dist/",
          "ext": ".js"
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-babel');

  grunt.registerTask('default', ['babel']);
}