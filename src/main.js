import Vue from 'vue'
import Plugin from './plugins/axios'
import App from './client/common/App.vue'
import router from './router'
import cookie from './plugins/cookie'
import './plugins/element.js'
import tip from './services/tip';
import _ from 'lodash';
import VueI18n from 'vue-i18n';
import {initLang} from './util/langUtil';
import api from './api';
import store from './store'

Vue.config.productionTip = false

Vue.prototype.$tip=tip
Vue.prototype.$_=_;
Vue.prototype.$api=api

Vue.use(Plugin)
Vue.use(VueI18n)

const i18n=initLang()

new Vue({
  router,
  i18n,
  cookie,
  store,
  render: h => h(App)
}).$mount('#app')
