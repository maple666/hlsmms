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
            <h3>添加管理</h3>
          </div>
          <el-form
            :model="ruleForm2"
            status-icon
            :rules="rules2"
            ref="ruleForm2"
            label-width="100px"
            class="demo-ruleForm"
            label-position="top"
          >
            <el-form-item label="所属分类" prop="usergroup">
              <el-select v-model="ruleForm2.usergroup" placeholder="----------顶级分类----------">
                <el-option label="日用品" value="日用品"></el-option>
                <el-option label="食品" value="食品"></el-option>
                <el-option label="烟酒" value="烟酒"></el-option>
              </el-select>
            </el-form-item>
            
            <el-form-item label="分类名称" prop="typelist">
              <el-input type="text" v-model="ruleForm2.typelist" autocomplete="off"></el-input>
            </el-form-item>
            <template>
              <p>状态：</p>
            <el-radio v-model="radio" label="1">启用</el-radio>
            <el-radio v-model="radio" label="2">禁用</el-radio>
          </template>
          <el-row>
          <el-button class="catebtn" type="success">添加</el-button>
          </el-row>
          </el-form>
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
    return {
      radio: '1',
      ruleForm2: {
        usergroup: "",
        typelist: '',
        
      },
      rules2:{
        usergroup: [{ required: false, trigger: "change", message: "请选择用户组" }],
        typelist: [
          { required: true, trigger: "blur", message: "分类名称必须填写" }],
          
      }
    };
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

