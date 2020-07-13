const { random, round } = Math
require('./number')

Math.randomIntegerBetween = (min, max) => {
    Number.validate.integer(min)
    Number.validate.integer(max)
    Number.validate.greaterEqualThan(mas,min)

    return round((max - min) * random()) + min
}