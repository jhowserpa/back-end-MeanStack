var express = require('express');
var router = express.Router();
var multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.jpg')
    }
});

var upload = multer({ storage: storage }).single('imgUpload');

router.post('/', function (req, res) {
    upload(req, res, function (err) {
        if (err) {
            res.json({
                success: false,
                message: 'Falha ao tentar fazer o Upload!'
            });
        }
        res.json({
            success: true,
            message: 'Upload realizado com sucesso!'
        });
    })
});


module.exports = router;