const express = require('express')
const pokemonData = require('./Models/pokemon')

//* ========== SETUP
const app = express()
const PORT = 3000
app.set('view engine', 'ejs')
app.set('views', './Views')


//* ========== ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!')
})

app.get('/pokemon', (req, res) => {
    res.render('Index', {
        pageTitle: 'Pokemon',
        pageHeader: 'See All The Pokemon!',
        pokemonData: pokemonData
    })
})


app.get('/pokemon/:id', (req, res) => {
    // res.send(req.params.id)

    res.render('Show', {
        pageTitle: 'Details',
        pageHeader: " Gotta Catch 'Em All ",
        pokemon: pokemonData[req.params.id]
    })
})






//* =========== LISTENER
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})
























