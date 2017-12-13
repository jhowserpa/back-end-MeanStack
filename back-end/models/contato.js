var mongoose = require('mongoose');
var Schema  = mongoose.Schema;

var ContatoSchema = new Schema({
	foto : {type : Buffer },
    nome: String,
    endereco: String,
    email: String,
    telefone: String,
    autenticacao : String
});

module.exports = mongoose.model('Contato', ContatoSchema);