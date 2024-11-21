const app = require('express');

app.get('/', (req, res) => {
  res.send("Website is healthy.");
});


const port = 7749;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
