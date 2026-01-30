const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

const db = require('./DB');

app.use(cors());
app.set('DB',db);

console.log("Starting Sweet server...");

app.listen(process.env.APP_PORT, () => {
      console.log(`Server listening on port ${process.env.APP_PORT}`)
})

app.get('/', (req, res) => {
      console.log("/ called");
      let message = JSON.stringify({empresa: "Mi dulce Paz", direccion: "Tadeo Anke #1421", telefono:"451277", celular:7244338});
      res.send(JSON.stringify(message));
})

app.get('/standard', (req, res) => {
      console.log("/standart called"); 
      let data = {
            id: 2,
            name:"Torta de vainilla",
            slices: 30,
            price: 250,
      };
      let message = JSON.stringify(data);
      res.send(message)
})

app.get('/small', (req, res) => {
      console.log("/small called"); 
      let data = {
            id: 1,
            name:"Torta de vainilla",
            slices: 10,
            price: 110,
      };
      let message = JSON.stringify(data);
      res.send(message)
})

app.get('/products', (req, res) => {
      console.log("/products called");
      let data = [
            {
                  id: 1,
                  name: "Torta de frutas",
                  description: "increible humedad y fragancia en la masa delicada y suavecita",
                  price: 199.99,
                  category: "Cake",
                  inStock: 2,
                  lastUpdated: "15/11/25",
                  image: "https://img.freepik.com/fotos-premium/primer-plano-pastel-chocolate_1048944-20992760.jpg"
            },
            {
                  id: 2,
                  name: "Torta de chocolate",
                  description: "chocolate y canela en la masa, con dulce de leche entre capas",
                  price: 299.99,
                  category: "Cake",
                  inStock: 2,
                  lastUpdated: "03/12/25",
                  image: "https://img.freepik.com/foto-gratis/pastel-frutas_1203-8378.jpg"
            },
            {
                  id: 3,
                  name: "Bombita de fresa",
                  description: "deleite para las wawas, desde la masa hasta la crema dulce",
                  price: 7.50,
                  category: "Disert",
                  inStock: 15,
                  lastUpdated: "05/12/25",
                  image: "https://img.freepik.com/psd-gratis/an-irresistible-red-velvet-cupcake-stands-alone-on-black-background-its-creamy-white-frosting-swirled-high-and-generously-dusted-with-vibrant-red-cake-crumbs_84443-63326.jpg"
            },
            {
                  id: 4,
                  name: "Crocante de chocolate suizo",
                  description: "Suizo pedasos",
                  price: 300.00,
                  category: "Hard Candy",
                  inStock: 1,
                  lastUpdated: "07/01/26",
                  image: "https://images.pexels.com/photos/2373520/pexels-photo-2373520.jpeg"
            },
            {
                  id: 5,
                  name: "Pie de Rassberry",
                  description: "jugoso y dulce, solo sabra de el cuado acabe",
                  price: 199.99,
                  category: "Pies",
                  inStock: 5,
                  lastUpdated: "20/10/25",
                  image: "https://images.pexels.com/photos/2693447/pexels-photo-2693447.jpeg"
            },
            {
                  id: 6,
                  name: "Torta de dulce de leche de cabra",
                  description: "no lo pruebe, gozelo..",
                  price: 157.60,
                  category: "Cake",
                  inStock: 3,
                  lastUpdated: "25/10/25",
                  image: "https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg"
            }
      ];

      let message = JSON.stringify(data);
      res.send(message)
})
