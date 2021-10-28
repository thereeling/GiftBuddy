const router = require('express').Router();

const giftRoutes = require('./gift-routes.js');
const userRoutes = require('./user-routes.js');

router.use('/gifts', giftRoutes);
router.use('/users', userRoutes);

module.exports = router;