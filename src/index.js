const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.json({
        evento: 'Semano Oministack 11.0',
        aluno: 'Davi Augusto'
    });
});
app.listen(3333);