module.exports = function(app, logger) {

	// Use body-parser to handle HTTP post
	var bodyParser = require('body-parser');
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());
	
	app.get('/', function(req, res) {
		res.render('index');
	});
	
	// Customize 404 page
	// Last request handler.
	app.use(function(req, res) {
		res.status(404);
		res.render('404', {});
	});
	
	// Customize 500 page
	// Last error handler.
	app.use(function(err, req, res, next) {
		console.error(err.stack);
		res.status(500);
		res.render('500', {});
	});
};