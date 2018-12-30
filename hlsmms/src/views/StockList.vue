<template>
  <el-container id="home">
    <!-- 左侧导航 -->
    <leftMenu></leftMenu>
    <el-container id="mainContent">
      <!-- 右侧头部 -->
      <RightTop></RightTop>
      <!-- 右侧内容 -->
      <el-main id="stocklist">
        <!-- main  -->
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <h3>库存管理</h3>
          </div>
          <el-form
            :model="ruleForm2"
            status-icon
            :rules="rules2"
            ref="ruleForm2"
            label-width="100px"
            class="demo-ruleForm"
            label-position="left"
          >
            <el-form-item prop="usergroup">
              <el-select v-model="ruleForm2.usergroup" placeholder="----------顶级分类----------">
                <el-option label="日用品" value="日用品"></el-option>
                <el-option label="食品" value="食品"></el-option>
                <el-option label="烟酒" value="烟酒"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="关键字：" prop="code">
              <el-input type="text" v-model="ruleForm2.code" autocomplete="off"></el-input>&nbsp;
              <span>(商品名称,条形码)</span>&nbsp;
              <el-button type="success">查询</el-button>
            </el-form-item>
          </el-form>
          <el-table :data="tableData" style="width: 100%">
            <el-table-column label="商品条形码">
              <template slot-scope="scope">
                <span>{{ scope.row.goodscode }}</span>
              </template>
            </el-table-column>
            <el-table-column label="商品名称">
              <template slot-scope="scope">
                <span>{{ scope.row.name }}</span>
              </template>
            </el-table-column>
            <el-table-column label="进价(元)">
              <template slot-scope="scope">
                <span>{{ scope.row.price }}</span>
              </template>
            </el-table-column>
            <el-table-column label="入存">
              <template slot-scope="scope">
                <span>{{ scope.row.storage}}</span>
              </template>
            </el-table-column>
            <el-table-column label="库存">
              <template slot-scope="scope">
                <span>{{ scope.row.stock}}</span>
              </template>
            </el-table-column>

            <el-table-column label="已售">
              <template slot-scope="scope">
                <span>{{ scope.row.sold}}</span>
              </template>
            </el-table-column>
            <el-table-column label="操作" width="120">
              <template slot-scope="scope">
                <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">
                  <i class="el-icon-edit"></i>
                </el-button>
                <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">
                  <i class="el-icon-delete"></i>
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        
           
            <el-pagination background layout="prev, pager, next" :total="30"></el-pagination>
            
        
          
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
      ruleForm2: {
        usergroup: "",
        code: ""
      },
      rules2: {
        usergroup: [{}],
        code: [{}]
      },
      tableData: [
        {
          goodscode: 123456789,
          name: "优乐美",
          price: "5.00",
          storage: 10,
          stock: 5,
          sold: 5
        },
        {
          goodscode: 123456789,
          name: "优乐美",
          price: "5.00",
          storage: 10,
          stock: 5,
          sold: 5
        },
        {
          goodscode: 123456789,
          name: "优乐美",
          price: "5.00",
          storage: 10,
          stock: 5,
          sold: 5
        },
        {
          goodscode: 123456789,
          name: "优乐美",
          price: "5.00",
          storage: 10,
          stock: 5,
          sold: 5
        }
      ]
    };
  },
  components: {
    LeftMenu,
    RightTop,
    RightBottom
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
};
</script>

<style scoped>
</style>

