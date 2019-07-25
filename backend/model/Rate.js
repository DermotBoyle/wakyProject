
const mongoose = require("../config");

const schema = new mongoose.Schema({
    objectId: String,
    veterinary: {
        "__type": String,
        "className": String,
        "objectId": String
    },
    state: Number,
    value: Number,
    comment: String,
    sessionId: String,
    createdAt: String,
    updatedAt: String
}, {
    collection: "rates"
});

module.exports = mongoose.model('Rate', schema);