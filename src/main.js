import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import mFormItem from "./form/m-form-item";
import mInput from "./form/m-input";
import mForm from "./form/m-form";
import mSelect from "./form/m-select";
Vue.component('mFormItem', mFormItem);
Vue.component('mInput', mInput);
Vue.component('mForm', mForm);
Vue.component('mSelect', mSelect);

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
