const mongoose = require('mongoose');

function Connection() {
    const mongoURI = process.env.MONGO_URL;

    mongoose.connect(mongoURI)
    .then(() => console.log("connected"))
    .catch(err => console.log(err))
}

module.exports = Connection