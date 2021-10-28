const router = require('express').Router();
const { User, Product } = require('../../models');



// Get All users w/o password


router.get('/', (req, res) => {
    User.findAll({
      attributes: { exclude: ['password'] }
    })
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// Get one user w/gifts under their id

router.get('/:id', (req, res) => {
    User.findOne({
        attributes: { exclude: ['password'] },
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Product,
                attributes: ['id','recipient', 'product_name', 'occasion']
            }
         ]
    })
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
          }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

// Create User. Save the session data back to the store.  

router.post('/', (req, res) => {
    User.create({
        email: req.body.email,
        password: req.body.password
    })
    .then(dbUserData => {
        req.session.save(() => {
            req.session.id = dbUserData.id;
            req.session.email = dbUserData.email;
            req.session.loggedIn = true;
    
            res.json(dbUserData);
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

// Login route

router.post('/login', (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    })
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(400).json({ message: 'No user with that email address!' });
            return;
        }

        const validPassword = dbUserData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect password!' });
            return;
          }

        req.session.save(() => {
            req.session.id = dbUserData.id;
            req.session.email = dbUserData.email;
            req.session.loggedIn = true;

            res.json({ user: dbUserData, message: 'You are now logged in!' });

        });
    });
});



module.exports = router;