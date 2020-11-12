import React, { useEffect, useState } from 'react';
import '../style/Report.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import { AreaChart, Tooltip, Area, CartesianGrid, XAxis, YAxis } from 'recharts';

const Report = ({match}) => {
    const [data, setData] = useState([]);
    const [report, setReport] = useState({});
    const [review, setReview] = useState('');
    const _goal_id = match.params.id;

    useEffect(() => {
        window.scrollTo(0,0);
        AOS.init({
            duration : 2500
        });

        axios.get('/api/user/islogin')
        .then(function(response){
            if(!response.data.isLogin){window.location.replace("/login");}
            else{
                axios.post('/api/goal/isexist', {
                    goal_id: _goal_id
                })
                .then(function(response){
                    if(!response.data.success){window.location.replace("/mypage");}
                    else{
                        axios.post('/api/goal/isfinish', {
                            goal_id: _goal_id
                        })
                        .then(function(response){
                            if(!response.data.success){window.location.replace("/mypage");}
                            else{
                                axios.post('/api/goal/isowner', {
                                    goal_id: _goal_id
                                })
                                .then(function(response){
                                    if(!response.data.success){window.location.replace("/mypage");}
                                    else{
                                        axios.post('/api/report/report', {
                                            goal_id: _goal_id
                                        })
                                        .then(function(response){
                                            setReport(response.data.result);
                                            setReview(response.data.result.review);
                                            axios.post('/api/report/graph', {
                                                goal_id: _goal_id
                                            })
                                            .then(function(response){
                                                setData(response.data.result);
                                            })
                                        })
                                    }
                                })
                            }
                        })
                    }
                })
            }
            
        })

    }, [_goal_id]);

    const submitReview = (event) => {
        event.preventDefault();
        axios.post('/api/report/review', {
            goal_id: match.params.id,
            review: review
        })
        .then(function(response){
            alert(response.data.message);
        })

    }

    const isMobile = () => {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    };

    return(
        <div className="report">
            <div className="container">
                <div className="title" data-aos="fade-up">{report.username}님의 리멤버 리포트</div>
                <div className="date" data-aos="fade-up">{report.start_date} - {report.end_date}</div>
                {/* 지난 목표 & 달성률 */}
                <div className="wrap-flex">
                    <div className="wrap-goal">
                        <div className="sub-title" data-aos="fade-up"><span role="img" aria-label="eyes">👀</span> 지난 목표 톺아보기</div>
                        <div className="main-goal" data-aos="fade-up">{report.main_goal}</div>
                        <div className="sub-goal" data-aos="fade-up"><span className="sub-goal-number">1. </span>{report.sub1}</div>
                        <div className="sub-goal" data-aos="fade-up"><span className="sub-goal-number">2. </span>{report.sub2}</div>
                        <div className="sub-goal" data-aos="fade-up"><span className="sub-goal-number">3. </span>{report.sub3}</div>
                    </div>
                    <div className="wrap-persent">
                        <div className="sub-title" data-aos="fade-up"><span role="img" aria-label="person raising both hands">🙌</span> 평균 목표 수행률</div>
                        <div className="persent" data-aos="fade-up">{report.persent}%</div>
                    </div>
                </div>

                {/* 성장 곡선 그래프 */}
                <div className="sub-title" data-aos="fade-up"><span role="img" aria-label="chart increasing">📈</span> 성장 곡선 그래프</div>
                <div data-aos="fade-up">
                    <AreaChart width={isMobile() ? 343 : 1180} height={250} data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#acc5e1" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#acc5e1" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3"/>
                        <Tooltip />
                        <Area type="monotone" dataKey="avg" name="목표 수행률" stroke="#6381a8" fillOpacity={1} fill="url(#colorUv)" />
                    </AreaChart>
                </div>
                
                {/* 셀프 피드백 */}
                <div className="sub-title" data-aos="fade-up"><span role="img" aria-label="rocket">🚀</span> 셀프 피드백 <NavLink to={`/history/${_goal_id}`} style={{color: '#aaa', fontSize: '11px'}}>모든 기록 보기</NavLink></div>
                <div className="wrap-feedback">
                    <div className="wrap-feedback-item">
                        <div className="feedback-title" data-aos="fade-up" style={{color: '#1c7521c0'}}>목표 수행률이 가장 높았던 날의 기록</div>
                        <div className="feedback" data-aos="fade-up">
                            {report.best}
                        </div>
                        <div className="feedback-date" data-aos="fade-up">{report.best_date}</div>
                    </div>
                    <div className="wrap-feedback-item">
                        <div className="feedback-title" data-aos="fade-up" style={{color: '#8a2e1ec0'}}>목표 수행률이 가장 낮았던 날의 기록</div>
                        <div className="feedback" data-aos="fade-up">
                            {report.worst}
                        </div>
                        <div className="feedback-date" data-aos="fade-up">{report.worst_date}</div>
                    </div>
                </div>

                {/* 후기 */}
                <div className="sub-title" data-aos="fade-up"><span role="img" aria-label="microphone">🎤</span> 30일 동안 목표를 관리한 후기</div>
                <div className="wrap-review">
                    <div data-aos="fade-up" className="review">
                        <form onSubmit={submitReview}>
                            <textarea type="text" name="review" maxLength="200" placeholder="30일 동안 목표를 관리하면서 스스로 느꼈던 점이나 칭찬, 반성할 점들을 기록해주세요. (200자 이내)" value={review} onChange={e => setReview(e.target.value)}></textarea>
                            <button type="submit">저장</button>
                        </form>
                    </div>
                </div>
                <div className="wrap-button">
                    <NavLink to="/mypage"><div data-aos="fade-up" className="btn">돌아가기</div></NavLink>
                </div>
            </div>
        </div>
    );
};


export default Report;