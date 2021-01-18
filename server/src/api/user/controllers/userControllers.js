// const payloadCheck = require('payload-validator');

const userRepository = require('../repository/userRepository');
const responses = require('../../common/responses/responses');

const UserModel = require("./userModel");

exports.get_all_users = async (req, res) => {
    try{
        const users = await userRepository.get_all_users();
        return responses.response(
            res, 
            {status: 200, message:'Sucesso ao pegar os Usuários!', 
            value: users ? users.map((user) => new UserModel(user.id,user.name,user.email,user.password, user.cargo, user.active)) : users});
    }  
    catch(err){
        return responses.response(res, {status: 500, message:'Falha ao pegar os Usuários!'})
    }
}
