import React from 'react';
import './Cover.css';
import arrow from '../../assets/arrow_back_24px.png';

const Cover = () => {
    const handleJoin = () => {
        var joinGroup = document.querySelector('.mobile-join');
        joinGroup.classList.toggle('none');
        var exit = document.querySelector('.mobile-leave');
        exit.classList.toggle('none');
    }
    
    return (
        <div className='cover tint'>
            <div className='none cover-top justify-content-between align-items-center'>
                <img alt='' height='20px' width='20px' src={arrow} />
                <button onClick={handleJoin} className='mobile-join cover-join'>Join Group</button>
                <button onClick={handleJoin} className='mobile-leave none cover-join'>Leave Group</button>
            </div>
            <div className='text'>
                <h2>Computer Engineering</h2>
                <p>142,765 Computer Engineers follow this</p>
            </div>
        </div>
    );
}
 
export default Cover;