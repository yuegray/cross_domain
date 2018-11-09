let express = require('express');
let app = express();

app.get('/show', function(req, res) {
  let {wd, cb} = req.query
  console.log(wd);
  res.end(`${cb}('你是个好人')`)
})

app.listen((3000))
 