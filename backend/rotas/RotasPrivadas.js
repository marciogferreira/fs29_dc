const express = require('express')
const UsuariosRotas = require('./UsuariosRotas')
const PostsRotas = require('./PostsRotas')
const ProductRotas = require('./ProductRotas')
const jwt = require('jsonwebtoken');
const RotasPrivadas = express.Router()
require('dotenv').config()
// Minhas Rotas Privadas, acessadas apenas com Token
RotasPrivadas.use((request, response, next) => {
    const token = request.headers.token || null;
    console.log(token)
    try {
        const decode = jwt.verify(token, process.env.APP_KEY)
        console.log(decode);
    } catch(e) {
        return response.status(403).send("Nao autorizado " + e.message)
    }
    next();
})
RotasPrivadas.use(UsuariosRotas)
RotasPrivadas.use(PostsRotas)
RotasPrivadas.use(ProductRotas)

module.exports = RotasPrivadas