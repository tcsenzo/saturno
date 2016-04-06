module.exports = {
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
}