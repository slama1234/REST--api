const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const blogSchema = new Schema ({
    name: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },

    age: Number,
});

const User = mongoose.model("UserData", blogSchema);
module.exports = User;