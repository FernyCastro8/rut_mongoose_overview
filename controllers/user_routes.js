const router = require('express').Router();
const User = require('../models/User');

function handleError(err) {
  const errorArr = err.message.split(':');
  return errorArr[errorArr.length - 1].trim();
}

// Get one user
router.get('/user', async (req, res) => {
  const user_id = req.body.user_id;

  const user = await User.findOne({
    _id: user_id
  }).populate('turtles');

  res.send(user);
});

// Get all users
router.get('/users', async (req, res) => {
  const users = await User.find().populate('turtles');

  res.send(users);
});

// Register a user
// http://localhost:3000/api/register
router.post('/register', async (req, res) => {
  const user_data = req.body;

  try {
    const user = await User.create(user_data);

    res.send(user);
  } catch (err) {
    // res.status(500).send(err.message);
    // console.log(err);
    // const error_message = handleError(err);

    res.status(401).send(err.message);
  }
});

// Add a turtle to a user
// http://localhost:3000/api/turtle/add
router.put('/turtle/add', async (req, res) => {
  // user_id & turtle_id
  const data = req.body;

  try {
    const updated_user = await User.findOneAndUpdate(
      {
        _id: data.user_id
      },
      {
        $push: {
          turtles: data.turtle_id
        }
      },
      { new: true }
    );

    res.send(updated_user);
  } catch (err) {
    res.status(500).send(err.message);
  }


});

// User.deleteMany({}).then(() => console.log('users deleted'));

module.exports = router;