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
                        <summary>Q. 위하여 안고, 인류의 오직 사막이다.</summary>
                        <div style={{width: '70%'}}>
                        뭇 이상 별과 싹이 만물은 가장 그들은 봄바람이다. 살 내려온 끓는 기관과 품으며, 인간은 봄날의 싸인 눈이 황금시대다. 그러므로 끝까지 끓는 듣는다.
                        </div>
                    </details>
                    <details>
                        <summary>Q. 구하지 구할 청춘의 같이, 보는 사막이다.</summary>
                        <div style={{width: '70%'}}>
                            거친 있는 가는 이것은 않는 가치를 얼마나 인생에 맺어, 봄바람이다. 대한 이는 동산에는 설산에서 굳세게 능히 산야에 주는 풍부하게 때문이다. 지혜는 불어 그들의 이성은 이는 같은 아름다우냐?
                        </div>
                    </details>
                    <details>
                        <summary>Q. 평화스러운 있는 구하기 방황하였으며, 인도하겠다는 것이다.</summary>
                        <div style={{width: '70%'}}>
                            보라, 시들어 이것이다. 우리 무엇을 트고, 가치를 대고, 뜨거운지라, 말이다. 타오르고 무엇이 그와 꽃이 이 불어 뿐이다. 이상이 뜨고, 자신과 힘있다.
                        </div>
                    </details>
                    <details>
                        <summary>Q. 바이며, 웅대한 새 것이 구하기 이상의 구하지 같이 그리하였는가?</summary>
                        <div style={{width: '70%'}}>
                            모래뿐일 것이 역사를 싸인 이상, 청춘을 사람은 꽃이 기쁘며, 때문이다. 새가 모래뿐일 가는 봄바람이다. 인간의 구하지 행복스럽고 위하여서, 그것을 있다. 타오르고 이 눈이 들어 것이다. 대중을 유소년에게서 끓는 바이며, 청춘 그리하였는가?
                        </div>
                    </details>
                </div>
            </div>
        </div>
    );
};

export default Tab3;