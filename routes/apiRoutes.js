var fs = require("fs")

module.exports = function(app) {
    app.get("/api/notes", function(req, res) {
        fs.readFile("db/db.json",'utf8', function(err, data){
            if (err) {
                console.log(err)
            }
            else {
                res.json(data)
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
        
            fs.writeFile("db/db.json", JSON.stringify(json), function(err){
                if (err) throw err;
                console.log(`Adding to notes`)
            })
        })
    })

    // FIX!!!
    app.delete("/api/notes/:id", function(req, res){
        var id = req.params.id
        fs.readFile('db/db.json', "utf8", function (err, data) {
            if (err) throw err;
            var json = JSON.parse(data)

            //NEED TO WRITE FOR LOOP
        
            fs.writeFile("db/db.json", JSON.stringify(json), function(err){
                if (err) throw err;
                console.log(`Deleting note`)
            })
        })
    })
  };
  