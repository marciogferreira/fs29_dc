const UserModel = require('../models/UserModel')
class AuthController {

    async login(request, response) {
        const body = request.body;
        const { login, password } = body;
        const dados = await UserModel.findOne({
            where: {
                login: login,
                password: password
            }
        })
        
        if(dados) {
            return response.json(dados)
        } else {
            return response.send("Login ou senha incorreto")
        }
        
    }
}

module.exports = AuthController