require('d20-commons/polyfills/string')

const { utils : {Email}, errors : { CredentialsError, UnexistanceError} } = require('d20-commons')
const { models: {User} } =require('d20-data')
const bcrypt = require("bcryptjs")

module.exports =(email,password) => {
    String.validate(email)
    Email.validate(email)
    String.validate(password)

    return User.findOne({email})
        .then((user) => {
            if(!user) throw new UnexistanceError(`user with e-mail ${email} does not exist`)

    return bcrypt.compare(password, user.password)
        .then((match) => {
            if(!match) throw new CredentialsError('wrong password')
            
            return user.id
        })
    })
}
