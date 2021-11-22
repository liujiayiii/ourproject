<!--登陆页面-->
<template>
  <!--表单元素-->
  <body id="poster">
  <div class="login">
  <el-form ref="loginForm"
           :model="loginForm"
           :rules="loginRules"
           class="login-container" label-position="left"
           label-width="0px"  >
<!--标题-->
    <h3 class="login_title">账 号 登 录</h3>
<!--    输入账号栏-->
    <el-form-item>
      <el-input type="text"
                v-model="loginForm.username"
                auto-complete="off"
                placeholder="请填写账号">
        <i slot="prefix" class="el-icon-user"></i>
<!--        slot插槽-->
<!--        icon语句为ele的图标组件-->
<!--
            slot="prefix"
            icon-class="validCode"
            class="el-input__icon input-icon"/>
         -->
      </el-input>
    </el-form-item>
<!--    输入密码栏-->
    <el-form-item>
      <el-input type="password" v-model="loginForm.password"
                auto-complete="off" placeholder="请填写密码"
                @keyup.enter.native="handleLogin">
        <i slot="prefix" class="el-icon-unlock"></i>
      </el-input>
    </el-form-item>
    <el-form-item prop="code">
       <el-input
         v-model="loginForm.code"
         auto-complete="off"
         placholder="验证码"
         style="width: 63%"
         @keyup.enter.native="handleLogin"
       >
<!--         svg-icon图标集-->
<!--         <i slot="prefix" class="el-icon-discount"></i>-->
       </el-input>
        <div class="login-code">
          <img src="codeUrl" click="getcode" />
        </div>
    </el-form-item>
    <el-checkbox v-model="loginForm.rememberMe" style="margin: 0 0 25px 0">
      记住密码
    </el-checkbox>
    <el-form-item style="width: 100%">
      <el-button :loading="loading"
                 size="medium"
                 type="primary"
                 style="width: 100%;background: #AECEEF;border: none"
                 @click.native.prevent="handleLogin">
        <span v-if="!loading">登 录</span>
        <span v-else>登录中。。。</span>
<!--        增加一个loading的状态-->
      </el-button>
    </el-form-item>
  <el-form-item style="width: 100%">
      <a herf="/register" class="Register">注册</a>
<!--      增加跳转注册页面的功能-->
    </el-form-item>
  </el-form>
  </div>
  </body>
</template>

<script>
  // 加密
  //import { encrypt } from '@/utils/rsaEncrypt'
  // import Cookies from 'js-cookie'
    export default {
        name: "login",
      data(){
          return {
            codeUrl: '',
            cookiePass: '',
            loginForm: {
              username: '',
              password: '',
              //数据处理
              rememberMe: false,
              code: '',
              uuid: ''
            },
            loginRules:{
              username: [
                {required:true,tigger:'blur',message:'用户名不能为空'}
              ],
              //表单验证触发 'change'数据改变时触发 'blur'失去焦点时触发
              password:[
                { required:'true',tigger:'blur',message:'密码不能为空'}
              ],
              code:[
                {required:'true',tigger:'change',message:'验证码不能为空'}
              ]
            },
            loading:false,
            redirect:undefined
          }
      },
      watch:{
          $route:{
            handler:function (route) {
                 this.redirect=route.query && route.query.redirect
            }
          }
      },
      methods:{
        login: function () {
          this.$axios
            .post('/login', {
              username: this.loginForm.username,
              password: this.loginForm.password
            })
            .then(successResponse => {
              if (successResponse.data.code===200){
                this.$router.replace({path:'/index'})
              }
            })
            // eslint-disable-next-line no-unused-vars
          .catch(failResponse =>{
          })
        }
      }
    }
</script>

<style scoped>
.login-container{
  border-radius: 15px;/*给元素边角设置圆角弧度*/
  background-clip: padding-box;
  /*确定背景定位*/
  margin: 220px auto;
/* 所有外边距*/
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #ffffff;
  border: 1px solid #eaeaea;
/*  边框设置，solid边框尖锐*/
  box-shadow: 0 0 25px #cac6c6;
/*  边框阴影设置*/
}
  .login_title{
    margin: 0px auto 40px auto;
    text-align: center;
  /*  对齐方式*/
    color: #255e98;

  }
#poster {
  background:url("../assets/lans.jpg") no-repeat;
  background-position: center;
  height: 100%;
  width: 100%;
  background-size: cover;
  position: fixed;
}
body{
  margin: 0px;
}

</style>
