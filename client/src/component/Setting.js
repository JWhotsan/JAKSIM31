import React, { useEffect } from 'react';
import '../style/Setting.scss';
import MiniBanner from './MiniBanner';
import axios from 'axios';

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

const Setting = () => {
    useEffect(() => {
        window.scrollTo(0,0);
    }, [])

    const submitHandler = (event) => {
        event.preventDefault();
        if(event.target.tag.value !== ''){
            axios.post('/api/goal/create', {
                goal: event.target.goal.value,
                sub1: event.target.sub1.value,
                sub2: event.target.sub2.value,
                sub3: event.target.sub3.value,
                cover: event.target.cover.value,
                tag: event.target.tag.value,
            })
            .then(function(response){
                alert(response.data.message);
                window.location.replace('/mypage');
            })
        }
    }

    return(
        <div className="setting">
            <MiniBanner
                link={'setting'}
                page={'목표 설정하기'}
            />
            <form onSubmit={submitHandler}>
                {/* SECTION1 */}
                <div id="section1" className="wrap-greeting" style={{background: '#f3f3f3'}}>
                    <div className="container">
                        <div className="hi" data-aos="fade-up"><span role="img" aria-label="sparkle">✨</span> LET'S START <span role="img" aria-label="sparkle">✨</span></div>
                        <div className="sub-hi" data-aos="fade-up">지금 바로 목표를 향한 여정을 시작해보세요.<br/>긴 여정을 위해 목표를 세워주세요.</div>
                    </div>
                    <a href="#section2"><div className="page-down" data-aos="fade-up"></div></a>
                </div>
                {/* SECTION2 */}
                <div id="section2" className="wrap-question">
                    <div className="container">
                        <div className="title" data-aos="fade-up">예시 확인하기</div>
                        <div className="explain" data-aos="fade-up">목표를 설정하기 전에, 설문지의 각 내용이 무엇을 위한 것인지 미리 확인한다면 조금 더 쉽게 목표를 작성하실 수 있을거에요!</div>
                        <div className="wrap-image">
                            <div className="example-image img1" data-aos="fade-up"></div>
                            <div className="example-image img2" data-aos="fade-up"></div>
                        </div>
                    </div>
                    <a href="#section3"><div className="page-down" data-aos="fade-up"></div></a>
                </div>
                {/* SECTION3 */}
                <div id="section3" className="wrap-question" style={{background: '#f3f3f3'}}>
                    <div className="container">
                        <div className="title" data-aos="fade-up">메인 목표 설정하기</div>
                        <div className="explain" data-aos="fade-up">31일 동안 진행할 메인 목표를 설정해주세요. JAKSIM 31을 시작하는 이유를 적으면 돼요. 예를 들면 '건강한 습관 만들기' 이런 식으로요!</div>                        
                        <h3 data-aos="fade-up">메인 목표</h3>
                        <input type="text" name="goal" data-aos="fade-up" placeholder="메인 목표 입력(최대 100자)"/>
                    </div>
                    <a href="#section4"><div className="page-down" data-aos="fade-up"></div></a>
                </div>
                {/* SECTION4 */}
                <div id="section4" className="wrap-question">
                    <div className="container">
                        <div className="title" data-aos="fade-up">서브 목표 설정하기</div>
                        <div className="explain" data-aos="fade-up">메인 목표를 달성하기 위해 매일 행동할 목표들을 설정해주세요. 예를 들어 살을 빼기 위해서는 줄넘기, 물 많이 마시기 등의 활동을 할 수 있죠. 또 그냥 '물 많이 마시기' 보다는 '하루에 물 2L이상 마시기'처럼 명확한 조건을 적어주는게 좋아요.</div>
                        <h3 data-aos="fade-up">서브 목표1 (필수)</h3>
                        <input type="text" name="sub1" data-aos="fade-up" maxLength="100" placeholder="첫번째 서브 목표 입력(최대 100자)"/>
                        <h3 data-aos="fade-up">서브 목표2 (선택)</h3>
                        <input type="text" name="sub2" data-aos="fade-up" maxLength="100" placeholder="두번째 서브 목표 입력(최대 100자)"/>
                        <h3 data-aos="fade-up">서브 목표3 (선택)</h3>
                        <input type="text" name="sub3" data-aos="fade-up" maxLength="100" placeholder="세번째 서브 목표 입력(최대 100자)"/>
                    </div>
                    <a href="#section5"><div className="page-down" data-aos="fade-up"></div></a>
                </div>
                {/* SECTION5 */}
                <div id="section5" className="wrap-question" style={{background: '#f3f3f3'}}>
                    <div className="container">
                        <div className="title" data-aos="fade-up">커버 &amp; 태그 설정하기</div>
                        <div className="explain" data-aos="fade-up">이제 마무리 단계에요. 자신이 세운 목표를 가장 잘 표현할 수 있는 커버와 태그를 설정해주세요. 관리할 목표가 많을 때, 목표를 쉽게 관리할 수 있는 중요한 역할을 해준답니다.</div>
                        <div className="wrap-cover">
                            <div>
                                <input type="radio" name="cover" id="cover1" value="1" data-aos="fade-up"/>
                                <label for="cover1"><div className="cover" data-aos="fade-up" style={{backgroundImage: `url(${Cover1})`}}></div></label>
                            </div>
                            <div>
                                <input type="radio" name="cover" id="cover2" value="2" data-aos="fade-up"/>
                                <label for="cover2"><div className="cover" data-aos="fade-up" style={{backgroundImage: `url(${Cover2})`}}></div></label>
                            </div>
                            <div>
                                <input type="radio" name="cover" id="cover3" value="3" data-aos="fade-up"/>
                                <label for="cover3"><div className="cover" data-aos="fade-up" style={{backgroundImage: `url(${Cover3})`}}></div></label>
                            </div>
                            <div>
                                <input type="radio" name="cover" id="cover4" value="4" data-aos="fade-up"/>
                                <label for="cover4"><div className="cover" data-aos="fade-up" style={{backgroundImage: `url(${Cover4})`}}></div></label>
                            </div>
                            <div>
                                <input type="radio" name="cover" id="cover5" value="5" data-aos="fade-up"/>
                                <label for="cover5"><div className="cover" data-aos="fade-up" style={{backgroundImage: `url(${Cover5})`}}></div></label>
                            </div>
                            <div>
                                <input type="radio" name="cover" id="cover6" value="6" data-aos="fade-up"/>
                                <label for="cover6"><div className="cover" data-aos="fade-up" style={{backgroundImage: `url(${Cover6})`}}></div></label>
                            </div>
                            <div>
                                <input type="radio" name="cover" id="cover7" value="7" data-aos="fade-up"/>
                                <label for="cover7"><div className="cover" data-aos="fade-up" style={{backgroundImage: `url(${Cover7})`}}></div></label>
                            </div>
                            <div>
                                <input type="radio" name="cover" id="cover8" value="8" data-aos="fade-up"/>
                                <label for="cover8"><div className="cover" data-aos="fade-up" style={{backgroundImage: `url(${Cover8})`}}></div></label>
                            </div>
                            <div>
                                <input type="radio" name="cover" id="cover9" value="9" data-aos="fade-up"/>
                                <label for="cover9"><div className="cover" data-aos="fade-up" style={{backgroundImage: `url(${Cover9})`}}></div></label>
                            </div>
                            <div>
                                <input type="radio" name="cover" id="cover10" value="10" data-aos="fade-up"/>
                                <label for="cover10"><div className="cover" data-aos="fade-up" style={{backgroundImage: `url(${Cover10})`}}></div></label>
                            </div>
                            <div>
                                <input type="radio" name="cover" id="cover11" value="11" data-aos="fade-up"/>
                                <label for="cover11"><div className="cover" data-aos="fade-up" style={{backgroundImage: `url(${Cover11})`}}></div></label>
                            </div>
                            <div>
                                <input type="radio" name="cover" id="cover12" value="12" data-aos="fade-up"/>
                                <label for="cover12"><div className="cover" data-aos="fade-up" style={{backgroundImage: `url(${Cover12})`}}></div></label>
                            </div>
                            <div>
                                <input type="radio" name="cover" id="cover13" value="13" data-aos="fade-up"/>
                                <label for="cover13"><div className="cover" data-aos="fade-up" style={{backgroundImage: `url(${Cover13})`}}></div></label>
                            </div>
                            <div>
                                <input type="radio" name="cover" id="cover14" value="14" data-aos="fade-up"/>
                                <label for="cover14"><div className="cover" data-aos="fade-up" style={{backgroundImage: `url(${Cover14})`}}></div></label>
                            </div>
                        </div>
                        <div data-aos="fade-up" className="input_tag"><span>#</span> <input type="text" name="tag" placeholder="태그 입력(최대 8자)" maxLength="8"/></div>
                    </div>
                    <a href="#section6"><div className="page-down" data-aos="fade-up"></div></a>
                </div>
                {/* SECTION6 */}
                <div id="section6" className="wrap-greeting">
                    <div className="container" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <div className="hi" data-aos="fade-up"><span role="img" aria-label="airplane">✈️</span> COMPLETE! <span role="img" aria-label="airplane">✈️</span></div>
                        <div className="sub-hi" data-aos="fade-up">여정을 위한 목표 설정이 완료되었습니다.<br/>여러분의 목표 달성을 응원합니다.</div>
                        <button type="submit">시작하기</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Setting;