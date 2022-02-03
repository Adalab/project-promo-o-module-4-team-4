// Fichero src/index.js

// Importamos los dos módulos de NPM necesarios para trabajar
const express = require("express");
const cors = require("cors");

// Creamos el servidor
const server = express();

// Configuramos el servidor
server.use(cors());
server.use(
  express.json({
    limit: "10mb",
  })
);

// Arrancamos el servidor en el puerto 3000
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

const saveCards = [];

// Escribimos los endpoints que queramos
server.post("/card", (req, res) => {
  console.log(req.body);
  const responseSuccess = {
    success: true,
    cardURL: `https://awesome-profile-cards.herokuapp.com/${req.body.uuid}`,
  };

  const responseError = {
    success: false,
    error: "Error description",
  };

  if (req.body.name !== "" && req.body.job !== "" &&  req.body.linkedin !== "" && req.body.email !== "" && req.body.photo !== "" && req.body.github !== "") {
    saveCards.push(req.body);
    res.json(responseSuccess);
  } else {
    res.json(responseError);
  }
});

server.get("/card", (req, res) => {
  //res.json("holi")
});

const staticServerPathWeb = "./src/public-react";
server.use(express.static(staticServerPathWeb));
