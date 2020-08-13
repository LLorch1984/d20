require("dotenv").config()
const { random } = Math
const login = require('./login') 
const {expect} = require('chai')
const { env : {TEST_MONGODB_URL : MONGODB_URL} } = process
const { mongoose, models : { User } } = require('d20-data')
const bcrypt = require('bcryptjs')


describe("logic - authenticate user", () => {
    before(() => mongoose.connect(MONGODB_URL));
  
    let name, surname, email, password, userId, hash;
  
    beforeEach(() =>
      User.deleteMany()
        .then(() => {
          name = `name-${random()}`;
          surname = `surname-${random()}`;
          email = `e-${random()}@mail.com`;
          password = `password-${random()}`;
  
          return bcrypt.hash(password, 10);
        })
        .then((_hash) => (hash = _hash))
    );
  
    describe("when user already exists", () => {
      beforeEach(() =>
        User.create({ name, surname, email, password: hash }).then(
          (user) => (userId = user.id)
        )
      );
  
      it("should succeed on correct credentials", () =>
        login(email, password).then((_userId) =>
          expect(_userId).to.equal(userId)
        ));
  
      it("should fail on wrong password", () => {
        password += "wrong-";
  
        return login(email, password)
          .then(() => {
            throw new Error("should not reach this point");
          })
          .catch((error) => {
            expect(error).to.be.an.instanceof(Error);
            expect(error.message).to.equal(`wrong password`);
          });
      });
    });
  
    it("should fail when user does not exist", () =>
      login(email, password)
        .then(() => {
          throw new Error("should not reach this point");
        })
        .catch((error) => {
          expect(error).to.be.an.instanceof(Error);
          expect(error.message).to.equal(
            `user with e-mail ${email} does not exist`
          );
        }));
  
    afterEach(() => User.deleteMany());
  
    after(mongoose.disconnect);
  });
  