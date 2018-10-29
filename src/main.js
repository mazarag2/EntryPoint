// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  methods:{
	  
	mounted() {
		gapi.signin2.render('google-signin-button', {
		  onsuccess: this.onSignIn
		})
	},
	onSignIn : function(googleUser){
	
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
})
