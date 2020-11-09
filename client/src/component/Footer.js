import React from 'react';
import '../style/Footer.scss';

const Footer = () => {
    return(
        <div className="footer">
            <div style={{width: '100%', height: '1px', background: '#ddd'}}></div>
            <div className="container">
                <footer>
                    <div className="footer-copyright" style={{textAlign: 'center'}}>Copyright ⓒ 2020 Jaksim 31. All rights reserved</div>
                    <div className="footer-menu">
                        <a href="terms">이용약관</a>
                        <a href="/privacy">개인정보 처리방침</a>
                        <a href="faq">자주 묻는 질문</a>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default Footer;