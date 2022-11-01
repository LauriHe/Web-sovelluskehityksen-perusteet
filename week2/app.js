'use strict';
const express = require('express');
const catRoute = require('./routes/catRoute');
const personRoute = require('./routes/personRoute');
const app = express();
const port = 3000;

app.use('/cat', catRoute);
app.use('/person', personRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
