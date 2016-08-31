var lalala = require("Url");
// 直接指定接口，通过对象调用接口对应的方法

console.log(lalala.parse("http://www.imooc.com/"));
console.log('----------------------------------------');
console.log(lalala.parse("http://www.imooc.com:8080/home?lalala=1111&gagaga=2222#hash"));
console.log('----------------------------------------');
// console.log(lalala.format({protocol: 'http:',slashes: true,auth: null,host: 'www.imooc.com:8080',port: '8080',hostname: 'www.imooc.com',hash: '#hash',search: '?lalala=1111&gagaga=2222',query: 'lalala=1111&gagaga=2222',pathname: '/home',path: '/home?lalala=1111&gagaga=2222',href: 'http://www.imooc.com:8080/home?lalala=1111&gagaga=2222#hash'}); 
console.log('----------------------------------------');
console.log(lalala.resolve("http://www.imooc.com/", "/course/list"));
console.log('----------------------------------------');
console.log(lalala.parse("http://www.imooc.com:8080/home?lalala=1111&gagaga=2222#hash", true));
console.log('----------------------------------------');
console.log(lalala.parse("//www.imooc.com:8080/home?lalala=1111&gagaga=2222#hash", true));
console.log('----------------------------------------');
console.log(lalala.parse("//www.imooc.com:8080/home?lalala=1111&gagaga=2222#hash", true,true));
console.log('----------------------------------------');
// var lalala=  "/course/list";
// console.log(lalala.resolve("http://www.imooc.com/",lalala));
// 不能放入变量

