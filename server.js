const express = require('express');
const PORT = 3000;
const db = require('./config/connection');
const api_routes = require('./controllers/api_routes');

const app = express();

app.use(express.json());

app.use('/api', api_routes);

db.once('open', () => {
  app.listen(PORT, () => console.log('Server running on port %s', PORT));
});




