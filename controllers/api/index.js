const router = require('express').Router();

const productRoutes = require('./product-routes.js');
const userRoutes = require('./user-routes.js');

// router.use('/products', productRoutes);
router.use('/users', userRoutes);

module.exports = router;