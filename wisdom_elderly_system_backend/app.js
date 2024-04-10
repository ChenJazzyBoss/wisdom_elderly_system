//导入express模块
const express = require('express');
//创建应用对象
const app = express();
//导入cors解决跨域问题
const cors = require('cors');
app.use(cors());

//导入路由
