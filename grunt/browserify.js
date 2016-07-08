module.exports = {
  dist: {
    options: {
      "transform": [ ["babelify", { "presets": ["es2015"] }] ]
    },
    files: [{
      "expand": true,
      "cwd": "app/assets/js/",
      "src": ["**/*.js"],
      "dest": "app/assets/dist/js/",
      "ext": ".js"
    }]
  }
}
