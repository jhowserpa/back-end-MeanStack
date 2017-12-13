var mongoose = require('mongoose');
var Schema  = mongoose.Schema;

var ProdutoSchema = new Schema({
    codigo: String,
    descricao: String,
    ean: String,
    valor: String,
    quantidade: String
});

module.exports = mongoose.model('Produto', ProdutoSchema);