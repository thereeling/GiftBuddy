const Gift = require('./Gift');
const User = require('./User');

User.hasMany(Gift, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});
Gift.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

module.exports = { User, Gift };