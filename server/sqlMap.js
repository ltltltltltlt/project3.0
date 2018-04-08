var DB_NAME = 'game';

// sql语句
var sqlMap = {
	//数据库
	db: {
		   useDbSql : 'USE ' + DB_NAME
	},
    //用户
    student: {
        //插入一条数据到数据库
        insertUser_Sql : "INSERT INTO student(id,username,email,password,icon,level,star,sex) VALUES(0,?,?,?,'static/img/avatar00.png','1','0','male')",

        //根据用户名得到已注册的用户名数量
        getUserNumByUsername_Sql : "SELECT COUNT(1) AS num FROM student WHERE username = ?",

        //根据邮箱名得到邮箱已注册的数量
        getUserNumByEmail_Sql : "SELECT COUNT(1) AS num FROM student WHERE email = ?",

        //根据邮箱名得到用户信息
        getUserByEmail_Sql : "SELECT * FROM student WHERE email = ?",

        //根据用户名得到用户信息
        getUserByUsername_Sql : "SELECT * FROM student WHERE username = ?",
		
		//初始化用户的代码表
		InitCodeByUsername_Sql : "INSERT INTO code(role, username, chapter, chapterCode) VALUES(?,?,'1','step 15')",
		
		//查询是否存在当前的关卡
		GetNumByRoleUsernameChapter_Sql : "SELECT COUNT(*) AS num FROM code WHERE role = ? and username = ? and chapter = ?",
		
		//更新已存在关卡的代码
        UpdateChapterCodeByRoleUsernameChapter_Sql : "UPDATE code SET chapterCode = ? WHERE role = ? and username = ? and chapter = ?",	
		
		//保存新关卡的代码
		InsertCodeByRoleUsernameChapter_Sql : "INSERT INTO code(role, username, chapter, chapterCode) VALUES(?,?,?,?)",
		
		//由身份和用户名获得已过关卡的数量
		getChapterNumByRoleUsername_Sql : "SELECT COUNT(*) AS num FROM code WHERE role = ? and username = ?",
		
		//由身份和用户名和关卡获得对应关卡的代码
		getChapterCodeByRoleUsernameChapter_Sql : "SELECT chapterCode FROM code WHERE role = ? and username = ? and chapter = ?",

        //保存用户头像
        saveAlt_Sql : "UPDATE student SET icon = ? WHERE username = ?",	

        //修改个人资料
        updateInfo_Sql : "UPDATE student SET username = ? , email = ? , sex = ? WHERE username = ?",

        //修改密码
        updatePass_Sql : "UPDATE student SET password = ? WHERE username = ?",		
    },
    //老师
    teacher: {
        //插入一条数据到数据库
        insertUser_Sql : "INSERT INTO teacher(id,username,email,password) VALUES(0,?,?,?)",

        //根据用户名得到已注册的用户名数量
        getUserNumByUsername_Sql : "SELECT COUNT(1) AS num FROM teacher WHERE username = ?",

        //根据邮箱名得到邮箱已注册的数量
        getUserNumByEmail_Sql : "SELECT COUNT(1) AS num FROM teacher WHERE email = ?",

        //根据邮箱名得到用户信息
        getUserByEmail_Sql : "SELECT * FROM teacher WHERE email = ?",

        //根据用户名得到用户信息
        getUserByUsername_Sql : "SELECT * FROM teacher WHERE username = ?"      
    },
	//管理员
    admin: {
        //插入一条数据到数据库
        insertUser_Sql : "INSERT INTO admin(id,username,email,password) VALUES(0,?,?,?)",

        //根据用户名得到已注册的用户名数量
        getUserNumByUsername_Sql : "SELECT COUNT(1) AS num FROM admin WHERE username = ?",

        //根据邮箱名得到邮箱已注册的数量
        getUserNumByEmail_Sql : "SELECT COUNT(1) AS num FROM admin WHERE email = ?",

        //根据邮箱名得到用户信息
        getUserByEmail_Sql : "SELECT * FROM admin WHERE email = ?",

        //根据用户名得到用户信息
        getUserByUsername_Sql : "SELECT * FROM admin WHERE username = ?"      
    }
}

module.exports = sqlMap;
