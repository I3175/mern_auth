const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    username: String,
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: String,
    role: String
});

// compiler
const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;