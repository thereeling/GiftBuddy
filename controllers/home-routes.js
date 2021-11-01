const router = require('express').Router();
const sequelize = require('../config/connection');

router.get('/', (req, res) => {
    console.log(req.session);
    res.render('login');
  });

router.get('/signup', (req, res) => {
  res.render('signup');
})
module.exports = router;