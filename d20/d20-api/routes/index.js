
const { env: { SECRET } } = process

const { Router } = require('express')
const { 
    register,
    login
} = require('./handlers')

const {json: bodyParser} = require('body-parser')
const { jwtVerifierExtractor } = require('../middlewares')
const { handleError } = require('../helpers')

const verifyExtractJwt = jwtVerifierExtractor(SECRET, handleError)

const api = new Router()

api.post('/users', bodyParser(), register)

api.post('/users/auth', bodyParser(), login)


module.exports = {
    api
}