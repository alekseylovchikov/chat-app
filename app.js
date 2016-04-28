var express = require('express');
var app = express();

app.set('view engine', 'jade');
app.set('views', './views');

app.use(express.static('public'));
app.use(express.static('node_modules/bootstrap/dist'));

app.get('/', function(req ,res) {
    res.render('index', {
        title: 'Home'
    });
});

app.get('/admin/rooms', function(req, res) {
    res.render('rooms', {
        title: 'Chat Rooms'
    });
});

app.listen(3000, function() {
	console.log('open: http://localhost:3000');
});