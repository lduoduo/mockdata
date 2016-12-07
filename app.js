var app = require('koa')()
  , bodyparser = require('koa-bodyparser')
  , route = require('koa-route')
  , cors = require('kcors')
  , logger = require('koa-logger')
  , json = require('koa-json')
  , views = require('koa-views')
  , onerror = require('koa-onerror');
// , multer = require('koa-multer');


var port = normalizePort(process.env.PORT || '9999');
var http = require('http');
var server = http.createServer(app.callback());
var debug = require('debug')('demo:server');

var routers = require('./routes');
var mongo = require('koa-mongo');
var config = require('./config');

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
  uri: 'mongodb://' + config.ip + ':27017/datas', //or url
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

//跨域
app.use(cors());

app.use(route.get('/', routers.list));
app.use(route.get('/feedback', routers.feedback));
app.use(route.post('/updateFeedback', routers.updateFeedback));
app.use(route.get('/detail', routers.detail));
app.use(route.get(/\/option\/\w+?/, routers.option));
app.use(route.post(/\/option\/\w+?/, routers.update));
app.use(route.get(/\/nodeapi\/\w+?/, routers.data));

app.on('error', function (err, ctx) {
  console.log(err.stack);
  ctx.render(err.stack);
});

// module.exports = app;


server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

console.log('server on ' + port);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
