var express = require('express');
var router = express.Router();
var sqlMap = require('../sqlMap');
var pool = require('../dbPool.js');
var crypto = require('crypto');




//更改头像
router.post('/saveAlt', function(req, res,next) {
    var params = req.body;
    console.log(params);
	pool.getConnection(function(err, connection){
	  sql = eval("sqlMap." + params.role + ".saveAlt_Sql");
      connection.query( sql, [params.icon, params.username], function(err){
        if(err){
          console.log(" saveAlt_Sql Error: " + err.message);
          res.json({'status':'-1','msg':'保存头像失败'});
        }else{
			console.log(" saveAlt succeed");
			res.json({'status':'1','msg':'保存头像成功'});
        }
    });
  
    connection.release();
   });
});


//由用户名和身份获得已经过关的关卡数
router.post('/queryChapter', function(req, res, next) {
    var params = req.body;
    console.log(params);
	pool.getConnection(function(err, connection){
		
	  sql = eval("sqlMap." + params.role + ".getChapterNumByRoleUsername_Sql");
      connection.query( sql, [params.role, params.username], function(err, result){
        if(err){
          console.log(" getChapterNumByRoleUsername_Sql Error: " + err.message);
          res.json({'status':'-1','msg':'获取关卡数失败'});
        }else{
	
			//输出查询数据库关卡数目成功语句
			console.log(" getChapterNumByRoleUsername succeed");
			
			//存在关卡数，再次查询获得相对应的关卡代码
			//保存总共已经过了的关卡数
			var chapterResult = result[0].num;
			console.log(chapterResult);
			
			//由身份和用户名和关卡获得对应关卡的代码
			sql = eval("sqlMap." + params.role + ".getChapterCodeByRoleUsernameChapter_Sql");
            connection.query( sql, [params.role, params.username,chapterResult], function(err, result){
		        if(err){
				  console.log(" getChapterCodeByRoleUsernameChapter_Sql Error: " + err.message);
				  res.json({'status':'-1','msg':'获取相应关卡的代码失败'});
				}else{
					
				  console.log(" getChapterCodeByRoleUsernameChapter succeed");	
				  console.log(result[0].chapterCode);
			      res.json({'chapterNum': chapterResult, 'chapterCode': result[0].chapterCode, 'status':'1','msg':'获取相应关卡的代码成功'});
			    }
			
			});
			
        }
		
      });
  
    connection.release();
   });
});


//保存新关卡的代码
router.post('/saveCode', function(req, res, next) {
    var params = req.body;
    console.log(params);
			
	pool.getConnection(function(err, connection){

	  //先对数据库是否存在对应关卡进行查询
	  sql = eval("sqlMap." + params.role + ".GetNumByRoleUsernameChapter_Sql");
      connection.query( sql, [params.role, params.username, params.chapter], function(err,result){
        if(err){
          console.log(" GetNumByRoleUsernameChapter_Sql Error: " + err.message);
          res.json({'status':'-1','msg':'查询数据库是否存在相应的关卡失败'});
        }else if(result[0].num == '0'){
			
			//输出查询成功语句
			console.log(" GetNumByRoleUsernameChapter succeed,no result");
			
			//数据库中不存在相应的关卡,就插入相对应的关卡以及代码
			sql = eval("sqlMap." + params.role + ".InsertCodeByRoleUsernameChapter_Sql");
			console.log(sql);
			console.log(params);
		    connection.query( sql, [params.role, params.username, params.chapter, params.chapterCode], function(err){
			  if(err){
			    console.log(" InsertCodeByRoleUsernameChapter_Sql Error: " + err.message);
			    res.json({'status':'-1','msg':'保存代码失败'});
			  }else{
				console.log(" InsertCodeByRoleUsernameChapter succeed");
				res.json({'status':'1','msg':'保存代码成功'});
			  }
		    });
				
		}else if(result[0].num == '1'){
			
			//输出查询成功语句
			console.log(" GetNumByRoleUsernameChapter succeed,has result");
			
			//数据库中存在相应的关卡,就更新相对应的关卡的代码
			sql = eval("sqlMap." + params.role + ".UpdateChapterCodeByRoleUsernameChapter_Sql");
			connection.query( sql, [params.chapterCode, params.role, params.username, params.chapter], function(err){
			   if(err){
				  console.log(" UpdateChapterCodeByRoleUsernameChapter_Sql Error: " + err.message);
				  res.json({'status':'-1','msg':'相应关卡代码更新失败'});
				}else{
					console.log(" UpdateChapterCodeByRoleUsernameChapter succeed");
					res.json({'status':'1','msg':'相应关卡代码更新成功'});
				}
			})
				
		}else{
			
			//查询出来的结果是大于1的
			console.log(" GetNumByRoleUsernameChapter failed,table named code has some row repeated");
            res.json({'status':'-1','msg':'数据库关卡重复'});
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
          console.log(" updateInfo_Sql Error: " + err.message);
          res.json({'status':'-1','msg':'资料修改失败'});
        }else{
			console.log(" updateInfo succeed");
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
          console.log(" getUserByUsername_Sql Error: " + err.message);
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
					  console.log(" updatePass_Sql Error: " + err.message);
					  res.json({'status':'-4','msg':'密码修改失败'});
					}else{
						console.log(" updatePass succeed");
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