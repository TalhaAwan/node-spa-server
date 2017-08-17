/**
 * Main application file
 */

 'use strict';
 const http = require('http');

 const express = require('express');

// Setup server
const  app = express();
const  server = http.createServer(app);


app.use( express.static( "dist" ) );

app.all('*', function(req, res) {
	res.sendFile('/dist/index.html', { root: __dirname });
});

// Start server
function startServer() {
    server.listen(process.env.PORT || 9000, function() {
		console.log('Express server listening on ' + process.env.PORT || 9000);
	});
}

setImmediate(startServer);

