const express = require('express');
const router = express.Router();
const connect = require('../db/db_conn');
const sql = require('../db/sql');

router.post('/graph', (req, res) => {
    const _goal_id = req.body.goal_id;

    connect.query(sql.report.select_by_id, [_goal_id], (err, result) => {
        if(err){res.json({success: false, message: '오류가 발생했습니다.'})}
        else{
            var graphData = new Array(30);
            for(var i = 0; i < 30; i++){
                var tempObj = new Object();
                tempObj.avg = (result[i].do1_point + result[i].do2_point + result[i].do3_point)/3;
                tempObj.avg = Math.floor(tempObj.avg * 10)/10;
                tempObj.name = `${i+1}일`;
                graphData[i] = tempObj;
            }
            graphData = JSON.stringify(graphData);
            graphData = JSON.parse(graphData);
            res.json({success: true, massage: '성장곡선 데이터 생성에 성공했습니다.', result: graphData})
        }
    })
});

router.post('/report', (req, res) => {
    const _goal_id = req.body.goal_id;

    connect.query(sql.goal.select_by_id, [_goal_id], (err, goalData) => {
        if(err){res.json({success: false, message: '오류가 발생했습니다.'})}
        else{
            connect.query(sql.report.select_by_id, [_goal_id], (err, managerData) => {
                var reportData = new Object();
                reportData.username = req.session.user.username;
                reportData.username = '정진우';
                reportData.main_goal = goalData[0].goal;
                reportData.sub1 = goalData[0].sub1;
                reportData.sub2 = goalData[0].sub2;
                reportData.sub3 = goalData[0].sub3;
                reportData.start_date = goalData[0].start_date;
                reportData.end_date = goalData[0].end_date;
                reportData.review = goalData[0].review;

                var minNum = 31, maxNum = -1, temp = 0, total = 0;
                for(var i = 0; i < 30; i++){
                    temp = managerData[i].do1_point + managerData[i].do2_point + managerData[i].do3_point;          
                    if(temp > maxNum){reportData.best = managerData[i].review_diary; reportData.best_date = managerData[i].write_date; maxNum = temp;}
                    else if(temp < minNum){reportData.worst = managerData[i].review_diary; reportData.worst_date = managerData[i].write_date; minNum = temp;}
                    total += Math.floor((temp/3) * 10);
                }
                reportData.persent = Math.floor(total/3)/10;

                reportData = JSON.stringify(reportData);
                reportData = JSON.parse(reportData);
                res.json({success: true, massage: '리포트 생성에 성공했습니다.', result: reportData})

            })
        }
    })
});

router.post('/review', (req, res) => {
    const _goal_id = req.body.goal_id;
    const _review = req.body.review;

    connect.query(sql.report.update_review, [_review, _goal_id], (err, result) => {
        if(err){res.json({success: false, message: '오류가 발생했습니다.\n새로고침 후 다시 시도해주세요..'})}
        else{res.json({success: true, message: '후기가 정상적으로 작성되었습니다.'})}
    })
})

module.exports = router;