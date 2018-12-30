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
            <h3>添加管理员账号</h3>
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
            <el-form-item label="账号" prop="user">
              <el-input type="text" v-model="ruleForm2.user" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
              <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="passCheck">
              <el-input type="password" v-model="ruleForm2.passCheck" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="用户组" prop="usergroup">
              <el-select v-model="ruleForm2.usergroup" placeholder="请选择">
                <el-option label="超级管理员" value="超级管理员"></el-option>
                <el-option label="普通管理员" value="普通管理员"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm2')">添加</el-button>
            </el-form-item>
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
    //自定义验证2次密码是否一致
    var validatePassword = (rule, value, callback) => {
      if (value !== this.ruleForm2.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm2: {
        pass: "",
        user: "",
        passCheck: "",
        usergroup: ""
      },
      rules2: {
        user: [
          { required: true, trigger: "blur", message: "用户名必须填写" },
          {
            min: 6,
            max: 18,
            message: "用户名长度在 6 到 18 个字符",
            trigger: "blur"
          }
        ],
        pass: [
          { required: true, trigger: "blur", message: "密码必须填写" },
          {
            min: 6,
            max: 18,
            message: "用户名长度在 6 到 18 个字符",
            trigger: "blur"
          }
        ],
        passCheck: [
          { required: true, trigger: "blur", message: "确认密码必须填写" },
          {
            min: 6,
            max: 12,
            message: "确认密码长度在 6 到 12 个字符",
            trigger: "blur"
          },
          //调用自定义的验证方法验证两次密码是否一致
          { validator: validatePassword, trigger: "blur" }
        ],
        usergroup: [
          { required: true, trigger: "change", message: "请选择用户组" }
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
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // 发送ajax
          this.axios.post(
              "http://172.16.4.175:9090/users/useradd",
              this.qs.stringify(this.ruleForm2)
            )
            .then(result => {
              console.log(result)
              if(result.data.isOk) {
                //添加成功
                this.$message({
                  message: result.data.msg,
                  type: 'success'
                });
                setTimeout(() => {
                this.$router.push("/userlist");
              }, 100);
              }else {
                //添加失败
                this.$message.error(result.data.msg);
              }
            })
            .catch(err => {
              console.log(err);
            });
        } else {
          console.log("× 表单验证失败");
          //发送ajax
          return false;
        }
      });
    }
  }
};
</script>

<style scoped>
</style>

