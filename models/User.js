const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: [true, 'That user already exists.'],
    validate: [(email) => {
      const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return re.test(email);
    }, 'Must be a valid email address.']
  },
  password: {
    type: String,
    required: true,
    min: [6, 'Your password must be at least 6 characters in length.']
  },
  turtles: [
    {
      type: Schema.Types.ObjectId,
      ref: 'turtle'
    }
  ]
});

const User = model('user', userSchema);

module.exports = User;