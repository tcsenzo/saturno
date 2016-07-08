let IndexController = require('./controllers/index');

class Router {
	constructor(app) {
		app.get('/', (req, res) => IndexController.index(res));
	}
}

module.exports = Router;
