const  { register }   = require('d20-server-logic')
const { handleError } = require('../../helpers')

module.exports = (req, res) => {
   
    const { body: { name, surname, email, password } } = req

    try {
        register(name, surname, email, password)
            .then(() => res.status(201).end())
            .catch(error => handleError(error, res))
    } catch (error) {
        handleError(error, res)
    }
}