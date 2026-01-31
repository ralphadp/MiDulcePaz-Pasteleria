const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

const db = require('./DB');

app.use(cors());

console.log("Starting Sweet server...");

app.listen(process.env.APP_PORT, () => {
      console.log(`Server listening on port ${process.env.APP_PORT}`)
})

app.set('DB',db);

/* API - for Diserts requests  */

app.get('/', (req, res) => {
      console.log("/ called");

      let DB = req.app.settings.DB;
      let infoCollectiion = DB.collection("info");

      infoCollectiion.findOne().then((result) => {
            res.send(JSON.stringify(result));
      });
})

app.get('/standard', (req, res) => {
      console.log("/standart called");

      let DB = req.app.settings.DB;
      let infoCollectiion = DB.collection("promocion");

      infoCollectiion.findOne({type:"standard"}).then((result) => {
            res.send(JSON.stringify(result));
      });
})

app.get('/small', (req, res) => {
      console.log("/small called");

      let DB = req.app.settings.DB;
      let infoCollectiion = DB.collection("promocion");

      infoCollectiion.findOne({type:"small"}).then((result) => {
            res.send(JSON.stringify(result));
      });
})

app.get('/big', (req, res) => {
      console.log("/big called");

      let DB = req.app.settings.DB;
      let infoCollectiion = DB.collection("promocion");

      infoCollectiion.findOne({type:"big"}).then((result) => {
            res.send(JSON.stringify(result));
      });
})

app.get('/products', (req, res) => {
      console.log("/products called");

      let DB = req.app.settings.DB;
      let cakesCollection = DB.collection("cakes");
      cakesCollection.find().toArray().then((data) => {
            res.send(JSON.stringify(data))
      })
      .catch(error => {
            console.log("ERROR: ", error);
      });
})

app.get('/available_products', (req, res) => {
      console.log("/available products called");

      let DB = req.app.settings.DB;
      let cakesCollection = DB.collection("cakes");
      cakesCollection.find().toArray().then((data) => {
            data.forEach((cake, index, array) => {
                  if (array[index].inStock > 0) {
                        array[index].inStock = "disponible";
                  } else {
                        array[index].inStock = "agotado";
                  }
            });
            res.send(JSON.stringify(data));
      })
      .catch(error => {
            console.log("ERROR: ", error);
      });
})

