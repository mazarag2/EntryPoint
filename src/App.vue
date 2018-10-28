<template>
  <div id="app">
    <img src="./assets/logo.png">	
   
	<div class="g-signin2" data-onsuccess="onSignIn"></div>
  </div>
  
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  methods:{
  
	onSignIn(googleUser){
	
	  var authToken = googleUser.getAuthResponse().id_token;
	 
	  console.log('Name: ' + profile.getName());
	  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
	  
	  var name = profile.getName();
	  var email = profile.getEmail();
	  
	  var url = "http://localhost:8081/index";
	  
	  axios.post(url,{
			token : authToken,
			Email : email
		}
	  ).then(response => {
		console.log(response);
	  }).catch(e => {
		console.log("error", e);
	  });			

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
