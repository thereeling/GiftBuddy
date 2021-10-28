const router = require('express').Router();
const { User, Product } = require('../../models');

// Get all Gifts

router.get('/', (req, res) => {
    Product.findAll({})
      .then(dbProductData => res.json(dbProductData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// Get one gift, including the User's email

router.get('/:id', (req, res) => {
    Product.findOne({
        where: {
            id: req.params.id
        },
        include: [
            {
                model: User,
                attributes: ['email']
            }
        ]
    })
    .then(dbProductData => {
        if (!dbProductData) {
          res.status(404).json({ message: 'No Product found with this id' });
          return;
        }
        res.json(dbProductData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

// Create gift, need 'withAuth'(?)

router.post('/', (req, res) => {
    Product.create({
        recipient: req.body.recipient,
        product_name: req.body.product_name,
        occasion: req.body.occasion,
        user_id: req.session.user_id
    })
    .then(dbProductData => res.json(dbProductData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;