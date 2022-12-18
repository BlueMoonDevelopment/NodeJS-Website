//server.js

/**
 * Required external modules
 */
const express = require('express');
const path = require('path');

/**
 * App Variables
 */
const app = express();
const port = 8080;

/**
 * App Configuration
 */
app.use(express.json());
app.set('views', path.join(__dirname, "views"));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, "public")));

/**
 * Routes Definitions
 */
app.get('/', (req, res) => {
    res.render('index', {title: 'Home'})
});

/**
 * Server Activation
 */
app.listen(port, () => {
    console.log(`Listening to requests at 127.0.0.1:${port}`);
});