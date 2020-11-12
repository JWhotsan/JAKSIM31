import React, { useEffect, useState } from 'react';
import '../style/TestResult.scss';
import axios from 'axios';

import TYPE1 from '../image/test/type1.png';
import TYPE2 from '../image/test/type2.png';
import TYPE3 from '../image/test/type3.png';
import TYPE4 from '../image/test/type4.png';

const TestResult = ({match}) => {
    const _type_id = match.params.id;
    const [type, setType] = useState(1);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [recommend, setRecommend] = useState('');

    useEffect(() => {
        axios.get(`/api/test/result/${_type_id}`)
        .then(function(response){
            console.log(response.data);
            setType(response.data.type);
            setTitle(response.data.title);
            setContent(response.data.content);
            setRecommend(response.data.recommend);
        });
    }, [_type_id]);

    const onClickHandler = () => {
        window.location.replace('/setting');
    }

    return(
        <div className="test-result">
            <div className="background">
                <div className="container">
                    <div className="wrap-form">
                        <div className="title">JSTI TEST</div>
                        <div className="result">
                            <div className="title">당신의 목표 유형은 <span style={{color: '#6381a8', fontWeight: '800'}}>{title}</span>입니다.</div>
                            <div className="content">{content}</div>
                            <div className="image" style={type === 1 ? {backgroundImage: `url(${TYPE1})`} : type === 2 ? {backgroundImage: `url(${TYPE2})`} : type === 3 ? {backgroundImage: `url(${TYPE3})`} : {backgroundImage: `url(${TYPE4})`}}></div>
                            <div style={{color: '#6381a8', fontWeight: '700'}}>조언</div>
                            <div>{recommend}</div>
                            <div className="button" onClick={onClickHandler}>목표 설정하러 가기</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestResult;