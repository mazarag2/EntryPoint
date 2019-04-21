<template>
	<div id = 'signIn'>
		<a id="signin-button" class="g-signin2" v-on:click="signIn">
					Sign in with Google
		</a>
	</div>		
</template>
<script>
import axios from 'axios'
import Vue from 'vue'
import router from '../router/router.js'
export default {
  name: 'signIn',
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
#signIn {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>