let config = {
	user: 'erckrzmmuviwpo',
	database: 'dct6kcp8dudshc',
	password: 'f4ae387aad9ae5d4db5f60a758ce75f3fca31a7bc493908593697dd32886e9d9',
	host: 'ec2-176-34-111-152.eu-west-1.compute.amazonaws.com',
	port: 5432,
	ssl: true
};

let express = require('express');
let pg = require('pg');
let app = express();
let db = new pg.Client(config);

db.connect(function (err)
{
	if (err)
		throw err;
	console.log('Connected to the database.');
	db.end();
});

app.get('/', function (req, res)
{
	res.send('Hello World!')
});

app.listen(8080, function ()
{
	console.log('Listening on port 8080')
});