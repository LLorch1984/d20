require("dotenv").config();

const { env: { TEST_MONGODB_URL: MONGODB_URL }, } = process
const register = require('./register')
const {random} = Math
const {expect} = require ('chai')
const {mongoose, models: {User}} = require('d20-data')
const bcrypt = require('bcryptjs')


describe('register,', () => {
    before(() => mongoose.connect(MONGODB_URL))
    let name,surname,email,password

beforeEach(async() => {
    await User.deleteMany()
    
    name = `name-${random()}`
    surname = `surname-${random()}`
    email = `e-${random()}@mail.com`
    password= `password-${random()}`
} )

it('should succed on a correct data', async () => {
    const result = await register(name, surname, email, password)

    expect(result).to.be.undefined

    const users = await User.find()
    expect(users.length).to.equal(1)
    const [user] = users
    
    
    expect (user.name).to.equal(name)
    expect (user.surname).to.equal(surname)
    expect (user.email).to.equal(email)
    
    const match = await bcrypt.compare(password, user.password);
    expect(match).to.be.true
})

it('should fail when user already exist', async () => {
    try{
        await register(name,surname,email,password)

    }catch(error) {
        expect(error).to.exist
        expect(error).to.be.an.instanceOf(Error)
        expect(error.message).to.equal(
            `user with e-mail ${email} already exists`
        )
    }
})
it ('should fail if password dont match', async () => {
  
    const result = await register(name,surname,email,password)
    const users = await User.find()
    const [user] = users
    user.password = 'hola'
    const match = await bcrypt.compare(password, user.password)

    expect(match).to.be.false
})
afterEach(() => User.deleteMany())

after(mongoose.disconnect)


})
