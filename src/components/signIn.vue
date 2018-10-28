<template>
	<div class="g-signin2" data-onsuccess="onSignIn"></div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'App',
  methods:{
  
	onSignIn(googleUser){
	
	  var profile = googleUser.getBasicProfile();
	 
	  console.log('Name: ' + profile.getName());
	  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
	  
	  var name = profile.getName();
	  var email = profile.getEmail();
	  
	  var url = "http://localhost:8081/index";
	  
	  axios.post(url,{
			firstName : name,
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