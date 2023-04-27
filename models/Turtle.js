const { Schema, model } = require('mongoose');

const turtleSchema = new Schema({
  type: {
    type: String,
    required: true
  },
  color: String
});

const Turtle = model('turtle', turtleSchema);

module.exports = Turtle;