<template>
<div class="page-register">
  <el-form class="login-container">
    <h1 class="title">用户注册</h1>
    <el-form-item label="">
      <el-input type="text"
                aria-placeholder="请输入用户名"
                v-model="username" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="">
      <el-input type="password" aria-placeholder="请输入密码"></el-input>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
    export default {
        name: "Register"
    }
</script>

<style scoped>

</style>
