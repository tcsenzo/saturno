import Router from './router'
class App {
	constructor() {
		let express = require('express'),
				app = express(),
    		http = require('http').Server(app),
				customRouter = new Router(app);

		this.config(app, express);
		this.init(http);
	}

	config(app, express) {
		app.set('view engine', 'jade');
    app.set('views', `${__dirname}/../app/views`);
		app.use('/assets', express.static(`${__dirname}/assets`));
	}

	init(http) {
		http.listen(9090, function() {
			console.log('Listening on http://localhost:9090');
		});
	}
}

new App();