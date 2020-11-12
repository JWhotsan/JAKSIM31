import React, { useEffect, useState } from 'react';
import '../style/DailyReview.scss';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';

const DailyReview = ({match}) => {
    const _goal_id = match.params.id;
    const [goal, setGoal] = useState({});

    useEffect(() => {
        window.scrollTo(0,0);
        AOS.init({
            duration : 2500
        });

        axios.get('/api/user/islogin')
        .then(function(response){
            if(!response.data.isLogin){window.location.replace('/login')}
            else{
                axios.post('/api/goal/isexist', {
                    goal_id: _goal_id
                })
                .then(function(response){
                    if(!response.data.success){window.location.replace('/mypage')}
                    else{
                        axios.post('/api/goal/isowner', {
                            goal_id: _goal_id
                        })
                        .then(function(response){
                            if(!response.data.success){window.location.replace('/mypage')}
                            else{
                                axios.post('/api/goal/isfinish', {
                                    goal_id: _goal_id
                                })
                                .then(function(response){
                                    if(response.data.success){window.location.replace('/mypage')}
                                    else{
                                        axios.post('/api/manager/is-written', {
                                            id: _goal_id
                                        })
                                        .then(function(response){
                                            if(!response.data.success){alert('오늘 일지는 이미 작성되었습니다.'); window.location.replace(`/goal-management/${_goal_id}`)}
                                            else{
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
                            }
                        })
                    }
                })
            }
        })

    }, [_goal_id])

    const onSubmitHandler = (event) => {
        event.preventDefault();
        axios.post('/api/manager/daily-review', {
            goal_id: _goal_id,
            do1: goal.sub1,
            do1_point: goal.sub1 !== '' ? event.target.sub1.value : 0,
            do2: goal.sub2,
            do2_point: goal.sub2 !== '' ? event.target.sub2.value : 0,
            do3: goal.sub3,
            do3_point: goal.sub3 !== '' ? event.target.sub3.value : 0,
            review_diary: event.target.self_feedback.value
        })
        .then(function(response){
            if(response.data.success){
                alert(response.data.message);
                window.location.replace(`/goal-management/${_goal_id}`)
            }
            else{
                alert(response.data.message);
            }
        })
    }

    return(
        <div className="daily-review">
            <div className="container">
                <div className="title">일일 리뷰 작성하기</div>
                <div className="goal">{goal.goal}</div>
                <div className="explain">오늘 하루 동안 얼마나 목표를 이루셨나요? 자신이 설정한 목표를 얼마나 달성했는지 체크해보는 시간입니다. 스스로의 목표 달성률(수행률, 만족도, 성장도) 점수를 매겨보고 피드백해보세요. 일일 리뷰는 본인만 볼 수 있으니 자신의 목표 달성률을 객관적으로 평가하는 것이 중요합니다. 오늘의 나는 내일의 나에게 좋은 거름이 된답니다.</div>
                <form onSubmit={onSubmitHandler}>
                    {
                        goal.sub1 !== '' ? 
                        <div>
                            <div className="question"><span>1. </span>{goal.sub1}</div>
                            <div className="wrap-flex">
                                <div className="wrap-button"><input type="radio" id="sub1-1" name="sub1" value="1"/><label htmlFor="sub1-1">1</label></div>
                                <div className="wrap-button"><input type="radio" id="sub1-2" name="sub1" value="2"/><label htmlFor="sub1-2">2</label></div>
                                <div className="wrap-button"><input type="radio" id="sub1-3" name="sub1" value="3"/><label htmlFor="sub1-3">3</label></div>
                                <div className="wrap-button"><input type="radio" id="sub1-4" name="sub1" value="4"/><label htmlFor="sub1-4">4</label></div>
                                <div className="wrap-button"><input type="radio" id="sub1-5" name="sub1" value="5"/><label htmlFor="sub1-5">5</label></div>
                                <div className="wrap-button"><input type="radio" id="sub1-6" name="sub1" value="6"/><label htmlFor="sub1-6">6</label></div>
                                <div className="wrap-button"><input type="radio" id="sub1-7" name="sub1" value="7"/><label htmlFor="sub1-7">7</label></div>
                                <div className="wrap-button"><input type="radio" id="sub1-8" name="sub1" value="8"/><label htmlFor="sub1-8">8</label></div>
                                <div className="wrap-button"><input type="radio" id="sub1-9" name="sub1" value="9"/><label htmlFor="sub1-9">9</label></div>
                                <div className="wrap-button"><input type="radio" id="sub1-10" name="sub1" value="10"/><label htmlFor="sub1-10">10</label></div>
                            </div>
                        </div>
                        :
                        <div></div>
                    }
                    {
                        goal.sub2 !== '' ? 
                        <div>
                            <div className="question"><span>2. </span>{goal.sub2}</div>
                            <div className="wrap-flex">
                                <div className="wrap-button"><input type="radio" id="sub2-1" name="sub2" value="1"/><label htmlFor="sub2-1">1</label></div>
                                <div className="wrap-button"><input type="radio" id="sub2-2" name="sub2" value="2"/><label htmlFor="sub2-2">2</label></div>
                                <div className="wrap-button"><input type="radio" id="sub2-3" name="sub2" value="3"/><label htmlFor="sub2-3">3</label></div>
                                <div className="wrap-button"><input type="radio" id="sub2-4" name="sub2" value="4"/><label htmlFor="sub2-4">4</label></div>
                                <div className="wrap-button"><input type="radio" id="sub2-5" name="sub2" value="5"/><label htmlFor="sub2-5">5</label></div>
                                <div className="wrap-button"><input type="radio" id="sub2-6" name="sub2" value="6"/><label htmlFor="sub2-6">6</label></div>
                                <div className="wrap-button"><input type="radio" id="sub2-7" name="sub2" value="7"/><label htmlFor="sub2-7">7</label></div>
                                <div className="wrap-button"><input type="radio" id="sub2-8" name="sub2" value="8"/><label htmlFor="sub2-8">8</label></div>
                                <div className="wrap-button"><input type="radio" id="sub2-9" name="sub2" value="9"/><label htmlFor="sub2-9">9</label></div>
                                <div className="wrap-button"><input type="radio" id="sub2-10" name="sub2" value="10"/><label htmlFor="sub2-10">10</label></div>
                            </div>
                        </div>
                        :
                        <div></div>
                    }
                    {
                        goal.sub3 !== '' ? 
                        <div>
                            <div className="question"><span>3. </span>{goal.sub3}</div>
                            <div className="wrap-flex">
                                <div className="wrap-button"><input type="radio" id="sub3-1" name="sub3" value="1"/><label htmlFor="sub3-1">1</label></div>
                                <div className="wrap-button"><input type="radio" id="sub3-2" name="sub3" value="2"/><label htmlFor="sub3-2">2</label></div>
                                <div className="wrap-button"><input type="radio" id="sub3-3" name="sub3" value="3"/><label htmlFor="sub3-3">3</label></div>
                                <div className="wrap-button"><input type="radio" id="sub3-4" name="sub3" value="4"/><label htmlFor="sub3-4">4</label></div>
                                <div className="wrap-button"><input type="radio" id="sub3-5" name="sub3" value="5"/><label htmlFor="sub3-5">5</label></div>
                                <div className="wrap-button"><input type="radio" id="sub3-6" name="sub3" value="6"/><label htmlFor="sub3-6">6</label></div>
                                <div className="wrap-button"><input type="radio" id="sub3-7" name="sub3" value="7"/><label htmlFor="sub3-7">7</label></div>
                                <div className="wrap-button"><input type="radio" id="sub3-8" name="sub3" value="8"/><label htmlFor="sub3-8">8</label></div>
                                <div className="wrap-button"><input type="radio" id="sub3-9" name="sub3" value="9"/><label htmlFor="sub3-9">9</label></div>
                                <div className="wrap-button"><input type="radio" id="sub3-10" name="sub3" value="10"/><label htmlFor="sub3-10">10</label></div>
                            </div>
                        </div>
                        :
                        <div></div>
                    }
                    
                    <div className="question"><span>Q. </span>오늘 하루동안 느낀 점, 칭찬할 점, 반성할 점 등 간단히 피드백해주세요.</div>
                    <textarea maxLength="100" name="self_feedback" placeholder="100자 이내"></textarea>
                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                        <button type="submit">작성 완료</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default DailyReview;