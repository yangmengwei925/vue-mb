// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
// import Mint from 'mint-ui'
 import 'mint-ui/lib/style.css'
import iView from 'iview';
import 'iview/dist/styles/iview.css' 
import store from './store/index' 
import {
  Dropdown,
  Menu,
  Icon,
  Button,
  Row,
  Col,
  Breadcrumb,
  Input,
  Pagination,
  Empty,
  Spin,
  Divider,
  message,
} from "ant-design-vue";
Vue.use(iView);

Vue.use(Dropdown);
Vue.use(Menu);
Vue.use(Icon);
Vue.use(Button);
Vue.use(Row);
Vue.use(Col);
Vue.use(Breadcrumb);
Vue.use(Input);
Vue.use(Pagination);
Vue.use(Empty);
Vue.use(Spin);
Vue.use(Divider);
Vue.prototype.axios = axios;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
