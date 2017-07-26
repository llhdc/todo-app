const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');
const expressValidator = require('express-validator');


// Register '.mustache' extension with The Mustache Express
app.engine('mustache', mustacheExpress());

// Turn on default template engine
app.set('view engine', 'mustache');

// Set where we store our views
app.set('views', __dirname + '/views');

// GETS
app.get('/', (req, res) => {
  res.render('index', {});
});
// END OF GETS

app.listen(3000, () => {
  console.log('Node running successfully at http://localhost:3000');
});
