import React, { useEffect } from 'react';
import {NavLink} from 'react-router-dom';
import '../style/MiniBanner.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MiniBanner = (props) => {
    useEffect(() => {
        AOS.init({
            duration : 1000
        })
    });

    return(
        <div className="mini-banner">
            <div className="container">
                <div className="wrap-banner">
                    <div className="link" data-aos="fade-up"><NavLink to="/">홈</NavLink> &nbsp;&gt;&nbsp; <NavLink to={"/" + props.link}>{props.page}</NavLink></div>
                    <div className="title" data-aos="fade-up">{props.page}</div>
                </div>
            </div>
        </div>
    )
};

export default MiniBanner;