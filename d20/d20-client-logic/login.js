require('dotenv').config()
require('d20-commons/polyfills/string')
const {utils : { Email, call} } = require('d20-commons')
const context = require ('./context')

module.exports = function (email, password) {debugger
  Email.validate(email);

  String.validate.notVoid(password);

  return (async () => {
    const res = await call(
      "POST",
      `${this.API_URL}/users/auth`,
      `{ "email": "${email}", "password": "${password}" }`,
      { "Content-type": "application/json" }
    );

    if (res.status === 200) {
      const { token } = JSON.parse(res.body);

      sessionStorage.setItem("TOKEN", token)


      return;
    } else {
      const { error } = JSON.parse(res.body);

      throw new Error(error);
    }
  })();
}.bind(context);
