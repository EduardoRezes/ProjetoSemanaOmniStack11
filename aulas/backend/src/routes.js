const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
//desacoplando o modulo de rotas do express em uma nova variavel
const routes = express.Router();

routes.post('/sessions', SessionController.create);

//List Value on Table
routes.get('/ongs', OngController.index);
//Creat Table with Value
routes.post('/ongs', OngController.create);

//Lista casos especificos de uma ONG
routes.get('/profile', ProfileController.index);

//List Incidents
routes.get('/incidents', IncidentController.index);
//Creat Incidents
routes.post('/incidents', IncidentController.create);
//Delete Incidents
routes.delete('/incidents/:id', IncidentController.delete);


module.exports = routes;