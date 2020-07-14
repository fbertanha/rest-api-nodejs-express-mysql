const moment = require('moment');

const conexao = require('../infraestrutura/conexao');

class Atendimentos {

    adiciona(atendimento, res) {

        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS');
        const atendimentoDatado = {...atendimento, dataCriacao};

        const sql = ` INSERT INTO atendimentos SET ? `;

        conexao.query(sql, atendimentoDatado, (erro, resultado) => {

            if (erro) {
                res.status(400).json(erro);
            } else {
                res.status(201).json(resultado);
            }
        });
    }
}

module.exports = new Atendimentos;