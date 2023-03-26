require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Product = require('./model/Product');

const app = express();
app.use(bodyParser.json());
const port = process.env.PORT || 5000;
const dbURL = process.env.MONGODB_URL;

mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

const router = express.Router();
app.use(router);

router.get('/', (req, res) => {
    res.send('main route');
});

//get all products from db
app.get("/products", async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (err) {
      console.error("Error fetching products:", err);
      res.status(500).send("Error fetching products");
    }
  });


app.listen(port, () => console.log(`Listening on port ${port}...`));