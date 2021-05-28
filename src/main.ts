import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store, { STORE_MUTATIONS } from './store'
import vuetify from './plugins/vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false

function start() {

  let size = window.innerHeight;
  console.log('size', size);

  if(size < 600) store.commit(STORE_MUTATIONS.appBar.SET_SMALL_SCREEN, true);

  new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
  }).$mount('#app')
}

start();

