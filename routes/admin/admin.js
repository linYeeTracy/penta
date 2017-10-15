const express = require('express');
const common = require('../../lib/common.js');

module.exports = function() {
    const router = express.Router();

    // router.get('/', (req, res, next)=>{
    //     res.send('11111111111').end();
    // })
    // 检查登录状态

    router.use((req, res, next)=>{
        console.log(req.url)
        if(!req.session.session_id && req.url != '/login') {
            res.redirect('/admin/login');
        } else {
            next();
        }
    });

    router.get('/login', (req, res, next)=>{
        res.render('admin/login.ejs', {});
    })

    return router;
}   