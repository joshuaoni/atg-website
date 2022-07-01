import React from 'react';
import './Posts.css'
import one from '../../assets/1.png';
import eye from '../../assets/visibility_24px.png';
import share from '../../assets/Vector.png';
import car from '../../assets/djsd.png';
import ban from '../../assets/Rectangle 5.png';
import dots from '../../assets/dots.png';
import location from '../../assets/location.png';
import date from '../../assets/date.png';
import pen from '../../assets/pen.png';
import warn from '../../assets/warning.png';
import box from '../../assets/box.png';
import down from '../../assets/down.png';
import plus from '../../assets/plus.png';
import ui from '../../assets/ui.png';
import visi from '../../assets/visibility_24px_outlined.png';
import fb from '../../assets/f_logo_RGB-Blue_1024.png';
import google from '../../assets/search.png';
import like from '../../assets/like.png';
import exit from '../../assets/exit.png';
import x from '../../assets/x.png';
import whitePen from '../../assets/edit_24px.png';

const Posts = () => {

    const handleSignUp = (e) => {
        e.preventDefault();
        var signin = document.querySelector('.in');
        var signup = document.querySelector('.out');
        signin.classList.toggle('none');
        signup.classList.toggle('none');
    }

    const handleSignIn = (e) => {
        e.preventDefault();
        var loggedIn = document.querySelector('.logged-in');
        loggedIn.classList.toggle('none');
        var loggedOut = document.querySelector('.logged-out');
        loggedOut.classList.toggle('none');
        var popup = document.getElementById("myPopup");
        popup.classList.remove("show");
        var card = document.querySelector('.hidden');
        card.classList.remove('wrap');
		var wrapper = document.querySelector('.wrapper');
		wrapper.classList.add('none');
    }

    const handleJoin = () => {
        var joinGroup = document.querySelector('.join-group');
        joinGroup.classList.toggle('none');
        var exit = document.querySelector('.exit');
        exit.classList.toggle('none');
        var join = document.querySelector('.join');
        join.classList.toggle('none');
        var locate = document.querySelector('.location input');
        if (locate.disabled) {
            locate.placeholder = 'Enter your location';
        } else {
            locate.placeholder = 'Noida, India';
        }
        locate.disabled = !locate.disabled;
        var edit = document.querySelector('.edit');
        var x = document.querySelector('.x');
        edit.classList.toggle('none');
        x.classList.toggle('none');
    }

    return ( 
        <section>
            <div className='nav-bar'>
                <div>
                    <span className='all-posts'>All Posts(32)</span>
                    <span>Article</span>
                    <span>Event</span>
                    <span>Education</span>
                    <span>Job</span>
                </div>
                <div className='d-flex align-items-center'>
                    <button className='write'><div className='d-flex align-items-center justify-content-between'>Write A Post<img className=''width='8px' height='6px' alt='' src={down} /></div></button>
                    <button onClick={handleJoin} className='ml-5 join'><div className='d-flex align-items-center justify-content-between'><img className=''width='17px' height='10px' alt='' src={plus} />Join Group</div></button>
                    <button onClick={handleJoin} className='ml-5 none exit'><div className='d-flex align-items-center justify-content-between'><img className=''width='14px' height='14px' alt='' src={exit} />Leave Group</div></button>
                </div>
            </div>        

            <div className="popup">
                <div className="popuptext" id="myPopup">
                    <div className='head'>
                        <span>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</span>
                    </div>
                    <div className='w-100 in d-flex'>
                        <div className='form w-50'>
                            <h3>Create Account</h3>
                            <form
                                onSubmit={handleSignUp}
                            >
                                <div className='w-100 d-flex'>
                                    <input className='w-50' type='text' placeholder='First Name' />
                                    <input className='w-50' type='text' placeholder='Last Name' />
                                </div>
                                <input className='w-100' type='email' placeholder='Email' />
                                <input className='w-100' type='password' placeholder='Password' /><img className='visi' alt='' src={visi} />
                                <input className='w-100' type='password' placeholder='Confirm Password' />
                                <div className='button-cont'><button className='signup w-100'><div className='d-flex align-items-center justify-content-center'>Create Account</div></button><span onClick={handleSignUp} className='blue'>or Sign In</span></div>
                                <button className='w-100'><div className='d-flex align-items-center justify-content-center'><img className='fb' alt='' src={fb} />Sign up with Facebook</div></button>
                                <button className='w-100'><div className='d-flex align-items-center justify-content-center'><img className='google' alt='' src={google} />Sign up with Google</div></button>
                                <div className='terms'><p>By signing up, you agree to our Terms & conditions, Privacy policy</p></div>
                            </form>
                        </div>
                        <div className='w-50 img '>
                            <div className='w-100 d-flex justify-content-end'>Already have an account? <span onClick={handleSignUp} className='blue'>Sign In</span></div>
                            <img className='ui' alt='' src={ui} />
                            <p>By signing up, you agree to our Terms & conditions, Privacy policy</p>
                        </div>
                    </div>

                    <div className='w-100 out none d-flex'>
                        <div className='form w-50'>
                            <h3>Sign In</h3>
                            <form
                                onSubmit={handleSignIn}
                            >
                                <input className='w-100' type='email' placeholder='Email' />
                                <input className='w-100' type='password' placeholder='Password' /><img className='visi' alt='' src={visi} />
                                <div className='button-cont'><button className='signup w-100'><div className='d-flex align-items-center justify-content-center'>Sign In</div></button><span onClick={handleSignUp} className='blue'>or, Create Account</span></div>
                                <button className='w-100'><div className='d-flex align-items-center justify-content-center'><img className='fb' alt='' src={fb} />Sign in with Facebook</div></button>
                                <button className='w-100'><div className='d-flex align-items-center justify-content-center'><img className='google' alt='' src={google} />Sign in with Google</div></button>
                                <div><p className='forgot'>Forgot Password?</p></div>
                            </form>
                        </div>
                        <div className='w-50 img '>
                            <div className='w-100 d-flex justify-content-end'>Don’t have an account yet? <span onClick={handleSignUp} className='blue'>Create new for free!</span></div>
                            <img className='ui' alt='' src={ui} />
                        </div>
                    </div>
                </div>
            </div>

            <div className='filter'>
                <h3>Posts(368)</h3><button className='write'><div className='d-flex align-items-center justify-content-between'>Filter: All<img className=''width='11px' height='6px' alt='' src={down} /></div></button>
            </div>

            <div className='row'>
                <div className='col-8'>
                <div className='card'>
                        <img className='banner' alt='' src={one} />
                        <div className='details'>
                            <h6 className='pb-2'>✍️ Article</h6>
                            <div className='d-flex'>
                                <h5>What if famous brands had regular fonts? Meet RegulaBrands!</h5>
                                <div className='options'>
                                    <img role='button' alt='' src={dots} />
                                </div>
                            </div>
                            <p>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                            <div className='person'>
                                <div className='avatar-div'>
                                    <div className='avatar-1'></div>
                                    <h6 className='names'>Sarthak Kamra</h6>
                                </div>
                                <div className='tools'>
                                    <div className='view'>
                                        <div className='eye'>
                                            <img alt='' src={eye} />
                                        </div>
                                        <span>1.4k views</span>
                                    </div>
                                    <div className='share'>
                                        <img alt='' src={share} />
                                        <span>Share</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <img className='banner' alt='' src={ban} />
                        <div className='details'>
                            <h6 className='pb-2'>🔬️ Education</h6>
                            <div className='d-flex'>
                                <h5>Tax Benefits for Investment under National Pension Scheme launched by Government</h5>
                                <div className='options'>
                                    <img role='button' alt='' src={dots} />
                                </div>
                            </div>
                            <p>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                            <div className='person'>
                                <div className='avatar-div'>
                                    <div className='avatar-2'></div>
                                    <h6 className='names'>Sarah West</h6>
                                </div>
                                <div className='tools'>
                                    <div className='view'>
                                        <div className='eye'>
                                            <img alt='' src={eye} />
                                        </div>
                                        <span>1.4k views</span>
                                    </div>
                                    <div className='share'>
                                        <img alt='' src={share} />
                                        <span>Share</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <img className='banner' alt='' src={car} />
                        <div className='details'>
                            <h6 className='pb-2'>🗓️ Meetup</h6>

                            <div className='d-flex'>
                                <h5>Finance & Investment Elite Social Mixer @Lujiazui</h5>
                                <div className='options'>
                                    <img role='button' alt='' src={dots} />
                                </div>
                            </div>
                            
                            <div className='date-loc'>
                                <div className='date'>
                                    <img alt='' src={date} />
                                    <h6>Fri, 12 Oct, 2018</h6>
                                </div>
                                <div className='location'>
                                    <img className='pin' alt='' src={location} />
                                    <h6>Ahmedabad, India</h6>
                                </div>
                            </div>

                            <button>Visit Website</button>

                            <div className='person'>
                                <div className='avatar-div'>
                                    <div className='avatar-3'></div>
                                    <h6 className='names'>Sarthak Kamra</h6>
                                </div>
                                <div className='tools'>
                                    <div className='view'>
                                        <div className='eye'>
                                            <img alt='' src={eye} />
                                        </div>
                                        <span>1.4k views</span>
                                    </div>
                                    <div className='share'>
                                        <img alt='' src={share} />
                                        <span>Share</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='details'>
                            <h6 className='pb-2'>💼️ Job</h6>

                            <div className='d-flex justify-content-between'>
                                <h5>Software Developer</h5>
                                <div className='options'>
                                    <img role='button' alt='' src={dots} />
                                </div>
                            </div>
                            
                            <div className='date-loc'>
                                <div className='date'>
                                    <img alt='' src={box} />
                                    <h6>Innovaccer Analytics Private Ltd.</h6>
                                </div>
                                <div className='location'>
                                    <img className='pin' alt='' src={location} />
                                    <h6>Noida, India</h6>
                                </div>
                            </div>

                            <button className='green'>Apply on Timesjobs</button>

                            <div className='person'>
                                <div className='avatar-div'>
                                    <div className='avatar-4'></div>
                                    <h6 className='names'>Joseph Gray</h6>
                                </div>
                                <div className='tools'>
                                    <div className='view'>
                                        <div className='eye'>
                                            <img alt='' src={eye} />
                                        </div>
                                        <span>1.4k views</span>
                                    </div>
                                    <div className='share'>
                                        <img alt='' src={share} />
                                        <span>Share</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-4'>
                    <div className='begin d-flex justify-content-between align-items-center'>
                        <div className='location'>
                            <img className='locate' alt='' src={location} />
                            <input disabled type='text' placeholder='Noida, India' />
                            <img className='pen edit' alt='' src={pen} />
                            <img className='none x pen' alt='' src={x} />
                        </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-start'>
                        <div className='warn'>
                            <img alt='' src={warn} />
                        </div>
                        <p className='toasts'>Your location will help us serve better and extend a personalised experience.</p>
                    </div>

                    <div className='join-group none'>
                        <div className='d-flex align-items-center'><img alt='' className='like' src={like} /><span>RECOMMENDED GROUPS</span></div>
                        <div className='d-flex lists align-items-center justify-content-between'>
                            <div className='d-flex align-items-center'>
                                <div className='img1'></div>
                                <span>Leisure</span>
                            </div>
                            <div role='button' className='follow'>Follow</div>
                        </div>
                        <div className='d-flex lists align-items-center justify-content-between'>
                            <div className='d-flex align-items-center'>
                                <div className='img2'></div>
                                <span>Activism</span>
                            </div>
                            <div role='button' className='follow'>Follow</div>
                        </div>
                        <div className='d-flex lists align-items-center justify-content-between'>
                            <div className='d-flex align-items-center'>
                                <div className='img3'></div>
                                <span>MBA</span>
                            </div>
                            <div role='button' className='follow'>Follow</div>
                        </div>
                        <div className='d-flex lists align-items-center justify-content-between'>
                            <div className='d-flex align-items-center'>
                                <div className='img4'></div>
                                <span>Philosophy</span>
                            </div>
                            <div role='button' className='follow'>Follow</div>
                        </div>
                        <div className='d-flex justify-content-end blue'>
                            <p role='button'>See More...</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='justify-content-end float-cont'>
                <div role='button' className='d-flex justify-content-center align-items-center float'>
                    <img height='18px' width='18px' alt='' src={whitePen} />
                </div>
            </div>

        </section>
    );
}
 
export default Posts;