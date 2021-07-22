const express = require('express')
const ejs = require("ejs");

const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.get('/', (req, res) => {
  res.render("index");
});

app.get('/home', (req, res) => {
  res.send("Home");
});

app.get('/registration', (req, res) => {
  res.send("registration");
});

app.get('/login', (req, res) => {
  res.send("login");
});

app.get('/dsa', (req, res) => {
  res.render("DSA/dsa");
});

app.get('/stack', (req, res) => {
  res.render("DSA/List/stack");
});

app.get('/queue', (req, res) => {
  res.render("DSA/List/queue");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
