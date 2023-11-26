const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.set('view engine', 'ejs'); // Set EJS as the view engine

// Define a sample data array
const data = [
    { name: 'Rolls Royce Phantom'},
    { name: 'Lamborghini Huracan' },
    { name: 'Porsche Cayenne' }
];

// Route to render the EJS template with data
app.get('/', (req, res) => {
    res.render('pages/index', { singleVariable: 'EJS X Array Objects', data: data });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}/`);
});
