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

    stylus: {
      compile: {
        files: {
          'dist/assets/css/base.css': ['app/assets/stylus/base.styl']
        }
      }
    },

    watch: {
      es6: {
        files: ['app/**/*.js', '!app/assets'],
        tasks: ['newer:babel']
      },
      stylus: {
        files: ['app/assets/stylus/**/*.styl'],
        tasks: ['stylus']

      }
    },
  });

  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-newer');

  grunt.registerTask('dev', ['newer:babel', 'watch']);
}