const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')

const app = express()

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'zap.html'))
})

app.get('/zap', (req, res) => {
    res.sendFile(path.join(__dirname,'public', 'zap.json'))
})

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
