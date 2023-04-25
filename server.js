const express = require('express');
const { engine } = require('express-handlebars');
const PORT = 3000;

const app = express();

app.use(express.static('public'));

app.engine('hbs', engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', './views');

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/test/button', (req, res) => {
  // res.send('something');
  res.render('triggered');
});

// POST Route triggered by a button

app.listen(PORT, () => console.log('Started on port %s', PORT));

