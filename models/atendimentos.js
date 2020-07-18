const moment = require('moment');

const conexao = require('../infraestrutura/conexao');

class Atendimentos {

    adiciona(atendimento, res) {

        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS');

        const dataEhValida = moment(atendimento.data).isSameOrAfter(dataCriacao);
        const clienteEhValido = atendimento.cliente.length >= 5;

        const validacoes = [
            {
                nome: 'data',
                valido: dataEhValida,
                mensagem: 'Deve deve ser maior ou igual a data atual'
            },
            {
                nome: 'cliente',
                valido: clienteEhValido,
                mensagem: 'Cliente deve ter pelo menos cinco caracteres'
            }
        ];

        const erros = validacoes.filter(campo => !campo.valido);
        const existemErros = erros.length;

        if (existemErros) {
            res.status(400).json(erros);
            return;
        }
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

    lista(res) {
        const sql = `SELECT * 
        FROM Atendimentos`;

        conexao.query(sql, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro);
            } else {
                res.status(200).json(resultados)
            }
        })
    }

    buscaPorId(id, res) {
        const sql = `SELECT * 
        FROM Atendimentos
        WHERE id = ${id}`;

        conexao.query(sql, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro);
            } else {
                const atendimento = resultados[0];
                res.status(200).json(atendimento)
            }
        })

    }
}

module.exports = new Atendimentos;