const Atendimento = require('../models/atendimentos');

module.exports = app => {
    app.get('/atendimentos', (req, resp) => {
        resp.send('Servidor rodando!!....');
    });

    app.post('/atendimentos', (req, resp) => {
        console.log(req.body);
        const novoAtendimento = req.body;

        Atendimento.adiciona(novoAtendimento);
        resp.send(novoAtendimento);
    });
};