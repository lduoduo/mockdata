var app = require('koa')()
    , bodyparser = require('koa-bodyparser')
    , route = require('koa-route')
    , cors = require('kcors')
    , logger = require('koa-logger')
    , json = require('koa-json')
    , views = require('koa-views')
    , onerror = require('koa-onerror');
// , multer = require('koa-multer');

var fs = require('fs');

var port = process.env.PORT || '9998';
var http = require('http');
var https = require('https');


var debug = require('debug')('demo:server');

var routers = require('./routes');
var mongo = require('koa-mongo');
var config = require('./config');

//https option
var options = {
    key: fs.readFileSync('keys/server.key'),
    cert: fs.readFileSync('keys/server.crt'),
    port: 9999
};

// global middlewares
app.use(views('views', {
    root: __dirname + '/views',
    default: 'jade'
}));

app.use(bodyparser({
    "formLimit": "50mb",
    "jsonLimit": "50mb",
    "textLimit": "50mb"
}));
app.use(json({ limit: '50mb' }));
app.use(logger());

app.use(mongo({
    uri: 'mongodb://localhost:27017/datas', //or url
    max: 100,
    min: 1,
    timeout: 30000,
    log: false
}));

app.use(function* (next) {
    var start = new Date;
    yield next;
    var ms = new Date - start;
    console.log('%s %s - %s', this.method, this.url, ms);
});

app.use(function* (next) {
    try {
        yield next;
    } catch (e) {
        this.body = e.stack;
    }
});

app.use(require('koa-static')(__dirname + '/public'));

app.use(function* (next) {
    try {
        yield next;
    } catch (e) {
        console.log(e);
        this.body = "500 happens:" + e.message;
    }
});

//跨域
app.use(cors());

app.use(route.get('/', routers.list));
app.use(route.get('/feedback', routers.feedback));
app.use(route.post('/updateFeedback', routers.updateFeedback));
app.use(route.get('/detail', routers.detail));
app.use(route.get(/\/option\/\w+?/, routers.option));
app.use(route.post(/\/option\/\w+?/, routers.update));
app.use(route.get(/\/nodeapi\/\w+?/, routers.data));
app.use(route.post(/\/nodeapi\/\w+?/, routers.data));
app.use(route.get('/logs', routers.logs));
app.use(route.post('/updatelog', routers.updateLog));

app.on('error', function(err, ctx) {
    console.log(err.stack);
    ctx.render(err.stack);
});

// module.exports = app;

//http server
http.createServer(app.callback()).listen(9998, function() {
    console.log('server http on ' + port);
});

//https
https.createServer(options, app.callback()).listen(9999, function() {
    console.log('server https on 9999');
});
