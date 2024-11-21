const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("Website is healthy.");
});

app.get('/other', (req, res) => {
  res.send("Hit other route with update 2.");
});

app.get('/route3', (req, res) => {
  res.send("You hit route 3");
});

const port = 7749;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
