const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();
//validação de login
app.use(cors());
//antes de todas as requisições(deve vir antes das rotas),
//o express ir ao corpo da requisição e converter o arquivo json em um objeto javascript 
app.use(express.json());
app.use(routes);




app.listen(3333);