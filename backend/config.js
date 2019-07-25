const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/wakyma';
console.log(`Connecting to ${url}`);
mongoose
    .connect(url, {useNewUrlParser: true})
    .then(() => {
        console.log("Connected with database")
    })
    .catch(err => console.error(err));

module.exports = mongoose;

