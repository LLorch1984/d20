const buildError = require('./error-builder')

module.exports = {
    ValueError: buildError('ValueError'),
    VoidError: buildError('VoidError')
}