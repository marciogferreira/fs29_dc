const ProductModel = require('../models/ProductModel')
const UserModel = require('../models/UserModel')
class UserController {

    async findAll(request, response) {
        const lista = await UserModel.findAll({
            attributes: ['id', 'name', 'login']
        })
        return response.json(lista)
    }

    async findId(request, response) {
        const id = request.params.id
        const dado = await UserModel.findByPk(id, {
            attributes: ['id', 'name', 'login']
        })
        return response.json(dado)
    }

    async create(request, response){
        const dados = request.body
        await UserModel.create(dados);
        return response.json({ message: 'Usuario criado com sucesso' })
    }

    async update (request, response) {
        const id = request.params.id
        const dados = request.body
        await UserModel.update(dados, { where: { id: id } })
        return response.json({ message: 'Usuario atualizado com sucesso' })
    }

    async delete (request, response) {
        const id = request.params.id
        await UserModel.destroy({ where: { id: id } })
        return response.json({ message: 'Usuario deletado com sucesso' })
    }
}

module.exports = UserController