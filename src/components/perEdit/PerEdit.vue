<template>
  <div>
    <el-dialog title="个人资料编辑" :visible.sync="dialogFormVisible" @close="hide" >
      <el-form :model="form">
        <el-form-item label="用户名:" :label-width="formLabelWidth">
          <el-input type="text" v-model="form.username" auto-complete="off" ></el-input>
          <p>{{form.nameError}}</p>
        </el-form-item>
        <el-form-item label="邮箱:" :label-width="formLabelWidth">
          <el-input type="text" v-model="form.email" auto-complete="off" ></el-input>
          <p>{{form.emailError}}</p>
        </el-form-item>
		<el-form-item label="请选择性别:" :label-width="formLabelWidth">
          <el-radio v-model="form.sex" auto-complete="off" label="male"><img src='/static/img/avatar01.png' /></el-radio>
		  <el-radio v-model="form.sex" auto-complete="off" label="female"><img src='/static/img/avatar02.png' /></el-radio>
        </el-form-item>
        <!-- <el-form-item label="密码:" :label-width="formLabelWidth">
          <el-input type="password" v-model="form.pass" auto-complete="off" placeholder="请输入原来的密码"></el-input>
           <p>{{form.passError}}</p>
        </el-form-item>
		<el-form-item label="新密码:" :label-width="formLabelWidth">
          <el-input type="password" v-model="form.newpass" auto-complete="off" placeholder="请输入新的密码"></el-input>
           <p>{{form.newpassError}}</p>
        </el-form-item>
		<el-form-item label="重复新密码:" :label-width="formLabelWidth">
          <el-input type="password" v-model="form.repass" auto-complete="off" placeholder="请重复输入新的密码"></el-input>
           <p>{{form.repassError}}</p>
        </el-form-item>  -->
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="edit">修改</el-button>
        <el-button @click="hide">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default{
   data(){
      return{
        form: {
          username: sessionStorage.username,
		  email: sessionStorage.email,
		  sex: sessionStorage.sex,
          pass: '',
		  newpass: '',
		  repass: '',
          nameError: '',
		  emailError: '',
          passError: '',
		  newpassError: '',
		  repassError: '',		  
  		  role: sessionStorage.role
        },
        formLabelWidth: '90px'
      }
    },
    props:['editShow'],
    computed:{
        dialogFormVisible:{
        get:function(){
          return this.editShow;
        },
        set:function(){}
      }
    },
  methods:{
  hide(){
    this.$emit('editReceive');
  },
  edit(){
    /*var username = this.form.username
    var pwd = this.form.pass
    var role = this.form.role
    var reg1= /^[a-zA-Z0-9_-]+$/ */      //密码验证表达式
	
    /*if(username.trim() && pwd.trim() && pwd.trim().length>6){
        if(!reg1.test(pwd)){
          this.form.passError = '密码格式错误'
          return false
          }
        //验证后
        this.form.usernameError=''
        this.form.passError=''*/
        this.$ajax.post('/Info/updateInfo', {
                          username: sessionStorage.username,
						  newUsername: this.form.username,
                          email: this.form.email,
						  sex: this.form.sex,
                          role: this.form.role
        }, {emulateJSON: true}).then((response) => {
        if (response.data.status === '1') {
           alert(JSON.stringify(response.data.msg))
		   sessionStorage.username = this.form.username;
		   sessionStorage.email = this.form.email;
		   sessionStorage.sex = this.form.sex;
           this.$emit('editReceive');
        }
        if (response.data.status === '-1') {
          alert(JSON.stringify(response.data.msg))
        }
      }).catch((err) => {
        console.error(err)
      })
    /*}
    else{
      if(pwd.trim().length<6){
        this.form.passError = '密码格式错误'
      }
    }*/
  }
  }
}

</script>

