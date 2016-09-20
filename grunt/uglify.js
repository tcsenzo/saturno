module.exports = {
  my_target: {
    files: [{
      "expand": true,
      "cwd": "app/assets/dist/js/",
      "src": ["main.js", "pages/**/main.js"],
      "dest": "app/assets/dist/js/",
      "ext": ".min.js"
    }]
  }
}
