let config = {
	user: 'erckrzmmuviwpo',
	database: 'dct6kcp8dudshc',
	password: 'f4ae387aad9ae5d4db5f60a758ce75f3fca31a7bc493908593697dd32886e9d9',
	host: 'ec2-176-34-111-152.eu-west-1.compute.amazonaws.com',
	port: 5432,
	ssl: true
};

let express = require('express');
var router = express.Router();

let pg = require('pg');
let app = express();
let db = new pg.Client(config);

let tickets = require('./tickets');
let users = require('./users');

db.connect(function (err)
{
	if (err)
		throw err;
	console.log('Connected to the database.');
});

app.get('/tickets', function(req, res){
	db.query("SELECT * FROM \"Ticket\"", function(err, result){
		if(err){
			console.log("There has been an error processing your request: ", err);
		} else {
			console.log("Success: ", result.rows);
			res.end(JSON.stringify(result.rows));
		}
	});
});

app.get('/users', function (req, res)
{
	res.send(users.getAllUsers(db));
});

app.get('/users/:id', function (req, res)
{
	res.send(users.getUserById(db, req.id));
});

app.post('/tickets', function(req, res, next){
	var result = tickets.addTicket(db, req.body);
	res.send(result);
});

app.listen(8080, function ()
{
	console.log('Listening on port 8080')
});