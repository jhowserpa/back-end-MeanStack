var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var produtos = new Schema({
    codigo: String,
    quantidade: String,
    descricao: String,
    ean: String,
    valor: String,
    totalProduto: String
});

var VendaSchema = new Schema({
    codigo: String,
    nome: String,
    data: String,
    totalVenda: String,
    produtos: [produtos]
});

module.exports = mongoose.model('Venda', VendaSchema);