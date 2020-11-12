import React, { useEffect, useState } from 'react';
import '../style/History.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';

const History = ({match}) => {
    const _goal_id = match.params.id;
    const [review, setReview] = useState([]);
    const [title, setTitle] = useState('');

    useEffect(() => {
        window.scrollTo(0,0);
        AOS.init({
            duration : 2500
        });

        axios.get('/api/user/islogin')
        .then(function(response){
            if(!response.data.isLogin){window.location.replace('/mypage');}
            else{
                axios.post('/api/goal/isexist', {
                    goal_id: _goal_id
                })
                .then(function(response){
                    if(!response.data.success){window.location.replace('/mypage');}
                    else{
                        axios.post('/api/goal/isowner', {
                            goal_id: _goal_id
                        })
                        .then(function(response){
                            if(!response.data.success){window.location.replace('/mypage');}
                            else{
                                axios.post('/api/manager/select-all', {
                                    id: _goal_id
                                })
                                .then(function(response){
                                    setReview(response.data.result);
                                })

                                axios.post('/api/goal/select-by-id', {
                                    id: _goal_id
                                })
                                .then(function(response){
                                    setTitle(response.data.data[0].goal);
                                })
                            }
                        })
                    }
                })
            }
        })
    }, [_goal_id])

    return(
        <div className="history">
            <div className="container">
                <div className="title"><span style={{color: "#6381a8", fontWeight: '700'}}>{title}</span> HISTORY</div>
                <div className="wrap-review">
                    {
                        review.length > 0 ?
                        (
                            review.map((review, i) => {
                                return (
                                    <Review
                                        key={i}
                                        day={i}
                                        do1={review.do1}
                                        do1_point={review.do1_point}
                                        do2={review.do2}
                                        do2_point={review.do2_point}
                                        do3={review.do3}
                                        do3_point={review.do3_point}
                                        date={review.write_date}
                                        review={review.review_diary}
                                    />
                                );
                            })
                        )
                        :
                        (
                            <div style={{height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                잠시만 기다려주세요...
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

const Review = (props) => {
    return(
        <div className="review-box">
            <div className="day-count">D+{props.day+1} <span style={{color: '#aaa', fontSize: '16px', marginLeft: '8px'}}>{props.date}</span></div>
            <table>
                {
                    props.do1 !== '' ? 
                    <tr>
                        <td className="bold">1. {props.do1}</td>
                        <td className="content" style={{color: '#acc5e1'}}>{props.do1_point}</td>
                    </tr>
                    :
                    <tr style={{display: 'none'}}></tr>
                }
                {
                    props.do2 !== '' ? 
                    <tr>
                        <td className="bold">2. {props.do2}</td>
                        <td className="content" style={{color: '#acc5e1'}}>{props.do2_point}</td>
                    </tr>
                    :
                    <tr style={{display: 'none'}}></tr>
                }
                {
                    props.do3 !== '' ? 
                    <tr>
                        <td className="bold">3. {props.do3}</td>
                        <td className="content" style={{color: '#acc5e1'}}>{props.do3_point}</td>
                    </tr>
                    :
                    <tr style={{display: 'none'}}></tr>
                }
            </table>
            <div className="bold">셀프 피드백</div>
            <div className="content">{props.review}</div>
        </div>
    )
}

export default History;