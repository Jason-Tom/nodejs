var request = require('superagent');

// request
// .get('http://localhost:8081/index.htm')
// .end(function(err,res){
//   if(err)console.error(err);
//   else console.log(res.text);
// })

request
// .post('/api/pet')
    // .get('http://127.0.0.1:8081/process_get')
    .get('http://www.w3school.com.cn/jquery/test1.txt')
    // 使用绝对路径
    // .get('/process_get')
    // 相对路径？
    // .set('API-Key', 'foobar')
    // .set('Accept', 'application/json')
    .set({ 'API-Key': 'foobar', Accept: 'application/json' })
    // API-Key什么用？？
    // .query({ first_name: '12313' })
    // .query({ last_name: 'asda' })
    // 第一种传输数据的格式
    .query({ first_name: 'lalala', last_name: 'gaga' })
    // 大对象传输数据
    // .query( 'first_name=12313' )
    // .query( 'last_name=asda' )
    // 字符串拼接不用大括号（不是对象）
    // .query( 'first_name=12313','last_name=asda' )
    // 字符串拼接不能弄成集成来写，只会识别前一个
    // 方法是连续通过.不断叠加方法的，期间不能有分号
    .end(function(err, res) {
        // 包括发送请求和处理响应
        if (err) {
            console.error(err);
        } else {
            console.error('success');
            
            console.log(res);
            // console.log(res.text);
            // 一般的文本和json（主要）
            // console.log(res.body);
            // 如何接收返回来的数据
            // console.log(res.header);
            // console.log(res.type);
            // console.log(res.charst);
            // console.log(res.status);
        }
    });

// var url = 'https://gist.githubusercontent.com/reinaldo13/cdbb4d663ba23410a77b/raw/0345267767d50790051951ddc460e2699649de2b/it-works.txt';

// request.get(url, function(err, res) {
//     if (err) throw err;
//     console.log(res.text);
// });
