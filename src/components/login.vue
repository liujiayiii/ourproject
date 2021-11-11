<template>
  <el-form class="login-container" label-position="left"
           label-width="0px">
    <h3 class="login_title">登录</h3>
    <el-form-item>
      <el-input type="text" v-model="loginForm.username"
                auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item>
      <el-input type="password" v-model="loginForm.password"
                auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-form-item style="width: 100%">
      <el-button type="primary" style="width: 100%;background: #505458;border: none" v-on:click="login" plain>登录</el-button>
    </el-form-item>
  </el-form>

</template>

<script>
    export default {
        name: "login",
      data(){
          return{
            loginForm:{
              username:'',
              password:''
            },
            responseResult:[]
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

</style>
