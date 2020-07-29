require('d20-commons/polyfills/string')
debugger

const { utils: { Email }, errors: {DuplicityError}} = require('d20-commons')
const { models: { User } } = require("d20-data")
const bcrypt = require('bcryptjs')

module.exports = (name, surname, email, password) => {
    String.validate.notVoid(name)
    String.validate.notVoid(surname)
    String.validate.notVoid(password)
    Email.validate(email)
    String.validate.notVoid(email)


return (async ()=>{
    const user = await User.findOne({email})

    if(user)
        throw new DuplicityError(`user with e-mail ${email} already exist`)

        const hash = await bcrypt.hash(password, 10)

        await User.create({name, surname, email, password: hash})

        return


})()
}


