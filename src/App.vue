<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Test-form></Test-form>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TestForm from './components/test-form'

export default {
  name: 'app',
  components: {
    HelloWorld,
    TestForm
  }
}
</script>

<style>
.error{
  border: 1px solid red;
}
.m-form-item.is-error  .m-input input{
  border: 1px solid red;
}
</style>
