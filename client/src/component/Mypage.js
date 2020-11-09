import React, { useEffect, useState } from 'react';
import '../style/Mypage.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import {NavLink} from 'react-router-dom';
import MiniBanner from './MiniBanner';

import Cover1 from '../image/cover/cover1.png';
import Cover2 from '../image/cover/cover2.png';
import Cover3 from '../image/cover/cover3.png';
import Cover4 from '../image/cover/cover4.png';
import Cover5 from '../image/cover/cover5.png';
import Cover6 from '../image/cover/cover6.png';
import Cover7 from '../image/cover/cover7.png';
import Cover8 from '../image/cover/cover8.png';
import Cover9 from '../image/cover/cover9.png';
import Cover10 from '../image/cover/cover10.png';
import Cover11 from '../image/cover/cover11.png';
import Cover12 from '../image/cover/cover12.png';
import Cover13 from '../image/cover/cover13.png';
import Cover14 from '../image/cover/cover14.png';

const Mypage = () => {
    const [goalTrue, setGoalTrue] = useState([]);
    const [goalFalse, setGoalFalse] = useState([]);

    useEffect(() => {
        axios.get('/api/user/islogin')
        .then(function(response){
            if(response.data.isLogin){}
            else{window.location.replace("/login");}
        })
        window.scrollTo(0,0);
        AOS.init({
            duration : 2500
        })

        axios.get('/api/goal/select-by-email-false')
        .then(function(response){
            setGoalFalse(response.data.data);
            if(response.data.data === undefined){
                axios.post('/api/user/logout', {})
                .then(function(response){alert('로그인이 필요합니다')})
                window.location.replace("/login");
            }
        })

        axios.get('/api/goal/select-by-email-true')
        .then(function(response){
            setGoalTrue(response.data.data);
            if(response.data.data === undefined){
                axios.post('/api/user/logout', {})
                .then(function(response){alert('로그인이 필요합니다')})
                window.location.replace("/login");
            }
        })
    }, []);

    return(
        <div className="mypage">
            <MiniBanner
                link={'mypage'}
                page={'마이페이지'}
            />
            <div className="wrap-choose">
                <div className="choose self">
                    <div className="title" data-aos="fade-up">SETTING</div>
                    <div className="subtitle" data-aos="fade-up">목표 설정하기</div>
                    <div className="content" data-aos="fade-up">목표를 향해 달려갈 준비 되셨나요?! 설문지를 작성하며 명확한 목표를 설정해보세요.</div>
                    <NavLink to="/setting"><div className="btn" data-aos="fade-up" data-aos-delay="100">GO!</div></NavLink>
                </div>
                <div className="choose test">
                    <div className="title" data-aos="fade-up">JSTI TEST</div>
                    <div className="subtitle" data-aos="fade-up">목표 유형 검사</div>
                    <div className="content" data-aos="fade-up">나의 목표 유형은 무엇일까요. 목표 유형을 알고나면 목표 설정이 더욱 쉬워질지도 몰라요 :)</div>
                    <NavLink to="/test"><div className="btn" data-aos="fade-up" data-aos-delay="100">GO!</div></NavLink>
                </div>
            </div>
            <div className="goal-list">
                <div className="container">
                    <div className="list-title" data-aos="fade-up"><span role="img" aria-label="seedling">🌱</span> 진행중인 목표</div>
                    <div className="wrap-goal">
                        {goalFalse.length > 0 ?
                            goalFalse.map((goal, i) => {
                                return (
                                    <GoalFalse
                                        key={i}
                                        id={goal.id}
                                        cover={goal.cover}
                                        tag={goal.tag}
                                        goal={goal.goal}
                                    />
                                );
                            })
                        :
                            <div className="not-found" data-aos="fade-up">진행 중인 목표가 없습니다.</div>
                        }
                    </div>
                </div>
            </div>
            <div className="goal-list">
                <div className="container">
                    <div className="list-title" data-aos="fade-up"><span role="img" aria-label="deciduous tree">🌳</span> 완료된 목표 : 리멤버 리포트</div>
                    <div className="wrap-goal">
                        {goalTrue.length > 0 ?
                            goalTrue.map((goal, i) => {
                                return (
                                    <GoalTrue
                                        key={i}
                                        id={goal.id}
                                        cover={goal.cover}
                                        tag={goal.tag}
                                        goal={goal.goal}
                                    />
                                );
                            })
                        :
                            <div className="not-found" data-aos="fade-up">완료된 목표가 없습니다.</div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

const GoalFalse = (props) => {
    return(
        <div className="goal" data-aos="fade-up">
            <NavLink to={`/goal-management/${props.id}`}>
                <div className="cover"
                    style={props.cover === 1 ? {backgroundImage: `url(${Cover1})`} : 
                    props.cover === 2 ? {backgroundImage: `url(${Cover2})`} : 
                    props.cover === 3 ? {backgroundImage: `url(${Cover3})`} : 
                    props.cover === 4 ? {backgroundImage: `url(${Cover4})`} : 
                    props.cover === 5 ? {backgroundImage: `url(${Cover5})`} : 
                    props.cover === 6 ? {backgroundImage: `url(${Cover6})`} : 
                    props.cover === 7 ? {backgroundImage: `url(${Cover7})`} : 
                    props.cover === 8 ? {backgroundImage: `url(${Cover8})`} : 
                    props.cover === 9 ? {backgroundImage: `url(${Cover9})`} : 
                    props.cover === 10 ? {backgroundImage: `url(${Cover10})`} : 
                    props.cover === 11 ? {backgroundImage: `url(${Cover11})`} : 
                    props.cover === 12 ? {backgroundImage: `url(${Cover12})`} : 
                    props.cover === 13 ? {backgroundImage: `url(${Cover13})`} : {backgroundImage: `url(${Cover14})`}}
                >#{props.tag}</div>
                <div className="title">{props.goal}</div>
            </NavLink>
        </div>
    );
}

const GoalTrue = (props) => {
    return(
        <div className="goal" data-aos="fade-up">
            <NavLink to={`/report/${props.id}`}>
                <div className="cover"
                    style={props.cover === 1 ? {backgroundImage: `url(${Cover1})`} : 
                    props.cover === 2 ? {backgroundImage: `url(${Cover2})`} : 
                    props.cover === 3 ? {backgroundImage: `url(${Cover3})`} : 
                    props.cover === 4 ? {backgroundImage: `url(${Cover4})`} : 
                    props.cover === 5 ? {backgroundImage: `url(${Cover5})`} : 
                    props.cover === 6 ? {backgroundImage: `url(${Cover6})`} : 
                    props.cover === 7 ? {backgroundImage: `url(${Cover7})`} : 
                    props.cover === 8 ? {backgroundImage: `url(${Cover8})`} : 
                    props.cover === 9 ? {backgroundImage: `url(${Cover9})`} : 
                    props.cover === 10 ? {backgroundImage: `url(${Cover10})`} : 
                    props.cover === 11 ? {backgroundImage: `url(${Cover11})`} : 
                    props.cover === 12 ? {backgroundImage: `url(${Cover12})`} : 
                    props.cover === 13 ? {backgroundImage: `url(${Cover13})`} : {backgroundImage: `url(${Cover14})`}}
                >#{props.tag}</div>
                <div className="title">{props.goal}</div>
            </NavLink>
        </div>
    );
}

export default Mypage;