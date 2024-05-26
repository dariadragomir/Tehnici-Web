const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(dirname, 'public')));

app.post('/submit', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;

  res.redirect("/index.html")
});

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(dirname, 'public', '404.html'));
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
