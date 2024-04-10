// 导入express
const express = require('express');

// 导入路由
const router = express.Router();

// 导入数据库db
const db = require('../01_testt/01_testdb/testdb');

//返回信息
router.get('/user', (req, res) => {
    //测试
    // res.send('user112131231');
    //查询数据库
    const sql = `select * from user`;
    db.query(sql, (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        res.send(result);
    });
});

// 导出路由
module.exports = router;