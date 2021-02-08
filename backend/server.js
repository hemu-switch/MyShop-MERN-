const express = require('express');

const products = require('./data/products');
const app = express();

const PORT = 5000 || process.env.PORT;

app.get('/', (req, res) => {
  res.send('API IS RUNNING....');
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p._id === req.params.id);
  res.json(product);
});

app.listen(PORT, () => {
  console.log('Server is Running');
});
