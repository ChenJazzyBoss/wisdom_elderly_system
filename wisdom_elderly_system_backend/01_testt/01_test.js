// 导入express
const express = require('express');
// 创建应用对象
const app = express();

// 导入cors解决跨域问题
const cors = require('cors');
app.use(cors());

// 导入路由
const router = require('./01_test/user');

// 使用路由
app.use('/api',router);

// 创建路由规则
// request是对请求报文的封装
// response是对响应报文的封装
app.get('/', (request, response) => {
    // 设置响应
    response.send('Hello Express!');
});

// 监听端口启动服务
app.listen(8000, () => {
    console.log("服务已经启动，8000端口监听中...... ");
    //测试访问地址
    // http://localhost:8000/
});