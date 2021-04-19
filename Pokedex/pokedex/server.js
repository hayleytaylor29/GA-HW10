//startup code
const express = require('express');
const app = express();
const Pokemon = require('./models/pokemon.js')
const port = 3000;

//route for index.ejs - index page
app.get('/', (req, res) => {
    console.log('this works')
    res.render('index.ejs', { allPokemon: Pokemon});
})

//route for show.ejs - pokemon info page
app.get('/:index', (req, res) => {
    res.render('show.ejs', { allPokemon: Pokemon[req.params.index]})
})



//listening for port:3000
app.listen(port, () => {
    console.log('listening to port: ', port)
})