let express = require("express");
let app = express();
app.use(express.static(__dirname)); //当前文件夹作为静态资源

app.listen(3000);
