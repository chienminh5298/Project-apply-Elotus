import * as constant from 'src/constant';

var initialState = {
	isLoading: true,
	detailMovie: {},
	viewType: 'grid',
	movies: [],
	tab: 'nowPlaying',
	nowPlaying: [],
	topRated: [],
};

const defaultReducer = (state = initialState, action) => {
	switch (action.type) {
		case constant.FETCH_MOVIES:
			return { ...state, movies: action.payload, nowPlaying: action.payload, detailMovie: action.payload[0], isLoading: false };
		case constant.FETCH_MOVIES_TOP_RATED:
			return { ...state, topRated: action.payload };
		case constant.CHANGE_VIEW_TYPE:
			return { ...state, viewType: action.payload };
		case constant.UPDATE_MOVIE_DETAIL:
			return { ...state, detailMovie: action.payload };
		case constant.UPDATE_TAB:
			var newState = { ...state };
			if (action.payload === 'topRated') {
				newState.movies = state.topRated;
			} else {
				newState.movies = state.nowPlaying;
			}
			return { ...newState, tab: action.payload };
		default: {
			return { ...state };
		}
	}
};

export default defaultReducer;
