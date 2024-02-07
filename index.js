const express = require("express");

const app = express();

const port = 7040;

const movies = [
  {
    id: 1,
    title: "Citizen Kane",
    director: "Orson Wells",
    year: "1941",
    color: false,
    duration: 120,
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: "1972",
    color: true,
    duration: 180,
  },
  {
    id: 3,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: "1994",
    color: true,
    duration: 180,
  },
];



  // Créer une route GET /, qui doit renvoyer "Welcome to my favourite movie list"
  app.get("/", (req, res) => {

    res.send("Welcome to my favourite movie list");
  
  });

  // Créer une route GET /api/movies, cette route doit renvoyer un état 200 et une liste de films au format json (utilise le tableau movies déclaré dans l'app ;) )

  app.get("/api/movies", (req, res) => {
    res.status(200).json({movies});
  });

  // Créer une route GET /api/movies/:id qui ne retournera que le film correspondant à l'id défini dans l'url (tu peux parcourir le tableau movies avec une boucle for, ou utiliser la méthode .find())
  // S'il y a un film qui correspond aux paramètres, renvoie une réponse avec un statut 200 et le film correspondant comme objet json
  // Sinon, renvoie un statut 404 avec un message "Not Found".


  app.get("/api/movies/:id", (req, res) => {

    const moviesId = parseInt(req.params.id);
    const moviesArray = movies.find(moviesArray => moviesArray.id === moviesId);

      if (moviesArray) {
        res.status(200).json(moviesArray);
      }
      else {
        res.status(404).send("Not found");
      }
  });

  app.listen(port, () => {
    console.info(`Server is listening on port ${port}`);
  })
  .on("error", (err) => {
    console.error("Error:", err.message);
  });

  
  module.exports = index;