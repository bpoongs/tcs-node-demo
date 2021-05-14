const router = require('express').Router()
const User = require('../models/User')

router.post('/login', (req, res) => {
  const { username, password } = req.body

  User.findOne({ username })
    .then(user => {
      if(!user) {
        res.status(404).json({ msg: 'User Not found.' })
      } else {
        if(user.comparePasswordHash(password)) {
          res.json(user.genUserObj())
        } else {
          res.status(401).json({ msg: 'Invalid Credentials.' })
        }
      }      
    })
    .catch(err => res.status(500).json(err))
})

router.post('/register', (req, res) => {
  const { name, email, username, password } = req.body
  /**
   * const name = req.body.name
   * const email = req.body.email
   * const username = req.body.username
   * const password = req.body.password
   */

  const user = new User()

  user.name = name
  user.email = email
  user.username = username

  user.genPasswordHash(password)

  user.save()
    .then(newUser => res.json(newUser.genUserObj()))
    .catch(err => res.status(500).json(err))
})

module.exports = router