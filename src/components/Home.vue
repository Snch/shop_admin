<template>
  <div class="home">
    <el-container>
      <el-header>
        <div class="logo"></div>
        <div class="logout">欢迎光临
          <a href="javascript:;">退出</a>
        </div>
        <h1>电商后台管理系统</h1>
      </el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {}
</script>

<style lang='less'>
.home {
  height: 100%;
}
.el-container {
  height: 100%;
}
.el-header {
  background-color: #b3c1cd;
  color: #333;
  text-align: center;
  line-height: 60px;

  .logo {
    background-color: #666;
    width: 180px;
    height: 60px;
    float: left;
  }
  .logout {
    float: right;
    width: 180px;
    height: 60px;
  }
}

.el-aside {
  background-color: #545c64;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #d4dfe4;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>
