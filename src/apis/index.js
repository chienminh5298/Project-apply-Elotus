import axiosServices from 'src/AxiosService/axiosServices';

export const fetchMovies = () => {
	const path = ['upcoming', 'now_playing', 'latest'];
	var ran = Math.floor(Math.random() * 3);
	return axiosServices.get(`https://api.themoviedb.org/3/movie/${path[ran]}?api_key=74e97b1f9af312f14cc322b460314b04`);
};

export const fecthTopRated = () => {
	const path = ['top_rated', 'popular'];
	var ran = Math.floor(Math.random() * 2);
	return axiosServices.get(`https://api.themoviedb.org/3/movie/${path[ran]}?api_key=74e97b1f9af312f14cc322b460314b04`);
};
