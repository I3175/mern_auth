const userModel = require('../Models/UserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
//register
const register = async (req, res) => {
    try {
        // get info from client
        const { username, email, password } = req.body;

        // create date to database
        await userModel.create({
            username: username,
            email: email,
            password: bcrypt.hashSync(password, 10),
            role: 'regular'
        });
        return res.status(200).send('register user');
    } catch (error) {
        console.log('error', error);
    }
}
//login
const login = async (req, res) => {
    // check email exit
    const user = await userModel.findOne({ email: req.body.email });
    if (!user) {
        return res.status(400).send('Invalid Email Or Password');
    }
    //check password
    const isPassvalid = bcrypt.compareSync(req.body.password, user.password);
    if (!isPassvalid) {
        return res.status(400).send('Invalid Email Or Password');
    }

    const jwtToken = jwt.sign({
        _id: user.id,
        username: user.username,
        role: user.role
    }, process.env.SECRET_JWT, {
        expiresIn: 3600
    }
    );


    return res.status(200).send({
        accessToken: jwtToken
    }
    );
}
module.exports = {
    register: register,
    login: login
};