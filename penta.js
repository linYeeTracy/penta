var express = require('express');
var handlebars = require('express-handlebars').create({
    // extname: '.hbs',
    defaultLayout: 'main'});

var fortune = require('./lib/fortune');
// var weather = require('./lib/weather');

// console.log(weather.getWeather());


var app = express();

// 设置handlebars模板引擎
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

console.log(__dirname);
app.use(express.static(__dirname + '/public'));

app.use(function(req, res, next) {
    if(!res.locals.partials) res.locals.partials = {};
    res.locals.partials.weather = {
        locations: 'xx'
    };

    next();
})

app.get('/', function(req, res) {
    res.render('home');
})

app.get('/headers', function(req, res) {
    res.set('Content-type', 'text/plain');
    var s = '';
    for(var name in req.headers) {
        s += name + ':' + req.headers[name] + '\n';    
    }
    res.send(s);
})

app.get('/about', function(req, res) {
    res.render('about', {fortune: fortune.getFortune()});
})

// 404 catch-all
app.use(function(req, res) {
    res.type('text/plain');
    res.status(404);
    res.send('404 - not Found');
})

// 500 catch-all
app.use(function(err, req, res, next) {
    console.log(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - server Error');
})

app.listen(app.get('port'), function() {
    console.log('express started on http:localhost:' + app.get('port') + ';');
})