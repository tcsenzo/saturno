'use strict';
module.exports = function(grunt) {
  require('load-grunt-config')(grunt);

  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-newer');

  grunt.registerTask('build', ['babel', 'stylus', 'browserify']);
  grunt.registerTask('dev', ['newer:babel', 'newer:browserify', 'newer:stylus', 'watch']);
}
