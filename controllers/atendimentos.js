const Atendimento = require('../models/atendimentos');

module.exports = app => {
    app.get('/atendimentos', (req, resp) => {
        resp.send('Servidor rodando!!....');
    });

    app.post('/atendimentos', (req, res) => {
        console.log(req.body);
        const novoAtendimento = req.body;

        Atendimento.adiciona(novoAtendimento, res);
    });
};