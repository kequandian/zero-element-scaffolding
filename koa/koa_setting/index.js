var koa=require('koa')
var route=require('koa-route')//配置路由
var koaBody=require('koa-body')// 解析post请求会用到koa-body

let app=new koa();
let port = 3000 //端口
app.use(koaBody())

// api调用
let setting=require('./api/setting')

app.use(route.get('/api/config',setting.getJson))
console.log("服务器开启，端口为"+port)
app.listen(port)