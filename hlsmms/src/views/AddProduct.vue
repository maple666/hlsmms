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
            <h3>添加商品</h3>
          </div>
          <el-form
            :model="ruleForm2"
            status-icon
            :rules="rules2"
            ref="ruleForm2"
            label-width="100px"
            class="demo-ruleForm"
            label-position="top"
            id="addgoods"
          >
            <el-form-item label="所属分类" prop="usergroup">
              <el-select v-model="ruleForm2.usergroup" placeholder="----------顶级分类----------">
                <el-option label="日用品" value="日用品"></el-option>
                <el-option label="食品" value="食品"></el-option>
                <el-option label="烟酒" value="烟酒"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="商品条形码" prop="code">
              <el-input type="text" v-model="ruleForm2.code" autocomplete="off"></el-input>&emsp;
              <el-button type="success">生成条形码</el-button>
            </el-form-item>
            <el-form-item label="商品名称" prop="typelist">
              <el-input type="text" v-model="ruleForm2.typelist" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="商品售价" prop="goodsprice" class="goodsstyle">
              <el-input type="text" v-model="ruleForm2.goodsprice" autocomplete="off"></el-input>元
            </el-form-item>
            <el-form-item label="市场价" prop="marketprice" class="goodsstyle">
              <el-input type="text" v-model="ruleForm2.marketprice" autocomplete="off"></el-input>元
              <p class="goodstitle">默认市场价为售价的1.2倍</p>
            </el-form-item>
            <el-form-item label="商品进价" prop="purchaseprice" class="goodsstyle">
              <el-input type="text" v-model="ruleForm2.purchaseprice" autocomplete="off"></el-input>元
            </el-form-item>
            <el-form-item label="入库数量" prop="laidnum" class="goodsstyle">
              <el-input type="text" v-model="ruleForm2.laidnum" autocomplete="off"></el-input>
              <p class="goodstitle">计重商品单位为千克</p>
            </el-form-item>
            <el-form-item label="商品重量" prop="goodsweight" class="goodsstyle">
              <el-input type="text" v-model="ruleForm2.goodsweight" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="商品单位" prop="goodsunit" class="goodsstyle">
              <el-input type="text" v-model="ruleForm2.goodsunit" autocomplete="off"></el-input>
            </el-form-item>
            <template>
              <p>会员优惠：</p>
              <el-radio v-model="radio" label="1">享受</el-radio>
              <el-radio v-model="radio" label="2">不享受</el-radio>
            </template>
            <template>
              <p>会是否促销：</p>
              <el-radio v-model="radio1" label="1">启用</el-radio>
              <el-radio v-model="radio1" label="2">禁用</el-radio>
            </template>
            <p>商品简介</p>
            <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea"></el-input>
            <span class="goodsmenu">不超过200字</span>
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
      radio: "1",
      radio1: "2",
      textarea: '',
      ruleForm2: {
        usergroup: "",
        typelist: "",
        code: "",
        goodsprice: "",
        marketprice: "",
        purchaseprice: "",
        laidnum: "",
        goodsweight: "",
        goodsunit: ""
      },
      rules2: {
        usergroup: [
          { required: false, trigger: "change", message: "请选择用户组" }
        ],
        typelist: [
          { required: true, trigger: "blur", message: "分类名称必须填写" }
        ],
        code: [{ required: true, trigger: "blur", message: "条形码必须填写" }],
        goodsprice: [
          { required: true, trigger: "blur", message: "商品售价必须填写" }
        ],
        marketprice: [{ required: false }],
        purchaseprice: [{ required: false }],
        laidnum: [{ required: false }],
        goodsweight: [{ required: false }],
        goodsunit: [{ required: false }]
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

