import React from 'react';
import './App.css';
import Cover from './components/Cover/Cover';
import Navbar from './components/Navbar';
import Posts from './components/Posts/Posts';

function App () {
	const remove = () => {
        var popup = document.getElementById("myPopup");
        popup.classList.remove("show");
        var card = document.querySelector('.hidden');
        card.classList.remove('wrap');
		var wrapper = document.querySelector('.wrapper');
		wrapper.classList.add('none');
    }

	return (
		<div className='App container-fluid'>
			<div className='wrapper none'>
				<div onClick={remove} className='hidden'></div>
			</div>
			<Navbar/>
			<Cover/>
			<Posts/>
		</div>
	);
}

export default App;