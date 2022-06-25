import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useSelector } from 'react-redux';

export default function Slider() {
	var movies = useSelector((state) => state.defaultReducer);
	var renderMovie = movies.movies.map((movie) => {
		return (
			<div>
				<a href='#'>
					<img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt='slider' className='w3-animate-opacity'/>
				</a>
			</div>
		);
	});
	return (
		<div id='sliderWrapper'>
			<Carousel autoPlay={true} showStatus={false} showIndicators={false} centerMode={true} infiniteLoop={true} showThumbs={false} centerSlidePercentage={15} interval={1500}>
				{renderMovie}
			</Carousel>
		</div>
	);
}
