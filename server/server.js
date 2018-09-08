const express = require('express');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/testdata', (req, res) => {
  // let obj = JSON.parse(fs.readFileSync('./datasets/test-data.json', 'utf8'));
  let obj = JSON.parse(fs.readFileSync('./datasets/mock-data-links.json', 'utf8'));
  res.send(obj);
});

app.listen(port, () => console.log('Listening on port ${port}'));
