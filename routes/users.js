var express = require('express');
var router = express.Router();

var { signUp, signIn, logOut } = require('../controllers/userContollers')
// const { isAuthenticated } = require('../middlewares/isAuthenticated');

router.post('/signup', signUp)
router.post('/signin', signIn)
// router.post('/logout', logOut)
// router.get('/me', isAuthenticated, show)

module.exports = router;
