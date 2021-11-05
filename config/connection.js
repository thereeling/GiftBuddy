const Sequelize = require('sequelize');

require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
        dialect: 'mysql',
    });

module.exports = sequelize;


// process.env.JAWSDB_URL
//     ? new Sequelize(process.env.JAWSDB_URL)