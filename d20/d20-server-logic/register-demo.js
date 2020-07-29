require("dotenv").config();

const {
  env: { MONGODB_URL },
} = process;
const { mongoose } = require('d20-data');
const registerUser = require('./register');
mongoose.connect(MONGODB_URL).then(() => {
  try {
    //registerUser('Pepito', 'Grillo', 'pepigri@mail.com', '123')
    return registerUser("Pepito", "Nito", "Pepito@mail.com", "123123123")
      .then(() => console.log("OK"))
      .catch((error) => console.error("KO async", error));
  } catch (error) {
    console.error("KO sync", error);
  }
});
