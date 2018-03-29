<template>
  <div>
    <header id="header" class="parent-size">
      <div class="header-nav child-size" v-cloak>
        <ul>
          <li v-for="(item,index) in menu" >
            <a :href="item.jump" :class="{active:headerA==index||headerB==index,notactive:headerA!=index||headerB!=index}" 
            @click="skip(index)" @mouseover="mySkip(index)" @mouseout="mymySkip"> 
                {{item.con}}
            </a>
          </li>       
        </ul>
      </div>     
    </header>
    <!-- 登录框 -->
    <Login :loginShow="loginShow" @loginReceive="loginReceive"></Login>
    <!-- 注册框 -->
    <Reg :regShow="regShow" @regReceive="regReceive"></Reg>
    <!-- 返回头部 -->
    <div id="jump">
      <a href="#"><img src="/static/img/up.jpg" width="40px" height="40px"></a>
    </div>
    <!-- 试玩 -->
    <div id="play" class="parent-size clearfix">
      <div class="child-size">
        <div class="play-left">
          <p class="play-p-one">最好玩的</p>
          <p class="play-p-two">编程游戏</p>
        </div>
        <div class="play-right">
          <router-link to="/Hello"><span>点击试玩</span></router-link>
        </div>
      </div>
    </div>
    <!-- 课程说明 -->
    <div id="course" class="parent-size">
      <div class="child-size clearfix">
        <div class="title">课程说明</div>
        <div class="course-ex">课程、真正的编程语言、基于游戏学习、游戏创建</div>
        <ul class="" v-cloak>
          <li v-for="(item,index) in courseData">
            <img :src="item.url">
            <p>{{item.text}}</p>
          </li>
        </ul>
      </div>
    </div>
    
    <!-- 颜色区域 -->
    <div  class="parent-size color-area"></div>
    <!-- 常见问题 -->
    <div id="problem" class="parent-size">
      <div class="child-size">
        <div class="title problem-title">常见问题</div>
        <ul class="pro-menu clearfix" v-cloak>
          <li v-for="(item,index) in proMenu">
            <span  :class="{proMenuActive:proA==index,proMenuNotactive:proA!==index}" @click="proSkip(index)">
              {{item}}
            </span>
          </li>
        </ul>
        <ul class="pro-gene pro-list" v-show="proOnoff==0" v-cloak>
          <li v-for="(item,index) in proData">                    
            <p class="pro-ques" @click="proShow(index,item.num)">
              <img class="prolist-img-one" src="/static/img/5.png">
              <span>{{item.ques}}</span>
              <img class="prolist-img-two" :src="item.proImg">
            </p>
            <p class="pro-answ" v-show="index==item.num">{{item.answ}}</p>                   
          </li>
        </ul>
        <ul class="pro-game pro-list" v-show="proOnoff==1" v-cloak>
          <li v-for="(item,index) in probData">                    
            <p class="pro-ques" @click="proShow(index,item.num)">
              <img class="prolist-img-one" src="/static/img/5.png">
              <span>{{item.ques}}</span>
              <img class="prolist-img-two" :src="item.proImg">
            </p>
            <p class="pro-answ" v-show="index==item.num">{{item.answ}}</p>                   
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data (){
    return{
      menu: [
        { con: '首页', jump: "#" },
        { con: '课程说明', jump: "#course" },
        { con: '用户反馈', jump: "javascript:;" },
        { con: '常见问题', jump: "#problem" },
        { con: '登录', jump: "javascript:;" },
        { con: '注册', jump: "javascript:;" },
      ],
      headerA: 0,
      headerB: 0,
      loginShow: false,
      regShow: false,
      courseData: [
        {url:'/static/img/1.png',text:'全部课程，整装待发'},
        {url:'/static/img/2.png',text:'真正的编程语言'},
        {url:'/static/img/3.png',text:'游戏化的学习方式'},
        {url:'/static/img/4.png',text:'游戏创新设计'},
      ],
      proMenu: ['一般问题', '游戏问题'],
      proA: 0,
      proData: [
        {
          ques: 'XX是什么？',
          answ: 'XX是一个在线游戏， 使用真正的编程语言CoffeeScript教编程。在游戏中，用户控制一只猴子，并帮助他通过写代码捕获香蕉',
          num:-100,
          proImg:'/static/img/down.png' 
        },
        {
          ques: 'XX什么年龄学习比较合适？',
          answ: 'XX适合儿童从9岁学起，但有很多年龄更小的用户。无论多大学习都不会太晚。',
          num:-2,
          proImg:'/static/img/down.png' 
        },
        {
          ques: '需要下载或安装任何东西吗？',
          answ: '不需要，XX是在线游戏，不需要安装任何东西。',
          num:-3,
          proImg:'/static/img/down.png' 
        },
        {
          ques: 'XX都包括计算机科学的哪些领域？',
          answ: '对象，函数调用，参数，循环，变量，数组，循环，函数定义，布尔条件，直到循环，如果和其他条件，布尔运算符，键盘和鼠标事件。未来的版本将推出更多的主题。',
          num:-4,
          proImg:'/static/img/down.png' 
        },
        {
          ques: '运行XX的设备有哪些要求？',
          answ: '如果是台式机或笔记本电脑，浏览器最好是相对较新的版本 ，确定好连接到网络即可。如果是平板电脑（较新）连接到互联网，可通过Chrome或Safari浏览器访问网站。',
          num:-5,
          proImg:'/static/img/down.png' 
        },
      ],
      probData: [
        {
          ques: '如何玩？',
          answ: '要开始播放时，单击主页上的“播放”按钮。为了帮助猴子抓住香蕉，需要写一行代码。 如果不舒服打字，可以使用在屏幕底部的按钮。',
          num:-100,
          proImg:'/static/img/down.png' 
        },
        {
          ques: '没有经验可以玩吗？？',
          answ: '不需要任何经验运用，所需要的知识将在游戏中学习。',
          num:-2,
          proImg:'/static/img/down.png' 
        },
        {
          ques: '星星的意义是什么？',
          answ: '每一个挑战都会得到星星评级。星星是这样分布的：如果你得到了所有的香蕉就可以得到一颗星星。 如果你使用你所学到的技能，就可以得到第二颗星。如果你的代码是简短的，就可以得到第三颗星。',
          num:-3,
          proImg:'/static/img/down.png' 
        },
        {
          ques: '如何能在挑战关卡之间切换？',
          answ: '打开挑战地图点击屏幕右上角的地图图标。你可以自由地在你已经解决的挑战关卡之间移动。',
          num:-4,
          proImg:'/static/img/down.png' 
        },
        {
          ques: '什么是技能模式？',
          answ: '技能模式提供了实践挑战，可以用来加强教师和学生的技能。技能挑战解锁你在游戏中的进展。 要进入技能模式，点击地图图标，在地图右上角的标签上找到并点击“技能模式”。',
          num:-5,
          proImg:'/static/img/down.png' 
        },
      ], 
      proOnoff:0
    }
  },
  methods:{
    skip(index){
      this.headerA=index;
      if(index == 5){
        this.regShow = true;
      }
      if(index == 4){
        this.loginShow = true;
      }                                       
    },
    mySkip(index){
      this.headerB = index;
    },
    mymySkip(){
      this.headerB = this.headerA;
    },
    regReceive(){
      this.regShow = false;
    },
    loginReceive(){
      this.loginShow = false;
    },
    proSkip(index) {
      this.proA = index;
      this.proOnoff = index;
    },
    proShow(index,num) {
      if(this.proOnoff==0){
        if(index!=num){
          this.proData[index].num=index;
          this.proData[index].proImg = '/static/img/top.png';
        }else{
          this.proData[index].num-=100;
          this.proData[index].proImg = '/static/img/down.png';
        }
      }else{
        if(index!=num){
          this.probData[index].num=index;
          this.probData[index].proImg = '/static/img/top.png';
        }else{
          this.probData[index].num-=100;
          this.probData[index].proImg = '/static/img/down.png';
        }
      }
    }
  }
}
</script>
<style scoped>
.clearfix:after{
  content: '';
  display: block;
  height:0;
  clear: both;
}
[v-cloak]{
  display: none;
}
#header{
  background-color:#ffffff;
  height: 70px;
}
.parent-size{
  width:100%;
  min-width:1300px;
}
.child-size{
  width:80%;
  min-width: 1190px;
  max-width:1435px;
  margin:0 auto;
}
.header-nav li{
  float:left;
}
.header-nav li>a{
  display: inline-block;
  height: 40px;
  line-height: 40px;
  width: 140px;
  text-align: center;
  margin:10px 5px;
  text-decoration: none;
  font-size:19px;
}
.notactive{
  color:#000;    
}
.active{
  color:#fff;
  /* background-color: #8DB6CD; */
  background-color: #409EFF;
  border-radius: 10px;
}
#jump img{
  position: fixed;
  bottom:22px;
  right: 50px;
}
#play{
  background:url('/static/img/7.png');
  margin-bottom:150px;
  padding-bottom:70px;
}
.play-left{
  width:160px;
  float:left;
  /* color:#f19cb1; */
  color:#8DB6CD;
  font-size: 70px;
  margin-left:200px;
  margin-top:50px;
}
.play-p-one{
  float:left;    
  width:70px;
  margin-right:20px;
}
.play-p-two{
  float:right;
  width:70px;
  margin-top:140px;
}
.play-right{
  float: right;    
  margin-top:350px;
  margin-right:200px;
}
.play-right a{
  display: inline-block;
  color:#fff;
  padding:20px;
  background: #409EFF;
  font-size:60px;    
  border-radius: 10px;
}
.title{
  font-size:48px;
  text-align: center;
  height: 60px;
  line-height: 60px;
}
#course{
  margin-top:120px;
  margin-bottom: 40px;
}
.course-ex{
  font-size:30px;
  text-align: center;
  height: 60px;
  line-height: 60px;
  margin-bottom: 50px;
}
#course ul{
  width:100%;
  margin-top:100px;
}
#course ul li{
  float: left;
  width: 25%;
  text-align: center;
}
#course li p{
  font-size:20px;
  margin-top:40px;
  margin-bottom: 120px;
}
.color-area{
  background:url('/static/img/7.png');
  height:70px;
}
#problem{
  background:url('/static/img/7.png');
  padding-bottom:60px;
}
.problem-title{
  margin-bottom:50px;
}
.pro-menu{
  width:600px;
  margin:0 auto;
  margin-bottom:80px;   
}
.pro-menu li{
  width:50%;
  float:left;
  text-align: center;
  font-size: 34px;
}
.pro-menu li>span{
  cursor: pointer;
}
.proMenuActive{
  color:#409EFF;    
}
.proMenuNotactive{
  color:#000;
}
.pro-list li{
  background:#fff;
  margin-bottom:20px;    
}
.pro-list img{
  position: absolute;
}
.prolist-img-one{
  top:19px;
  left:14px;
}
.prolist-img-two{
  top:19px;
  right: 16px;
}
.pro-list p{
  color:#000;
  font-size:18px;    
}
.pro-ques{
  height: 54px;
  line-height: 54px;
  padding:0 50px;
  position: relative;
  cursor: pointer;
}
.pro-answ{
  padding:20px 50px;
}
</style>

