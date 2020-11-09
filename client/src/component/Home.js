import React, { Component } from 'react';
import '../style/Home.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Banner from './Banner';

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
    
                
            </div>
        )
    }
};


export default Home;
