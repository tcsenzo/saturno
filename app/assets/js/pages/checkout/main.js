var Main = require('../../main'),
    CcValidator = require('./ccValidator');

function Checkout() {
  new CcValidator();
}

new Checkout();
