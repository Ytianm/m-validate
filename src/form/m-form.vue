<template>
  <form>
    <slot></slot>
  </form>
</template>
<script>
export default {
  provide() {
    return {
      form: this
    };
  },
  props: {
    model: {
      type: Object,
      required: true
    },
    rules: {
      type: Object
    }
  },
  data() {
    return {
      files: []
    }
  },
  created() {
    // 缓存需要校验的表单项
    this.$on("formItemAdd", item => this.files.push(item));
    console.log(this.files);
  },
  methods: {
    // 将FormItem数组转换为 validate() 返回的promise数组
    // 调用 LForm 组件的 validate 方法可以得到表单数据校验的结果
    async validate(callback) {
      let tasks = this.files.map(item => item.validate());
      console.log(tasks);

      // 获取所有结果统一处理
      const results = await Promise.all(tasks);

      let ret = true;
      results.forEach(valid => {
        if (!valid) {
          ret = false; // 只要一个失败就失败
        }
      });
      callback(ret);
    }
  }
};
</script>