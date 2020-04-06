const express = require('express');
const routes = require('./routes/routes.js');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');
const cookieparser = require('cookie-parser');
const handlebars = require('handlebars');
const app = express ();
const port = 3000;
const db = require('./models/db.js');
const data = require('./add_data.js');
const moment = require('moment');

app.use(bodyparser.urlencoded({
	extended: true
}));
app.use(cookieparser());
app.use(bodyparser.json());
app.set('view engine', 'hbs');
app.engine( 'hbs', exphbs({
    extname: 'hbs', // configures the extension name to be .hbs instead of .handlebars
    defaultView: 'main', // this is the default value but you may change it to whatever you'd like
    layoutsDir: path.join(__dirname, '/views/layouts'), // Layouts folder
    partialsDir: path.join(__dirname, '/views/partials'), // Partials folder
  }));
app.use(express.static(__dirname + '/public'));
handlebars.registerHelper('dateFormat', function(date){
	moment.suppressDeprecationWarnings = true;
	return moment(date).format("MMM DD, YYYY");
});
handlebars.registerHelper('memoryDateFormat', function(date){
	moment.suppressDeprecationWarnings = true;
	return moment(date).format("YYYY-MM-DD");
});
handlebars.registerHelper('StringFormat', function(string){
	return string.replace(/["']/g, "");
});
handlebars.registerHelper('if_eq', function(a, b, opts) {
    if (a == b) {
        return opts.fn(this);
    } else {
        return opts.inverse(this);
    }
});
app.use('/', routes)

db.connect();
data.addData();

app.listen(port, function(){
	console.log('App listening at port ' + port);
});