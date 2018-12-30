<template>
  <el-container id="home">
    <!-- 左侧导航 -->
    <leftMenu></leftMenu>
    <el-container id="mainContent">
      <!-- 右侧头部 -->
      <RightTop></RightTop>
      <!-- 右侧内容 -->
      <el-main>
        <!-- main  -->
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <h3>分类管理</h3>
          </div>
          <el-card class="box-card">
            <div slot="header" class="clearfix sortmanatitle">
              <span class="type">分类名称</span>
              <span style="float: right;" type="text">操作</span>
            </div>
            <div v-for="o in 4" :key="o" class="text item">{{'列表内容 ' + o }}</div>
          </el-card>
        </el-card>
      </el-main>
      <!-- 右侧页脚 -->
      <RightBottom></RightBottom>
    </el-container>
  </el-container>
</template>

<script>
import LeftMenu from "../components/leftMenu";
import RightTop from "../components/rightTop";
import RightBottom from "../components/rightBottom";

export default {
  data() {
    return {};
  },
  components: {
    LeftMenu,
    RightTop,
    RightBottom
  },
  methods: {}
};
</script>

<style scoped>
</style>

