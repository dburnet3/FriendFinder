var friends = require('../data/friends.js');

// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
module.exports = function(app){
    app.get('/api/friends', function(req, res){
        res.json(friends);
    });

    //Determine the user's most compatible friend
    app.post('/api/friends', function(req, res) {
        var activeUser = req.body;
        var differences = [];

        if (friends.length > 1) {
            friends.forEach(function(user) {
                var totalDifference = 0;

                for (var i = 0; i < activeUser.answers.length; i++) {
                    var otherAnswer = user.answers[i];
                    var thisAnswer = activeUser.answers[i];
                    var difference = +otherAnswer - +thisAnswer;
                    totalDifference += Math.abs(difference);
                }

                differences.push(totalDifference);
            });

            var minimumDifference = Math.min.apply(null, differences);

            var bestMatches = [];

            for (var i = 0; i < differences.length; i++) {
                if (differences[i] === minimumDifference) {
                    bestMatches.push(friends[i]);
                }
            }

            res.json(bestMatches);
        } else {
            res.json(friends);
        }

        friends.push(activeUser);

    });
}