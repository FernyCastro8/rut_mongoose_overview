const router = require('express').Router();
const Turtle = require('../models/Turtle');

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

module.exports = router;