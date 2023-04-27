const express = require('express');
const mongoose = require('mongoose');
const PORT = 3000;

mongoose.connect('mongodb://127.0.0.1:27017/turtles_mongoose');

const Turtle = mongoose.model('turtle', {
  type: String,
  color: String
});

Turtle.create({
  type: 'snapping',
  color: 'brown and cute'
}).then(new_turtle => {
  console.log(new_turtle);
});

// const turtle = new Turtle({
//   type: 'box',
//   color: 'brown and orange'
// });

// turtle.save().then((new_turtle) => {
//   console.log(new_turtle);
// });

const app = express();


app.listen(PORT, () => console.log('Started on port %s', PORT));

