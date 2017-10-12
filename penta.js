var express = require('express');
var static = require('express-static');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var multer = require('multer');
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');
var consolidate = require('consolidate');
var ejs = require('ejs');
var route = require('express-route');


const multerObj = multer({dest: './static/upload'});
  
var app = express();
app.set('port', process.env.PORT || 3000);

// 1.获取请求数据
// get自带，主要处理post
app.use(multerObj.any());

// 2.cookie session
app.use(cookieParser());

// 防止污染全局变量
(function() {
    var sessionKeys = [];
    for (var i = 0; i < 100000; i++) {
        sessionKeys[i] = 'a_' + Math.random(); 
    }

    app.use(cookieSession({
        name: 'session_id',
        keys: sessionKeys,
        max: 20*60*1000
    }))
})();


// 3.模板
app.engine('html', consolidate.ejs); 
app.set('views', 'template');
app.set('view engine', 'html');
// 4.route

// app.use('/', require('./routes/web/web.js')());
app.use('/admin', require('./routes/admin/admin.js')());

// 5.default:static

app.use(static('./static'));

// 设置handlebars模板引擎


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