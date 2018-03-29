<template>
  <div>
    <el-dialog title="注册" :visible.sync="dialogFormVisible" @close="hide" >
      <el-form :model="form">
        <el-form-item label="用户名:" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off" placeholder="请输入您的用户名"></el-input>
        </el-form-item>
		    <el-form-item label="邮箱:" :label-width="formLabelWidth">
          <el-input v-model="form.email" auto-complete="off" placeholder="请输入您的邮箱"></el-input>
          <p>{{form.emailError}}</p>
        </el-form-item>
        <el-form-item label="密码:" :label-width="formLabelWidth">
          <el-input type="password" v-model="form.pass" auto-complete="off" placeholder="密码不得低于6位"></el-input>
          <p>{{form.passError}}</p>
        </el-form-item>
        <el-form-item label="确认密码:" :label-width="formLabelWidth">
          <el-input type="password" v-model="form.comPass" auto-complete="off" placeholder="再次重复上面的密码"></el-input>
          <p>{{form.comPassError}}</p>
        </el-form-item>
		<el-form-item label="身份:" :label-width="formLabelWidth">
          <el-radio v-model="form.role" label="student" auto-complete="off">学生</el-radio>
		  <el-radio v-model="form.role" label="teacher" auto-complete="off">老师</el-radio>
		  <el-radio v-model="form.role" label="admin" auto-complete="off">管理员</el-radio>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="register">确 定</el-button>
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
        name: '',
		email: '',
        pass: '',
        comPass: '',
        emailError:'',
        passError:'',
        comPassError:'',
		    role: 'student'
      },
      formLabelWidth: '90px'
    }
  },
  props:['regShow'],
  computed:{
    dialogFormVisible:{
      get:function(){
        return this.regShow;
      },
      set:function(){}
    }
  },
  methods:{
    hide(){
      this.$emit('regReceive');
    },
	register () {
	  var name = this.form.name
      var email = this.form.email
      var pwd = this.form.pass
      var repwd = this.form.comPass
      var role = this.form.role
      var reg=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/   //邮箱验证
      var reg1= /^[a-zA-Z0-9_-]+$/;              //密码验证
      if(email.trim() && pwd.trim() &&repwd.trim()&&email.trim().length>6 && pwd.trim().length>6&&repwd.trim().length>6){
        if(!reg.test(email)){
            this.form.emailError = '邮箱格式错误'
            return false
        }
        if(!reg1.test(pwd)){
            this.form.passError = '密码格式错误'
            return false
        }
        if(pwd!=repwd){
            this.form.comPassError = '确认密码不同'
            return false
        }
        //验证后
        this.form.emailError=''
        this.form.passError=''
        this.form.comPassError=''
        this.$ajax.post('/users/register', {
          username: name,
          email: email,
          password: pwd,
          role: role
        }, {emulateJSON: true})
        .then((response) => {
          if (response.data.status === '1000') {
            alert(JSON.stringify(response.data.msg))
            this.form.name = ''
            this.form.email = ''
            this.form.pwd = ''
            this.form.repwd = ''
            this.form.role = ''
             this.$router.push({path: '/UserInfo',query: { username: response.data.user.username }})
          }
          if (response.data.status === '1001') {
            alert(JSON.stringify(response.data.err))
          } else if (response.data.status === '1002') {
            alert(JSON.stringify(response.data.err))
          }
        })
        .catch((err) => {
          console.error(err)
        })
      }
      //验证不成功的提示
      else{
        if(email.trim().length<6){
          this.form.emailError = '邮箱格式错误'
        }
        if(pwd.trim().length<6){
          this.form.passError = '密码格式错误'
        }
        if(repwd.trim().length<6 && pwd==repwd){
          this.form.comPassError = '确认密码格式错误'
        }
        if(repwd.trim().length<6&&pwd!=repwd){
          this.form.comPassError = '确认密码不同'
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
