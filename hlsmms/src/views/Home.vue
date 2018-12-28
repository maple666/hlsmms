<template>
  <el-container id="home">
    <!-- 左侧导航 -->
    <el-aside width="230px">
      <div id="leftTitle">
        <h1>华联超市管理系统</h1>
        <p>你好！ Admin</p>
        <p>
          <a href="#">管理首页</a> | 退出系统
        </p>
      </div>

      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :unique-opened="true"
      >
        <el-submenu index="1">
          <template slot="title">
            <!-- <i class="el-icon-location"></i> -->
            <span>分类管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">分类管理</el-menu-item>
            <el-menu-item index="1-2">添加分类</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <!-- <i class="el-icon-location"></i> -->
            <span>商品管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">商品管理</el-menu-item>
            <el-menu-item index="1-2">添加商品</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <!-- <i class="el-icon-location"></i> -->
            <span>进货管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">库存管理</el-menu-item>
            <el-menu-item index="1-2">添加库存</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <!-- <i class="el-icon-location"></i> -->
            <span>出货管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">销售列表</el-menu-item>
            <el-menu-item index="1-2">商品出库</el-menu-item>
            <el-menu-item index="1-3">商品退货</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title">
            <!-- <i class="el-icon-location"></i> -->
            <span>统计管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">销售统计</el-menu-item>
            <el-menu-item index="1-2">进货统计</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="6">
          <template slot="title">
            <!-- <i class="el-icon-location"></i> -->
            <span>账号管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">账号管理</el-menu-item>
            <el-menu-item index="1-2">添加账号</el-menu-item>
            <el-menu-item index="1-3">密码修改</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="7">
          <template slot="title">
            <!-- <i class="el-icon-location"></i> -->
            <span>会员管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">账号管理</el-menu-item>
            <el-menu-item index="1-2">添加账号</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="8">
          <template slot="title">
            <!-- <i class="el-icon-location"></i> -->
            <span>系统管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">系统信息</el-menu-item>
            <el-menu-item index="1-2">系统配置</el-menu-item>
            <el-menu-item index="1-3">权限管理</el-menu-item>
            <el-menu-item index="1-4">添加管理组</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <!-- 右侧头部 -->
      <el-header height="auto">
        <h1>欢迎您 admin</h1>
        <p>查看详细的系统信息</p>
      </el-header>
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
      <el-footer height="50px">
        <p>&copy;Copyright 2018 华联超市管理系统</p>
      </el-footer>
    </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

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
  components: {},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
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

