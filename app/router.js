import IndexController from './controllers/index';

export default class Router {
	constructor(app) {
		app.get('/', function(req, res) {
			IndexController.index(res);
		});
	}
}