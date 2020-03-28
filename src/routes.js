const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentsController');

const routes = express.Router();

// Listagem de ongs
routes.get('/ongs', OngController.index);
// Cadastro de ongs
routes.post('/ongs', OngController.create);

// Cadastro de Incidets
routes.post('/incidents', IncidentsController.create);
// Listagem de Incidets
routes.get('/incidents', IncidentsController.index);
// Deletar Incidents
routes.delete('/incidents/:id', IncidentsController.delete);
module.exports = routes;