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
          <div class="text item">
            <!-- 警告 -->
            <el-alert title="成功提示的文案" type="success" show-icon></el-alert>
            <el-alert title="消息提示的文案" type="info" show-icon></el-alert>
            <!-- 栅格布局 2格 -->
            <el-row :gutter="40">
              <el-col :span="12">
                <el-card class="box-card">
                  <div slot="header" class="clearfix">
                    <h3>销售排行</h3>
                  </div>
                  <div class="text item">
                    <el-table
                      :data="tableData2"
                      style="width: 100%"
                      :row-class-name="tableRowClassName"
                    >
                      <el-table-column prop="goodsname" label="商品名称"></el-table-column>
                      <el-table-column prop="salenum" label="销量"></el-table-column>
                    </el-table>
                  </div>
                </el-card>
              </el-col>
              <el-col :span="12">
                <el-card class="box-card">
                  <div slot="header" class="clearfix">
                    <h3>缺货的商品</h3>
                  </div>
                  <div class="text item">
                    <el-table :data="tableData" border style="width: 100%">
                      <el-table-column prop="goodname" label="商品名称" ></el-table-column>
                      <el-table-column prop="repertory" label="库存" ></el-table-column>
                      <el-table-column fixed="right" label="操作" >
                        <template slot-scope="scope">
                          <el-button @click="handleClick(scope.row)" type="text" size="small">入库</el-button>
                        </template>
                      </el-table-column>
                    </el-table>
                  </div>
                </el-card>
              </el-col>
            </el-row>
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
      tableData2: [
        { goodsname: "纳爱斯", salenum: 20 },
        { goodsname: "纳爱斯", salenum: 20 },
        { goodsname: "立白", salenum: 30 },
        { goodsname: "康师傅", salenum: 3010 }
      ],
      tableData: [
        {goodname:"优乐美", repertory:0}
      ]
    };
  },
  components: {
    LeftMenu,
    RightTop,
    RightBottom
  },
  methods: {
    handleClick(row) {
      console.log(row);
    },
    tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      }
  }
};
</script>

<style scoped>

</style>

