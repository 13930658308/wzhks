<template>
<div class="box">
  <div class="login-box">
    <h3>Login Form</h3>
    <div>
      <el-form :model="formdata" :rules="rules">
        <el-form-item prop="user">
          <el-input placeholder="用户名" v-model="formdata.user" style="background-color: #283443;" class="ys"></el-input>
        </el-form-item>
        <el-form-item prop="pw">
          <el-input placeholder="密码" v-model="formdata.pw" class="ys"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="loginfn">Login</el-button>
        </el-form-item>
      </el-form>
      <p class="tip">username:admin password:123456</p>
    </div>
  </div>
  </div>
</template>
<script>
import axios from "axios"
export default {
  name: "login",
  data() {
    let userfn = function (rule, value, callback) {
      console.log(rule);
      let rg = /^[a-z]\w{2,6}\w$/;
      if (rg.test(value)) return; //格式对不处理
      return callback(new Error("用户格式不对"));
    };
    let pwfn = function (rule, value, callback) {
      console.log(rule);
      let rg = /^\w{2,6}$/;
      if (rg.test(value)) return; //格式对不处理
      return callback(new Error("密码格式不对"));
    };
    return {
      formdata: {
        user: "admin",
        pw: "123456",
      },
      // 验证规则
      rules: {
        user: [{ validator: userfn, trigger: "blur" }],
        pw: [{ validator: pwfn, trigger: "blur" }],
      },
    };
  },
  created() {
  },
  methods: {
    async loginfn() {
      let user = this.formdata.user;
      let pw = this.formdata.pw;
    //   像后端发送用户输入的用户名密码
      let { data } = await axios.post("/api/login", {
        user,
        pw,
      });
    //   判断是否验证成功
      if (data.message === "fail") return this.$message.error("登录失败");
      if (data.seccess == "登陆成功") {
        localStorage.setItem("token", "1111");
        this.$message({
          message: "登陆成功",
          type: "success",
          duration: 2000,
          onClose: () => {
            //    登陆成功后跳转到主页
            this.$router.push({ path: "/" });
          },
        });
      }
    },
  },
};
</script>
<style scoped>
*{
    padding: 0;
    margin:0;
}
.box{
    width: 100vw;
    height: 100vh;
    background: #2d3a4b;
    padding-top:100px;
}
.login-box {
  font-size: #fff;
}
.el-button {
  width: 100%;

}
h3 {
  text-align: center;
  margin-bottom:40px ;
  font-size:30px;
}
.login-box {
  color: #fff;
  width: 300px;
  margin: 0 auto;
  padding:20px;
}

.login-box .el-input__inner{
border:none;

} 
</style>