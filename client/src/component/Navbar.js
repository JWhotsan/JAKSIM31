import React, {useState, useEffect} from 'react';
import '../style/Navbar.scss';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import IconButtonTrue from '../image/navbar/icon_drop-true.png';
import IconButtonFalse from '../image/navbar/icon_drop-false.png';

const Navbar = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [isButtonClick, setIsButtonClick] = useState(false);
    const toggleButtonHandler = () => {
        let temp = !isButtonClick;
        setIsButtonClick(temp);
    }

    useEffect(() => {
        axios.get('/api/user/islogin')
        .then(function(response){
            if(response.data.isLogin){setIsLogin(true);}
            else{setIsLogin(false);}
        })
    })

    const logoutHandler = () => {
        axios.post('/api/user/logout')
        .then(function(response){
            alert(response.data.message);
        })
    }

    return (
        <>
            <div className="navbar pc">
                <span id="top"></span>
                <div className="container">
                    <nav>
                        <NavLink to="/"><div className="nav-brand"></div></NavLink>
                        {
                            isLogin ? (
                                <div className="nav-menu">
                                    <NavLink to="/">홈</NavLink>
                                    <a href="/#intro" >소개</a>
                                    <a href="/#review" >후기</a>
                                    <a href="/" onClick={logoutHandler}>로그아웃</a>
                                    <NavLink to="/mypage"><div className="btn-round">마이페이지</div></NavLink>
                                </div>
                            ) : (
                                <div className="nav-menu">
                                    <NavLink to="/">홈</NavLink>
                                    <a href="/#intro" >소개</a>
                                    <a href="/#review" >후기</a>
                                    <NavLink to="/login">로그인</NavLink>
                                    <NavLink to="/register"><div className="btn-round">시작하기</div></NavLink>
                                </div>
                            )
                        }
                    </nav>
                </div>
            </div>

            <div className="navbar mobile">
                <div className="container">
                    <nav>
                        <NavLink to="/"><div className="nav-brand"></div></NavLink>
                        <div className="nav-button" onClick={toggleButtonHandler} style={isButtonClick ? {backgroundImage : `url(${IconButtonTrue})`} : {backgroundImage : `url(${IconButtonFalse})`}}></div>
                    </nav>
                </div>
                {
                    isLogin ? (
                        <div className="nav-menu" style={ isButtonClick ? {display: 'block'} : {display : 'none'}}>
                            <NavLink to="/" onClick={toggleButtonHandler}>홈</NavLink>
                            <a href="/#intro" onClick={toggleButtonHandler}>소개</a>
                            <a href="/#review" onClick={toggleButtonHandler}>후기</a>
                            <a href="/" onClick={logoutHandler}>로그아웃</a>
                            <NavLink to="/mypage" onClick={toggleButtonHandler}>마이페이지</NavLink>
                        </div>
                    ) : (
                        <div className="nav-menu" style={ isButtonClick ? {display: 'block'} : {display : 'none'}}>
                            <NavLink to="/" onClick={toggleButtonHandler}>홈</NavLink>
                            <a href="/#intro" onClick={toggleButtonHandler}>소개</a>
                            <a href="/#review" onClick={toggleButtonHandler}>후기</a>
                            <NavLink to="/login" onClick={toggleButtonHandler}>로그인</NavLink>
                            <NavLink to="/register" onClick={toggleButtonHandler}>회원가입</NavLink>
                        </div>
                    )
                }
            </div>
        </>        
    )
}

export default Navbar;