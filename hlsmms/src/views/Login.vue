<template>
  <div id="loginbox">
    <el-card class="box-card" id="login">
      <div slot="header" class="clearfix">
        <span>用户登陆</span>
      </div>
      <el-form
        :model="ruleForm2"
        status-icon
        :rules="rules2"
        ref="ruleForm2"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="账号" prop="user">
          <el-input type="text" v-model="ruleForm2.user" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
          <el-button @click="resetForm('ruleForm2')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
export default {
     data() {
      return {
        ruleForm2: {
          pass: '',
          user: ''
        },
        rules2: {
          user:[
              { required: true, trigger: 'blur', message: "用户名必须填写" },
              { min: 6, max: 18, message: '用户名长度在 6 到 18 个字符', trigger: 'blur' }
          ],
          pass: [
            { required: true, trigger: 'blur', message: "密码必须填写" },
            { min: 6, max: 18, message: '用户名长度在 6 到 18 个字符', trigger: 'blur' }
          ]
         
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('√ 表单验证成功');
            //发送ajax
            this.$router.push('/')
          } else {
            console.log('× 表单验证失败');
            //发送ajax
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
};
</script>
<style>
    #loginbox{
        height: 100%;
        margin: 0;
        padding: 0;
        background-image: url(../assets/images/1.jpg); background-repeat:no-repeat; background-size:100% 100%;-moz-background-size:100% 100%;
    }
    #login{
        width: 520px;
        height: 300px;
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        margin: auto;
    }



</style>


