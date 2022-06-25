import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as action from 'src/actions';

export default function TypeList() {
	var dispatch = useDispatch();
	var movies = useSelector((state) => state.defaultReducer);
	var renderList = movies.movies.map((movie) => {
		var isActive = movie.id === movies.detailMovie.id ? 'active' : '';
		return (
			<div className={`movieListType ${isActive}`} onClick={() => dispatch(action.updateMovieDetail(movie))} key={movie.id}>
				<div className='rowId'>{movie.id}</div>
				<div className='rowName'>{movie.original_title}</div>
				<div className='rowLanguage'>{movie.original_language.toUpperCase()}</div>
				<div className='rowIMDB'>{movie.vote_average.toFixed(2)}</div>
				<div className='thumb'>
					<img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt='thumb' className='w-100' />
				</div>
			</div>
		);
	});
	return (
		<Fragment>
			<div id='typeListHeader'>
				<div className='rowId'>Id</div>
				<div className='rowName'>Name</div>
				<div className='rowLanguage'>Language</div>
				<div className='rowIMDB'>IMDB</div>
			</div>
			<div className='w-100'>{renderList}</div>
		</Fragment>
	);
}
