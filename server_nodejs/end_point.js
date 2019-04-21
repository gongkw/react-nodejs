var mysql = require('mysql');
const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 4000;

const app = express();

const SELECT_ALL_PLAYERS_QUERY='SELECT * FROM players'

var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "YOURPASSWORD",
    database: "Sports"
  });
  
  con.connect(function(err) {
    if (err) throw err;
  
  });

app.use(cors());

app.get("/", (req, res) => {
    con.query(SELECT_ALL_PLAYERS_QUERY,(err,results)=>{
    if (err){
        return res.send(err)
    }
    else{
        return res.json({data:results})
    }

    })
});

app.get("/save", (req, res) => {
    const {name,team} =req.query
    console.log(req.query)
    const INSERT_NAME_TEAM= `INSERT INTO players (name, team) VALUES('${name}', '${team}')`

    con.query(INSERT_NAME_TEAM,(err,results)=>{
    if (err){
        return res.send(err)
    }
    else{
        return res.send('successfully added')
    }

    })
});


app.listen(PORT, () => {
  console.log(`app running on ${PORT}`);
});
