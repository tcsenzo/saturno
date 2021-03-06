let controllers = require('./controllers'),
		helpers = require('./helpers');

class Router {
	constructor(app) {
		app.get('/', (req, res) => controllers.indexController.index(req, res));

		app.get('/cadastro', (req, res) => controllers.signUpController.index(res));
		app.post('/cadastro', (req, res) => controllers.signUpController.create(req, res));

		app.get('/login', (req, res) => controllers.loginController.index(req, res));
		app.post('/login', (req, res) => controllers.loginController.login(req, res));
		app.post('/logout', (req, res) => controllers.loginController.logout(req, res));
		app.get('/logout', (req, res) => controllers.loginController.logout(req, res));

		app.get('/busca', (req, res) => controllers.searchController.index(req, res));

		app.get('/perfil', helpers.auth.authorize, (req, res, next) => controllers.profileController.index(req, res));

		app.get('/evento/:id', (req, res, next) => controllers.eventController.show(req, res));

		app.get('/pagamento', helpers.auth.authorize, (req, res, next) => controllers.checkoutController.index(req, res));
		app.post('/pagamento', helpers.auth.authorize, (req, res, next) => controllers.checkoutController.checkout(req, res));

		app.get('/historico', helpers.auth.authorize, (req, res, next) => controllers.historyController.index(req, res));
		app.get('/compras/:purchaseId', helpers.auth.authorize, (req, res, next) => controllers.purchaseController.show(req, res));

		app.get('/ticket', helpers.auth.authorize, (req, res, next) => controllers.ticketController.show(req, res));
	}
}

module.exports = Router;
