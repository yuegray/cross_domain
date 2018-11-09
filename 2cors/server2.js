let express = require("express");
let app = express();
let whiteList = ['http://localhost:3000']

app.use(function(req, res, next) {
  let origin = req.headers.origin;
  if(whiteList.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  } //这只哪个源可以访问我
  next();
});

app.get('/getData', function(req, res) {
  console.log(req.headers)
  res.end("我不爱你")
})
app.use(express.static(__dirname)); //当前文件夹作为静态资源

app.listen(4000);
