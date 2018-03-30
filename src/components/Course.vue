<template>
	<div id='personal'>
		<div class="bg-img">
		</div>
    <div class="header">
      <el-row>
          <el-col :span="5">
            <div class="grid-content bg-purple">
              <img src="../assets/images/site_header_logo.png"/>
            </div>
          </el-col>

          <el-col :span="19">
            <div class="grid-content bg-purple">
            </div>
          </el-col>
      </el-row>
    </div>

    <div class="welcom">
      <el-row>
        <el-col :span="24">
          <h1>欢迎回来{{username}}</h1>
        </el-col>
      </el-row>
    </div>

    <div class="menu3">
      <el-row>
        <el-col :span="16">
          <div class="grid-content bg-purple main-progress-bg">
            <img src="#"/>
          </div>
        </el-col>
        <el-col :span="8">
        <div class="continue-module">
          <div class="grid-content bg-purple-light continue-bg">
            <router-link to="/Hello">
              <div class="continue-game">
                <span style="font-size: 29px;">继续游戏</span>
              </div>
            </router-link>
          </div>
         </div>
        </el-col>
      </el-row>
    </div>

    <div class="menu4">
      <el-row>
        <el-col :span="15">
          <div class="grid-content bg-purple">
            <section>
              <div class="title">
                <h1>游戏关卡</h1>
              </div>
              <div class="active-content">
                <a href="">
                  <div class="active">
                    <img src="../assets/images/dashboard_coding_adventure_part_ii.jpg"/>
                    <div class="active-name">编码冒险</div>
                    <div class="active-subtitle">第一部分基本原理</div>
                  </div>
                </a>
              </div>
            </section>
          </div>
        </el-col>
        <el-col :span="7">
          <div class="grid-content bg-purple-light">
            <div class="power-up">
              <img src="../assets/images/original-power_up_bg.jpg"/>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
	</div>
</template>

<script>
	import '../assets/css/Course.css'
	export default{
	  data(){
	    return{
	      username: this.$route.query.username,
	    }
	  },
    methods:{
      
    }
	}
</script>

<style>

</style>
