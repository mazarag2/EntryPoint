// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import BootstrapVue from 'bootstrap-vue'
import home from './components/home.vue'
import signIn from './components/signIn.vue'

Vue.config.productionTip = false;
Vue.component('home',home);
Vue.component('signIn',signIn);

/* eslint-disable no-new */

import GoogleAuth from 'vue-google-auth'

Vue.use(GoogleAuth, { clientID: '951702162449-2elm9vji2hbd9q5istltnl8lkao6jufc.apps.googleusercontent.com' })
Vue.use(BootstrapVue);
/*
Vue.component('g-signin-button', {
  template: '<div ref="signinBtn" class="btn-sign-in">Sign In</div>',
  mounted () {
    window.gapi.load('auth2', () => {
      const auth2 = window.gapi.auth2.init({
        client_id: '951702162449-2elm9vji2hbd9q5istltnl8lkao6jufc.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin'
      })
      auth2.attachClickHandler(this.$refs.signinBtn, {}, googleUser => {
        this.$emit('done', googleUser)
      }, error => console.log(error))
    })
  },
  methods: {
    onUserLoggedIn (user) {
      console.log(user)
    }
  }
})
*/



new Vue({
  el: '#app',
  router,
  components:{App},
  template: '<App/>',
  render: h => h(App),
  methods: {
    onUserLoggedIn (user) {
      console.log(user)
    }
  }
})
