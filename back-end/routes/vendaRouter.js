var express = require('express');
var router = express.Router();
var vendaController = require('../controllers/vendaController');
var produtoController = require('../controllers/produtoController');
var mongoose = require('mongoose');

router.get('/vendas', function (req, res) {
    vendaController.list(function (vendas) {
        res.json(vendas);
    });
})

router.get('/venda/:id', function (req, res) {
    var id = req.params.id;
    vendaController.findByIdProduto(id, function (vendas) {
        res.json(vendas);
    });
})

router.get('/produto', function (req, res) {
    produtoController.list(function (produtos) {
        res.json(produtos);
    });
})

router.post('/venda', function (req, res) {

    var codigo = req.body.codigo;
    var nome = req.body.nome;
    var data = req.body.data;
    var totalVenda = req.body.totalVenda;
    var produtos = req.body.produtos;

    vendaController.save(codigo, nome, data, totalVenda, produtos, function (resp) {
        res.json(resp);
    });
});

//Update 
router.put('/venda', function (req, res, next) {
    var venda = req.body;
    var upd = {};

    if (venda.codigo) {
        upd.codigo = venda.codigo;
    }
    if (venda.nome) {
        upd.nome = venda.nome;
    }
    if (venda.data) {
        upd.data = venda.data;
    }
    var produtos = []
    for (var x in venda.produtos) {
        produtos : {
            var codigo = venda.produtos[x].codigo;
            var descricao = venda.produtos[x].descricao;
            var ean = venda.produtos[x].ean;
            var valor = venda.produtos[x].valor;
        }        
        upd.produtos = venda.produtos.push(produtos);
    }

    if (!upd) {
        res.status(400);
        res.json({
            "Error": "Bad request"
        })
    } else {
        vendaController.update(upd, {}, function (err, resp) {
            if (err) {
                res.send(err);
            }
            res.json(resp);
        });
    }
});


router.delete('/venda/:id', function (req, res) {
    var id = req.params.id;

    vendaController.delete(id, function (resp) {
        res.json(resp);
    });
})

module.exports = router;