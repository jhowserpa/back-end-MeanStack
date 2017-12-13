var mongoose = require('mongoose');

var urlString = 'mongodb://localhost/usuarios';

mongoose.connect(urlString,{
    useMongoClient: true,
});