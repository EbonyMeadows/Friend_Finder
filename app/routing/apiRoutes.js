const friends = require("../data/friends.js");

module.exports = function(app){
//Get ROUTE displays JSON of all possible friends
    app.get("/api/friends", function(req, res){
        res.json(friends);
    });

    //POST ROUTE
    //This will be used to handle incoming survey results. 
    //This route will also be used to handle the compatibility logic.

    app.post("/api/friends", function(req, res){
        
    })
}