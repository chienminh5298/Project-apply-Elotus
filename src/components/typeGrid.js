import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as action from 'src/actions';

export default function TypeGrid() {
	var dispatch = useDispatch();
	var movies = useSelector((state) => state.defaultReducer);
	var renderList = movies.movies.map((movie) => {
		var isActive = movie.id === movies.detailMovie.id ? 'activeGrid' : '';
		return (
			<div className={`movie ${isActive}`} key={movie.id} onClick={() => dispatch(action.updateMovieDetail(movie))}>
				<img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt='Movie' className='w-100 w3-animate-opacity' />
			</div>
		);
	});
	return <Fragment>{renderList}</Fragment>;
}
