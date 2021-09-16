<template>
  <div class="note" :style="note">
    <el-form ref="AccountForm" :model="account" :rules="rules" label-position="left" label-width="0px"
            class="demo-ruleForm login-container form-sty">
      <h3 class="title">找回密码</h3>
      <el-form-item prop="username">
        <el-input type="text" v-model="account.username" auto-complete="off" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item prop="pwd">
        <el-input type="password" v-model="account.pwd" auto-complete="off" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item prop="phone">
        <el-input type="text" v-model="account.phone"  auto-complete="off" placeholder="手机号"></el-input>
      </el-form-item>
      <el-form-item prop="code">
        <el-input type="text" v-model="account.code" auto-complete="off" placeholder="验证码" style="width:155px"></el-input>
        <el-button class="btn-orange" :disabled="disabled" @click="getCode">{{valiBtn}}</el-button>
      </el-form-item>

      <!--<el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>-->
      <el-form-item class="extra-text">
        <!-- <a href="javascript:;" class="forget-pwd" title="登录页面">登录页面</a> -->
        <router-link :to="{path: '/login'}" class="forget-pwd"  title="登录页面">登录页面</router-link>
        <router-link :to="{path: '/register'}" class="reg-text" title="找回密码">注册页面</router-link>
      </el-form-item>
      <el-form-item style="width:100%;">
        <el-button type="primary" style="width:100%;" @click.native.prevent="register" :disabled="allowLogin" :loading="loading">注册</el-button>
      </el-form-item>
    </el-form>
</div>
</template>
<script>
  import API from '../api/api_user'
  import qs from 'qs'
  export default {
    data() {
      var validateAccount = (rules, value, callback) => {
        if (value === '') {
          callback(new Error('请输入账号'));
        } else {
          if (this.account.username !== '') {
            this.account.username = value;
			      this.validateCorrect();
          }
          callback();
        }
      };
	  var validatePwd = (rules, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.account.pwd !== '') {
            this.account.pwd = value;
            this.validateCorrect();
          }
          callback();
        }
      };
      var validatePhone = (rules, value, callback) => {
        if (value === '') {
          callback(new Error('请输入手机号'));
        } else {
          if (this.account.phone !== '') {
            this.account.phone = value;
            this.validateCorrect();
          }
          callback();
        }
      };
      var validateCode = (rules, value, callback) => {
        if (value === '') {
          callback(new Error('请输入验证码'));
        } else {
          if (this.account.code !== '') {
            this.account.code = value;
            this.validateCorrect();
          }
          callback();
        }
      };
      return {
        note: {
          // backgroundImage: "url(" + require('./登录背景.gif') + ")",
          // backgroundRepeat: "no-repeat",
          // backgroundSize: "100% 300px",
          // marginTop: "-180px",
          // marginRight: "-10px",
          // marginLeft: "-10px"          
        },
        loading: false,
        account: {
          username: '',
          pwd: '',
          phone: '',
          code: ''
        },
        rules: {
          username: [
            { required: true, validator: validateAccount, trigger: 'change' }

          ],
          pwd: [
            {required: true, validator: validatePwd, trigger: 'change'}
          ],
          phone: [
            {required: true, validator: validatePhone, trigger: 'change'}
          ],
          code: [
            {required: true, validator: validateCode, trigger: 'change'}
          ]
        },        
        pwdFocus: false,
		    allowLogin: true,
        checked: true,
        valiBtn:'获取验证码',
        disabled:false
      };
    },
    created() {
      let reg_user = JSON.parse(window.localStorage.getItem('register-user'));
      if (reg_user) {
        this.account.username = reg_user.username;
        this.account.pwd = '';
        this.pwdFocus = true;
      }
    },
    methods: {
      register(){
        let that = this;
        let result = {
          // id: '1',
          username: this.account.username,
          password: this.account.pwd,
          phone: this.account.phone,
          code: this.account.code
        };
        this.loading = true;
        API.post('/register',JSON.stringify(result))
        .then((res)=>{
            if(res.code === 20000){
                this.$message({
                message: res.message,
                type: 'success'
              });
            }else{
              this.$message({
              message: res.message,
              type: 'warning'
              });
            }
          })
      },
	  validateCorrect(){
        if(this.account.pwd.trim().length > 0 && this.account.username.trim().length > 0 && this.account.phone.trim().length > 0 && this.account.code.trim().length > 0){
          this.allowLogin = false;
        } else {
          this.allowLogin = true;
        }
      },
    getCode(){
      this.tackBtn(); //验证码倒计时
      let that = this;
      API.post('/getCode',JSON.stringify(this.account.phone))
      .then((res)=>{
            if(res.code === 20000){
              this.$message({
              message: res.message,
              type: 'success'
            });
          }else{
            this.$message({
            message: res.message,
            type: 'warning'
            });
          }
          console.log(res)
        })
      },
      tackBtn(){       //验证码倒数60秒
          let time = 60;
          let timer = setInterval(() => {
              if(time == 0){
                  clearInterval(timer);
                  this.valiBtn = '获取验证码';
                  this.disabled = false;
              }else{
                  this.disabled = true;
                  this.valiBtn = time + '秒后重试';
                  time--;
              }
          }, 1000);
        }
      }
    }
</script>
<style scoped>
  /* .form-sty{
    margin-top: 1000px
  } */
  body {
    text-align:center
    /* background-image: url('登录背景.gif') */
  }
  .note{
    /* background-image: url('登录背景.gif') */
     height: 100%;
    /*width: 400px; */
  }
  .header-content {
    position: fixed;
    top: 0;
    width: 100%;
    height: 50px;
    padding: 6px 0;
    border-bottom: 1px solid #ddd;
    box-shadow: 0 0 2px #ddd;
  }
  .header-content .logo-part {
    margin-left: 10px;
    font-size: 18px;
    color: #999;
  }
  .header-content .logo-part img {
    vertical-align: middle;
  }
  .login-container {
    box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 160px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    /* background: #fff; */
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;

    background: -ms-linear-gradient(top, #ace, #00C1DE); /* IE 10 */
    background: -moz-linear-gradient(top, #ace, #00C1DE); /*火狐*/ 
    /*background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#ace), to(#00C1DE)); 谷歌*/
    background: -webkit-linear-gradient(top, #ace, #00C1DE); /*Safari5.1 Chrome 10+*/
    background: -o-linear-gradient(top,#ace, #00C1DE);/*Opera 11.10+*/ 

  }
  .login-container .title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
  .login-container .remember {
    margin: 0px 0px 35px 0px;
  }
  .extra-text {
    position: relative;
    margin-bottom: 0;
    padding-left: 2px;
  }
  .extra-text a {
    font-size: 12px;
    color: #aaa;
  }
  .extra-text a:hover {
    color: #29e;
  }
  .extra-text .reg-text {
    position: absolute;
    top: 4px;
    right: 2px;
  }
</style>
