const express = require('express');
const bodyParser = require('body-parser');

const app = express();

/* 
Route 1: Accepts JSON data
curl -X POST http://localhost:3000/json -H "Content-Type: application/json" -d '{"name":"John", "age":30}'
*/ 
app.post('/json', bodyParser.json(), (req, res) => {
  console.log('Received JSON data:', req.body);
  res.send(`JSON data received: ${JSON.stringify(req.body, null, 2)}\n`);
});

/*
Route 2: Accepts URL-encoded data
curl -X POST http://localhost:3000/urlencoded -H "Content-Type: application/x-www-form-urlencoded" -d 'name=John&age=30'
*/ 
app.post('/urlencoded', bodyParser.urlencoded({ extended: true }), (req, res) => {
  console.log('Received URL-encoded data:', req.body);
  res.send(`URL-encoded data received: ${JSON.stringify(req.body, null, 2)}\n`);
});


/* Route 3: Accepts raw text data
curl -X POST http://localhost:3000/text -H "Content-Type: text/plain" -d 'Hello, this is raw text!'
*/
app.post('/text', bodyParser.text(), (req, res) => {
  console.log('Received raw text data:', req.body);
  res.send(`Raw text data received: ${JSON.stringify(req.body, null, 2)}\n`);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
