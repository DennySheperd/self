const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3001;
const config = require('./../config/config').get(process.env.NODE_ENV);
var winston = require('./../config/winston');

var morgan = require('morgan');

app.use(morgan('combined', { stream: winston.stream }));


require('../config/passport');

const passport = require('passport');




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var mongoose   = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(config.DATABASE);

const isProduction = process.env.NODE_ENV === 'production';


app.use(require('./routes'));

app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
});


app.listen(port, () => console.log(`Listening on port ${port}`));