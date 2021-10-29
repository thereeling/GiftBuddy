const router = require('express').Router();
const { User, Gift } = require('../../models');
const withAuth = require('../../utils/auth');

// Get all Gifts

router.get('/', (req, res) => {
    Gift.findAll({})
      .then(dbGiftData => res.json(dbGiftData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// Get one gift, including the User's email

router.get('/:id', (req, res) => {
    Gift.findOne({
        where: {
            id: req.params.id
        },
        include: [
            {
                model: User,
                attributes: ['email']
            }
        ]
    })
    .then(dbGiftData => {
        if (!dbGiftData) {
          res.status(404).json({ message: 'No Gift found with this id' });
          return;
        }
        res.json(dbGiftData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

// Create gift, need 'withAuth'(?)

router.post('/', withAuth, (req, res) => {
    Gift.create({
        recipient: req.body.recipient,
        gift_name: req.body.gift_name,
        occasion: req.body.occasion,
        user_id: req.session.user_id
    })
    .then(dbGiftData => res.json(dbGiftData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Update Gift data

router.put('/:id', withAuth, (req, res) => {
    Gift.update(req.body, {
        individualHooks: true,
        where: {
          id: req.params.id
        }
    })
    .then(dbGiftData => {
        if (!dbGiftData) {
          res.status(404).json({ message: 'No Gift found with this id' });
          return;
        }
        res.json(dbGiftData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

// Delete Gift

router.delete('/:id', withAuth, (req, res) => {
    Gift.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbGiftData => {
        if (!dbGiftData) {
          res.status(404).json({ message: 'No Gift found with this id' });
          return;
        }
        res.json(dbGiftData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

module.exports = router;