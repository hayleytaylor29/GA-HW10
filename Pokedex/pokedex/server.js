//startup code
const express = require('express');
const app = express();
const Pokemon = require('./models/pokemon.js')
const port = 3000;

//route for index.ejs - index page
app.get('/pokemon', (req, res) => {
    console.log('this works')
    res.render('index.ejs', { allPokemon: Pokemon});
})

//route for new.ejs - create new pokemon
app.get('/pokemon/new', (req, res) => {
    res.render('new.ejs');
    });

//route for show.ejs - pokemon info page
app.get('/pokemon/:index', (req, res) => {
    res.render('show.ejs', { allPokemon: Pokemon[req.params.index]})
})

//route for new - I'm getting the console log and then an error showing on 
//line 22 of show.ejs but not sure what the issue is, tried to look at the fruits lab to 
//get this but not working
app.post('/pokemon', (req, res) => {
    console.log('create route accessed');
    Pokemon.push(req.body);
    res.redirect('/pokemon/' + (Pokemon.length))
})

//edit route - didn't get to set this part up yet, not sure how. Know I need to also
//connect the submit to this?
app.put('/pokemon/edit', (req, res) => {
    Pokemon[req.params.index] = req.body
    res.redirect('/pokemon');

})

//edit route - didn't get to set this part up yet, not sure how
app.get('/pokemon/:index/edit', (req, res) => {
    res.render('edit.ejs',
    {
        pokemon: pokemon[req.params.index],
        index: req.params.index
    })
})

//delete route - didn't get to try and set this part up, not sure how
app.delete('/pokemon/:index', (req, res) => {
    res.send('Delete' + req.params.name)
})

//listening for port:3000
app.listen(port, () => {
    console.log('listening to port: ', port)
})