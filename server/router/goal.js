const express = require('express');
const router = express.Router();
const connect = require('../db/db_conn');
const sql = require('../db/sql');

router.post('/create', (req, res) => {
    if(req.session.user){
        const today = new Date();
        const _owner = req.session.user.email;
        const _cover = req.body.cover;
        const _tag = req.body.tag;
        const _goal = req.body.goal;
        const _sub1 = req.body.sub1;
        const _sub2 = req.body.sub2;
        const _sub3 = req.body.sub3;
        const _start_date = today.getFullYear() + "/" + (today.getMonth()+1) + "/" + today.getDate();

        connect.query(sql.goal.insert, [_owner, _cover, _tag, _goal, _sub1, _sub2, _sub3, _start_date], (err, result) => {
            if(err){res.json({success: false, message: '오류가 발생했습니다. 다시 시도해주세요.'})}
            else{
                res.json({success: true, message: '목표 설정을 성공적으로 마쳤습니다.'});
            }
        })
    }else{
        res.json({success: false, message: '세션이 존재하지 않습니다.'})
    }
});

router.get('/select-by-email-true', (req, res) => {
    if(req.session.user){
        const _email = req.session.user.email;
        connect.query(sql.goal.select_by_email_true, [_email], (err, result) => {
            if(err){res.json({success: false, message: '오류가 발생했습니다. 다시 시도해주세요.'});}
            else{
                res.json({success: true, message: '정보 읽기 성공!', data: result});
            }
        })
    }else{
        res.json({success: false, message: '세션이 존재하지 않습니다.'});
    }
});

router.get('/select-by-email-false', (req, res) => {
    if(req.session.user){
        const _email = req.session.user.email;
        connect.query(sql.goal.select_by_email_false, [_email], (err, result) => {
            if(err){res.json({success: false, message: '오류가 발생했습니다. 다시 시도해주세요.'});}
            else{
                res.json({success: true, message: '정보 읽기 성공!', data: result});
            }
        })
    }else{
        res.json({success: false, message: '세션이 존재하지 않습니다.'});
    }
});

router.post('/select-by-id', (req, res) => {
    if(req.session.user){
        const _id = req.body.id;

        connect.query(sql.goal.select_by_id, [_id], (err, result) => {
            if(err){res.json({success: false, message: '오류가 발생했습니다. 다시 시도해주세요.'});}
            else{
                res.json({success: true, message: '정보 읽기 성공!', data: result});
            }
        })
    }
})

router.post('/update', (req, res) => {
    if(req.session.user){
        const _id = req.body.id;
        const _sub1 = req.body.sub1;
        const _sub2 = req.body.sub2;
        const _sub3 = req.body.sub3;
    
        connect.query(sql.goal.update, [_sub1, _sub2, _sub3, _id], (err, result) => {
            if(err){res.json({success: false, message: '오류가 발생했습니다. 다시 시도해주세요.'})}
            else{
                res.json({success: true, message: '목표를 성공적으로 수정했습니다.'});
            }
        })
    }else{
        res.json({success: false, message: '세션이 존재하지 않습니다.'});
    }
})

router.post('/delete', (req, res) => {
    if(req.session.user){
        const _id = req.body.id;

        connect.query(sql.goal.delete, [_id], (err, result) => {
            if(err){res.json({success: false, message: '오류가 발생했습니다. 다시 시도해주세요.'})}
            else{
                res.json({success: true, message: '성공적으로 삭제되었습니다.'});
            }
        })
    }else{
        res.json({success: false, message: '세션이 존재하지 않습니다.'});
    }
})

router.post('/isowner', (req, res) => {
    const _email = req.session.user.email;
    const _goal_id = req.body.goal_id;

    connect.query(sql.goal.select_by_id, [_goal_id], (err, result) => {
        if(err){res.json({success: false, message: '오류가 발생했습니다.'})}
        else{
            if(result[0].owner === _email){res.json({success: true, message: '리포트 정보가 확인되었습니다'})}
            else{res.jsson({success: false, message: '사용자 정보가 일치하지 않습니다.'})}
        }
    })
})

router.post('/isexist', (req, res) => {
    const _goal_id = req.body.goal_id;

    connect.query(sql.goal.select_by_id, [_goal_id], (err, result) => {
        if(err){res.json({success: false, message: '오류가 발생했습니다.'})}
        else{
            if(result.length === 1){res.json({success: true, message: '목표가 존재합니다.'})}
            else{res.json({success: false, message: '목표가 존재하지 않거나 잘못된 값입니다.'})}
        }
    })
})

router.post('/check-finish', (req, res) => {
    const _id = req.body.id;

    connect.query(sql.manager.select_all, [_id], (err, result) => {
        if(err){res.json({success: false, message: '오류가 발생했습니다'})}
        else{
            if(result.length === 30){
                res.json({success: true, message: '목표 달성을 축하드립니다!'})
                connect.query('update goal set is_finish=1 where id = ?', [_id], (err, result) => {

                })
            }
            else{
                res.json({success: false, message: '아직 완주하지 않았어요.'})
            }
        }
    })
})

module.exports = router;