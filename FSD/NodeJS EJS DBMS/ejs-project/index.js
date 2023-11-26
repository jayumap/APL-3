const bodyParser = require('body-parser');
var express= require('express');
var app=express(); //created express library variable 
// get the client
var mysql = require('mysql2');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'nicomedes',
  password: 'jay4757:)',
  database: 'practice1',
  port: 3005,
});


// set the view engine to ejs. ejs is a javascript template library
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file
//create .ejs file for pages
// index page
app.get('/', function(req, res) {

// simple query
connection.query(
  'SELECT * FROM newtable',
  function(err, results, fields) {
    console.log(results); // results contains rows returned by server
    // console.log(fields); // fields contains extra meta data about results, if available
  }
);
var mascots = [
    { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
    { name: 'Tux', organization: "Linux", birth_year: 1996},
    { name: 'Moby Dock', organization: "Docker", birth_year: 2013}
  ];
  var tagline = "No programming concept is complete without a cute animal mascot.";

  res.render('pages/index', {mascots, tagline}); 
});

// about page
app.get('/about', function(req, res) {
  res.render('pages/about');
});

app.get('/login', function(req, res) {
  res.render('pages/login')
})

app.post('/login', function(req, res) {
  console.log(req.body);
  res.render('pages/login');
})

app.get('/register', function(req, res) {
  res.render('pages/register')
})

app.post('/register', function(req, res) {
  console.log(req.body);
  const { firstname, lastname, username, pass } = req.body;
  connection.query(
    `INSERT INTO newtable (firstname, lastname, email, password) VALUES ('${firstname}', '${lastname}', '${username}', '${pass}')`,
    function(err, results, fields) {
      console.log(results); // results contains rows returned by server
      // console.log(fields); // fields contains extra meta data about results, if available
    }
  );
  res.render('pages/register');
})

app.listen(3005);
console.log('Server is listening on port 3005');