var express = require('express');
var http = require('http');
var path = require('path');
var i18n = require("i18n-express");
var geolang=require("geolang-express");
var cookieParser = require('cookie-parser');
var config = require('./config');
var log = require('./libs/log') (module);


var session = require('express-session');
var indexRoutes = require('./routes/index');
var app = express();

app.set('port', config.get('port'));
app.engine('ejs', require('ejs-locals'));
app.set('views', path.join(__dirname, '/templates'));
app.set('view engine', 'ejs');
app.use(cookieParser());

 app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}));
 app.use(geolang({
  siteLangs: ["en","ru"],
  cookieLangName: 'ulang'
}));
app.use(i18n({
  translationsPath: path.join(__dirname, 'i18n'),
  siteLangs: ["en","ru"],
    cookieLangName: 'ulang',
    paramLangName : 'clang',
  textsVarName: 'translation'

}));
app.use(express.favicon());
if(app.get('env') == 'development') {
    app.use(express.logger('dev'));
}else {
    app.use(express.logger('default'))
}
require('./routes')(app);
app.use(express.json());
app.use(express.urlencoded());
app.use(express.session({ secret: 'your secret here' }));
app.use(app.router);

app.use(express.static(path.join(__dirname, 'public')));



app.use(function (err, req, res, next) {
    if(app.get('env') == 'development'){
        var errorHandler = express.errorHandler();
        errorHandler(err, req, res, next);
    }else {
        res.send(500);
    }

});

app.use('/', indexRoutes);
http.createServer(app).listen(app.get('port'), function(){
  log.info('Express server listening on port ' + config.get('port'));
});

