var CONFIG = require('../../config');
var express = require('express');
var router = express.Router();

function json_end(res, data) {
    var data = data || {};
    res.header("Content-Type", "application/json; charset=utf-8");
    res.json(data);
}

var upload = require('./upload');
router.post('/upload', upload);

var download = require('./download');
router.get('/download/:id', download);

var downloadFile = require('./downloadFile');
router.get('/download/:id/file/:filename', downloadFile);

var code = require('./code');
router.get('/code/:id', code);

router.get('*', function(req, res) {
    json_end(res,{
        code: CONFIG.CODE.EMPTY
    })
})


module.exports = router;