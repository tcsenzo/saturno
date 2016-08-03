class SignUpController {

  index(res) {
    res.render("signUp/index");
  }

}

module.exports = new SignUpController();
