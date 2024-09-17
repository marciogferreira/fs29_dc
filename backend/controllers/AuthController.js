const UserModel = require('../models/UserModel')
const jwt = require('jsonwebtoken');
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
            const token = jwt.sign({ 
                login: dados.login, 
                exp: Math.floor(Date.now() / 1000) + 60 * 60,
                }, 
                process.env.APP_KEY
            );

            return response.json({ 
                message: 'Login realizado com sucesso', 
                token: token, tempo: Math.floor(Date.now() / 1000) + 15 });
        } else {
            return response.status(403).send("Login ou senha incorreto")
        }
        
    }
}

module.exports = AuthController