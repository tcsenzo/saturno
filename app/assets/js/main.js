import sideMenu from './sideMenu';

class Main {
  constructor() {
    this.documentReady();
  }

  documentReady() {
    $(document).ready(() => {
      new sideMenu();
    });
  }
}

export default new Main();
