const express = require('express');
const router = express.Router();

// db
const connect = require('../db/db_conn');
const sql = require('../db/sql');

// bcrypt
const bcrypt = require('bcrypt');
const saltRounds = 10;

// 로그인
router.post('/login', (req, res) => {
    const _email = req.body.email;
    const _password = req.body.password;

    connect.query(sql.user.select_by_email, [_email], (err, result) => {
        if(err){res.json({success: false, message: '문제가 발생했습니다. 다시 시도해주세요.'})}
        else{
            if(result.length > 0){
                bcrypt.compare(_password, result[0].password, function(err, isCompare) {
                    if(isCompare){
                        req.session.user = {
                            email: result[0].email,
                            username: result[0].username
                        };
                        res.json({success: true, message: '로그인 성공!'});
                    }
                    else{
                        res.json({success: false, message: '비밀번호가 일치하지 않습니다.'})
                    }
                });
            }
            else{
                res.json({success: false, message: '입력하신 계정 정보가 존재하지 않습니다.'})
            }
        }
    })
})

// 회원가입
router.post('/register', (req, res) => {
    const _email = req.body.email;
    const _username = req.body.username;
    const _password = req.body.password;
    const _phone = req.body.phone;

    // 최소 8 자, 최소 하나의 문자 및 하나의 숫자
    var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    var emailRegex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    if(!emailRegex.test(_email)){
        res.json({success: false, message: '이메일 형식이 올바르지 않습니다.'});
    }else{
        connect.query(sql.user.select_by_email, [_email], (err, result) => {
            if(err){res.json({success: false, message: '문제가 발생했습니다. 다시 시도해주세요.'})}
            else{
                // 중복회원이므로 회원가입 false
                if(result.length > 0){
                    res.json({success: false, message: '이미 존재하는 회원입니다.'})
                }
                // 회원가입 진행
                else{
                    // 비밀번호 형식 확인
                    if(!passwordRegex.test(_password)){
                        res.json({success: false, message: '비밀번호 형식이 올바르지 않습니다.\n(문자와 숫자를 포함한 8자 이상)'});
                    }
                    // 전화번호 형식 확인
                    else if(!(_phone.length == 9 ||_phone.length == 10 || _phone.length == 11)){
                        res.json({success: false, message: '전화번호 형식이 올바르지 않습니다.'});
                    }
                    // 회원 정보 insert
                    else{
                        bcrypt.hash(_password, saltRounds, function(err, hash) {
                            connect.query(sql.user.insert_user, [_email, hash, _username, _phone], (err, success) => {
                                console.log(_email, _password, _username, _password);
                                if(err){console.log(err); res.json({success: false, message: '문제가 발생했습니다. 다시 시도해주세요.'})}
                                else{
                                    res.json({success: true, message: '회원가입이 완료되었습니다.'})
                                }
                            })
                        });
                    }
                }
            }
        });
    }
})

// 로그아웃
router.post('/logout', (req, res) => {
    req.session.user = null;
    if(req.session.user === null){
        res.json({success: true, message: '로그아웃 성공!'});
    }else{
        res.json({success: false, message: '로그아웃 실패... 다시 시도해주세요'})
    }
})

// 로그인 확인
router.get('/islogin', (req, res) => {
    if(req.session.user === null){
        res.json({isLogin: false});
    }else{
        res.json({isLogin: true});
    }
})

module.exports = router;