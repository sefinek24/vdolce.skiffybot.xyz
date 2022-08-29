const express = require('express');
const helmet = require('helmet');
const app = express();

app.use(helmet.hidePoweredBy());
app.use(express.static('public'));

app.listen(4187, () => console.log('Uruchomiono na porcie 4187.'));