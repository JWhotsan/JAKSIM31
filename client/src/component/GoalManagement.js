import React, { useEffect, useState } from 'react';
import '../style/GoalManagement.scss';
import {NavLink} from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';

const GoalManagement = ({match}) => {
    const [count, setCount] = useState(0);
    const [username, setUsername] = useState('');
    const [goal, setGoal] = useState({});
    const [manager, setManager] = useState([]);
    const _goal_id = match.params.id;

    useEffect(() => {
        window.scrollTo(0,0);
        AOS.init({
            duration : 2500
        });

        axios.post('/api/goal/isexist', {
            goal_id: _goal_id
        })
        .then(function(response){
            if(!response.data.success){
                window.location.replace('/mypage');
            }
            else{
                axios.post('/api/goal/isowner', {
                    goal_id: _goal_id
                })
                .then(function(response){
                    if(!response.data.success){
                        window.location.replace('/mypage')
                    }
                    else{
                        axios.post('/api/manager/select-list', {
                            id: _goal_id
                        })
                        .then(function(response){
                            setManager(response.data.result);
                            setCount(response.data.count);
                            setUsername(response.data.username);
                        })
                
                        axios.post('/api/goal/select-by-id', {
                            id: _goal_id
                        })
                        .then(function(response){
                            setGoal(response.data.data[0]);
                        })
                    }
                })
            }
        })
    }, [])

    const onClickFinish = () => {
        axios.post('/api/goal/check-finish', {
            id: _goal_id
        })
        .then(function(response){
            alert(response.data.message);
            if(response.data.success){
                window.location.replace(`/report/${_goal_id}`)
            }
        })
    }

    return(
        <div className="goal-management">
            <div className="container">
                <div className="title" data-aos="fade-up">{username}님의 JAKSIM 31</div>
                <div className="date" data-aos="fade-up">{goal.start_date} - 진행중</div>
                <div className="wrap-flex">
                    <div className="wrap-goal">
                        <div className="sub-title" data-aos="fade-up"><span role="img" aria-label="eyes">👀</span> 진행중인 목표 톺아보기</div>
                        <div className="main-goal" data-aos="fade-up">{goal.goal}</div>
                        <div className="sub-goal" data-aos="fade-up"><span>1.</span> {goal.sub1}</div>
                        <div className="sub-goal" data-aos="fade-up"><span>2.</span> {goal.sub2}</div>
                        <div className="sub-goal" data-aos="fade-up"><span>3.</span> {goal.sub3}</div>
                    </div>
                    <div className="wrap-days">
                        <div className="sub-title" data-aos="fade-up"><span role="img" aria-label="shaka sign">🤙</span> 목표 수행 카운트UP</div>
                        <div className="day" data-aos="fade-up">D+{count}</div>
                    </div>
                </div>
                <div>
                    <div className="sub-title" data-aos="fade-up"><span role="img" aria-label="crystal ball">🔮</span> 일일 리뷰 작성</div>
                    <div className="wrap-board" data-aos="fade-up">
                        {
                            manager.map((manager, i) => {
                                return (
                                    manager.isWritten === true ? 
                                    <ManagerBoard
                                        key={i}
                                        day={i}
                                        state={true}
                                        goal_id={match.params.id}
                                        date={manager.date}
                                    />
                                    :
                                    <ManagerBoard
                                        key={i}
                                        day={i}
                                        state={false}
                                        goal_id={match.params.id}
                                    />
                                );
                            })
                        }
                        <div className="manager-board" style={{background: '#e9dbe9'}}>
                            <div className="wrap-content">
                                <div className="board-state">끝. 리멤버 리포트</div>
                                <div onClick={onClickFinish} style={{cursor: 'pointer'}}><div className="go">이동하기<span></span></div></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wrap-button">
                    <NavLink to="/mypage"><div className="btn">돌아가기</div></NavLink>
                </div>
            </div>
        </div>
    );
};

const ManagerBoard = (props) => {
    return(
        <div className="manager-board" style={props.state === true ? {background: '#acc5e1'} : {background: '#f3f3f3'}}>
            <div className="wrap-content">
                <div className="board-state">{props.day+1}일. {props.state === true ? '작성 완료' : '미작성'}</div>
                <div className="board-date">{props.state === true ? props.date : '-'}</div>
                {
                    props.state === true ?
                    <NavLink to={`/history/${props.goal_id}`}><div className="go">확인하기<span></span></div></NavLink>
                    :
                    <NavLink to={`/daily-review/${props.goal_id}`}><div className="go">작성하기<span></span></div></NavLink>
                }
            </div>
        </div>
    )
}

export default GoalManagement;
