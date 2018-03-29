<template>
  <div>
    <el-dialog title="登录" :visible.sync="dialogFormVisible" @close="hide" >
      <el-form :model="form">
        <el-form-item label="用户名:" :label-width="formLabelWidth">
          <el-input type="text" v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码:" :label-width="formLabelWidth">
          <el-input v-model="form.pass" auto-complete="off"></el-input>
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
        name: '',
        pass: '',
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
	  var name = this.form.name
      var pwd = this.form.pass
      var role = this.form.role
	  alert(name + pwd + role)
      this.$ajax.post('/users/login', {
        username: name,
        password: pwd,
        role: role
        /* chbRem: chbRem */
      }, {emulateJSON: true}).then((response) => {
        if (response.data.status === '2000') {
          alert(response.data.msg)
          alert(response.data.user.username)
          alert(response.data.user.email)
          alert(response.data.user.password)
          /* var url = '../user.html?username=' + response.data.user.username + '&email=' + response.data.user.email + ''
          window.open(url, 'newwindow') */
          this.$router.push({path: '/UserInfo',query: { username: response.data.user.username }})
		  //UserInfo?username="11"
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
  }
}
</script>
<style scoped>
.el-input{
  width:93%;
}
</style>

