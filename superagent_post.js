var request = require('superagent');


request
    .post('http://127.0.0.1:8081/process_post')
    .set({ 'API-Key': 'foobar', Accept: 'application/json' })
    .query({ first_name: 'lalala', last_name1: 'gaga' })
    // .send('{ "first_name": "lalala", "last_name": "gaga" }')
    // .send({ first_name: 'lalala', last_name: 'gaga' })
    .end(function(err, res) {
        if (err) {
            // console.error(err);
            console.error("发生错误");
        } else {
            console.error('success');
            console.log(res.text);
        }
    });
