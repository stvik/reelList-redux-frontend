
export function fetchLists() {
	return (dispatch) => {
		fetch('http://localhost:3000/lists')
		.then(resp => resp.json())
		.then(lists => dispatch({type: 'GET_LISTS', lists}))
	}
}

export function searchMovie(searchString) {
	return (dispatch) => {
		fetch(`http://localhost:3000/movies?search=${searchString}`)
		.then(resp => resp.json())
		.then(movies => dispatch({type: 'SEARCH_MOVIES', movies}))
	}
}

export function showMoviesFromList(movies) {
	return (dispatch) => {
		dispatch({type: 'SHOW_MOVIES', movies})
	}
}

export function clearMovies() {
	return (dispatch) => {
		dispatch({type:'CLEAR_MOVIES'})
	}
}