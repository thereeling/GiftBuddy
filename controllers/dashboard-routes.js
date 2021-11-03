const router = require('express').Router();
const sequelize = require('../config/connection');
const { Gift, User } = require('../models');
const withAuth = require('../utils/auth');



// Get all Gift List products.  Need to add 'withAuth' as parameter. Left out for testing.

router.get('/', withAuth, (req, res) => {
    console.log(req.session);
    console.log('======================');
    Gift.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: [
            'id',
            'recipient',
            'gift_name',
            'occasion', 
        ],
        include: [
            {
                model: User,
                attributes: ['email']
            }
        ]
    })
    .then(dbGiftData => {
        console.log(dbGiftData);
        const gifts = dbGiftData.map(gift => gift.get({ plain: true }));
        res.render('dashboard', { gifts, loggedIn: true });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/edit/:id', withAuth, (req, res) => {
    Gift.findByPk(req.params.id, {
        attributes: [
          'id',
          'recipient',
          'gift_name',
          'occasion'
        ]
      })
      .then(dbGiftData => {
        if (dbGiftData) {
          const gift = dbGiftData.get({ plain: true });
          
          res.render('edit-gift', {
            gift,
            loggedIn: true
          });
        } else {
          res.status(404).end();
        }
      })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
});


module.exports = router;