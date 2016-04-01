import Router from './router'
class App {
	constructor() {
		let express = require('express'),
				app = express(),
    		http = require('http').Server(app),
    		i18n = require('i18n');

    this.i18nConfig(i18n);
		this.appConfig(app, express, i18n);

		new Router(app);
		this.init(http);
	}

	i18nConfig(i18n) {
		i18n.configure({
		  locales:['en'],
		  // todo: arrumar esse path (perde a referencia quando os arquivos compilados estao em /dist)
		  directory: 'app/locales'
		});
	}

	appConfig(app, express, i18n) {
		app.set('view engine', 'jade');
    app.set('views', `${__dirname}/../app/views`);
    app.use(i18n.init);
		app.use('/assets', express.static(`${__dirname}/assets`));
	}

	init(http) {
		let port = process.env.PORT || 9090,
				server = process.env.IP || 'localhost';
		http.listen(port, server, function() {
			console.log('Listening on ' + server + ':' + port);
		});
	}
}

new App();