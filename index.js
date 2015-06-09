var spawn = require('child_process').spawn;
var express = require('express');
var app = express();

var server = app.listen(3000);

app.get('/:id', function(req, res){
	res.setHeader("Content-Type", "application/json");
	var whois = spawn('whois', [req.params.id]);
	whois.stdout.setEncoding('utf8');
	whois.stdout.on('data', function(data){
			res.send(data);
	});
});
