require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const Product = require('./model/Product');

const app = express();
app.use(bodyParser.json());
const port = process.env.PORT || 5000;
const dbURL = process.env.MONGODB_URL;

const corsOptions = {
  origin: 'http://localhost:4000/',
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

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