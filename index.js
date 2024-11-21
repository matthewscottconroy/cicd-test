const app = require('express');

app.get('/', (req, res) => {
  res.send("Website is healthy.");
});

app.get('/other', (req, res) => {
  res.send("Hit other route with update.");
});


const port = 7749;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
