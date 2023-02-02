const express = require('express');
const app = express();
const cors = require('cors');    

const r = require('./dist/index').makeCrud('cars', './storage');
app.use(cors());
app.use('/', r);
app.listen(3001, () => console.log('Example app listening on port 3001!'));