<template>
  <div id="app">
    <img src="./assets/logo.png">	
    <router-view/>
	<div class="g-signin2" data-onsuccess="onSignIn"></div>
  </div>
  
</template>

<script src="https://apis.google.com/js/platform.js" async defer></script>
<script>

export default {
  name: 'App'
  
}
</script>
<meta name="google-signin-client_id" content="951702162449-c1rvbviahpjsi27rvd2va1va9qq9dga5.apps.googleusercontent.com">
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
