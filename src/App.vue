<template>
  <div id="app">
	<img src="./assets/logo.png">	
	<!-- div class="g-signin2" data-onsuccess="onSignIn"></div -->
	<a id="signin-button" class="g-signin2" v-on:click="signIn">
      Sign in with Google
	</a>
  </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'

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
    },
    onSignInSuccess: function (authorizationCode) {
	  console.log(authorizationCode);
      this.toggleLoading()
      this.resetResponse()
	  
      this.$http.post('http://localhost:8080/home', { idtoken : authorizationCode, redirect_uri: 'postmessage' }).then(function (response) {
        if (response.body) {
          var data = response.body
          // Save to vuex
          var token = 'Bearer ' + data.token
          this.$store.commit('SET_USER', data.user_data)
          this.$store.commit('SET_TOKEN', token)
          // Save to local storage as well 
          // ( or you can install the vuex-persistedstate plugin so that you won't have to do this step, only store to Vuex is sufficient )
          if (window.localStorage) {
            window.localStorage.setItem('user', JSON.stringify(data.user_data))
            window.localStorage.setItem('token', token)
          }
          // redirect to the dashboard
          this.$router.push({ name: 'home' })
        }
      }, function (response) {
        var data = response.body
        this.response = data.error
        console.log('BACKEND SERVER - SIGN-IN ERROR', data)
      })
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
