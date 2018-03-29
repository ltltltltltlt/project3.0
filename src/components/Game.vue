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
        <h1>第{{level}}关挑战</h1>
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
    <!-- <div id="container"> </div>
    <div id="inp">
          <textarea  id="ta" cols="40" rows="20" v-model='taValue'></textarea>
            <input   id = "startBtn" type="button" :value="runName" @click="start">
            <input  type="button" value="reset" @click="reset">
     </div> -->
</div>
</template>


<script>
export default {
  data(){
    return{
      level:0,
      loginReg:true,
      loginShow:false,
      regShow:false,
      canvasHeight:700,

      /*taValue:taValueArr[levelNum],
      runName:'start',*/
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


    /*start(){
            if(runOnoff == false){
              num = 0;
              runOnoff = true;
              this.runName = 'stop';
              codeArr('ta');
            }else{
              num = 0;                 //执行每行代码计数
              panda.obj.body.velocity.set(0,0);
              if(turtle.obj){
                turtle.obj.body.velocity.set(0,0);
              }
              colliOnoff = false;      //灌木碰撞检测开关
              overlOnoff = true;       //香蕉碰撞检测开关
              conStepOnoff = false;    //停止step的监控开关
              bananaOnoff = true;
              lineOnoff = false;
              testOnoff = false;       //代码执行后判断开关
              turtle.rOnoff = false;
              turtle.xOnoff = false;
              turtle.stepOnoff = false;
              soundManager.stopAll();
              rebulidObj();
              runOnoff = false;        //代码是否执行标志
              //vm.runName = 'start';
            }
          },
          reset(){
            this.taValue = taValueArr[levelNum];
          }*/
  },
  mounted(){
    //game = new Phaser.Game(600,720,Phaser.AUTO,'canvas',loadState);
	
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
