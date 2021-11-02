const router = require('express').Router();
const sequelize = require('../config/connection');
const {User, Gift } = require('../models');

router.get('/', (req, res) => {
  console.log(req.session);
  res.render('login');
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});


router.get('/signup', (req, res) => {
  res.render('signup');
});

module.exports = router;