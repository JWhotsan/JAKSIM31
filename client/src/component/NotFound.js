import React from 'react';
import {NavLink} from 'react-router-dom';

const NotFound = () => {
    return(
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', height: '90vh'}}>
            <div style={{fontSize: '2em', color: '#6381a8', fontWeight: '700'}}>404 Not Found</div>
            <div style={{fontSize: '2em'}}>올바르지 않은 주소입니다</div>
            <br/>
            <br/>
            <NavLink to="/" style={{color: '#6381a8', fontWeight: '700'}}><div>홈으로</div></NavLink>
        </div>
    );
};

export default NotFound;