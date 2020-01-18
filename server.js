var express = require("express")
var path = require("path")
var fs = require("fs")

var app = express()
var PORT = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.use(express.static("public"))

app.listen(PORT, function(){
    console.log("I am listening, coder")
})