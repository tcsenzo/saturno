module.exports = {
  dist: {
    options: {
      "transform": [ ["babelify", { "presets": ["es2015"] }] ]
    },
    files: [{
      "expand": true,
      "cwd": "app/assets/js/pages/",
      "src": ["**/main.js"],
      "dest": "app/assets/dist/js/pages/",
      "ext": ".js"
    }]
  }
}
