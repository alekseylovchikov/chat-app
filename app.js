var express = require('express');
var app = express();
var uuid = require('node-uuid');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;

// load json data
var rooms = require('./data/rooms.json');

// set view engine jade
app.set('view engine', 'jade');
app.set('views', './views');

// include static files
app.use(express.static('public'));
app.use(express.static('node_modules/bootstrap/dist'));

app.use(bodyParser.urlencoded({ extended: true }));

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

// create new chat room template
app.get('/admin/rooms/add', function(req, res) {
    res.render('add', { title: "Add new chat room" });
});

// send data from form
app.post('/admin/rooms/add', function(req, res) {
    // create new room variable
    var room = {
        name: req.body.name,
        id: uuid.v4()
    };

    // emulate saving new room
    rooms.push(room);

    res.redirect('/admin/rooms');
});

// listen server
app.listen(port, function() {
	console.log('open: http://localhost:' + port);
});