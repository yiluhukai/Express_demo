const http = require('http');
const fs=require('fs')
const server = http.createServer((req, res) => {
    // 去除字req.url中的查询字符串 /?name=%22aa%22

    const path = req.url.replace(/\/?(?:\?.*)?$/, "");
    console.log(path)
    switch (path) {
        case "": {
            // res.writeHead(200, {'Content-Type': 'text/plain'});
            // res.end("hello wolrd!");
            staticContent(res,"/public/index.html","text/html")
            break
        }
        case "/about": {
            // res.writeHead(200, {'Content-Type': 'text/plain'});
            // res.end("about!");
            staticContent(res,"/public/about.html","text/html")
            break
        }
        case "/image/women.png":{
            staticContent(res,"/public/image/women.png","image/png")
            break
        }
        case "/favicon.ico":{
            break;
        }
        default: {
            // res.writeHead(404, {'Content-Type': 'text/plain'});
            // res.end("page not found!");
            staticContent(res,"/public/404.html","text/html")
            break
        }
    }
})

server.listen(3000, "localhost", (err) => {
    if (err)
        console.log(err.message)
    console.log('Server started on localhost:3000; press Ctrl-C to terminate....');
})


//读取文件的函数

function staticContent(res,path,contentType,statusCode) {
    if(!statusCode)
         statusCode=200;
    fs.readFile(__dirname+path,(err,data)=>{
        if(err){
            res.writeHead(500, { 'Content-Type': 'text/plain' });           
            res.end('500 - Internal Error');
        }else{
            res.writeHead(statusCode, { 'Content-Type': contentType });
            res.end(data);
        }
    })

}
