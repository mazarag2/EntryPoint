var express = require("express");
var path = require("path");
var serveStatic = require("serve-static");
app = express();
app.use(serveStatic(path.join(__dirname, "dist")));
console.log(path.join(__dirname, "dist"));
app.use(express.static(__dirname));
var port = process.env.PORT || 8081;
const qstring = require('querystring');
app.listen(port);
console.log("server started "+port);
app.set('view engine', 'jade');
app.engine('jade', jade.__express);

var firebase = require("firebase");
var config = {
    apiKey: process.env.API_KEY,
    authDomain: "entrypoint-9aa5e.firebaseapp.com",
    databaseURL: "https://entrypoint-9aa5e.firebaseio.com",
    projectId: "entrypoint-9aa5e",
    storageBucket: "entrypoint-9aa5e.appspot.com",
    messagingSenderId: "951702162449"
};
firebase.initializeApp(config);

app.get('/',function(req,res){
	
	
	res.sendfile(path.resolve(__dirname,'src/app.vue'));
	
	
});

app.post('/index',function(req,res){
	
	
	req.on('data', function (chunk) {
		bodyData += chunk.toString();
	});
	req.on('end', function() {
		
		var postData = qstring.parse(bodyData);
		console.log(postData);
		var name = postData[firstName];
		res.send(name);
		
		 
	});
	
});