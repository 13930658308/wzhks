<template>
  <div class="home">
    <div>
      <el-header class="syhead">
        <!-- 面包屑 -->
        <div>
          <el-breadcrumb separator="/">
            <i class="el-icon-menu" style="margin-left: 100px; color: #fff"></i>
            <el-breadcrumb-item :to="{ path: '/' }"
              ><span style="color: #fff; width: 300px; display: inine-block"
                >ElementUi管理后台</span
              ></el-breadcrumb-item
            >
          </el-breadcrumb>
        </div>
        <!-- 下拉 -->
        <div>
          <el-dropdown>
            <div class="icon">
              <i class="el-icon-rank"></i><i class="el-icon-s-tools"></i
              ><i class="el-icon-zoom-in"></i>
                  <p>admin</p>
            </div>
        
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item
                ><span @click="tuichufn">退出</span></el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
    </div>
    <el-container>
      <!-- 左边侧边栏 -->
      <el-aside style="background-color: rgb(50, 64, 87); height: 100vh">
        <el-menu
          background-color="rgb(50, 64, 87)"
          text-color="#ffffff"
          :router="true"
        >
          <el-menu-item class="item1" index="/">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <!-- 二级菜单 -->
          <el-submenu index="2" class="item1">
            <template slot="title">
              <i class="el-icon-document-remove"></i>
              <span>文章管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1"
                ><i class="el-icon-apple"></i>文章列表
              </el-menu-item>
              <el-menu-item index="2-2"
                ><i class="el-icon-apple"></i>多层级路由示例</el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 右边内容 -->
      <el-container>
        <el-main>
          <!-- 二级路由子组件 -->
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  name: "HomeIndex",
  components: {},
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.item1 {
  background-color: rgb(15, 15, 15);
  color: rgb(236, 236, 236);
}
.item1 span {
  color: rgb(236, 236, 236);
}
.img {
  display: inline-block;
  width: 36px;
  height: 36px;
  border-radius: 50%;
}
.el-header {
  display: flex;
  justify-content: space-between;
  height: 50px;
  align-items: center;
  background: #eff2f7;
}
.el-dropdown-menu {
  width: 60px;
  text-align: center;
}
.syhead {
  background: #0086f1;
}
.icon{
  display: flex;
}
.icon div i{
  padding:0 20px;
}
</style>