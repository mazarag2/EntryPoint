<template>
  <div id="app">
	<img src="./assets/logo.png">	
	<!-- div class="g-signin2" data-onsuccess="onSignIn"></div -->
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
import router from './router/router.js'
import home from './components/home.vue'
import signIn from './components/signIn.vue'
export default {
  name: 'Login',
  data: function (router) {
    return {
      section: 'Login',
      loading: '',
      response: ''
    }
  },
  methods: {
    signIn: function () {
      Vue.googleAuth().signIn(this.onSignInSuccess, this.onSignInError)
	    Vue.googleAuth().directAccess()
	  
    },
    async onSignInSuccess(googleUser) {
	  console.log(googleUser);
	  //console.log(googleUser.getAuthResponse().id_token);
	  //var id_token = googleUser['Zi']['id_token'];
	 // console.log(id_token);
	  
      //this.toggleLoading()
      //this.resetResponse()
	  
    console.log(this);
    this.$router.replace('home');
	  let response = await axios.get('http://localhost:8081/reviews');
	  console.log(response.data);
    let reviews = response.data;
    router.push('home');
    const ComponentCtor = Vue.extend(home);
    const componentInstance = new ComponentCtor();
    componentInstance.$mount('#home');
   

      
	  
    },
    onSignInError: function (error) {
      this.response = 'Failed to sign-in'
      console.log('GOOGLE SERVER - SIGN-IN ERROR', error)
    },
    toggleLoading: function () {
      this.loading = (this.loading === '') ? 'loading' : ''
    },
    resetResponse: function () {
      this.response = ''
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
