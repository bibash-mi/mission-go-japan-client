
//Install express server
const express = require('express');
const path = require('path');
var sslRedirect = require('heroku-ssl-redirect');

const app = express();
// enable ssl redirect
app.use(sslRedirect());
// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/'));

app.get('/*', function (req, res) {

    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

// Start the app by listening on the default Heroku port
var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
});