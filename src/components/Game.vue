<template>
  <div>
    <!-- 登录框 -->
    <Login :loginShow="loginShow" @loginReceive="loginReceive"></Login>
    <!-- 注册框 -->
    <Reg :regShow="regShow" @regReceive="regReceive"></Reg>
    <!-- 导航条 -->
    <div id="nav">
      <!-- 中间显示关卡 -->
      <div id="level">
        <h1>第{{levelNum}}关挑战</h1>
      </div>
      <!-- 右边菜单栏 -->
      <div class="menu">
        <div class="login-reg" v-if="loginReg == true">
          <span>
            <a href="javascript:;" @click="login">登录</a>
          </span>
          <span>
            <a href="javascript:;" @click="reg">注册</a>
          </span>
        </div>
        <div v-else>

        </div>
      </div>
    </div>
	<div>
	   <iframe src="/static/html/game.html" width="100%" height="1000px" frameborder="0" id="external-frame"></iframe>
	</div>
    
</div>
</template>


<script>
export default {
  data(){
    return{
      levelNum:levelNum,
      loginReg:true,
      loginShow:false,
      regShow:false,
      canvasHeight:700,

      
    }
  },
  methods:{
    login(){
      this.loginShow = true;
    },
    reg(){
      this.regShow = true;
    },
    loginReceive(){
      this.loginShow = false;
    },
    regReceive(){
      this.regShow = false;
    },


    
  },
  mounted(){
   
	
  }
}
</script>
<style scoped>
#nav{
  height: 50px;
  background-color: #409EFF;
  position: relative;
}
#level{
  position: absolute;
  top:18px;
  left: 700px;
  letter-spacing : 2px;
  font-size:18px;
  color : #fff;
}
.menu{
  float: right;
}
.menu .login-reg{
  float:right;
}
.menu .login-reg span{
  display:inline-block;
  height: 50px;
  line-height: 50px;
  font-size:16px;
  margin-right: 10px;
}
.menu .login-reg span a{
  color:#fff;
}

#container{
   float: left;
}
#inp textarea{
   font-size: 30px;
}
</style>
