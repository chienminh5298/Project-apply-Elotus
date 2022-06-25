import * as constant from 'src/constant';

export const fetchMovies = (payload) => {
	return {
		type: constant.FETCH_MOVIES,
		payload: payload,
	};
};

export const fecthTopRated = (payload) => {
	return {
		type: constant.FETCH_MOVIES_TOP_RATED,
		payload: payload,
	};
};

export const isLoading = (payload) => {
	return {
		type: constant.IS_LOADING,
		payload: payload, // boolean
	};
};

export const changeViewType = (payload) => {
	return {
		type: constant.CHANGE_VIEW_TYPE,
		payload: payload,
	};
};

export const updateMovieDetail = (payload) => {
	return {
		type: constant.UPDATE_MOVIE_DETAIL,
		payload: payload,
	};
};

export const updateTab = (payload) => {
	return {
		type: constant.UPDATE_TAB,
		payload: payload,
	};
};
