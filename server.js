const http=require('http')
const fs=require('fs')
const url=require('url')
const server=http.createServer((req,res)=>{
    let urlObj=url.parse(req.url)
    console.log(urlObj)
    // res.end('hello world')
    if(urlObj.pathname === '/getWeather'){
        res.end(JSON.stringify({data:'晴'}))
    }else{
        res.end(fs.readFileSync(__dirname + '/index.html'))
    }   
})

server.listen(8888)

console.log('open http://localhost:8888')