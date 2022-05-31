const { render } = require('ejs');
const express = require('express')
const pokemon = require("./models/pokemon")
const app = express()

const port = 3000

const sentence = 


app.set('view engine', 'ejs'); 
//app.set('views', './views' );


app.get("/", (req, res) => {
    //console.log(req);
    res.send("Welcome to the Pokemon App!");
})
//creating url not folder 
app.get("/pokemon", (req, res) => {
    res.render("index", {data: pokemon})
})

app.get('/pokemon/index', (req,res) => {
    res.send('show',req.params.id )
   
})



app.listen(port, () => {
    console.log("RUN RUN RUN");
})

