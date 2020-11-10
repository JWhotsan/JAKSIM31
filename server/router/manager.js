const express = require('express');
const router = express.Router();
const connect = require('../db/db_conn');
const sql = require('../db/sql');

router.post('/select-list', (req, res) => {
    const _id = req.body.id;

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

router.post('/select-all', (req, res) => {
    const _id = req.body.id;

    connect.query(sql.manager.select_all, [_id], (err, result) => {
        if(err){res.json({success: false, message: '오류가 발생했습니다.'})}
        else{
            res.json({success: true, message: '전체 검색이 완료되었습니다.', result: result})
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

router.post('/is-written', (req, res) => {
    const _id = req.body.id;
    let _today = new Date();
    _today = _today.getFullYear() + "/" + (_today.getMonth()+1) + "/" + _today.getDate();

    connect.query(sql.manager.isWritten, [_id, _today], (err, result) => {
        if(err){res.json({success: false, message: '오류가 발생했습니다,'})}
        else{
            if(result.length < 1){res.json({success: true, message: '아직 일일 리뷰가 작성되지 않았습니다.'})}
            else{res.json({success: false, message: '이미 작성된 일일 리뷰가 있습니다.'})}
        }
    });
})

router.post('/daily-review', (req, res) => {
    const _goal_id = req.body.goal_id;
    const _do1 = req.body.do1;
    const _do1_point = req.body.do1_point;
    const _do2 = req.body.do2;
    const _do2_point = req.body.do2_point;
    const _do3 = req.body.do3;
    const _do3_point = req.body.do3_point;
    const _review_diary = req.body.review_diary;
    let _today = new Date();
    _today = _today.getFullYear() + "/" + (_today.getMonth()+1) + "/" + _today.getDate();

    connect.query(sql.manager.insert, [_goal_id, _today, _do1, _do1_point, _do2, _do2_point, _do3, _do3_point, _review_diary], (err, result) => {
        if(err){res.json({success: false, message: '오류가 발생했습니다.'});}
        else{
            res.json({success: true, message: '일일 리뷰 작성이 완료되었습니다.'})
        }
    });
})

module.exports = router;


// id, goal_id, write_date, do1, do1_point, do2, do2_point, do3, do3_point, review_diary