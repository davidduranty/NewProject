const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");

dotenv.config();

const app = express();
app.use(cors());

const port = parseInt(process.env.APP_PORT ?? "6000", 10);

app.listen(port, (err) => {
  if (err) {
    console.error("Quelque chose de mauvais s'est produit");
  } else {
    console.log(`Le serveur écoute sur le port ${port}`);
  }
});
