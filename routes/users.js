const express = require('express')
const passport = require('passport')
const router = express.Router()
const Users = require('../models/users')

router.get('/',
passport.authenticate('jwt', {session:false}),
)

module.exports = router
