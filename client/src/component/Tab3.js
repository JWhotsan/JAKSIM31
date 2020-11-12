import React, { useEffect } from 'react';
import '../style/Tab3.scss';
import MiniBanner from './MiniBanner';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Tab3 = () => {
    useEffect(() => {
        window.scrollTo(0,0);
        AOS.init({
            duration : 2500
        })
    })

    return(
        <div className="faq">
            <MiniBanner
                link={'faq'}
                page={'자주 묻는 질문'}
            />
            <div className="container">
                <div className="notice" data-aos="fade-up">자주 묻는 질문(FAQ)</div>
                <div className="content" data-aos="fade-up">
                    <details open>
                        <summary>Q. 사이트가 너무 느려요. 왜 이렇죠? 잘못 만든건가요??</summary>
                        <div style={{width: '70%'}}>
                        aws 프리티어와 무료 호스팅 서버를 사용했기 때문에 사이트 환경이 조금 지연될 수 있습니다. 양해 부탁드립니다.
                        </div>
                    </details>
                    <details>
                        <summary>Q. 목표 유형 검사(JSTI TEST)는 과학적으로 증명된 검사인가요?</summary>
                        <div style={{width: '70%'}}>
                        아니요, 그냥 저희 JAKSIM 31팀이 만들어낸 가상의 테스트입니다...
                        </div>
                    </details>
                    <details>
                        <summary>Q. 30일 전에 이미 목표를 달성했다면 어떻게 해야하나요?</summary>
                        <div style={{width: '70%'}}>
                        JAKSIM 31의 기본 모토가 <b>"목표를 향한 30일 간의 여정"</b>이기 때문에 해당 기능은 마련되어있지 않습니다. 하지만 '정진우 010-9012-6613'으로 문의 주시면 해당 목표 완료 처리할 수 있도록 도와드리겠습니다.
                        </div>
                    </details>
                    <details>
                        <summary>Q. JAKSIM 31 에러 및 문의 사항은 어디에 말할 수 있나요?.</summary>
                        <div style={{width: '70%'}}>
                        JAKSIM 31에서 발견된 에러 및 문의 사항은 '정진우 010-9012-6613'으로 연락주시면 빠른 시일 내로 해결하겠습니다.
                        </div>
                    </details>
                </div>
            </div>
        </div>
    );
};

export default Tab3;