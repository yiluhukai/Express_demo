const express = require("express");
const exphbs = require("express3-handlebars");
//引入自定义库
const fortune = require("./lib/fortune.js");

const app = express();

//设置模版引擎的后缀名为handlebars,后面是对应的callback
app.engine("handlebars", exphbs({defaultLayout: "main"}));
//设置要使用的模版为handlebars
app.set("view engine", "handlebars");
//设置加载模版引擎的路径，默认为/views
app.set("views", "./views");
//设置端口号
app.set("port", process.env.PORT || 3000);


//使用静态服务
app.use(express.static(__dirname + "/public"));


//检测传入的查询字符串是否包含test=1的中间件
app.use(function (req, res, next) {
    res.locals.showTests = app.get('env') !== 'production' && req.query.test === '1';
    next();
})

//设置路由
app.get("/", function (req, res) {
    //默认的状态码为200
    // res.type("text/plain");
    // res.send("Meadow")
    res.render("home");
})

app.get('/tours/hood-river', function (req, res) {
    res.status(200);
    res.render('tours/hood-river');
});

app.get('/tours/request-group-rate', function (req, res) {
    res.status(200);
    res.render('tours/request-group-rate');
});


app.get("/about", function (req, res) {
    //默认的状态码为200
    const randomFortune = fortune.getFortune();
    res.render("about", {fortune: randomFortune, pageTestScript: '/qa/tests-about.js'})
})

//设置404页面

app.use(function (req, res) {
    //res.type("text/plain");
    res.status(404);
    //res.send("404 - Not Found");
    res.render("404");
})
//设置500页面

app.use(function (err, req, res, next) {
    res.type("text/plain");
    res.status(500);
    //res.send("500 - Server Error");
    res.render("500");
})

//启动监听
app.listen(app.get("port"), function () {
    console.log("Express started on http://localhost:" + app.get("port") + "; press Ctrl-C to terminate.");
});




