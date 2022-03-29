let Mock = require("mockjs")
let data = [
    {title:"中国npm镜像源升级公告",name:"sadasdas",num:"1111",text:"0"},
    {title:"中国npm镜像源告",name:"fgsdg",num:"222",text:"4"},
    {title:"中国npm镜像源升",name:"zcvx ",num:"333",text:"6"},
    {title:"中国npm镜像源升级公告",name:"zxsafa",num:"121",text:"0"},
    {title:"中国npm升级公告",name:"afdsf ",num:"456",text:"7"},
    {title:"中国npm镜像源升级公告",name:"dsss",num:"756",text:"5"},
    {title:"中国npm镜级公告",name:"dsfdsf ",num:"777",text:"4"},
    {title:"中国npm镜源升级公告",name:"dsfdsf ",num:"777",text:"4"},
    {title:"中国np像源升级公告",name:"dsfdsf ",num:"777",text:"4"},
    {title:"中国npm镜升级公告",name:"dsfdsf ",num:"777",text:"4"},
  
]
// 获取
Mock.mock("/api/homeindex","get",function(config){
    console.log(config)
    return data
})
// 删除
Mock.mock(/\/api\/homeindex\/\d/,"delete",function(config){
    console.log(config.url)
    let arr = config.url.split("/")
    let id = arr.pop()
    data.splice(id,1)
    data = data.map(function(item,id){
        return {
            id,
            name:item.name,
            text:item.text
        }
    })
    console.log(data)
    return data
})