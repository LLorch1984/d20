const mongoose = require('mongoose')

const { Types: { ObjectId }, connect, disconnect} = mongoose

module.exports = {
    connect(url) {
        return connect(url, {useUnifiedTopology: true, useCreateIndex: true })
    },

    disconnect,

    ObjectId
}