import React from 'react';
import Grid from 'src/components/typeGrid';
import List from 'src/components/typeList';
import Detail from 'src/components/movieDetail';
import adv1 from 'src/image/adv1.png';
import adv2 from 'src/image/adv2.png';
import { useSelector, useDispatch } from 'react-redux';
import * as action from 'src/actions';
import { useNavigate } from 'react-router-dom';

export default function Content() {
	var navigate = useNavigate();
	var dispatch = useDispatch();
	var movies = useSelector((state) => state.defaultReducer);
	var renderViewType = movies.viewType === 'grid' ? <Grid /> : <List />;
	var renderTabNow = movies.tab === 'nowPlaying' ? 'nowPlaying' : '';
	var renderTabRate = movies.tab === 'topRated' ? 'topRated' : '';
	return (
		<div id='contentWrapper' className='container-fluid'>
			<div className='row pr-2 pl-2'>
				<div className='col-md-2 col-lg-2 adv'>
					<img src={adv1} alt='Advertise' className='w-100 w3-animate-opacity' />
				</div>
				<div className='col-md-12 col-lg-8'>
					<div className='row'>
						<div id='listMoviesWrapper' className='col-md-8'>
							<div id='viewType'>
								<div id='tab'>
									<div id='nowPlaying' className={`tab ${renderTabNow}`} onClick={() => dispatch(action.updateTab('nowPlaying'))}>
										Now playing
									</div>
									<div id='topRated' className={`tab ${renderTabRate}`} onClick={() => dispatch(action.updateTab('topRated'))}>
										Top rated
									</div>
								</div>
								<div id='button'>
									<div className='type mr-5' onClick={() => navigate(0)}>
										<i className='fa-solid fa-arrows-rotate'></i>
									</div>
									<div className='type' onClick={() => dispatch(action.changeViewType('list'))}>
										<i className='fa-solid fa-list'></i>
									</div>
									<div className='type' onClick={() => dispatch(action.changeViewType('grid'))}>
										<i className='fa-solid fa-grip'></i>
									</div>
								</div>
							</div>
							<div id='listMovies'>{renderViewType}</div>
						</div>
						<div id='movieDetail' className='col-md-4'>
							<Detail />
						</div>
					</div>
					<div className='row' id='recent'>
						<div className='col-md-6'>
							<h2>Recent on TV</h2>
							<div id='TV' className='recent'>
								<a href='#' className='recent1'>
									<img className='w-100 w3-animate-opacity' src={`https://image.tmdb.org/t/p/original/${movies.movies[5].backdrop_path}`} alt='TV' />
								</a>
								<a href='#' className='recent2'>
									<img className='w-100 w3-animate-opacity' src={`https://image.tmdb.org/t/p/original/${movies.movies[7].backdrop_path}`} alt='TV' />
								</a>
								<a href='#' className='recent3'>
									<img className='w-100 w3-animate-opacity' src={`https://image.tmdb.org/t/p/original/${movies.movies[11].backdrop_path}`} alt='TV' />
								</a>
							</div>
						</div>
						<div className='col-md-6'>
							<h2>Theater</h2>
							<div id='Theater' className='recent'>
								<a href='#' className='recent2'>
									<img className='w-100 w3-animate-opacity' src={`https://image.tmdb.org/t/p/original/${movies.movies[18].backdrop_path}`} alt='TV' />
								</a>
								<a href='#' className='recent3'>
									<img className='w-100 w3-animate-opacity' src={`https://image.tmdb.org/t/p/original/${movies.movies[13].backdrop_path}`} alt='TV' />
								</a>
								<a href='#' className='recent1'>
									<img className='w-100 w3-animate-opacity' src={`https://image.tmdb.org/t/p/original/${movies.movies[14].backdrop_path}`} alt='TV' />
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className='col-md-2 col-lg-2 adv'>
					<img src={adv2} alt='Advertise' className='w-100 w3-animate-opacity' />
				</div>
			</div>
		</div>
	);
}
