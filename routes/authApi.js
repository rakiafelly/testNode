const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const User = require('../models/user');
router.post('/register', async (req, res) => {
  const user = await User.findOne({ email: req.body.email })
  if (user != null) {
    res.status(400).send({ message: "email already used" })
  }
  else {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    await User.create({
      email: req.body.email,
      password: hash
    });
    res.send({ message: 'register succssefully' });
  }

  
})
router.post('/login', async (req, res) => {
  const user = await User.findOne({ email: req.body.email })
  if (user == null) {
    res.status(400).send({ message: 'email or password are incorrect' })
  }
  else {
    if (bcrypt.compareSync(req.body.password, user.password)) {
      const token = jwt.sign({
        userId: user._id
      }, 'secret', { expiresIn: '1h' });
      res.send({
        message: 'login successfully', token: token
      })
    }
    else {
      res.status(400).send({ message: 'email or password are incorrect' })
    }
  }

  router.get('/profile',
    passport.authenticate('bearer', { session: false }),
    (req, res) => {
      res.json(req.user);
    });
})
module.exports = router;
