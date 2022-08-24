const express = require('express');
    morgan = require('morgan');

    const app = express();

let topMovies = [
{
    title:'The Big Lebowski'
},
{
    title:'Miracle'
},
{
    title:'Predator'
},
{
    title:'Waynes World'
},
{
    title:'Once Upon a Time in Hollywood'
},
{
    title:'The Godfather'
},
{
    title:'Ace Ventura'
},
{
    title:'Cinderella Man'
},
{
    title:'Signs'
},
{
    title:'Shrek'
}
];

app.use(morgan('common'));

//Get Request
app.get('/', (req, res) => {
    res.send('Welcome to my top ten movies!');
});

app.get('/movies', (req, res) => {
    res.json(topMovies);
});

app.get('/documentation', (req, res) => {
    res.sendFile('public/documentation.html', {root: __dirname });
});

//Error Handling code
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something is broken!');
});

//Listen for requests
app.listen(8080, () => {
    console.log('Your app is listening on Port 8080.');
});