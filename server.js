var http = require("http");
var PORT = 8080;

var server = http.createServer(handleRequest);

function handleRequest(request, response){
    response.end("It Works!");
}

server.listen(PORT, function(){
    console.log("listening to http://localhost:" + PORT);
});