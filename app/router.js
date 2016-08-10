let controllers = require('./controllers');

class Router {
	constructor(app) {
		app.get('/', (req, res) => controllers.indexController.index(res));

		app.get('/cadastro', (req, res) => controllers.signUpController.index(res));
		app.post('/cadastro', (req, res) => controllers.signUpController.create(req, res));

		app.get('/login', (req, res) => controllers.loginController.index(res));
		app.post('/login', (req, res) => controllers.loginController.login(req, res));
		app.post('/logout', (req, res) => controllers.loginController.logout(req, res));
	}
}

module.exports = Router;
