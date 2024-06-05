const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/submit', (req, res) => {
  const { name, email, age, birthday, range, hobbies, interest, message } = req.body;

  const filePath = path.join(__dirname, 'raspunsuri.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    let responses = [];
    if (err && err.code !== 'ENOENT') {
      console.error('Error reading responses file:', err);
      return res.status(500).json({ error: 'Internal server error' });
    } else if (!err) {
      try {
        responses = JSON.parse(data);
      } catch (parseError) {
        console.error('Error parsing responses file:', parseError);
        return res.status(500).json({ error: 'Internal server error' });
      }
    }

    responses.push(req.body);

    fs.writeFile(filePath, JSON.stringify(responses, null, 2), (writeErr) => {
      if (writeErr) {
        console.error('Error writing responses file:', writeErr);
        return res.status(500).json({ error: 'Internal server error' });
      }

      res.redirect('/index.html');
    });
  });
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const usersFilePath = path.join(__dirname, 'users.json');
  fs.readFile(usersFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading users file:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }

    try {
      const users = JSON.parse(data);
      const user = users.find(u => u.username === username && u.password === password);

      if (user) {
        res.redirect('/form.html');
      } else {
        res.status(401).json({ error: 'Invalid username or password' });
      }
    } catch (parseError) {
      console.error('Error parsing users file:', parseError);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
});

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
