var fs = require("fs")

module.exports = function(app) {
    app.get("/api/notes", function(req, res) {
        fs.readFile("db/db.json",'utf8', function(err, data){
            if (err) {
                console.log(err)
            }
            else {
                res.json(JSON.parse(data))
            }
        })
    })

    // FIX!!!
    app.post("/api/notes", function(req, res){
        fs.readFile('db/db.json', "utf8", function (err, data) {
            if (err) throw err;
            var json = JSON.parse(data)
            req.body.id = json.length + 1
            json.push(req.body)
            res.send("hello")
        
            fs.writeFile("db/db.json", JSON.stringify(json), function(err){
                if (err) throw err;
                console.log(`Adding to notes`)
            })
        })
    })

    // FIX!!!
    app.delete("/api/notes/:id", function(req, res){
        var id = parseInt(req.params.id)
        fs.readFile('db/db.json', "utf8", function (err, data) {
            if (err) throw err;
            var notesArray = JSON.parse(data)

            var note = notesArray.find(function(note){
                return note.id === id
            })

            var index = notesArray.indexOf(note)
            notesArray.splice(index, 1)
            console.log(notesArray)
        
            fs.writeFile("db/db.json", JSON.stringify(notesArray), function(err){
                if (err) throw err;
                console.log(`Deleting note`)
            })
        })
        res.send("hello")
    })
  };
  