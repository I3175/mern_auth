const jwt = require('jsonwebtoken');
const userModel = require('../Models/UserModel');
const bcrypt = require('bcrypt');
const getListUser = async (req, res) => {

    try {
        const users = await userModel.find();
        res.status(200).send(users);
    } catch (error) {
        // logs error
    }

}
const postUser = (req, res) => {
    try {
        // save data to database
        const { username, email, password, role } = req.body;
        userModel.create({
            username: username,
            email: email,
            password: bcrypt.hashSync(password, 10),
            role: role,
        });
        res.status(200).send('create user success');
    } catch (error) {
        console.log(error);
    }
}

const deleteUser =async (req, res) => {
    try {
        // delete user
        const userId = req.params.userId;

        await userModel.findByIdAndRemove(userId);
        res.status(200).send('delete user success');
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getListUser: getListUser,
    postUser: postUser,
    deleteUser: deleteUser,
}
