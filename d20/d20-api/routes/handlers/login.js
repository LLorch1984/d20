const { env: {SECRET} } = process
const {login} = require('d20-server-logic')
const {handleError} = require('../../helpers')
const { utils: {jwtPromised} } = require('d20-commons')

module.exports = (req, res) => {
    const { body: { email, password } } = req
    
    try{

        login(email,password)
            .then(userId =>  jwtPromised.sign({sub: userId}, SECRET, { expiresIn: "1d"}))
            .then(token => res.send({token}))
            .catch(error =>  handleError(error,res))
                
    }catch(error){
        handleError(error,res)
    }
}
