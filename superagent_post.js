var request = require('superagent');


request
    // .post('http://www.w3school.com.cn/jquery/test1.txt')
    .post('http://127.0.0.1:8081/')
    .set({ 'API-Key': 'foobar', Accept: 'application/json' })
    .query({ first_name: 'lalala', last_name: 'gaga' })
    // .send('{ "first_name": "lalala", "last_name": "gaga" }')
    // .send({ first_name: 'lalala', last_name: 'gaga' })
    .end(function(err, res) {
        if (err) {
            // console.error(err);
            console.error("发生错误");
        } else {
            console.error('success');
            console.log(res.text);
            // console.log(res);
        }
    });
