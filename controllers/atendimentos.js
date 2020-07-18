const Atendimento = require('../models/atendimentos');

module.exports = app => {
    app.get('/atendimentos', (req, resp) => {
        Atendimento.lista(resp);
    });

    app.get('/atendimentos/:id', (req, resp) => {
        const id = parseInt(req.params.id);

        Atendimento.buscaPorId(id, resp);
    });

    app.post('/atendimentos', (req, res) => {
        console.log(req.body);
        const novoAtendimento = req.body;

        Atendimento.adiciona(novoAtendimento, res);
    });


    app.patch('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const valores = req.body;

        Atendimento.altera(id, valores, res);
    });

    app.delete('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id);

        Atendimento.deleta(id, res);
    });
};