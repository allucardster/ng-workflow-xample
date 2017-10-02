var express = require('express');
var app = module.exports = express(),
    http = require('http'),
    path = require('path');
app.set('port', process.env.PORT || 8000);

app.use(express.static(path.join(__dirname, 'public')));

// Redirect all requests to the index
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });
  
// Starting express server
http.createServer(app).listen(app.get('port'), function () {
console.log('Express server listening on port ' + app.get('port'));
});