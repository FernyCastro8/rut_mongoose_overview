const express = require('express');
const PORT = 3000;
const db = require('./config/connection');
const turtle_routes = require('./controllers/turtle_routes');
const user_routes = require('./controllers/user_routes');

const app = express();

app.use(express.json());

app.use('/api', [turtle_routes, user_routes]);

db.once('open', () => {
  app.listen(PORT, () => console.log('Server running on port %s', PORT));
});




