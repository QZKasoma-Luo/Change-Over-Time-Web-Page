<template>
  <div id="login-container">
    <el-form
      ref="form"
      :rules="rules"
      :model="form"
      label-width="80px"
      class="login-form"
    >
      <h2 class="login-title">Change Over Time Dashboard</h2>
      <el-form-item label="Account" prop="username">
        <el-input
          v-model="form.username"
          placeholder="Enter your account"
        ></el-input>
      </el-form-item>
      <el-form-item label="Password" prop="userpwd">
        <el-input
          v-model="form.userpwd"
          placeholder="Enter your Password"
          type="password"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <!-- Remeber to quote the ref name when pass the parameter in javascript's function!!!!! I spend 1 hour to figure this stupid error out!  -->
        <el-button
          type="primary"
          @click="submitForm('form')"
          v-loading.fullscreen.lock="fullscreenLoading"
          >Login</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
// import axios from "axios";
export default {
  data() {
    return {
      fullscreenLoading: false,
      form: {
        username: "",
        userpwd: "",
      },

      rules: {
        username: [
          {
            required: true,
            message: "Account name is required",
            trigger: ["blur", "change"],
          },
        ],
        userpwd: [
          {
            required: true,
            message: "Password Required",
            trigger: ["blur", "change"],
          },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios
            .post("/api/UserInfo", {
              name: this.form.username,
              pwd: this.form.userpwd,
            })
            .then((response) => {
              if (response.data == true) {
                this.$message.success("Login successful");
                this.fullscreenLoading = true;
                setTimeout(() => {
                  this.$router.push("./");
                  this.fullscreenLoading = false;
                }, 2000);
              } else {
                this.$message.error(
                  "Your password or account is incorrect, Please try again"
                );
              }
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          this.$message.error("Please enter a valid account information");
        }
      });
    },
  },
};
</script>
<style scoped>
#login-container {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-image: url("../../assets/BackGround.jpg");
  object-fit: fill;
  background-size: cover;
  -webkit-background-size: cover; /* utlize for Chrome and Safari */
  -o-background-size: cover; /* utlize for Opera */
  position: absolute;
  flex: 1;
}

.login-form {
  width: 350px;
  background-color: white;
  padding: 15px;
  border-radius: 20px;
  left: 50%;
  top: 50%;
  margin-left: -175px;
  margin-top: -125px;
  position: absolute;
}

.login-title {
  text-align: center;
  color: #606266;
}
</style>
