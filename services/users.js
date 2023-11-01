const userRepositories = require("../repositories/users")

const getUsers = () =>{
    return userRepositories.getUsers();
}
const getUserById = (idUser) => {
    return userRepositories.getUsersById(idUser);
}
const creatUser = (body) => {
    return userRepositories.creatUser(body);
}
const deleteUser = (idUser) => {
    return userRepositories.deleteUser(idUser);
}
const updateUser = (idUser, body) => {
    return userRepositories.updateUser(idUser, body);

}
module.exports = {
    getUsers,
    getUserById,
    creatUser,
    deleteUser,
    updateUser
}