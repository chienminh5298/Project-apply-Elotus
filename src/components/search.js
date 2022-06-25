import React from 'react';

export default function search() {
	return (
		<div id='searchWrapper'>
			<div id='typeList'>
				<div className='movieType'>
					<a href='#'>Action</a>
				</div>
				<div className='movieType'>
					<a href='#'>Comedy</a>
				</div>
				<div className='movieType'>
					<a href='#'>Drama</a>
				</div>
				<div className='movieType'>
					<a href='#'>Fantasy</a>
				</div>
				<div className='movieType'>
					<a href='#'>Horror</a>
				</div>
				<div className='movieType'>
					<a href='#'>Mystery</a>
				</div>
				<div className='movieType'>
					<a href='#'>Romance</a>
				</div>
				<div className='movieType'>
					<a href='#'>Thriller</a>
				</div>
				<div className='movieType'>
					<a href='#'>Western</a>
				</div>
			</div>
			<div id='searchButton'>
				<form>
					<input placeholder='Search'></input>
				</form>
			</div>
		</div>
	);
}
