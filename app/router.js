let controllers = require('./controllers');

class Router {
	constructor(app) {
		app.get('/', (req, res) => controllers.indexController.index(res));
	}
}

module.exports = Router;
