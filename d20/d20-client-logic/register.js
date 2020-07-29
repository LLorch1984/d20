require('dotenv').config()
require('d20-commons/polyfills/string')
const { utils : {Email, call } } = require('d20-commons')
const context = require('./context')


module.exports = function(name, surname, email, password){debugger
    String.validate(name)
    String.validate(surname)
    Email.validate(email)
    
return call (
    'POST',
    `${this.API_URL}/users`,
    `{"name": "${name}", "surname":"${surname}", "email":"${email}","password":"${password}"}`,
    {"Content-type": "application/json"}
).then(({status,body}) => {
    if(status === 201 ) return;

    const { error } = JSON.parse(body)

    throw new Error(error)
});
}.bind(context)