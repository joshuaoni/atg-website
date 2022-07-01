import React from 'react';
import './Navbar.css';
import union from '../assets/Union 1.png';
import sea from  '../assets/sea.png';
import down from '../assets/down.png';
import oval from '../assets/Oval.png';
import path from '../assets/Path.png';
import Rectangle from '../assets/Rectangle.png';

const Navbar = () => {
    const myFunction = () => {
        var popup = document.getElementById("myPopup");
        popup.classList.add("show");
        var card = document.querySelector('.hidden');
        card.classList.add('wrap');
		var wrapper = document.querySelector('.wrapper');
		wrapper.classList.remove('none');
    }

    return (
        <nav>
            <div className='desktop'>
                <div className='d-flex atg align-items-center'><span>ATG.</span>W<img alt='' src={union} />RLD</div>
            </div>
            <div className='desktop d-flex w-50'>
                <img className='sea' alt='' src={sea} />
                <input
                    className='text-align-center'
                    type='text'
                    placeholder='Search for your favorite groups in ATG'
                />
            </div>
            <div onClick={myFunction} role='button' className='logged-out desktop d-flex align-items-center strong'>
                <span className='create'>Create account. </span><span className='blue'>Its free!</span><img className='down'width='14px' height='4.6px' alt='' src={down} />
            </div>
            <div role='button' className='none logged-in desktop d-flex align-items-center strong'>
                <div className='avatar-div'>
                    <div className='avatar-4'></div>
                    <span>Siddharth Goyal</span>
                </div>
                <img className='down'width='14px' height='4.6px' alt='' src={down} />
            </div>
            <div onClick={myFunction} role='button' className='icons'>
                    <img alt='' src={Rectangle} />
                    <img alt='' src={oval} />
                    <img alt='' src={path} />
            </div>
        </nav>
    );
}
 
export default Navbar;