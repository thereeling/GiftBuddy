const { Gift } = require('../models');

const giftdata = [
    {
        recipient: 'Cousin Tom',
        gift_name: 'Nurf Gun',
        occasion: 'Christmas',
        user_id: 1
    },
    {
        recipient: 'Little Broski',
        gift_name: 'Bicycle',
        occasion: 'Birthday',
        user_id: 2
    },
    {
        recipient: 'Dad',
        gift_name: 'Telescope',
        occasion: `Father's Day`,
        user_id: 3
    },
    {
        recipient: 'Amanda',
        gift_name: 'Coach Purse',
        occasion: 'Anniversary',
        user_id: 4
    },
    {
        recipient: 'Amelia',
        gift_name: 'Bubble Guppie',
        occasion: 'Birthday',
        user_id: 2
    },
    {
        recipient: 'Mom',
        gift_name: 'Paint Set',
        occasion: `Mother's Day`,
        user_id: 4
    },
    {
        recipient: 'Paul',
        gift_name: 'Chess Board',
        occasion: 'Hannukah',
        user_id: 1
    }
];

const seedGifts = () => Gift.bulkCreate(giftdata);

module.exports = seedGifts;