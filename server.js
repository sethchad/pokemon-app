const express = require('express');
const app = express();

const pokemon = [
    {
      name: "Bulbasaur",
      img: "http://img.pokemondb.net/artwork/bulbasaur.jpg"
    },
    {
      name: "Ivysaur",
      img: "http://img.pokemondb.net/artwork/ivysaur.jpg"
    },
    {
      name: "Venusaur",
      img: "http://img.pokemondb.net/artwork/venusaur.jpg"
    },
    {
      name: "Charmander",
      img: "http://img.pokemondb.net/artwork/charmander.jpg"
    },
    {
      name: "Charizard",
      img: "http://img.pokemondb.net/artwork/charizard.jpg"
    },
    {
      name: "Squirtle",
      img: "http://img.pokemondb.net/artwork/squirtle.jpg"
    },
    {
      name: "Wartortle",
      img: "http://img.pokemondb.net/artwork/wartortle.jpg"
    }
  ];

app.use(express.urlencoded({ extended: true }));

// app.get('/pokemon', (req, res) => {
//     res.send(pokemon); 
// });

app.get('/pokemon', (req ,res) => {
    res.render('index.ejs', { pokemon: pokemon })
});

// NEW
app.get('/pokemon/new', (req, res) => {
    res.render('new.ejs');
});

app.post('/pokemon', (req, res) => {
    pokemon.push(req.body);
    // console.log(pokemon);
    res.redirect('/pokemon');
});


app.get('/pokemon/:index', (req, res) => {
    res.render('show.ejs', {
        pokemon: pokemon[req.params.index]
    });
});



// app.get('/pokemon/:index', (req, res) => {
//     res.show(pokemon[req.params.index]);
// });

app.listen(3000, () => {
    console.log("I'm listening")
});