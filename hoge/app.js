var http = require('http');
var express = require('express');
var path = require('path');

var app = express()

app.set('views', path.join(__dirname, 'views'));
app.set('views engine', 'pug');

app.get("/",function(req, res, next) {
    return res.render('index', {title: 'Hello World'});
});

var server = http.createServer(app);
server.listen('3000');

