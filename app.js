const path = require('path');
const koa = require('koa');
const app = koa();
const router = require('koa-router')();
const render = require('./lib/render');
const fs = require('fs');
const yaml = require('js-yaml');
const serve = require('koa-serve');

const config = yaml.safeLoad((fs.readFileSync('./config.yml','utf-8')));

app.use(serve('assets'));

app.use(router.routes()).use(router.allowedMethods());

//important: this code need write back to last app.use
const server = require('http').Server(app.callback()),
    io = require('socket.io')(server);

const socket = io;
io.on('connection', function(socket){
  console.log("user connected!");
  socket.on('from teacher key',function(key){
  	io.emit('from teacher sent',key);
  })
});

router.get('/teacher', function *(next) {
	this.body = yield render('teacher',{title:config.global.title,lang:config.global.language});
});

router.get('/', function *(next) {
	this.body = yield render('index',{title:config.global.title,lang:config.global.language});
});

server.listen(config.port,config.ip,function(){
	console.log("Server is running at "+config.ip+":"+config.port);
});