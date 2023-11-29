const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async(req, res) => {
    res.sendFile(path.join(__dirname, 'public', '/html/home.html'));
});

app.get('/upload', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', '/html/upload.html'));
});

app.get('/experiments', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', '/html/experiments.html'));
});

app.listen(8080, () => {
    console.log("Server successfully running on port 8080");
});