var express = require('express');
var router = express.Router();
// 引入mysol模块
const mysql = require('mysql');
// 3）配置数据库连接
const connection=mysql.createConnection({
    host     : 'localhost', //数据库主机名
    user     : 'root',         //数据库账号
    password : 'root',    //密码
    database : 'hlsmms'      //使用哪个数据库
});
// 4）打开数据库连接
connection.connect(err=>{
  if(err){
    console.log("× 数据库链接失败！",err.message);
  }
  else{
    console.log("√ 数据库链接成功！");
  }
});

// 添加账号路由
router.post('/useradd',(req,res) => {
//   pass: 123123
// user: 123123
// passCheck: 123123
// usergroup: 普通管理员

  // 解构参数
  let {pass,user,usergroup} = req.body;
  //设置请求头
  res.header("Access-Control-Allow-Origin","*");

  // 6）添加用户的路由中构造sql语句和参数数组
  let sqlStr="insert into userinfo(username,userpwd,usergroup) values(?,?,?)";
  let sqlParmas=[user,pass,usergroup];

  //语法：conn.query("sql语句","参数数组",回调函数(err错误对象,result返回的结果)=>{});
  connection.query(sqlStr,sqlParmas,(err,result)=>{
    //错误处理
    if(err){
      throw err;
    }
    else{
      //执行的结果
      // console.log(result);
      /*
      *
      OkPacket {
      fieldCount: 0,
      affectedRows: 1,  //受影响的行数，大于0表示执行成功
      insertId: 2,
      serverStatus: 2,
      warningCount: 0,
      message: '',
      protocol41: true,
      changedRows: 0 }
      */
      //res.send("执行的结果"+result);
      //根据执行的结果返回数据给前端
      if(result.affectedRows>0){
        res.json({"isOk":true,"code":1,"msg":"用户添加成功！"});
      }
      else{
        res.json({"isOk":false,"code":-1,"msg":"用户添加失败！"});
      }
    }
  });

  
})

module.exports = router;
