<template>
  <div class="m-form-item" :class="errorClass">
    <label v-if="label">{{label}}</label>
    <slot></slot>
    <span style="color: red" v-if="validateStatus === 'error'">{{validateMsg}}</span>
  </div>
</template>
<script>
import Schema from "async-validator";
export default {
  inject: ["form"], // 注入form  获取到 form 的 model 以及 rules
  props: {
    label: {
      type: String,
      default: ''
    },
    prop: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      validateStatus: '',
      validateMsg: '',
      errorClass: ' '
    };
  },
  methods: {
    validate() {
      // 使用 async-validator 进行校验
      return new Promise(resolve => {
        console.log(
          "validate -- input 通知我校验数据了",
          this.form.model[this.prop]
        );
        // 校验规则
        let descriptor = {
          [this.prop]: this.form.rules[this.prop]
        };

        // 校验器
        let validator = new Schema(descriptor);

        // 开始校验数据
        validator.validate(
          { [this.prop]: this.form.model[this.prop] },
          error => {
            if (error) {
              this.validateStatus = "error";
              this.validateMsg = error[0].message;
              this.errorClass = 'is-error';
              resolve(false);
            } else {
              this.validateStatus = '';
              this.validateMsg = '';
              this.errorClass = '';
              resolve(true);
            }
          }
        );
      });
    }
  },
  created() {
    // 校测到来此 LInput 的检测请求
    this.$on("validate", this.validate);
  },
  mounted() {
    // 挂载到form上时，派发一个添加事件
    // 如果此组件传入了 props ，则需要通知父组件 以放入检测数组
    if (this.prop) {
      this.$parent.$emit("formItemAdd", this);
    }
  }
};
</script>