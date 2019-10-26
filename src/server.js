require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const routes = require("./routes");

const app = express();

mongoose.connect(process.env.URL_DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// GET, POST, PUT, DELETE

//req.query = Acessar query params (para filtros)
//req.params = Acessar routes params (para edição ou deletar)
//req.body = Acessar corpo da requisição (para criação ou edição)

app.use(cors());
app.use(express.json());
app.use("/files", express.static(path.resolve(__dirname, "..", "uploads")));
app.use(routes);

app.listen(3333);
