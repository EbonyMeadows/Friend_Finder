//=================================================================
//DEPENDENCIES
//Include path package for the correct file path for html
//==================================================================
const path = require("path");

//=================================================================
//ROUTES
//=================================================================

module.exports = function(app){
    //Displays the survey page
    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    //Default to home page when no matching route is found
    app.get("*", function(req, res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};