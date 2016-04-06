module.exports = {
    compile: {
      options: {
        use: [
          require('jeet'),
          require('rupture')
        ],
        paths: [
          "node_modules/jeet/stylus",
          "node_modules/rupture"
        ]
      },
      files: [
        {
          'expand': true,
          'cwd': 'app/assets/stylus/pages/',
          'src': '**/page.styl',
          'dest': 'dist/assets/css/pages/',
          'ext': '.css'
        }
      ]
    }
}