const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3001;
const config = require('./../config/config').get(process.env.NODE_ENV);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var mongoose   = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(config.DATABASE);

app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
});

const User = require('./models/Users');
app.post('/api/login', (req, res) => {
  
  if (req.body.email &&
    req.body.username &&
    req.body.password &&
    req.body.passwordConf) {
  
    var userData = {
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
      passwordConf: req.body.passwordConf,
    }
  
    //use schema.create to insert data into the db
    User.create(userData, function (err, user) {
      if (err) {
        return next(err)
      } else {
        return res.redirect('/profile');
      }
    });
  }

})

app.listen(port, () => console.log(`Listening on port ${port}`));