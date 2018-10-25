var express = require("express");
var path = require("path");
var serveStatic = require("serve-static");
app = express();
app.use(serveStatic(path.join(__dirname, "dist")));
console.log(path.join(__dirname, "dist"));
app.use(express.static(__dirname));
var port = process.env.PORT || 8080;
app.listen(port);
console.log("server started "+port);
app.get('*',function(req,res){
	
	
	res.sendfile(path.resolve(__dirname,'src/app.vue'));
	
	
});