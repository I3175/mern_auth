const register = (req, res) => {
    return res.status(200).send('register user');
}

module.exports = {
    register: register
};