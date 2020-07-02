

module.exports = app => {
    app.get('/atendimentos', (req, resp) => {
        resp.send('Servidor rodando!!....');
    });

    app.post('/atendimentos', (req, resp) => {
        console.log(req.body);
       resp.send('Post..')
    });
};