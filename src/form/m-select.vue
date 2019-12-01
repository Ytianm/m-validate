<template>
  <div class="m-select">
    <select name="" id="" @change="onChange">
      <slot></slot>
    </select>
  </div>
</template>
<script>
//失去焦点时触发校验以及用户输入的时候触发校验
export default {
  props: {
    type: {
      type: String,
      default: "text"
    },
    value: {
      type: String,
      default: ""
    }
  },
  methods: {
    onChange(e) {
      this.$emit("select", e.target.value);
      this.$parent.$emit("validate");
    }
  }
};
</script>