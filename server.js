const express = require('express');
const PORT = 3000;

const app = express();

app.use(express.static('public'));

// POST Route triggered by a button

app.listen(PORT, () => console.log('Started on port %s', PORT));

