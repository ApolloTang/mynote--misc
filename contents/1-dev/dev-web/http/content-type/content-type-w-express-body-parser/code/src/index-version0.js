const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middleware to parse JSON, URL-encoded, and raw text
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// Route 1: Accepts JSON data
app.post('/json', (req, res) => {
  console.log('Received JSON data:', req.body);
  res.send(`JSON data received ${JSON.stringify(req.body)}\n`);
});

// Route 2: Accepts URL-encoded data
app.post('/urlencoded', (req, res) => {
  console.log('Received URL-encoded data:', req.body);
  res.send(`URL-encoded data received ${JSON.stringify(req.body)}\n`);
});

// Route 3: Accepts raw text data
app.post('/text', (req, res) => {
  console.log('Received raw text data:', req.body);
  res.send(`Raw text data received ${JSON.stringify(req.body)}\n`);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});