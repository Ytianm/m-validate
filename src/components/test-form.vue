<template>
  <div class="app2">
    <el-form
      :model="numberValidateForm"
      ref="numberValidateForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item
        label="年龄"
        prop="age"
        :rules="[
          { required: true, message: '年龄不能为空'},
          { type: 'number', message: '年龄必须为数字值'}
        ]"
      >
        <el-input type="age" v-model.number="numberValidateForm.age" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm1('numberValidateForm')">提交</el-button>
        <el-button @click="resetForm('numberValidateForm')">重置</el-button>
      </el-form-item>
    </el-form>

    <m-form :model="model" :rules="rules" ref="loginForm">
      <m-form-item label="用户名" prop="username">
        <m-input v-model="model.username"></m-input>
      </m-form-item>
      <m-form-item label="用户密码" prop="password">
        <m-input type="password" v-model="model.password"></m-input>
      </m-form-item>
      <m-form-item label="菜单" prop="menu">
        <m-select type="menu" v-model="model.menu">
          <option value="1111">1111</option>
          <option value="222">2222</option>
          <option value="333">3333</option>
        </m-select>
      </m-form-item>      
      <m-form-item>
        <el-button type="primary" @click="submitForm('loginForm')">提交</el-button>
      </m-form-item>
    </m-form>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      numberValidateForm: {
        age: ''
      },
      name: '',
      model: { username: '', password: '', menu: '' },
      rules: {
        username: [{ required: true, message: "请输入用户名" }],
        password: [{ required: true, message: "请输入密码" }],
        menu: [{required: true, message: '不能为空'}]
      }
    };
  },
  methods: {
    submitForm1(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },

    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log("校验成功");
        } else {
          console.log("校验失败");
        }
      });
    }
  }
};
</script>