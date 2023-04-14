const express = require('express')
const router = express.Router()

const AuthController = require('../Controller/AuthController')
const authenticator = require('../Middleware/authenticate')

router.post('/register', AuthController.register)
router.post('/login', authenticator, AuthController.login)
router.get('/', AuthController.index)
router.put('/update', AuthController.update)

module.exports = router