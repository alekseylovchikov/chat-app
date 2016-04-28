var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
// load json data
var rooms = require('./data/rooms.json');

// set view engine jade
app.set('view engine', 'jade');
app.set('views', './views');

// include static files
app.use(express.static('public'));
app.use(express.static('node_modules/bootstrap/dist'));

// home page
app.get('/', function(req ,res) {
    res.render('index', {
        title: 'Home'
    });
});

// view all rooms
app.get('/admin/rooms', function(req, res) {
    res.render('rooms', {
        title: 'Chat Rooms',
        rooms: rooms
    });
});

app.get('/admin/rooms/add', function(req, res) {
    res.render('add');
});

// listen server
app.listen(port, function() {
	console.log('open: http://localhost:' + port);
});