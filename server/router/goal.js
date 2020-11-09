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

module.exports = router;