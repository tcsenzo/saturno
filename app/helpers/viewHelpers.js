let fs = require('fs');

class ViewHelpers {

  currentFileName() {
    return __dirname;
  }

  assetExists(path) {
    return fs.existsSync(`${__dirname}/../assets/${path}`);
  }
}

module.exports = new ViewHelpers();
