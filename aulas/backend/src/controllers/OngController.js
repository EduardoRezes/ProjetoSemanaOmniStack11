const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {

    async index (request, response) {
        const ongs = await connection('ongs').select('*');
      
        return response.json(ongs);
    },

    async create(request, response) {
        /*request = guarda todos os dados atraves da requisição do usuario.
          response = retornar uma resposta para o usuario */

        const {name, email, whatsapp, city, uf} = request.body;

        //criação do id randomicamente com o crypto
        const id = crypto.randomBytes(4).toString('HEX');

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        });

     return response.json( {id} );
    }
};