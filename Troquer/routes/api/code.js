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
    console.log('CODE');
    var id = req.params.id;
    new Promise(function(_succ, _fail) {
        var pth = path.resolve(CONFIG.fileDir, id).toString();
        var exi = fs.existsSync(pth);
        if (!exi) _fail('INVALID ID');
        else {
            var zip = new JSZip();
            var filename = id;
            var arr = fs.readdirSync(pth);
            arr = arr.map(function(item){
                var f = fs.statSync(path.resolve(pth,item).toString());
                f.filename = item;
                return f;
            })
            _succ(arr);
        }
    }).then(function(data){
        json_end(res,{
            code:CONFIG.CODE.SUCCESS,
            data:data
        })
    })
    .catch(function(e){
        console.error(e);
        json_end(res,{
            code:CONFIG.CODE.ERROR,
            message:e
        })
    })
}
