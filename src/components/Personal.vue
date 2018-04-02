<template>
 <div id="information">
  <div class="bg-img">
  </div>
  <PerEdit :editShow="editShow" @editReceive="editReceive"></PerEdit>
  <PerEditPass :editPassShow="editPassShow" @editPassReceive="editPassReceive"></PerEditPass>
  <Picture :pictureShow="pictureShow" @pictureReceive="pictureReceive" v-on:src="showImg"></Picture>
  <div class="header">
    <el-row>
      <el-col :span="23">
        <div class="grid-content bg-purple">
          <img src="../assets/images/site_header_logo.png"/>
        </div>
      </el-col>
      <el-col :span="1">
        <div class="grid-content bg-purple btn_menu" >
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              <img src="../assets/images/btn_menu.png" />
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>首页</el-dropdown-item>
              <el-dropdown-item>课程页</el-dropdown-item>
              <el-dropdown-item>个人主页</el-dropdown-item>
              <el-dropdown-item>注销</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-col>
    </el-row>
  </div>
  <div class="bg_information">
    <el-row>
      <el-col :span="6">
        <div class="grid-content bg-purple ">
          <div class="picname_bg">
            <a href="javascript:;" @click="save">
              <img :src="src" class="picname"/>
            </a>
          </div>
        </div>
      </el-col>
      <el-col :span="11">
        <div class="grid-content bg-purple-light ">
          <span>{{username}}</span>
          <div class="star_bg">
            <img class="star" src="../assets/images/star_on.png"/>
            <div class="star_num">
              <h3>{{starNum}}</h3>
            </div>
          </div>
          <a href="javascript:;" @click="edit">
            <div class="edit">
              <span style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;个人资料编辑</span>
            </div>
          </a>
		  <a href="javascript:;" @click="editPass">
            <div class="edit">
              <span style="font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;修改密码</span>
            </div>
          </a>
        </div>
      </el-col>
      <el-col :span="7">
        <div class="grid-content bg-purple unclock">
          <img src="../assets/images/ach_1_disabled.png"/>
          <div class="unlock_message">
            只要再24<img width="40px" height="30px" src="../assets/images/star_on.png" />星星就能得到此称号
          </div>
          <div class="unclock_meter">
          </div>
          <router-link to='/Hello'>
            <div class="play-bt">
              <span style="font-size: 29px;">继续闯关</span>
            </div>
          </router-link>
        </div>
      </el-col>
    </el-row>
    <div class="main">
      <el-row>
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <h3>我的成就称号</h3>
            <div class="user_achievement">
              <img src="../assets/images/ach_1_disabled.png"/>
            </div>
            <div class="user_achievement">
              <img src="../assets/images/ach_2_disabled.png"/>
            </div>
            <div class="user_achievement">
              <img src="../assets/images/ach_3_disabled.png"/>
            </div>
            <div class="user_achievement">
              <img src="../assets/images/ach_4_disabled.png"/>
            </div>
            <div class="user_achievement">
              <img src="../assets/images/ach_1_disabled.png"/>
            </div>
            <div class="user_achievement">
              <img src="../assets/images/ach_1_disabled.png"/>
            </div>
            <div class="user_achievement">
              <img src="../assets/images/ach_1_disabled.png"/>
            </div>
            <div class="user_achievement">
              <img src="../assets/images/ach_1_disabled.png"/>
            </div>
            <div class="user_achievement">
              <img src="../assets/images/ach_1_disabled.png"/>
            </div>
            <div class="user_achievement">
              <img src="../assets/images/ach_1_disabled.png"/>
            </div>
            <div class="user_achievement">
              <img src="../assets/images/ach_1_disabled.png"/>
            </div>
            <div class="user_achievement">
              <img src="../assets/images/ach_1_disabled.png"/>
            </div>
            <div class="user_achievement">
              <img src="../assets/images/ach_1_disabled.png"/>
            </div>
          </div>
        </el-col >
        <el-col :span="12">
          <div class="grid-content bg-purple-light " >
              <h3>游戏解答</h3>
          </div>
        </el-col>
      </el-row>
      </div>
  </div>
  </div>
</template>
<script>
	import '../assets/css/Personal.css'
	export default{
	  data(){
	    return{
        starNum:sessionStorage.star,
        username:sessionStorage.username,
        role:sessionStorage.role,
        editShow:false,
		editPassShow:false,
        pictureShow:false,
        src:sessionStorage.icon
	    }
	  },
	  methods:{
	      showImg:function(data){
	        this.src = data;
          },
	      edit(){
            this.editShow = true;
          },
          editReceive(){
		    this.username = sessionStorage.username;
            this.editShow = false;
          },
		  editPass(){
		    this.editPassShow = true;
		  },
		  editPassReceive(){
		    this.editPassShow = false;
		  },
          save(){
            this.pictureShow=true;
          },
          pictureReceive(){
		    this.src = sessionStorage.icon;
            this.pictureShow = false;
          }
	  }
	}
</script>
<style scoped>
.el-dropdown-menu{

  width:130px;
}
.el-dropdown-menu__item{
  font-color:#ffffff;
  font-size:20px;
}
</style>
