var CONFIG = require('../../config');
var formidable = require('formidable');
var path = require('path');
var fs = require('fs');
var uuid = require('node-uuid');


function json_end(res, data) {
    var data = data || {};
    res.header("Content-Type", "application/json; charset=utf-8");
    res.json(data);
}

module.exports = function(req, res) {
    console.log('UPLOAD');
    var form = new formidable.IncomingForm();
    form.uploadDir = CONFIG.tempfileDir;
    new Promise(function(_succ, _fail) {
        form.parse(req, function(err, fields, files) {
            if (err) { 
                _fail(err);
                return; 
            }
            var id = uuid.v1();
            var pth = path.resolve(CONFIG.fileDir, id).toString();
            if (!fs.existsSync(pth)) fs.mkdirSync(pth);
            var th = 0;
            for (var i in files) {
                if (i.indexOf('file') == 0) {
                    var newpth = path.resolve(pth, files[i].name);
                    try {
                        fs.renameSync(files[i].path, newpth);
                    } catch (e) {
                        console.error(e);
                    }
                }
                th++;
            }
            if (!th) _fail('NO FILE');
            else _succ({ id: id });
        });
    }).then(function(data) {
        json_end(res, {
            code: CONFIG.CODE.SUCCESS,
            data: data
        })
    }).catch(function(e) {
        console.error(e);
        json_end(res, {
            code: CONFIG.CODE.ERROR,
            message: e
        })
    })
}
