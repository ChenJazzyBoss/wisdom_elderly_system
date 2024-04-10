// 配置mysql数据库
const mysql = require('mysql');

// 创建数据库连接对象
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', // root用户
    password: '123456',
    database: 'wisdom_elderly_system'   // 数据库名 wisdom_elderly_system
});

// 执行连接方法
connection.connect();

// 执行sql语句
// const sql = `select * from users`;

// export default connection;
module.exports = connection;