'use strict';
import Router from './router';
import express from 'express';
import http from 'http';
import i18n from 'i18n';

class App {
	constructor() {
		let	app = express(),
    		server = http.Server(app);

		this.i18nConfig();
		this.appConfig(app);
		new Router(app);

		this.startServer(server);
	}

	i18nConfig() {
		i18n.configure({
		  locales:['en'],
		  // todo: arrumar esse path (perde a referencia quando os arquivos compilados estao em /dist)
		  directory: 'app/locales',
			api: {
				'__': 't'
			}
		});
	}

	appConfig(app) {
		app.set('view engine', 'jade');
    app.set('views', `${__dirname}/../app/views`);
    app.use(i18n.init);
		app.use('/assets', express.static(`${__dirname}/assets`));
	}

	startServer(server) {
		let port = process.env.PORT || 4000,
				serverName = process.env.IP || 'localhost';

		server.listen(port, serverName, () => console.log(`Listening on ${serverName}:${port}`));
	}
}

new App();
