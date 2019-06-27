// var http = require("http");
var express = require("express");
var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());


// var server = http.createServer(handleRequest);

// function handleRequest(request, response){
//     response.end("It Works!");
// }

// server.listen(PORT, function(){
//     console.log("listening to http://localhost:" + PORT);
// });

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);




app.listen(3000);
console.log("listening to http://localhost:" + PORT)