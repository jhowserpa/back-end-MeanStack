var express = require('express');
var router = express.Router();
var produtoController = require('../controllers/produtoController');


router.get('/produtos', function (req, res) {
    produtoController.list(function (produtos) {
        res.json(produtos);
    });
})

router.post('/produto', function (req, res) {

    var codigo = req.body.codigo;
    var descricao = req.body.descricao;
    var ean = req.body.ean;
    var valor = req.body.valor;

    produtoController.save(codigo, descricao, ean, valor, function (resp) {
        res.json(resp);
    });
});


router.delete('/produto/:id', function (req, res) {
    var id = req.params.id;

    produtoController.delete(id, function (resp) {
        res.json(resp);
    });
})

module.exports = router;