const express = require('express');
const hanlebars=require('express3-handlebars')

const app = express();
//设置模版引擎

//设置端口号
app.set("port", process.env.PORT || 3000);

app.get("/", function (req, res) {
    //默认的状态码为200
    res.type("text/plain");
    res.send('Meadow')
})

//设置404页面

app.use(function (req, res) {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
})
//设置500页面

app.use(function (err, req, res, next) {
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
})

//启动监听
app.listen(app.get('port'), function () {
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});




