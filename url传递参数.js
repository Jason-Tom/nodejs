var lalala = require('querystring');
console.log(lalala.stringify({ name: 'gagaga', course: ['Chinese', 'English'], other: '' }, '@', ':'));
console.log(lalala.parse("name:gagaga@course:Chinese@course:English@other:", '@', ':'));
console.log(lalala.stringify({ name: 'gagaga', course: ['Chinese', 'English'], other: '' }));
console.log(lalala.parse("name=gagaga&course=Chinese&course=English&other= "));
// 将参数序列化成字符串，不要轻易换行
// 序列化，反序列化，相关参数

console.log(lalala.escape('啦啦啦lalala'));
console.log(lalala.unescape('%E5%95%A6%E5%95%A6%E5%95%A6lalala'));