const express = require("express");  // importo o express
const cors = require("cors"); 
const mongoose = require("./database/mongooseConnect"); // conecto a pasta do Mongo
const booksRoutes = require("./routes/booksRoute"); // conecto as rotas

const app = express();

app.use(express.json());
app.use(cors());
mongoose.connect();

app.use("/library/books", booksRoutes); // crio uma rota raiz

// exportando para usar o server.js
module.exports = app;