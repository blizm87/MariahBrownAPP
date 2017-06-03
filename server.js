const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');

const app = express();

// CONFIG
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ROUTES



const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('I am listening!!!');
})
