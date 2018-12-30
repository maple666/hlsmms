<template>
  <el-container id="home">
    <!-- 左侧导航 -->
      <leftMenu></leftMenu>
    <el-container id="mainContent">
      <!-- 右侧头部 -->
      <RightTop></RightTop>
      <!-- 右侧内容 -->
      <el-main id="stock">
        <!-- main  -->
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <h3>商品入库</h3>
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
           
            <el-form-item label="商品条形码" prop="code">
              <el-input type="text" v-model="ruleForm2.code" autocomplete="off"></el-input>&emsp;
            </el-form-item>
            <el-form-item label="数量" prop="num">
              <el-input type="text" v-model="ruleForm2.num" autocomplete="off"></el-input>
              <p>计重单位为千克</p>
            </el-form-item>
            <el-form-item label="进价" prop="purprice" class="goodsstyle">
              <el-input type="text" v-model="ruleForm2.purprice" autocomplete="off"></el-input>元
            </el-form-item>
            <el-row>
              <el-button class="catebtn" type="success">入库</el-button>
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
import LeftMenu from '../components/leftMenu';
import RightTop from '../components/rightTop';
import RightBottom from '../components/rightBottom'

export default {
  data() {
    return {
       ruleForm2: {
       
        
        code: "",
        purprice: "",
        num: ""
      },
      rules2: {
        code: [
          { required: true, trigger: "blur", message: "条形码必须填写" }
        ],
        num: [
          { required: true, trigger: "blur", message: "数量必须填写" }
        ],
        purprice: [
          { required: true, trigger: "blur", message: "商品进价必须填写" }
        ]
      }
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

