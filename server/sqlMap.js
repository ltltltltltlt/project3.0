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
        insertUser_Sql : "INSERT INTO student(id,username,email,password) VALUES(0,?,?,?)",

        //根据用户名得到已注册的用户名数量
        getUserNumByUsername_Sql : "SELECT COUNT(1) AS num FROM student WHERE username = ?",

        //根据邮箱名得到邮箱已注册的数量
        getUserNumByEmail_Sql : "SELECT COUNT(1) AS num FROM student WHERE email = ?",

        //根据邮箱名得到用户信息
        getUserByEmail_Sql : "SELECT * FROM student WHERE email = ?",

        //根据用户名得到用户信息
        getUserByUsername_Sql : "SELECT * FROM student WHERE username = ?"      
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
