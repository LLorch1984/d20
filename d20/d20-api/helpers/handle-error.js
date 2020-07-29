const { errors : { DuplicityError, VoidError, CredentialsError, UnexistanceError} } = require('d20-commons') 
const {JsonWebTokenError} = require('jsonwebtoken')

module.exports = function (error, res) {
    let status = 500

    switch(true) {
        case error instanceof TypeError || error instanceof VoidError:
            status = 406
            break
        case error instanceof DuplicityError || error instanceof UnexistanceError:
            status = 409
        case error instanceof CredentialsError || error instanceof JsonWebTokenError:
            status = 401


    }

    res.status(status).json({error: error.message})
}