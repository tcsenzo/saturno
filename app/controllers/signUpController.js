class SignUpController {

  index(res) {
    res.render("signUp/index");
  }

  create(req, res) {
    console.log(req.body);
    //res.render("index/index");
  }

}

module.exports = new SignUpController();
