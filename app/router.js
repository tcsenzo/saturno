let controllers = require('./controllers');

class Router {
	constructor(app) {
		app.get('/', (req, res) => controllers.indexController.index(res));

		app.get('/cadastro', (req, res) => controllers.signUpController.index(res));
		app.post('/cadastro', (req, res) => controllers.signUpController.create(req, res));
	}
}

module.exports = Router;
