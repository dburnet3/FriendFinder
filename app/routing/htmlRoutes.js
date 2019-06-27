var path = require("path");

module.exports = function(app) {

    //A default, catch-all route that leads to home.html which displays the home page.
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, "/../public/home.html"));
})


//A GET Route to /survey which should display the survey page.
app.get("/survey.html", function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
    });

//A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
app.use(function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/home.html"));
    });

};