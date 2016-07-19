`use strict`;
let Router = require(`./router`),
		express = require(`express`),
		http = require(`http`),
		i18n = require(`i18n`);

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
		  locales:[`en`],
		  directory: `app/locales`,
			objectNotation: true,
			api: {
				'__': 't'
			}
		});
	}

	appConfig(app) {
		app.set(`view engine`, `jade`);
    app.set(`views`, `app/views`);
    app.use(i18n.init);
		app.use(`/assets`, express.static(`app/assets/dist`));
		app.locals.basedir = 'app/views';
	}

	startServer(server) {
		let port = process.env.PORT || 4000,
				serverName = process.env.IP || `localhost`;

		server.listen(port, serverName, () => console.log(`Listening on ${serverName}:${port}`));
	}
}

new App();
