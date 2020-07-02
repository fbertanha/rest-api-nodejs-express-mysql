

module.exports = app => {
    app.get('/atendimentos', (req, resp) => {
        resp.send('Servidor rodando!!....');
    });
};