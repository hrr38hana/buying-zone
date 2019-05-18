const path = require('path');

const express = require('express');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

const { Product } = require('../database/db');

app.get('/products/:id', async (req, res) => {
  const { id } = req.params;
  const product = await Product.findOne({ id });
  res.json(product);
});

// this endpoint may change so the color can be passed in req.body and more thoroughly identified
app.get('/products/:id/:color', async (req, res) => {
  const { id, color } = req.params;
  const product = await Product.findOne({ id, color });
  res.json(product);
});

module.exports = app;
