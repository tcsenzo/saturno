import Main from '../../main';
import CcValidator from './ccValidator';

class Checkout {
  constructor() {
    new CcValidator();
  }
}

new Checkout();
