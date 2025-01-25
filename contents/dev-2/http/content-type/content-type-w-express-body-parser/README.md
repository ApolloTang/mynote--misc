

#  `Content-Type` headers and their corresponding `body-parser` middlewares.

| **Content-Type**                    | **Middleware**            | **Parsed Data Format**   |
| ----------------------------------- | ------------------------- | ------------------------ |
| `application/json`                  | `bodyParser.json()`       | JavaScript object        |
| `application/x-www-form-urlencoded` | `bodyParser.urlencoded()` | Key-value pairs (object) |
| `text/plain`                        | `bodyParser.text()`       | Raw text (string)        |
| `application/octet-stream`          | `bodyParser.raw()`        | Raw binary data (Buffer) |



## Express's body parser

package to install:

```bash
npm install body-parser
```



### Example usage:

```js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

/* Route 1: Accepts JSON data
curl -X POST http://localhost:3000/json -H "Content-Type: application/json" -d '{"name":"John", "age":30}'
*/ 
app.post('/json', bodyParser.json(), (req, res) => {
  console.log('Received JSON data:', req.body);
  res.send(`JSON data received: ${JSON.stringify(req.body, null, 2)}\n`);
});

/* Route 2: Accepts URL-encoded data
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


```

### test URL-encoded data with html in a browser

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Form Example</title>
</head>
<body>
  <h1>Submit Form</h1>
  <form action="http://localhost:3000/urlencoded" method="POST">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" value="John">
    <br>
    <label for="age">Age:</label>
    <input type="number" id="age" name="age" value="30">
    <br>
    <button type="submit">Submit</button>
  </form>
</body>
</html>
```


