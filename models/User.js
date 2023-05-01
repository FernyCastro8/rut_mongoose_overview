const { Schema, model, Types } = require('mongoose');

const userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    min: [6, 'Password must be at least 6 characters in length.']
  },
  turtles: [
    {
      type: Types.ObjectId,
      ref: 'turtle'
    }
  ]
});

const User = model('user', userSchema);

module.exports = User;