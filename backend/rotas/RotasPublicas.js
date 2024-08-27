const express = require('express');
const jwt = require('jsonwebtoken');
const RotasPublicas = express.Router();

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
            exp: Math.floor(Date.now() / 1000) + 15,
        }, 'eyJhbGciOiJQUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.iOeNU4dAFFeBwNj6qdhdvm-IvDQrTa6R22lQVJVuWJxorJfeQww5Nwsra0PjaOYhAMj9jNMO5YLmud8U7iQ5gJK2zYyepeSuXhfSi8yjFZfRiSkelqSkU19I-Ja8aQBDbqXf2SAWA8mHF8VS3F08rgEaLCyv98fLLH4vSvsJGf6ueZSLKDVXz24rZRXGWtYYk_OYYTVgR1cg0BLCsuCvqZvHleImJKiWmtS0-CymMO4MMjCy_FIl6I56NqLE9C87tUVpo1mT-kbg5cHDD8I7MjCW5Iii5dethB4Vid3mZ6emKjVYgXrtkOQ-JyGMh6fnQxEFN1ft33GX2eRHluK9eg');
    response.json({ message: 'Login realizado com sucesso', token: token, tempo: Math.floor(Date.now() / 1000) + 15 });
})

RotasPublicas.post('/cadastrar', (request, response) => {
    const dados = request.body
    // Model para cadastrar
    response.json({ message: 'Cadastro realizado com sucesso' });
})

module.exports = RotasPublicas