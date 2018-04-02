var express = require('express');
var router = express.Router();
var sqlMap = require('../sqlMap');
var pool = require('../dbPool.js');
var crypto = require('crypto');

//注册新用户
router.post('/saveAlt', function(req, res,next) {
    var params = req.body;
    console.log(params);
	pool.getConnection(function(err, connection){
	  sql = eval("sqlMap." + params.role + ".saveAlt_Sql");
      connection.query( sql, [params.icon, params.username], function(err){
        if(err){
          console.log("saveAlt_Sql Error: " + err.message);
          res.json({'status':'-1','msg':'保存头像失败'});
        }else{
			console.log("saveAlt succeed");
			res.json({'status':'1','msg':'保存头像成功'});
        }
    });
  
    connection.release();
   });
});



//更新用户信息
router.post('/updateInfo', function(req, res, next) {
    var params = req.body;
    console.log(params);
	pool.getConnection(function(err, connection){
	  sql = eval("sqlMap." + params.role + ".updateInfo_Sql");
      connection.query( sql, [params.newUsername, params.email, params.sex, params.username], function(err){
        if(err){
          console.log("updateInfo_Sql Error: " + err.message);
          res.json({'status':'-1','msg':'资料修改失败'});
        }else{
			console.log("updateInfo succeed");
			res.json({'status':'1','msg':'资料修改成功'});
        }
      });
  
    connection.release();
   });
});




//更改密码
router.post('/updatePass', function(req, res) {
    var params = req.body;
    console.log(params);

		
	pool.getConnection(function(err, connection){
	  	
	  sql = eval("sqlMap." + params.role + ".getUserByUsername_Sql");
      connection.query( sql, [params.username], function(err, result){
        if(err){
          console.log("getUserByUsername_Sql Error: " + err.message);
          res.json({'status':'-1','msg':'查询密码失败'});
        }else{
			//检查用户是否存在
			if(result == '')
			{
			  res.json({'status':'-2','msg':'用户名有误'});
			}
			else{
			  //对密码进行加密
			  var pwd = params.password;
			  md5 = crypto.createHash('md5');
			  //digest()是crypto加密模块中的一个方法，用来计算传入数据的摘要值，参数是编码方式，可以有 'hex'、'binary'或者'base64'
			  pwd = md5.update(pwd).digest('hex');
			  
			  
			  //检查密码是否正确
			  if(result[0].password != pwd){

				res.json({'status':'-3','msg':'原密码有误'});
			  }else{
				/*密码正确，将新密码插入数据库*/
           
				
                //首先要将新的密码进行加密
                var npwd = params.newpass;
			    md5 = crypto.createHash('md5');
			    //digest()是crypto加密模块中的一个方法，用来计算传入数据的摘要值，参数是编码方式，可以有 'hex'、'binary'或者'base64'
			    npwd = md5.update(npwd).digest('hex');    

				console.log(npwd);
				 
                //新密码插入数据库
                sql = eval("sqlMap." + params.role + ".updatePass_Sql");
                connection.query( sql, [npwd, params.username], function(err){
					if(err){
					  console.log("updatePass_Sql Error: " + err.message);
					  res.json({'status':'-4','msg':'密码修改失败'});
					}else{
						console.log("updatePass succeed");
						res.json({'status':'1','msg':'密码修改成功'});
					}
			    });				
				
			  } 
			}
        }
    });
  
    connection.release();
   });
});


module.exports = router;