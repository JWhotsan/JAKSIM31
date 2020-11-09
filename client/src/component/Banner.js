import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {NavLink} from 'react-router-dom';
import '../style/Banner.scss';

import PCBanner1 from '../image/banner/pc_banner1.jpg';
import PCBanner2 from '../image/banner/pc_banner2.jpg';
import PCBanner3 from '../image/banner/pc_banner3.jpg';
import PCBanner4 from '../image/banner/pc_banner4.jpg';

import MOBILEBanner1 from '../image/banner/mobile_banner1.jpg';
import MOBILEBanner2 from '../image/banner/mobile_banner2.jpg';
import MOBILEBanner3 from '../image/banner/mobile_banner3.jpg';
import MOBILEBanner4 from '../image/banner/mobile_banner4.jpg';
 
class DemoCarousel extends Component{
    isMobile = () => {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    render(){
        return(
            <div className="banner">
                <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
                    <div className="wrap-banner">
                        <img src={this.isMobile() ? MOBILEBanner1 : PCBanner1} alt="운동"/>
                        <div className="container">
                            <div className="title">건강한 몸에 건강한 정신이 깃든다 <span role="img" aria-label="flexed biceps">💪</span></div>
                            <div className="text">뭇 끓는 위하여 그들의 이것이다. 아름답고 별과 것은 갑 과실이 사막이다. 이상 있음으로써 목숨을 청춘이 예수는 이상의 구하지 인류의 어디 것이다. 이상이 뛰노는 인생을 약동하다.</div>
                            <div className="tag">
                                <span>#요가</span>
                                <span>#줄넘기</span>
                                <span>#링피트</span>
                                <span>#홈트레이닝</span>
                            </div>
                            <NavLink to="/mypage"><div className="btn">시작하기</div></NavLink>
                        </div>
                    </div>
                    <div className="wrap-banner">
                        <img src={this.isMobile() ? MOBILEBanner2 : PCBanner2} alt="코딩"/>
                        <div className="container">
                            <div className="title">내 아이디어를 마음껏 실현할 수 있는 곳 <span role="img" aria-label="notebook">💻</span></div>
                            <div className="text">뭇 끓는 위하여 그들의 이것이다. 아름답고 별과 것은 갑 과실이 사막이다. 이상 있음으로써 목숨을 청춘이 예수는 이상의 구하지 인류의 어디 것이다. 이상이 뛰노는 인생을 약동하다.</div>
                            <div className="tag">
                                <span>#나만의_웹사이트</span>
                                <span>#생활코딩</span>
                                <span>#앱</span>
                                <span>#게임</span>
                            </div>
                            <NavLink to="/mypage"><div className="btn">시작하기</div></NavLink>
                        </div>
                    </div>
                    <div className="wrap-banner">
                        <img src={this.isMobile() ? MOBILEBanner3 : PCBanner3} alt="공부"/>
                        <div className="container">
                            <div className="title">벼락치기 이젠 그만! <span role="img" aria-label="collision symbol">💥</span></div>
                            <div className="text">뭇 끓는 위하여 그들의 이것이다. 아름답고 별과 것은 갑 과실이 사막이다. 이상 있음으로써 목숨을 청춘이 예수는 이상의 구하지 인류의 어디 것이다. 이상이 뛰노는 인생을 약동하다.</div>
                            <div className="tag">
                                <span>#미리미리</span>
                                <span>#모의고사</span>
                                <span>#수능준비</span>
                                <span>#수학</span>
                            </div>
                            <NavLink to="/mypage"><div className="btn">시작하기</div></NavLink>
                        </div>
                    </div>
                    <div className="wrap-banner">
                        <img src={this.isMobile() ? MOBILEBanner4 : PCBanner4} alt="저축"/>
                        <div className="container">
                            <div className="title">티끌모아 태산 <span role="img" aria-label="money with wings">💸</span></div>
                            <div className="text">뭇 끓는 위하여 그들의 이것이다. 아름답고 별과 것은 갑 과실이 사막이다. 이상 있음으로써 목숨을 청춘이 예수는 이상의 구하지 인류의 어디 것이다. 이상이 뛰노는 인생을 약동하다.</div>
                            <div className="tag">
                                <span>#비상금모으기</span>
                                <span>#통장관리</span>
                                <span>#재태크</span>
                                <span>#경제관념</span>
                            </div>
                            <NavLink to="/mypage"><div className="btn">시작하기</div></NavLink>
                        </div>
                    </div>
                </Carousel>
            </div>
        );
    }
}
 
export default DemoCarousel;
