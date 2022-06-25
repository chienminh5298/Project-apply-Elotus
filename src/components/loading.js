import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import loadingGif from 'src/image/loading.gif';
import { useNavigate } from 'react-router-dom';
import * as api from 'src/apis';
import * as action from 'src/actions';
export default function Loading() {
	let navigate = useNavigate();
	let dispatch = useDispatch();
	useEffect(() => {
		const fetchMovies = async () => {
			let movies = await api.fetchMovies();
			let moviesTopRated = await api.fecthTopRated();
			if (movies.status === 200 && moviesTopRated.status === 200) {
				await new Promise(r => setTimeout(r, 3000));
				dispatch(action.fetchMovies(movies.data.results));
				dispatch(action.fecthTopRated(moviesTopRated.data.results));
			} else {
				navigate('*');
			}
		};
		fetchMovies();
	}, []);

	return (
		<div id='loadingWrapper'>
			<h2>Please wait...</h2>
			<img src={loadingGif} alt='Loading' />
		</div>
	);
}
