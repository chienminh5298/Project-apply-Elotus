import React from 'react';
import { useSelector } from 'react-redux';
export default function MovieDetail() {
	var movies = useSelector((state) => state.defaultReducer);
	return (
		<div id='detailWrapper'>
			<img src={`https://image.tmdb.org/t/p/original/${movies.detailMovie.poster_path}`} alt='Movie thumb' id='movieThumb' className='w3-animate-opacity'/>
			<div className='container-fluid'>
				<div className='row'>
					<div className='col-md-6 left'>Name</div>
					<div className='col-md-6 right'>{movies.detailMovie.original_title}</div>
				</div>

				<div className='row'>
					<div className='col-md-6 left'>Language</div>
					<div className='col-md-6 right'>{movies.detailMovie.original_language.toUpperCase()}</div>
				</div>

				<div className='row'>
					<div className='col-md-6 left'>Release date</div>
					<div className='col-md-6 right'>{movies.detailMovie.release_date}</div>
				</div>
				<div className='row'>
					<div className='col-md-6 left'>Title</div>
					<div className='col-md-6 right'>{movies.detailMovie.title}</div>
				</div>
				<div className='row'>
					<div className='col-md-6 left'>IDMB</div>
					<div className='col-md-6 right'>
					{movies.detailMovie.vote_average.toFixed(1)} <i className='fa-solid fa-star'></i>
					</div>
				</div>
				<div className='row'>
					<div className='col-md-6 left'>Popularity</div>
					<div className='col-md-6 right'>
					{movies.detailMovie.popularity.toFixed(1)} <i className='fa-solid fa-fire'></i>
					</div>
				</div>
				<div className='row'>
					<div className='col-md-12 overview'>{movies.detailMovie.overview}</div>
				</div>
				<div className='row download'>
					<div className='col-md-12 col-xl-6'>
						<div className='button' id='watch'>
							<a href='#'> Watch now</a>
						</div>
					</div>
					<div className='col-md-12 col-xl-6'>
						<div className='button' id='download'>
							<a href='#'> Download</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
