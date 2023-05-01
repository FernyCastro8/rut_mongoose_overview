const router = require('express').Router();
const Turtle = require('../models/Turtle');
const User = require('../models/User');


// Create a user
// http://localhost:3000/api/create
router.post('/auth/create', async (req, res) => {
  try {
    const user = await User.create(req.body);

    res.send(user);
  } catch (err) {
    res.status(500).send(err.errors.type.properties.message);
  }
});

// Create all users
// http://localhost:3000/api/create
router.get('/users', async (req, res) => {
  try {
    const users = await User.find().populate('turtles');

    res.send(users);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Add a turtle to a user
router.put('/turtles/add/:turtle_id', async (req, res) => {
  try {
    const updated_user = await User.findOneAndUpdate(
      {
        _id: req.body.user_id
      },
      {
        $push: {
          turtles: req.params.turtle_id
        }
      },
      {
        new: true
      }
    )

    res.send(updated_user);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

// Create a turtle
// http://localhost:3000/api/create
router.post('/create', async (req, res) => {
  try {
    // req.body {type: 'box', color: 'brown and orange'}
    const turtle = await Turtle.create(req.body);

    res.send(turtle);
  } catch (err) {
    res.status(500).send(err.errors.type.properties.message);
  }
});

// Get all turtles
router.get('/daturts', async (req, res) => {
  // Retreive all turts
  const turtles = await Turtle.find();

  res.send(turtles);
});

// Get one turtle
// http://localhost:3000/api/daturts/1asdfalksjdflk1j3rrlkj
router.get('/daturts/:id', async (req, res) => {
  const turtle = await Turtle.findOne({
    _id: req.params.id
  });

  res.send(turtle);
});

// Update a turtle
router.put('/daturts/:id', async (req, res) => {
  const updated_turtle = await Turtle.findOneAndUpdate(
    {
      _id: req.params.id
    },
    {
      type: req.body.type,
      color: req.body.color
    },
    {
      new: true
    }
  );

  res.send(updated_turtle);
});

// Delete a turtle
router.delete('/daturts/:id', async (req, res) => {
  await Turtle.deleteOne(
    {
      _id: req.params.id
    }
  );

  res.send('Turtle deleted successufully.');
  // const deletedTurtle = await Turtle.findOneAndDelete(
  //   {
  //     _id: req.params.id
  //   }
  // );

  // res.send(deletedTurtle);
});

// User.deleteMany({}).then(() => console.log('Users deleted'))
// Turtle.deleteMany({}).then(() => console.log('Turtles deleted'))

module.exports = router;