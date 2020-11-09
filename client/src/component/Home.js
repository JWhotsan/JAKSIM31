import React, { Component } from 'react';
import '../style/Home.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Banner from './Banner';

import Flow1 from '../image/home/flow1.png';
import Flow2 from '../image/home/flow2.png';
import Flow3 from '../image/home/flow3.png';
import Flow4 from '../image/home/flow4.png';

import ManEmoji from '../image/home/emoji-man.png';
import WomanEmoji from '../image/home/emoji-woman.png';

class Home extends Component {

    componentDidMount(){
        window.scrollTo(0,0);
        AOS.init({
          duration : 2500
        })
    }

    render(){
        return(
            <div className="home">
                <a href="#top"><div className="top"></div></a>
                <Banner/>
    
                <div className="wrap-intro" id="intro">
                    <div className="container">
                        <HomeTitle
                            title={'JAKSIM 31이란?'}
                            subtitle1={'스스로 이루고 싶은 목표를 향해 나아가는'}
                            subtitle2={'31일 간의 즐거운 여정입니다.'}
                        />
                        <div className="wrap-flow">
                            <Flow
                                number={"1"}
                                image={Flow1}
                                title={'목표설정'}
                                text={'30일 후 변화될 나의 모습을 상상하며 목표를 설정해주세요.'}
                                delay={500}
                            />
                            <Flow
                                number={"2"}
                                image={Flow2}
                                title={'일일리뷰'}
                                text={'매일 자신의 목표 달성량에 대해 스스로 피드백합니다.'}
                                delay={700}
                            />
                            <Flow
                                number={"3"}
                                image={Flow3}
                                title={'치팅데이'}
                                text={'축하합니다! 목표달성 기념으로 스스로에게 선물을 주는건 어떨까요?'}
                                delay={900}
                            />
                            <Flow
                                number={"4"}
                                image={Flow4}
                                title={'기록보관'}
                                text={'마이페이지에서 지난 목표에 대한 리멤버(remember) 리포트를 볼 수 있어요.'}
                                delay={1100}
                            />
                        </div>
                    </div>
                </div>

                <div className="wrap-review" id="review">
                    <div className="container">
                        <HomeTitle
                            title={'JAKSIM 31 리얼 후기!'}
                            subtitle1={'지난 참가자들의 목표 달성 후기입니다.'}
                            subtitle2={'어떤 목표를 세웠고 또 무엇을 얻었을까요?'}
                        />
                        <div className="group-review">
                            <div className="review-group">
                                <h3 data-aos="fade-up">어떤 목표를 설정 및 달성하셨나요?</h3>
                                <Review
                                    isMan={true}
                                    review={'매일 줄넘기를 1000개 이상 했어요.'}
                                />
                                <Review
                                    isMan={false}
                                    review={'저는 저만의 웹사이트를 만드는 것을 목표로 했어요.'}
                                />
                                <Review
                                    isMan={false}
                                    review={'매일 홈트레이닝 영상을 따라했습니다.'}
                                />
                                <Review
                                    isMan={true}
                                    review={'책 4권 읽기를 목표로 했어요.'}
                                />
                                <Review
                                    isMan={true}
                                    review={'방치해뒀던 블로그를 운영했어요. ㅎㅎ'}
                                />
                            </div>
                            <div className="review-group">
                                <h3 data-aos="fade-up">JAKSIM 31과 함께하며 어떤 점이 좋으셨나요?</h3>
                                <Review
                                    isMan={false}
                                    review={'목표한 일은 꾸준히 할 수 있었습니다.'}
                                />
                                <Review
                                    isMan={true}
                                    review={'스스로에게 동기부여가 잘 되는 것 같아요.'}
                                />
                                <Review
                                    isMan={false}
                                    review={'자신을 피드백하는 시간이 중요하다는 것을 느꼈어요.'}
                                />
                                <Review
                                    isMan={true}
                                    review={'그래프로 내 노력을 분석할 수 있는게 좋은 것 같아요.'}
                                />
                                <Review
                                    isMan={false}
                                    review={'목표를 향한 길을 제시해주는 것 같아요.'}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <a href="#top">
                    <div className="top"></div>
                </a>
            </div>
        )
    }
};

const HomeTitle = (props) => {
    return(
        <div className="home-title">
            <div className="title" data-aos="fade-up">{props.title}</div>
            <div className="hr"></div>
            <div className="subtitle" data-aos="fade-up">{props.subtitle1}</div>
            <div className="subtitle" data-aos="fade-up">{props.subtitle2}</div>
        </div>
    )
}

const Flow = (props) => {
    return(
        <div className="flow" data-aos="fade-up" data-aos-delay={props.delay}>
            <div className="image" style={{backgroundImage: `url(${props.image})`}}></div>
            <div className="title"><span>{props.number}</span> {props.title}</div>
            <div className="text">{props.text}</div>
        </div>
    )
}

const Review = (props) => {
    return(
        <div className="review" data-aos="fade-up" data-aos-delay="300">
            <div className="emoji" style={props.isMan ? {backgroundImage: `url(${ManEmoji})`} : {backgroundImage: `url(${WomanEmoji})`}}></div>
            <div className="text-review">{props.review}</div>
        </div>
    )
}
export default Home;