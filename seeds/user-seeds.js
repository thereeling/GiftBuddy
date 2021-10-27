const sequelize = require('../config/connection');
const { User, Product } = require('../models');

const userdata = [
    {
        email: 'nwestnedge0@cbc.ca',
        password: 'password123' 
    },
    {
        email: 'rmebes1@sogou.com',
        password: 'password123'
    },
    {
        email: 'gmidgley4@weather.com',
        password: 'password123'
    },
    {
        email: 'lmongain8@google.ru',
        password: 'password123'
    }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;