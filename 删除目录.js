var fs = require("fs");

console.log("准备删除目录 test");
fs.rmdir("test",function(err){
  // 删除的文件夹要为空，里面有空文件夹也不行
   if (err) {
       return console.error(err);
   }
   console.log("读取 test 目录");
   fs.readdir("test",function(err, files){
      if (err) {
          return console.error(err);
      }
      files.forEach( function (file){
          console.log( file );
      });
   });
});