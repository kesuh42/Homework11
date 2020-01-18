var express = require("express")
var path = require("path")
var fs = require("fs")

var app = express()
var PORT = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.get("/assets/styles.css", function(req, res) {
//     res.sendFile(path.join(__dirname, "assets/css/styles.css"))
// })

// app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "index.html"))
// })

// app.get("/notes", function(req, res) {
//     res.sendFile(path.join(__dirname, "notes.html"))
// })

// app.get("/api/notes", function(req, res) {
//     fs.readFile("db/db.json",'utf8', function(err, data){
//         if (err) {
//             console.log(err)
//         }
//         else {
//             res.json(data)
//             console.log(data)
//         }
//     })
// })

// FIX!!!
// app.post("/api/notes", function(req, res){

//     console.log("fetching notes")
// })

// FIX!!!
// app.delete("/api/notes/:id", function(req, res){

//     console.log("deleting note")
// })

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.use(express.static("public"))

// app.use("/api", "./routes/apiRoutes")
// app.use("/", "./routes/htmlRoutes")

app.listen(PORT, function(){
    console.log("I am listening, coder")
})