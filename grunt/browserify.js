module.exports = {
  dist: {
    files: [{
      "expand": true,
      "cwd": "app/assets/js/",
      "src": ["main.js", "pages/checkout/main.js"],
      "dest": "app/assets/dist/js/",
      "ext": ".js"
    }]
  }
}
