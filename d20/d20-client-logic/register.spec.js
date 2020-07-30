require('dotenv').config()
debugger
const { env: { TEST_MONGODB_URL: MONGODB_URL, API_URL } } = process

const register = require('./register')
const { random } = Math
const { expect } = require('chai')
const { mongoose, models: { User } } = require('d20-data')
const bcrypt = require('bcryptjs')
require('d20-commons/ponyfills/xhr')
const context = require('./context')
const { debug } = require('console')
context.API_URL = API_URL


describe("logic - register user", () => {
    before(async () => await mongoose.connect(MONGODB_URL));

    let name, surname, email, password

    beforeEach(async () => {
        await User.deleteMany()

        name = `name-${random()}`
        surname = `surname-${random()}`
        email = `e-${random()}@mail.com`
        password = `password-${random()}`
    })


    it('should succed on a correct data', async () => {

        const result = await register(name, surname, email, password)

        expect(result).to.be.undefined

        const users = await User.find()
        console.log(users)
        expect(users.length).to.equal(1)
        const [user] = users

        expect(user.name).to.equal(name)
        expect(user.surname).to.equal(surname)
        expect(user.email).to.equal(email)

        const match = await bcrypt.compare(password, user.password);
        expect(match).to.be.true
    })

    describe("when user already exists", () => {
        beforeEach(async () => await User.create({ name, surname, email, password }));

        it("should fail on trying to register an existing user", async () => {
            try {
                await register(name, surname, email, password)

            } catch(error) {
                expect(error).to.exist;

                expect(error).to.be.an.instanceof(Error);
                expect(error.message).to.equal(`user with e-mail ${email} already exist`)

            }
        });
    })
    afterEach(() => User.deleteMany());

    after(mongoose.disconnect);
});
