const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Configure EJS as template engine:
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Define route to render the index template
app.get('/', (req, res) => {
  res.render('index'); // Ensure views/index.ejs exists
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log("Server started on port " + port);
});