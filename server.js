var express = require("express");

var app = express();

app.use(express.static('public'));

//make way for some custom css, js and images
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/images', express.static(__dirname + '/public/images'));
app.use('/images', express.static(__dirname + '/public/fonts'));
app.use('/images', express.static(__dirname + '/public/scss'));


var server = app.listen(9001, function(){
    var port = server.address('192.168.250.1').port;
    console.log("Server started at http://192.168.250.1:%s", port);
});