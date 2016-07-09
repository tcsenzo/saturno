module.exports = {
    compile: {
      options: {
        use: [
          require('rupture'),
          //require('senzo-stylus-components')
        ],
        paths: [
          "node_modules/rupture",
          //"node_modules/senzo-stylus-components"
        ]
      },
      files: [
        {
          'expand': true,
          'cwd': 'app/assets/stylus/pages/',
          'src': '**/page.styl',
          'dest': 'app/assets/dist/css/pages/',
          'ext': '.css'
        }
      ]
    }
}
