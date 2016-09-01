var CONFIG = require('../../config');
var formidable = require('formidable');
var path = require('path');
var fs = require('fs');
var uuid = require('node-uuid');
var JSZip = require('jszip');


function json_end(res, data) {
    var data = data || {};
    res.header("Content-Type", "application/json; charset=utf-8");
    res.json(data);
}

module.exports = function(req, res) {
    console.log('DOWNLOADFILE');
    var id = req.params.id;
    var filename = req.params.filename;
    new Promise(function(_succ, _fail) {
        var pth = path.resolve(CONFIG.fileDir, id, filename).toString();
        var exi = fs.existsSync(pth);
        if (!exi) _fail('INVALID ID & FILENAME');
        else {
            // res.set({
            //     "Content-Disposition": 'attachment; filename="' + encodeURIComponent(filename),
            //     "Content-Type": "application/octet-stream;charset=UTF-8",
            //     // "Content-Length": content.length
            // });
            res.setHeader('Content-Type', 'charset=UTF-8');
            res.download(pth);

        }
    }).catch(function(e) {
        console.error(e);
        json_end(res, {
            code: CONFIG.CODE.ERROR,
            message: e
        })
    })
}
