const express = require('express');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/data', (req, res) => {
  // let obj = JSON.parse(fs.readFileSync('./datasets/test-data.json', 'utf8'));
  let obj = JSON.parse(fs.readFileSync('./datasets/data.json', 'utf8'));
  res.send(obj);
});

app.get('/api/links', (req, res) => {
  // let obj = JSON.parse(fs.readFileSync('./datasets/test-data.json', 'utf8'));
  let obj = JSON.parse(fs.readFileSync('./datasets/links.json', 'utf8'));
  res.send(obj);
});

app.get('/api/nodes', (req, res) => {
  // let obj = JSON.parse(fs.readFileSync('./datasets/test-data.json', 'utf8'));
  let obj = JSON.parse(fs.readFileSync('./datasets/nodes.json', 'utf8'));
  res.send(obj);
});

app.listen(port, () => console.log('Listening on port ${port}'));
