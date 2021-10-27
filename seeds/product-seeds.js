const { Product } = require('../models');

const productdata = [
    {
        recipient: 'Cousin Tom',
        product_name: 'Nurf Gun',
        occasion: 'Christmas',
        user_id: 1
    },
    {
        recipient: 'Little Broski',
        product_name: 'Bicycle',
        occasion: 'Birthday',
        user_id: 2
    },
    {
        recipient: 'Dad',
        product_name: 'Telescope',
        occasion: `Father's Day`,
        user_id: 3
    },
    {
        recipient: 'Amanda',
        product_name: 'Coach Purse',
        occasion: 'Anniversary',
        user_id: 4
    },
    {
        recipient: 'Amelia',
        product_name: 'Bubble Guppie',
        occasion: 'Birthday',
        user_id: 2
    },
    {
        recipient: 'Mom',
        product_name: 'Paint Set',
        occasion: `Mother's Day`,
        user_id: 4
    },
    {
        recipient: 'Paul',
        product_name: 'Chess Board',
        occasion: 'Hannukah',
        user_id: 1
    }
];

const seedProducts = () => Product.bulkCreate(productdata);

module.exports = seedProducts;