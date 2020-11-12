import React from 'react';
import '../style/Test.scss';
import axios from 'axios';

const Test = () => {
    const onSubmit = (event) => {
        event.preventDefault();
        const _q1 = event.target.q1.value;
        const _q2 = event.target.q2.value;
        const _q3 = event.target.q3.value;
        const _q4 = event.target.q4.value;
        const _q5 = event.target.q5.value;
        const _q6 = event.target.q6.value;

        if(_q1 === '' || _q2 === '' || _q3 === '' || _q4 === '' || _q5 === '' || _q6 === ''){
            alert('체크하지 않은 항목이 있습니다.')
        }
        else{
            axios.post('/api/test/result', {
                q1: _q1,
                q2: _q2,
                q3: _q3,
                q4: _q4,
                q5: _q5,
                q6: _q6
            })
            .then(function(response){
                window.location.replace(`/test-result/${response.data.result}`);
            })
        }
    }

    return(
        <div className="test">
            <div className="background">
                <div className="container">
                    <div className="wrap-form">
                        <div className="title">JSTI TEST</div>
                        <form onSubmit={onSubmit}>
                            <div className="form-title">오늘은 한가로운 토요일, 당신은 어떤 하루를 보내실 건가요?<br/>마음이 가는 대로 선택지를 고르다 보면 자신에게 딱 맞는 목표 유형을 찾을 수 있을 거예요 :)</div>
                            <div className="wrap-overflow">
                                <div className="wrap-question" id="section1">
                                    <div className="question"><span style={{color: '#6381a8', fontWeight: '700'}}>Q. </span>침대에서 몸을 일으킨 당신이 가장 먼저 할 행동은 무엇인가요?</div>
                                    <div className="wrap-answer">
                                        <div className="wrap-input"><input type="radio" id="q1-1" name="q1" value="1"/><label for="q1-1">이불 정리하기.</label></div>
                                        <div className="wrap-input"><input type="radio" id="q1-2" name="q1" value="2"/><label for="q1-2">맛있는 아침 식사하기.</label></div>
                                        <div className="wrap-input"><input type="radio" id="q1-3" name="q1" value="3"/><label for="q1-3">5분만 더 잘래...</label></div>
                                        <div className="wrap-input"><input type="radio" id="q1-4" name="q1" value="4"/><label for="q1-4">하루 일과 점검하기.</label></div>
                                    </div>
                                    <a href="#section2"><div className="position-bottom next">다음</div></a>
                                </div>
                                <div className="wrap-question" id="section2">
                                    <div className="question"><span style={{color: '#6381a8', fontWeight: '700'}}>Q. </span>TV를 켠 당신은 어떤 채널을 시청하고 싶으신가요?</div>
                                    <div className="wrap-answer">
                                        <div className="wrap-input"><input type="radio" id="q2-1" name="q2" value="1"/><label for="q2-1">흥미로운 예능 프로그램.</label></div>
                                        <div className="wrap-input"><input type="radio" id="q2-2" name="q2" value="2"/><label for="q2-2">호기심 자극 영화 추천 프로그램.</label></div>
                                        <div className="wrap-input"><input type="radio" id="q2-3" name="q2" value="3"/><label for="q2-3">시야를 넓혀주는 뉴스.</label></div>
                                        <div className="wrap-input"><input type="radio" id="q2-4" name="q2" value="4"/><label for="q2-4">지식을 쌓을 수 있는 강연 프로그램.</label></div>
                                    </div>
                                    <a href="#section3"><div className="position-bottom next">다음</div></a>
                                </div>
                                <div className="wrap-question" id="section3">
                                    <div className="question"><span style={{color: '#6381a8', fontWeight: '700'}}>Q. </span>TV시청 후 외출을 준비하는 당신이 옷을 고르는 가장 중요한 기준은 무엇인가요?</div>
                                    <div className="wrap-answer">
                                        <div className="wrap-input"><input type="radio" id="q3-1" name="q3" value="1"/><label for="q3-1">기분이 좋으니까 밝은 옷을 입어야지.</label></div>
                                        <div className="wrap-input"><input type="radio" id="q3-2" name="q3" value="2"/><label for="q3-2">날씨가 따뜻하니까 얇은 옷을 입어야겠다.</label></div>
                                        <div className="wrap-input"><input type="radio" id="q3-3" name="q3" value="3"/><label for="q3-3">내가 좋아하는 옷을 입을꺼야.</label></div>
                                        <div className="wrap-input"><input type="radio" id="q3-4" name="q3" value="4"/><label for="q3-4">장소에 맞는 옷을 입어야지.</label></div>
                                    </div>
                                    <a href="#section4"><div className="position-bottom next">다음</div></a>
                                </div>
                                <div className="wrap-question" id="section4">
                                    <div className="question"><span style={{color: '#6381a8', fontWeight: '700'}}>Q. </span>당신은 서점에 방문했습니다. 어떤 책에 가장 관심이 생기나요?</div>
                                    <div className="wrap-answer">
                                        <div className="wrap-input"><input type="radio" id="q4-1" name="q4" value="1"/><label for="q4-1">좋아하는 만화책.</label></div>
                                        <div className="wrap-input"><input type="radio" id="q4-2" name="q4" value="2"/><label for="q4-2">자기계발 도서.</label></div>
                                        <div className="wrap-input"><input type="radio" id="q4-3" name="q4" value="3"/><label for="q4-3">평소 좋아하는 작가의 소설.</label></div>
                                        <div className="wrap-input"><input type="radio" id="q4-4" name="q4" value="4"/><label for="q4-4">핫한 베스트셀러.</label></div>
                                    </div>
                                    <a href="#section5"><div className="position-bottom next">다음</div></a>
                                </div>
                                <div className="wrap-question" id="section5">
                                    <div className="question"><span style={{color: '#6381a8', fontWeight: '700'}}>Q. </span>오후에는 친구와 만났어요. 가장 먼저 무엇을 할 것 인가요?</div>
                                    <div className="wrap-answer">
                                        <div className="wrap-input"><input type="radio" id="q5-1" name="q5" value="1"/><label for="q5-1">볼링이나 당구 같은 액티비티.</label></div>
                                        <div className="wrap-input"><input type="radio" id="q5-2" name="q5" value="2"/><label for="q5-2">흥 폭발 노래방.</label></div>
                                        <div className="wrap-input"><input type="radio" id="q5-3" name="q5" value="3"/><label for="q5-3">날씨도 좋은데 공원.</label></div>
                                        <div className="wrap-input"><input type="radio" id="q5-4" name="q5" value="4"/><label for="q5-4">우선 밥부터 먹자, 식당.</label></div>
                                    </div>
                                    <a href="#section6"><div className="position-bottom next">다음</div></a>
                                </div>
                                <div className="wrap-question" id="section6">
                                    <div className="question"><span style={{color: '#6381a8', fontWeight: '700'}}>Q. </span>집에 왔더니 벌써 12시ㅠㅠ 당신이 할 행동은 무엇인가요?</div>
                                    <div className="wrap-answer">
                                        <div className="wrap-input"><input type="radio" id="q6-1" name="q6" value="1"/><label for="q6-1">피곤하니까 얼른 씻고 잔다.</label></div>
                                        <div className="wrap-input"><input type="radio" id="q6-2" name="q6" value="2"/><label for="q6-2">오늘 있었던 일 일기쓰기.</label></div>
                                        <div className="wrap-input"><input type="radio" id="q6-3" name="q6" value="3"/><label for="q6-3">카톡 등 스마트폰 하기.</label></div>
                                        <div className="wrap-input"><input type="radio" id="q6-4" name="q6" value="4"/><label for="q6-4">조금 피곤하지만 게임하기.</label></div>
                                    </div>
                                    <button className="position-bottom" type="submit">결과 확인하기</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Test;