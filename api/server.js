const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const ejs = require('ejs'); // Explicitly import EJS

const app = express();

// Set the views directory and configure EJS
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

// Serve static assets from the public folder (if available)
app.use(express.static(path.join(__dirname, '../public')));

// Define your routes
app.get('/', (req, res) => {
  res.render('index'); // Ensure views/index.ejs exists
});

// Export the wrapped app for Vercel
module.exports = serverless(app);