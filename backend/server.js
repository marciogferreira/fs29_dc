const express = require('express');
const UsuariosRotas = require('./rotas/UsuariosRotas');
const PostsRotas = require('./rotas/PostsRotas');
const app = express();

// HABILITA O RECEBIMENTO DE DADOS PELO BODY
app.use(express.json())

app.get('/', (request, response) => {
    return response.status(200).send("Hello Backend")
})

// MIDDLEWARE
// app.use((request, response, next) => {
//    if(request.headers.token === 'token que eu tenho') {
//     next()
//    } else {
//     return response.status(403).send("Nao autorizado")
//    }
// })

app.get('/teste', (request, response) => {
    return response.send("Olá JOvens")
})
app.use(UsuariosRotas)
app.use(PostsRotas)
// N ROTAS


app.listen(3000, 'localhost', () => {
    console.log("Servidor executando em http://localhost:3000")
})