const getListUser = (req, res) =>{
    res.send('list users');
}
const userDetail = (req, res) =>{
    res.send('detail users');
}

module.exports = {
    getListUser: getListUser,
    userDetail: userDetail
}
