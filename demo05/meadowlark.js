const express = require('express');
const exphbs = require('express3-handlebars');

const app = express();

//设置模版引擎的后缀名为handlebars,后面是对应的callback
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
//设置要使用的模版为handlebars
app.set('view engine', 'handlebars');
//设置加载模版引擎的路径，默认为/views
app.set("views", "./views");
//设置端口号
app.set("port", process.env.PORT || 3000);
//禁止向客户端响应服务器的信息
app.disable("x-powered-by");

//使用静态服务
app.use(express.static(__dirname + '/public'));

const fortunes = ["Conquer your fears or they will conquer you.",
    "Rivers need springs.", "Do not fear what you don't know.",
    "You will have a pleasant surprise.",
    "Whenever possible, keep it simple.",
];

//设置路由
app.get("/", function (req, res) {
    //默认的状态码为200
    // res.type("text/plain");
    // res.send('Meadow')
    res.render('home');
})
//获取请求头信息
app.get("/headers", function (req, res) {
    //res.type("text/plain");
    console.log(req.cookie);
    let s = "";
    for (const name in req.headers) {
        s += name + ":" + req.headers[name] + "\n"
    }
    res.send(s);
})


app.get("/about", function (req, res) {
    //默认的状态码为200
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    res.render("about", {fortune: randomFortune});
})

//设置404页面

app.use(function (req, res) {
    //res.type('text/plain');
    res.status(404);
    //res.send('404 - Not Found');
    res.render('404');
})
//设置500页面

app.use(function (err, req, res, next) {
    res.type('text/plain');
    res.status(500);
    //res.send('500 - Server Error');
    res.render('500');
})

//启动监听
app.listen(app.get('port'), function () {
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});




