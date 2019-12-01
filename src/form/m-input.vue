<template>
  <div class="m-input">
    <input :type="type" @blur="onBlur" :value="value" @input="onInput" />
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
    onInput(e) {
      this.$emit("input", e.target.value);
      this.$parent.$emit("validate");
    },
    onBlur(e) {
      this.$emit("input", e.target.value);
      this.$parent.$emit("validate");
    }
  }
};
</script>