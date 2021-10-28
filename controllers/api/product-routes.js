const router = require('express').Router();
const { User, Product } = require('../../models');

// Get all Products

router.get('/', (req, res) => {
    Product.findAll({})
      .then(dbProductData => res.json(dbProductData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;