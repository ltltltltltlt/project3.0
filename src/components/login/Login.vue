<template>
  <div>
    <el-dialog title="登录" :visible.sync="dialogFormVisible" @close="hide" >
      <el-form :model="form">
        <el-form-item label="邮箱:" :label-width="formLabelWidth">
          <el-input type="text" v-model="form.email" auto-complete="off" placeholder="请输入邮箱"></el-input>
          <p>{{form.emailError}}</p>
        </el-form-item>
        <el-form-item label="密码:" :label-width="formLabelWidth">
          <el-input type="password" v-model="form.pass" auto-complete="off"></el-input>
           <p>{{form.passError}}</p>
        </el-form-item>
		  <el-form-item label="身份:" :label-width="formLabelWidth">
        <el-radio v-model="form.role" label="student" auto-complete="off">学生</el-radio>
        <el-radio v-model="form.role" label="teacher" auto-complete="off">老师</el-radio>
        <el-radio v-model="form.role" label="admin" auto-complete="off">管理员</el-radio>
       </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="login">确 定</el-button>
        <el-button @click="hide">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data(){
    return{
      form: {
        email: '',
        pass: '',
        emailError:'',
        passError:'',
		role: 'student'
      },
      formLabelWidth: '90px'
    }
  },
  props:['loginShow'],
  computed:{
      dialogFormVisible:{
      get:function(){
        return this.loginShow;
      },
      set:function(){}
    }
  },
  methods:{
    hide(){
      this.$emit('loginReceive');
    },
	login () {
	  var email = this.form.email
      var pwd = this.form.pass
      var role = this.form.role
      var reg=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/   //邮箱正则表达式
      var reg1= /^[a-zA-Z0-9_-]+$/       //密码验证表达式
      if(email.trim() && pwd.trim() &&email.trim().length>6 && pwd.trim().length>6){
          if(!reg.test(email)){
            this.form.emailError = '邮箱格式错误'
            return false
            }
          if(!reg1.test(pwd)){
            this.form.passError = '密码格式错误'
            return false
            }
          //验证后
          this.form.emailError=''
          this.form.passError=''
          this.$ajax.post('/users/login', {
                            email: email,
                            password: pwd,
                            role: role
                            /* chbRem: chbRem */
          }, {emulateJSON: true}).then((response) => {
          if (response.data.status === '2000') {
             alert(JSON.stringify(response.data.msg))
             this.$router.push({path: '/UserInfo',query: { username: response.data.user.username }})

          }
          if (response.data.status === '2001') {
            alert(JSON.stringify(response.data.msg))
          }
          if (response.data.status === '2002') {
            alert(JSON.stringify(response.data.msg))
          }
          if (response.data.status === '2003') {
            alert(JSON.stringify(response.data.msg))
          }
        }).catch((err) => {
          console.error(err)
        })
      }
      else{
        if(email.trim().length<6){
          this.form.emailError = '邮箱格式错误'
        }
        if(pwd.trim().length<6){
          this.form.passError = '密码格式错误'
        }
      }


    }
  }
}
</script>
<style scoped>
.el-input{
  width:93%;
}
</style>

