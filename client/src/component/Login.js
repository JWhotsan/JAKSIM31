import React, { useEffect } from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import axios from 'axios';
import '../style/Login.scss';

const Login = () => {
    useEffect(() => {
        window.scrollTo(0,0);
    })
   const loginHandler = (event) => {
        event.preventDefault();
        axios.post('/api/user/login', {
            email: event.target.email.value,
            password: event.target.password.value
        })
        .then(function(response){
            alert(response.data.message);
            if(response.data.success){
                window.location.replace("/");
            }
        })
    }

    return(
        <div className="login">
            <div className="login-background">
                <div className="page-title">LOGIN</div>
                <div className="login-form">
                    <div className="login-greeting">
                        목표를 향한 31일간의 즐거운 여정 <span role="img" aria-label="air plane">✈️</span>
                    </div>
                    <form onSubmit={loginHandler}>
                        <div className="form-name">이메일</div>
                        <input type="email" name="email" placeholder="이메일 입력"/>
                        <div className="form-name">비밀번호</div>
                        <input type="password" name="password" placeholder="영문자, 숫자를 포함하여 8글자 이상 입력"/>
                        <button type="submit">로그인</button>
                        <div className="go-register">아직 JAKSIM 31의 회원이 아니신가요? <NavLink to="/register"><b>회원가입</b></NavLink></div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Login);