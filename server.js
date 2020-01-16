var express = require("express")
var path = require("path")
var fs = require("fs")

var app = express()
var PORT = 3000

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"))
})

app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "notes.html"))
})

app.get("/api/notes", function(req, res) {
    fs.readFile("db/db.json",'utf8', function(err, data){
        if (err) {
            console.log(err)
        }
        else {
            res.json(data)
            console.log("potato")
            console.log(data)
        }
    })
})

app.listen(PORT, function(){
    console.log("I am listening, coder")
})