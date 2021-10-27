const Product = require('./Product');
const User = require('./User');

User.hasMany(Product, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});
Product.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

module.exports = { User, Product };