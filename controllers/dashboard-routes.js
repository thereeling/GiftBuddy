const router = require('express').Router();
const sequelize = require('../config/connection');
const { Product, User } = require('../models');
const withAuth = require('../utils/auth');



// Get all Gift List products.  Need to add 'withAuth' as parameter. Left out for testing.

router.get('/', (req, res) => {
    console.log(req.session);
    console.log('======================');
    Product.findAll({
        where: {
            user_id: req.session.id
        },
        attributes: [
            'id',
            'recipient',
            'product_name',
            'occasion', 
        ],
        include: [
            {
                model: User,
                attributes: ['email']
            }
        ]
    })
    .then(dbProductData => {
        const products = dbProductData.map(product => product.get({ plain: true }));
        res.render('dashboard', { posts, loggedIn: true });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

module.exports = router;