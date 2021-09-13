let json = require("./setting.json")
let getJson = async(ctx,next)=>{
    ctx.body = {status:1,msg:"获取参数成功",data:json}
}
module.exports = {getJson}