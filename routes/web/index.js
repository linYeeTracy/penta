const express = require('express');
const mysql = require('mysql');

var db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'db_penta'
});

module.exports = function() {
    var router = express.Router();

    router.get('/getBanners', (req, res)=>{
        db.query('select * from t_banner', (err, data)=>{
            if(err) {
                res.status(500).send('database error');    
            } else {
                res.send(data).end();
            }
        })
    })

    return router;
}