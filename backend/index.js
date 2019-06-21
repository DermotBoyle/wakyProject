const express = require('express');
const server = express();
const path = require('path');
const dotenv = require('dotenv').config();
const vetsMadrid = require('./dataMigration/vetsMadrid.json').results;
const users100 = require('./dataMigration/users100.json')
const port = process.env.PORT || 3001;
const Veterinary = require('./model/Veterinary');
const users = require('./model/User')


server.set("port", port);

server.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});


/// ROUTE 0: /       "Hola"

server.use("/", express.static(path.join(__dirname, "/build")));
server.use("/veterinaria", express.static(path.join(__dirname, "/build")));
//server.use("/", express.static(path.join(__dirname, "/build")));
//server.use("/", express.static(path.join(__dirname, "/build")));


/// ROUTE 1: /api                devuelve "Lista de APIs"

server.get("/api", (req, res) => {
  res.write("/api/veterinary                List of veterinaries\n");
  res.write("/api/veterinary/:objectId      Detail for veterinary\n");
  res.write('/api/user                      List of users');
  res.write('/api/user/:objectId            Detail for one user');
  res.end();
});


/// ROUTE 2: /api/veterinary     devuelve "Array de 100 veterinarias (JSON)"

server.get("/api/veterinary", (req, res) => {
  Veterinary.find(req.query, (err, result) => {
    if (err) console.log(err);
    res.json(result);
  });
});


/// ROUTE 3: /api/veterinary/:objectId return "1 vet object"

server.get("/api/veterinary/:objectId", (req, res) => { 
  Veterinary.find({ objectId: req.params.objectId }, (err, result) => {
    if (err) console.log(err);
    res.json(result[0]);
  });
});

/// ROUTE 4: /api/user




server.listen(port, function() {
  console.log("Listening on port " + port);
});
