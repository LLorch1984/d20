const buildError = require('./error-builder')

module.exports = {
    ValueError: buildError('ValueError'),
    VoidError: buildError('VoidError'),
    DuplicityError: buildError('DuplicityError'),
    UnexistanceError: buildError('UnexistanceError'),
    CredentialsError: buildError('CredentialsError')
}