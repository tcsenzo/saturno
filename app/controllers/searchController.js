class SearchController {
  index(req, res) {
    res.render('search/index');
  }
}

module.exports = new SearchController();
