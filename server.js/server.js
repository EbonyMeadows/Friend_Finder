// Import the Express
const express = require("express");
// Import the Express
const path = require("path");

//Creating Express server
const app = express();

// Establishing port and will also use as listener
const PORT = process.env.PORT || 8080;

// Express to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Router
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//Listener
app.listen(PORT, function(){
    console.log("App listening on PORT:" + PORT);
});