let fs = require('fs');

class ViewHelpers {

  currentFileName() {
    return __dirname;
  }

  assetExists(path) {
    debugger
    return fs.existsSync(`${__dirname}/../assets/dist/${path}`);
  }
}

module.exports = new ViewHelpers();
