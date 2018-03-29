<template>
  <div>
    <el-dialog title="注册" :visible.sync="dialogFormVisible" @close="hide" >
      <el-form :model="form">
        <el-form-item label="用户名:" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
		<el-form-item label="邮箱:" :label-width="formLabelWidth">
          <el-input v-model="form.email" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码:" :label-width="formLabelWidth">
          <el-input type="password" v-model="form.pass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码:" :label-width="formLabelWidth">
          <el-input type="password" v-model="form.comPass" auto-complete="off"></el-input>
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
		role: ''
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
      if (name === '') {
        alert('用户名不能为空！')
      }else if(email === ''){
          alert('邮箱不能为空！')
      }else if (pwd === '') {
            alert('密码不能为空！')
      }else if(pwd !== repwd) {
              alert('两次密码不一致！')
      }
	  
	  

      if (name !== '' && email !== '' && pwd !== '' && pwd === repwd) {
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
            var url = '../user.html?username=' + response.data.user.username + '&email=' + response.data.user.email + ''
            window.open(url, 'newwindow')
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
    }
  }
}
</script>
<style scoped>
.el-input{
  width:93%;
}
</style>
