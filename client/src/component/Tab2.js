import React, {useEffect} from 'react';
import '../style/Tab2.scss';
import MiniBanner from './MiniBanner';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Tab2 = () => {
    useEffect(() => {
        window.scrollTo(0,0);
        AOS.init({
            duration : 2500
        })
    })

    return(
        <div className="privacy">
            <MiniBanner
                link={'privacy'}
                page={'개인정보 처리방침'}
            />
            <div className="container">
            <div className="notice" data-aos="fade-up">JAKSIM 31 개인정보 처리방침</div>
            <div className="content" data-aos="fade-up">
                <div className="article">본 방침은 2020년 11월 12일부터 시행됩니다.</div>
                <div className="article">JAKSIM 31(이하 회사)은 개인정보 보호법 제30조에 따라 정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리지침을 수립,공개합니다.</div>
                <div className="article">
                    <div className="title">제1조. 개인 정보의 처리 목적</div>
                    회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보 보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
                    <ol>
                        <li>서비스 회원 가입 및 관리 회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별 및 인증, 회원자격 유지 및 관리, 제한적 본인확인제 시행에 따른 본인확인, 서비스 부정이용 방지, 각종 고지 및 통지, 고충 처리 등을 목적으로 개인정보를 처리합니다.</li>
                        <li>재화 또는 서비스 제공 물품배송, 서비스 제공, 청구서 발송, 콘텐츠 제공, 맞춤서비스 제공, 본인인증, 요금결제 및 정산 등을 목적으로 개인정보를 처리합니다.</li>
                        <li>고충 처리 민원인의 신원 확인, 민원사항 확인, 사실조사를 위한 연락 및 통지, 처리결과 통보 등의 목적으로 개인정보를 처리합니다.</li>
                        <li>마케팅 및 광고, 신규 서비스 개발 및 맞춤 서비스 제공, 이벤트 및 광고성 정보 제공 및 참여기회 제공, 통계학적 특성에 따른 서비스 제공 및 광고 게재, 서비스의 유효성 확인, 접속빈도 파악 또는 회원의 서비스 이용에 대한 통계 등을 목적으로 개인정보를 처리합니다.</li>
                    </ol>
                </div>
                <div className="article">
                    <div className="title">제2조. 처리하는 개인정보 항목</div>
                    회원 가입 시 또는 서비스 이용 과정에서 홈페이지를 통해 아래와 같은 서비스 제공을 위해 필요한 최소한의 개인정보를 수집하고 있습니다.
                    <ol>
                        &lt;JAKSIM 31 서비스 일반계정&gt;
                        <li>필수항목: 이메일, 이용자 이름(닉네임), 전화번호</li>
                        <li>선택항목:</li>
                        <br/>
                        &lt;서비스 이용과정에서 수집되는 데이터&gt;
                        <li>서비스 이용 기록, 접속 로그, 접속IP, 쿠키, 부정이용기록, 단말기 정보</li>
                    </ol>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Tab2;