const express = require("express");
const app = express();

const port = 4000;

app.get("/api", (req, res) => {
  res.send("Hello, Mark!, the temperature is 11 degrees Celcius in New York");
});

app.listen(port, () => {
  console.log(`server running on port ${port}...`);
});
