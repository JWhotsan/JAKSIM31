import React, { useEffect } from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import axios from 'axios';
import '../style/Register.scss';

const Register = (props) => {
    useEffect(() => {
        window.scrollTo(0,0);
    })
    
   const registerHandler = (event) => {
        event.preventDefault();
        axios.post('/api/user/register', {
            email: event.target.email.value,
            password: event.target.password.value,
            username: event.target.username.value,
            phone: event.target.phone.value
        })
        .then(function(response){
            alert(response.data.message);
            if(response.data.success){
                props.history.push('/login');
            }
        })
    }

    return(
        <div className="register">
            <div className="register-background">
                <div className="page-title">REGISTER</div>
                <div className="register-form">
                    <div className="register-greeting">
                        지금 바로 목표에 도전해보세요! <span role="img" aria-label="mountain">⛰️</span>
                    </div>
                    <form onSubmit={registerHandler}>
                        <div className="form-name">이메일</div>
                        <input type="email" name="email" placeholder="이메일 입력"/>
                        <div className="form-name">비밀번호</div>
                        <input type="password" name="password" placeholder="영문자, 숫자를 포함하여 8글자 이상 입력"/>
                        <div className="form-name">이름(닉네임)</div>
                        <input type="text" name="username" placeholder="10자 이내"/>
                        <div className="form-name">전화번호</div>
                        <input type="number" name="phone" placeholder="숫자만 입력해주세요"/>
                        <button type="submit">회원가입</button>
                        <div className="go-register">이미 JAKSIM 31 회원이신가요? <NavLink to="/login"><b>로그인</b></NavLink></div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Register);