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
            <h3>系统信息</h3>
          </div>
      
        </el-card>
      </el-main>
      <!-- 右侧页脚 -->
      <RightBottom></RightBottom>
    </el-container>
  </el-container>
</template>

<script>
import LeftMenu from '../components/leftMenu';
import RightTop from '../components/rightTop';
import RightBottom from '../components/rightBottom'

export default {
  data() {
    return {
      
    };
  },
  components: {
    LeftMenu,
    RightTop,
    RightBottom
  },
  methods: {
    
  }
};
</script>

<style scoped>

</style>

