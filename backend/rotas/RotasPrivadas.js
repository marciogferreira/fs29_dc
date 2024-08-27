const express = require('express')
const UsuariosRotas = require('./UsuariosRotas')
const PostsRotas = require('./PostsRotas')
const ProductRotas = require('./ProductRotas')
const jwt = require('jsonwebtoken');
const RotasPrivadas = express.Router()
// Minhas Rotas Privadas, acessadas apenas com Token
RotasPrivadas.use((request, response, next) => {
    const token = request.headers.token || null;
    console.log(token)
    try {
        const decode = jwt.verify(token, 'eyJhbGciOiJQUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.iOeNU4dAFFeBwNj6qdhdvm-IvDQrTa6R22lQVJVuWJxorJfeQww5Nwsra0PjaOYhAMj9jNMO5YLmud8U7iQ5gJK2zYyepeSuXhfSi8yjFZfRiSkelqSkU19I-Ja8aQBDbqXf2SAWA8mHF8VS3F08rgEaLCyv98fLLH4vSvsJGf6ueZSLKDVXz24rZRXGWtYYk_OYYTVgR1cg0BLCsuCvqZvHleImJKiWmtS0-CymMO4MMjCy_FIl6I56NqLE9C87tUVpo1mT-kbg5cHDD8I7MjCW5Iii5dethB4Vid3mZ6emKjVYgXrtkOQ-JyGMh6fnQxEFN1ft33GX2eRHluK9eg')
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