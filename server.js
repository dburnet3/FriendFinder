// var http = require("http");
var express = require("express");
var app = express();

var path = require("path");
var PORT = 8080;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// var server = http.createServer(handleRequest);

// function handleRequest(request, response){
//     response.end("It Works!");
// }

// server.listen(PORT, function(){
//     console.log("listening to http://localhost:" + PORT);
// });

//A default, catch-all route that leads to home.html which displays the home page.
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, "/app/public/home.html"));
})

//A GET Route to /survey which should display the survey page.
app.get('/survey', function(req, res){
    res.sendFile(path.join(__dirname, "/app/public/survey.html"));
})

app.listen(8080);
console.log("listening to http://localhost:" + PORT)