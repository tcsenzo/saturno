'use strict';
module.exports = function(grunt) {
  require('load-grunt-config')(grunt);
  // todo: separar essas configs para arquivos externos
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
          "src": ["**/*.js", "!assets/**/*"],
          "dest": "dist/",
          "ext": ".js"
        }]
      }
    },

    browserify: {
      dist: {
        options: {
          "transform": [ ["babelify", { "presets": ["es2015"] }] ]
        },
        files: [{
          "expand": true,
          "cwd": "app/assets/js/",
          "src": ["**/*.js"],
          "dest": "dist/assets/js/",
          "ext": ".js"
        }]
      }
    },

    watch: {
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
    },
  });

  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-newer');

  grunt.registerTask('build', ['babel', 'stylus', 'browserify']);
  grunt.registerTask('dev', ['newer:babel', 'newer:browserify', 'newer:stylus', 'watch']);
}
