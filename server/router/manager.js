const express = require('express');
const router = express.Router();
const connect = require('../db/db_conn');
const sql = require('../db/sql');

router.post('/select-list', (req, res) => {
    const _id = req.body.id;

    console.log('re')

    connect.query(sql.manager.select_all, [_id], (err, result) => {
        if(err){res.json({success: false, message: '오류가 발생했습니다.'})}
        else{
            var managerList = new Array(30);
            var trueCount = 0;
            for(var i = 0; i < 30; i++){
                var tempObj = new Object();
                if(i < result.length){
                    trueCount += 1;
                    tempObj.isWritten = true;
                    tempObj.manager_id = result[i].id;
                    tempObj.date = result[i].write_date;
                }
                else{
                    tempObj.isWritten = false;
                }
                managerList[i] = tempObj;
            }
            managerList = JSON.stringify(managerList);
            managerList = JSON.parse(managerList);
            res.json({success: true, massage: '전체 일일 리뷰 검색에 성공했습니다.', result: managerList, count: trueCount, username: req.session.user.username})
        }
    })
})

router.post('/select-detail', (req, res) => {
    const _goal_id = req.body.goal_id;
    const _id = req.body.id;
    
    connect.query(sql.manager.select_detail, [_goal_id, _id - 1], (err, result) => {
        if(err){res.json({success: false, message: '오류가 발생했습니다.'});}
        else{
            res.json({success: true, message: '상세 일일 리뷰 검색에 성공했습니다.', result: result[0]});
        }
    })
})

module.exports = router;