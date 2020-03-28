const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentsController');
const ProfileController = require('./controllers/ProfileController.js');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

// Login
routes.post('/session', SessionController.create);

// Listagem de ongs
routes.get('/ongs', OngController.index);
// Cadastro de ongs
routes.post('/ongs', OngController.create);

// Profile
routes.get('/profile', ProfileController.index);

// Cadastro de Incidets
routes.post('/incidents', IncidentsController.create);
// Listagem de Incidets
routes.get('/incidents', IncidentsController.index);
// Deletar Incidents
routes.delete('/incidents/:id', IncidentsController.delete);
module.exports = routes;