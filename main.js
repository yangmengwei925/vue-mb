import Vue from "vue";
import App from "./App.vue";
import {GetResponseData} from "../Common";

Vue.config.productionTip = false;
Vue.prototype.$ResponseData = GetResponseData();//用户数据

new Vue({
    render: h => h(App),
}).$mount("#app");