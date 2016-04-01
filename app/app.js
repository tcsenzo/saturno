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
		http.listen(process.env.PORT, process.env.IP, function() {
			console.log('Listening on http://' + process.env.IP + ':' + process.env.PORT);
		});
	}
}

new App();