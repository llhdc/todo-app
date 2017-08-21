const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');
const expressValidator = require('express-validator');
const bodyParser = require('body-parser');
const path = require('path');

const todos = [
  {
    description: "Wash the car",
    complete: true
  },
  {
    description: "Make todo list",
    complete: false
  }
];

// Register '.mustache' extension with The Mustache Express
app.engine('mustache', mustacheExpress());

// Turn on default template engine
app.set('view engine', 'mustache');

// Set where we store our views
app.set('views', __dirname + '/views');

// Setup Body Parser for forms
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

// GETS
app.get('/', (req, res) => {
  res.redirect('/todos');
});

app.get('/todos', (req, res) => {
  res.render('index', {"todos": todos});
});
// END OF GETS

// POSTS
app.post('/todos/add', (req, res) => {
  todos.push(
    {
      description: req.body.addTodo,
      complete: false
    }
  )
  res.redirect('/todos')
});

app.post('/todos/done', (req, res) => {
  todos.forEach((todo) => {
    console.log(todo.description);
    console.log(req.body.done);
    if (req.body.done === todo.description) {
      todo.complete = true
    }
  });
  res.redirect('/todos');
})
// END OF POSTS


app.listen(3000, () => {
  console.log('Node running successfully at http://localhost:3000');
});
