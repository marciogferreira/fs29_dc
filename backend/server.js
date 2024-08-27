const express = require('express');
const RotasPrivadas = require('./rotas/RotasPrivadas');
const RotasPublicas = require('./rotas/RotasPublicas');
const app = express();
// HABILITA O RECEBIMENTO DE DADOS PELO BODY
app.use(express.json())

app.get('/', (request, response) => {
    return response.status(200).send("Hello Backend")
})
app.use(RotasPublicas)
app.use(RotasPrivadas)
// N ROTAS

app.listen(3000, 'localhost', () => {
    console.log("Servidor executando em http://localhost:3000")
})