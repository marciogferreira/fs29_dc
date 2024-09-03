const express = require('express');
const jwt = require('jsonwebtoken');
const RotasPublicas = express.Router();
require('dotenv').config()
RotasPublicas.get('/publica', (request, response) => {
    return response.send("Publica");
})
RotasPublicas.post('/login', (request, response) => {
    const { login, password } = request.body;
    // Model para coferir
    // Converto para JWT
    // Envia JWT
    const token = jwt.sign({ 
            login, 
            password,
            // exp: 1725319833
            exp: Math.floor(Date.now() / 1000) + 60 * 60,
        }, process.env.APP_KEY);
    response.json({ 
            message: 'Login realizado com sucesso', 
            token: token, tempo: Math.floor(Date.now() / 1000) + 15 });
})

RotasPublicas.post('/cadastrar', (request, response) => {
    const dados = request.body
    // Model para cadastrar
    response.json({ message: 'Cadastro realizado com sucesso' });
})

module.exports = RotasPublicas