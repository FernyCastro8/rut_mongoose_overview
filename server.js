const express = require('express');
const PORT = 3000;

const app = express();

app.use(express.static('public'));

// POST Route triggered by a button

app.listen(PORT, () => console.log('Started on port %s', PORT));


const str = 'This is a string of abc10013123121321313 characters with a name JD-10';

console.log(str.match(/(JD)|\d+/g));

